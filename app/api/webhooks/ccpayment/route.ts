import { NextRequest } from 'next/server';
import { query } from '@/lib/db';
import { getCCPaymentClient } from '@/lib/ccpayment/client';
import sendMsgBot from '@/lib/sendMsgBot';

/**
 * CCPayment Unified Webhook Handler (ПРАВИЛЬНАЯ ВЕРСИЯ)
 * Обработка уведомлений о депозитах от CCPayment согласно официальной документации
 *
 * Документация: https://doc.ccpayment.com/
 *
 * Webhook структура:
 * {
 *   "type": "DirectDeposit" | "ApiDeposit",
 *   "msg": {
 *     "recordId": "...",
 *     "referenceId": "...", // для DirectDeposit
 *     "orderId": "...",     // для ApiDeposit
 *     "coinId": 1329,
 *     "coinSymbol": "MATIC",
 *     "status": "Success" | "Processing" | "Failed",
 *     "isFlaggedAsRisky": boolean
 *   }
 * }
 */

interface WebhookPayload {
  type: 'ActivateWebhookURL' | 'DirectDeposit' | 'ApiDeposit';
  msg: {
    recordId?: string;
    referenceId?: string; // для DirectDeposit
    orderId?: string;     // для ApiDeposit
    coinId?: number;
    coinSymbol?: string;
    status?: 'Processing' | 'Success' | 'Failed';
    isFlaggedAsRisky?: boolean;
  };
}

/**
 * POST handler для приема webhook уведомлений
 */
export async function POST(request: NextRequest) {
  try {
    // Получаем заголовки (согласно документации CCPayment)
    const appId = request.headers.get('Appid');
    const timestamp = request.headers.get('Timestamp');
    const signature = request.headers.get('Sign');
    const rawBody = await request.text();

    console.log('📨 CCPayment webhook received');
    console.log('📋 Headers:', { appId, timestamp, signature: signature?.substring(0, 20) + '...' });
    console.log('📦 Raw body:', rawBody);

    // Проверка обязательных заголовков
    if (!appId || !timestamp || !signature) {
      console.error('❌ Missing required headers');
      return new Response('Missing required headers', {
        status: 400,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Получаем клиент и проверяем AppId
    const client = getCCPaymentClient();
    const expectedAppId = process.env.CCPAYMENT_MERCHANT_ID || process.env.CCPAYMENT_API_KEY;

    // КРИТИЧНО: Проверка что AppId совпадает с нашим
    if (appId !== expectedAppId) {
      console.error('❌ Invalid AppId:', { received: appId, expected: expectedAppId?.substring(0, 10) + '...' });
      return Response.json(
        { error: 'Invalid AppId' },
        { status: 401 }
      );
    }

    // Проверка timestamp (должен быть валиден в течение 5 минут согласно документации)
    const now = Math.floor(Date.now() / 1000);
    const timestampNum = parseInt(timestamp);
    if (Math.abs(now - timestampNum) > 300) {
      console.error('❌ Timestamp expired:', { now, timestamp: timestampNum, diff: now - timestampNum });
      return Response.json(
        { error: 'Invalid or expired timestamp' },
        { status: 401 }
      );
    }

    // Проверка подписи webhook
    const isValidSignature = client.verifyWebhookSignature(rawBody, signature, appId, timestamp);

    if (!isValidSignature) {
      console.error('❌ Invalid signature');
      await sendMsgBot('⚠️ CCPayment webhook: Invalid signature detected!');
      return new Response('Invalid signature', {
        status: 401,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    console.log('✅ Webhook signature verified');

    // Парсинг payload
    const payload: WebhookPayload = JSON.parse(rawBody);
    console.log('📦 Webhook payload:', JSON.stringify(payload, null, 2));

    // Обработка webhook в зависимости от типа
    if (payload.type === 'ActivateWebhookURL') {
      // Активация webhook URL - тестовый запрос от CCPayment
      console.log('✅ Webhook activation request received');
      await sendMsgBot('✅ CCPayment webhook activated successfully!');

      return Response.json(
        { msg: 'success' },
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } else if (payload.type === 'DirectDeposit') {
      return await handleDirectDeposit(payload);
    } else if (payload.type === 'ApiDeposit') {
      return await handleApiDeposit(payload);
    } else {
      console.log('ℹ️ Unknown webhook type:', payload.type);
      await sendMsgBot(
        `ℹ️ CCPayment webhook: Unknown type\n\n${JSON.stringify(payload, null, 2).substring(0, 500)}`
      );
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  } catch (error: any) {
    console.error('❌ CCPayment webhook error:', error);
    await sendMsgBot(
      `⚠️ CCPayment webhook error!\n\nError: ${error.message}\n\nStack: ${error.stack?.substring(0, 500)}`
    );
    return new Response('Internal server error', {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

/**
 * Обработка Direct Deposit webhook
 * Используется для постоянных адресов депозита (Get Permanent Deposit Address API)
 */
async function handleDirectDeposit(payload: WebhookPayload) {
  try {
    const { recordId, referenceId, coinId, coinSymbol, status, isFlaggedAsRisky } = payload.msg;

    console.log(`💰 Processing DirectDeposit: ${recordId}`);

    // КРИТИЧЕСКИ ВАЖНО: Вызываем Get Deposit Record API для подтверждения
    // Документация: "After receiving a webhook, the merchant's server should call
    // the Get Deposit Record API to confirm the deposit information."
    const client = getCCPaymentClient();
    const depositRecord = await client.getDepositRecord({ recordId });

    console.log('✅ Deposit record confirmed:', depositRecord.record);

    // Обработка только успешных платежей
    if (depositRecord.record.status !== 'Success') {
      console.log(`⏳ Deposit not completed yet: status=${depositRecord.record.status}`);
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Проверка risky транзакции
    if (depositRecord.record.isFlaggedAsRisky) {
      console.warn(`⚠️ Risky transaction detected: ${recordId}`);
      await sendMsgBot(
        `⚠️ CCPayment: Risky transaction!\n\n` +
        `Record ID: ${recordId}\n` +
        `Reference ID: ${referenceId}\n` +
        `Amount: ${depositRecord.record.amount} ${depositRecord.record.coinSymbol}\n` +
        `Status: Risky - NOT credited automatically`
      );
      // НЕ кредитуем risky платежи автоматически!
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Найти пользователя по referenceId
    // referenceId = user_id в нашей системе
    const userId = parseInt(referenceId || '0');
    if (!userId) {
      console.error(`❌ Invalid referenceId: ${referenceId}`);
      await sendMsgBot(`⚠️ CCPayment webhook: Invalid referenceId: ${referenceId}`);
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Получить информацию о пользователе
    const [user] = await query(
      `SELECT id, login FROM users WHERE id = ? LIMIT 1`,
      [userId]
    );

    if (!user) {
      console.error(`❌ User not found: ${userId}`);
      await sendMsgBot(`⚠️ CCPayment webhook: User not found: ${userId}`);
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    const login = user.login;

    console.log(`👤 User found: ${login} (ID: ${userId})`);

    // Получить информацию о валюте и её цене в USD
    const [paysys] = await query(
      `SELECT abr, price FROM paysystems WHERE abr = ? LIMIT 1`,
      [depositRecord.record.coinSymbol]
    );

    const price = paysys ? parseFloat(paysys.price || depositRecord.record.coinUSDPrice) : parseFloat(depositRecord.record.coinUSDPrice);
    const amount = parseFloat(depositRecord.record.amount);
    const amountUSD = amount * price;

    console.log(`💵 Amount: ${amount} ${depositRecord.record.coinSymbol} = $${amountUSD.toFixed(2)}`);

    // Проверить существует ли уже эта транзакция (защита от дублирования)
    const [existingDeposit] = await query(
      `SELECT id FROM enter WHERE txid = ? LIMIT 1`,
      [recordId]
    );

    if (existingDeposit) {
      console.warn(`⚠️ Duplicate transaction detected: ${recordId}`);
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Обновить или создать баланс пользователя
    const [existingBalance] = await query(
      `SELECT id, sum FROM user_balances WHERE user_id = ? AND paysys = ? LIMIT 1`,
      [userId, depositRecord.record.coinSymbol]
    );

    if (existingBalance) {
      // Обновить существующий баланс
      const newSum = parseFloat(existingBalance.sum) + amount;
      await query(
        `UPDATE user_balances SET sum = ? WHERE user_id = ? AND paysys = ?`,
        [newSum, userId, depositRecord.record.coinSymbol]
      );
      console.log(`✅ Balance updated: ${existingBalance.sum} → ${newSum} ${depositRecord.record.coinSymbol}`);
    } else {
      // Создать новую запись баланса
      await query(
        `INSERT INTO user_balances (user_id, paysys, sum) VALUES (?, ?, ?)`,
        [userId, depositRecord.record.coinSymbol, amount]
      );
      console.log(`✅ New balance created: ${amount} ${depositRecord.record.coinSymbol}`);
    }

    // Записать депозит в таблицу enter
    const date = Math.floor(Date.now() / 1000);
    await query(
      `INSERT INTO enter (date, user_id, login, paysys, sum, txid, status)
       VALUES (?, ?, ?, ?, ?, ?, 'completed')`,
      [date, userId, login, depositRecord.record.coinSymbol, amount, recordId]
    );

    console.log(`✅ Deposit recorded in 'enter' table`);

    // Отправить уведомление в Telegram
    await sendMsgBot(
      `💰 Новый депозит CCPayment!\n\n` +
      `Type: DirectDeposit\n` +
      `User: ${login} (ID: ${userId})\n` +
      `Amount: ${amount} ${depositRecord.record.coinSymbol}\n` +
      `USD: $${amountUSD.toFixed(2)}\n` +
      `Chain: ${depositRecord.record.chain}\n` +
      `TX: ${depositRecord.record.txId}\n` +
      `Record ID: ${recordId}`
    );

    console.log(`✅ DirectDeposit processed successfully for user ${userId}`);

    return new Response('Success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  } catch (error: any) {
    console.error('❌ DirectDeposit processing error:', error);
    throw error;
  }
}

/**
 * Обработка API Deposit webhook
 * Используется для платежей с merchant-specified currency или checkout page
 */
async function handleApiDeposit(payload: WebhookPayload) {
  try {
    const { recordId, orderId, coinId, coinSymbol, status, isFlaggedAsRisky } = payload.msg;

    console.log(`💰 Processing ApiDeposit: ${recordId}, order: ${orderId}`);

    // КРИТИЧЕСКИ ВАЖНО: Вызываем Get Deposit Record API для подтверждения
    const client = getCCPaymentClient();
    const depositRecord = await client.getDepositRecord({ recordId });

    console.log('✅ Deposit record confirmed:', depositRecord.record);

    // Обработка только успешных платежей
    if (depositRecord.record.status !== 'Success') {
      console.log(`⏳ Deposit not completed yet: status=${depositRecord.record.status}`);
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // Проверка risky транзакции
    if (depositRecord.record.isFlaggedAsRisky) {
      console.warn(`⚠️ Risky transaction detected: ${recordId}`);
      await sendMsgBot(
        `⚠️ CCPayment: Risky transaction!\n\n` +
        `Record ID: ${recordId}\n` +
        `Order ID: ${orderId}\n` +
        `Amount: ${depositRecord.record.amount} ${depositRecord.record.coinSymbol}\n` +
        `Status: Risky - NOT credited automatically`
      );
      // НЕ кредитуем risky платежи автоматически!
      return new Response('Success', {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }

    // TODO: Обработка ApiDeposit с orderId
    // Здесь нужно найти order по orderId и обработать платеж
    // Это зависит от вашей бизнес-логики

    console.log(`ℹ️ ApiDeposit received but not processed: orderId=${orderId}`);
    await sendMsgBot(
      `ℹ️ CCPayment ApiDeposit (not processed):\n\n` +
      `Order ID: ${orderId}\n` +
      `Amount: ${depositRecord.record.amount} ${depositRecord.record.coinSymbol}\n` +
      `Record ID: ${recordId}\n\n` +
      `Note: ApiDeposit processing not implemented yet`
    );

    return new Response('Success', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  } catch (error: any) {
    console.error('❌ ApiDeposit processing error:', error);
    throw error;
  }
}

/**
 * GET handler для проверки работоспособности webhook
 */
export async function GET() {
  return Response.json({
    status: 'ok',
    message: 'CCPayment unified webhook endpoint is active (CORRECTED VERSION)',
    timestamp: new Date().toISOString(),
    endpoints: {
      deposits: 'DirectDeposit and ApiDeposit handled automatically'
    },
    version: '2.0'
  });
}
