import axios, { AxiosInstance } from 'axios';
import crypto from 'crypto';

interface CCPaymentConfig {
  appId: string;
  appSecret: string;
  baseURL: string;
}

interface CreatePermanentAddressParams {
  referenceId: string; // Уникальный ID пользователя в вашей системе
  chain: string; // Символ сети (POLYGON, TRX, ETH, BSC и т.д.)
}

interface DepositRecordParams {
  recordId: string; // CCPayment unique ID для транзакции
}

interface CCPaymentResponse<T = any> {
  code: number; // 10000 = success
  msg: string;
  data: T;
}

interface DepositAddressResponse {
  address: string;
  memo: string; // Для монет требующих memo (XRP, XLM, TON и т.д.)
}

interface DepositRecordResponse {
  record: {
    recordId: string;
    coinId: number;
    coinSymbol: string;
    chain: string;
    contract: string;
    coinUSDPrice: string;
    fromAddress?: string; // Не возвращается для UTXO транзакций
    toAddress: string;
    toMemo: string;
    amount: string;
    serviceFee: string;
    txId: string;
    status: 'Success' | 'Processing' | 'Failed';
    arrivedAt: number;
    isFlaggedAsRisky: boolean;
    referenceId?: string; // Только если есть привязанный referenceId
    orderId?: string; // Только если есть привязанный orderId
  };
}

/**
 * CCPayment API Client
 * Реализация согласно официальной документации CCPayment
 * https://doc.ccpayment.com/
 */
class CCPaymentClient {
  private client: AxiosInstance;
  private config: CCPaymentConfig;

  constructor(config: CCPaymentConfig) {
    this.config = config;

    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('🔐 CCPayment Client initialized');
  }

  /**
   * Генерация HMAC-SHA256 подписи согласно документации
   * Sign = HMAC-SHA256(appId + timestamp + body, appSecret)
   */
  private generateSignature(timestamp: number, body: string = ''): string {
    const signText = `${this.config.appId}${timestamp}${body}`;

    return crypto
      .createHmac('sha256', this.config.appSecret)
      .update(signText)
      .digest('hex');
  }

  /**
   * Выполнение POST запроса с правильной аутентификацией
   */
  private async post<T>(path: string, data?: any): Promise<CCPaymentResponse<T>> {
    const timestamp = Math.floor(Date.now() / 1000);
    const body = data ? JSON.stringify(data) : '';
    const signature = this.generateSignature(timestamp, body);

    const headers = {
      'Appid': this.config.appId,
      'Timestamp': timestamp.toString(),
      'Sign': signature,
      'Content-Type': 'application/json'
    };

    try {
      console.log(`🔄 CCPayment API Request: POST ${path}`);
      console.log(`📋 Headers:`, { ...headers, Sign: signature.substring(0, 20) + '...' });

      const response = await this.client.post<CCPaymentResponse<T>>(
        path,
        body || undefined,
        { headers }
      );

      if (response.data.code === 10000) {
        console.log(`✅ CCPayment API Success: ${path}`);
        return response.data;
      } else {
        throw new Error(`CCPayment API Error: ${response.data.msg} (code: ${response.data.code})`);
      }
    } catch (error: any) {
      console.error('❌ CCPayment API Error:', error.response?.data || error.message);

      if (error.response) {
        const { status, data } = error.response;
        throw new Error(
          `CCPayment API error (${status}): ${data?.msg || JSON.stringify(data)}`
        );
      }

      throw new Error(`CCPayment error: ${error.message}`);
    }
  }

  /**
   * Get Permanent Deposit Address
   * https://doc.ccpayment.com/
   *
   * Получить постоянный адрес депозита для пользователя.
   * Если адрес уже существует для referenceId, вернет существующий.
   * Если нет - создаст новый.
   *
   * Лимит: 1000 адресов на APP ID
   */
  async getPermanentDepositAddress(params: CreatePermanentAddressParams): Promise<DepositAddressResponse> {
    try {
      console.log(`🔄 Getting permanent deposit address for referenceId: ${params.referenceId}, chain: ${params.chain}`);

      const response = await this.post<DepositAddressResponse>(
        '/v2/address/permanent',
        {
          referenceId: params.referenceId,
          chain: params.chain
        }
      );

      console.log(`✅ Address generated: ${response.data.address}`);

      return response.data;
    } catch (error: any) {
      console.error('❌ Failed to get permanent deposit address:', error.message);
      throw error;
    }
  }

  /**
   * Get Deposit Record
   * https://doc.ccpayment.com/
   *
   * Получить детальную информацию о депозитной транзакции.
   * КРИТИЧЕСКИ ВАЖНО: Этот метод должен вызываться после получения webhook
   * для подтверждения информации о транзакции.
   */
  async getDepositRecord(params: DepositRecordParams): Promise<DepositRecordResponse> {
    try {
      console.log(`🔄 Getting deposit record: ${params.recordId}`);

      const response = await this.post<DepositRecordResponse>(
        '/v2/deposit/record',
        {
          recordId: params.recordId
        }
      );

      console.log(`✅ Deposit record retrieved: ${response.data.record.status}`);

      return response.data;
    } catch (error: any) {
      console.error('❌ Failed to get deposit record:', error.message);
      throw error;
    }
  }

  /**
   * Verify Webhook Signature
   * Проверка подписи webhook согласно документации
   * Sign = HMAC-SHA256(appId + timestamp + body, appSecret)
   *
   * Из документации:
   * let signText = appId + timestamp;
   * if (Object.keys(req.body).length > 0) {
   *   signText += JSON.stringify(req.body);
   * }
   */
  verifyWebhookSignature(
    payload: string,
    signature: string,
    appId: string,
    timestamp: string
  ): boolean {
    try {
      // Согласно примеру Express.js от CCPayment:
      // signText = appId + timestamp + (body если не пустой)
      let signText = `${appId}${timestamp}`;

      // Добавляем body если он не пустой
      if (payload && payload.length > 0) {
        signText += payload;
      }

      console.log('🔍 Verifying signature:');
      console.log('  AppId:', appId?.substring(0, 10) + '...');
      console.log('  Timestamp:', timestamp);
      console.log('  Payload length:', payload?.length || 0);
      console.log('  SignText length:', signText.length);

      const expectedSignature = crypto
        .createHmac('sha256', this.config.appSecret)
        .update(signText)
        .digest('hex');

      console.log('  Expected signature:', expectedSignature.substring(0, 20) + '...');
      console.log('  Received signature:', signature.substring(0, 20) + '...');

      const isValid = crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      );

      console.log('🔐 Webhook signature verification:', isValid ? '✅ Valid' : '❌ Invalid');

      return isValid;
    } catch (error) {
      console.error('❌ Webhook signature verification error:', error);
      return false;
    }
  }
}

// Singleton instance
let ccpaymentClient: CCPaymentClient | null = null;

/**
 * Получение singleton экземпляра CCPayment клиента
 */
export function getCCPaymentClient(): CCPaymentClient {
  if (!ccpaymentClient) {
    // APP ID (он же Merchant ID)
    const appId = process.env.CCPAYMENT_MERCHANT_ID || process.env.CCPAYMENT_API_KEY;

    // APP Secret для подписи webhook и API requests
    const appSecret = process.env.CCPAYMENT_APP_SECRET || process.env.CCPAYMENT_API_SECRET;

    if (!appId) {
      throw new Error(
        'CCPayment APP ID not configured. Please set CCPAYMENT_MERCHANT_ID environment variable.'
      );
    }

    if (!appSecret) {
      throw new Error(
        'CCPayment APP Secret not configured. Please set CCPAYMENT_APP_SECRET environment variable.'
      );
    }

    ccpaymentClient = new CCPaymentClient({
      appId,
      appSecret,
      baseURL: process.env.CCPAYMENT_API_URL || 'https://api.ccpayment.com'
    });

    console.log('✅ CCPayment Client configured');
  }

  return ccpaymentClient;
}

export default CCPaymentClient;
