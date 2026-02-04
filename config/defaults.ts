/**
 * In-code defaults for testing when no .env is used.
 * For production, use env vars instead; do not commit real secrets here.
 */

export const defaults = {
  // Server
  HOST: '0.0.0.0',
  PORT: 1337,
  APP_KEYS: 'key1,key2',

  // Secrets (test-only placeholders; use .env or env vars for real values)
  API_TOKEN_SALT: 'test-api-token-salt',
  ADMIN_JWT_SECRET: 'test-admin-jwt-secret',
  TRANSFER_TOKEN_SALT: 'test-transfer-token-salt',
  ENCRYPTION_KEY: 'test-encryption-key',

  // Database (SQLite for local/test)
  DATABASE_CLIENT: 'sqlite',
  DATABASE_FILENAME: '.tmp/data.db',
  DATABASE_HOST: '',
  DATABASE_PORT: 5432,
  DATABASE_NAME: 'strapi',
  DATABASE_USERNAME: 'strapi',
  DATABASE_PASSWORD: '',
  DATABASE_SSL: false,

  // Stripe – set in .env (STRIPE_SECRET_KEY) or here locally for testing; never commit real key
  STRIPE_SECRET_KEY: '',
} as const;
