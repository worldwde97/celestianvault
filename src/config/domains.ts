/**
 * Domain Configuration for CryptoAI Capital
 *
 * Main Site: aevos.org - пользовательский интерфейс
 * Admin Panel: celestianvault.com - админ-панель для обработки выводов
 * CCPayment: верифицирован на celestianvault.com, webhook на celestianvault.com
 *
 * ВАЖНО: Webhook использует celestianvault.com для безопасности и изоляции
 */

export const DOMAIN_CONFIG = {
  production: {
    mainSite: 'https://aevos.org',
    adminPanel: 'https://celestianvault.com',
    webhookUrl: 'https://celestianvault.com/api/webhooks/ccpayment',
  },
  development: {
    mainSite: 'http://localhost:3000',
    adminPanel: 'http://localhost:3001',
    webhookUrl: 'http://localhost:3000/api/webhooks/ccpayment',
  },
};

/**
 * Получить конфигурацию в зависимости от окружения
 */
export const getConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? DOMAIN_CONFIG.production : DOMAIN_CONFIG.development;
};

/**
 * Получить webhook URL для CCPayment
 */
export const getWebhookUrl = () => {
  // Приоритет: environment variable > auto-detect > config
  if (process.env.NEXTAUTH_URL) {
    return `${process.env.NEXTAUTH_URL}/api/webhooks/ccpayment`;
  }
  return getConfig().webhookUrl;
};

/**
 * Получить main site URL
 */
export const getMainSiteUrl = () => {
  return process.env.NEXTAUTH_URL || getConfig().mainSite;
};
