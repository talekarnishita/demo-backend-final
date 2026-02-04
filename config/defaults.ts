/**
 * In-code defaults for testing when no .env is used.
 * For production, use env vars instead; do not commit real secrets here.
 */

export const defaults = {
  // Server
  STRIPE_SECRET_KEY: 'sk_test_51Suyii4Ch1Ou4n63pYeg8M5Ii5EwW58g1wR2qhA14SzBYoSul7fORdn6o4O1Jp1kSA0XkODZpu9hURvYvOCUPYgZ00K8hdHsGn',
  HOST: '0.0.0.0',
  PORT: 1337,
  APP_KEYS: 'Td8DJ0Y02S1UhnwcFTRYCQ==,hAEgEQkTWKSILf7Lz0IKNQ==,mtq3T3itDZ5WcXmzwj1QoQ==,8ASRPGmGbQ379lr84QkSBg==',
  API_TOKEN_SALT: 'Rbq6o0GiuekQTG+cMhOPUg==',
  ADMIN_JWT_SECRET: 'P1K1vpd7U+/uuFQozYPgPA==',
  TRANSFER_TOKEN_SALT: 'gMAnTOZeLulgfLfVaO0eZQ==',
  ENCRYPTION_KEY: 'JnLMpzrdOBNhmWqgvsWDqQ==',
  JWT_SECRET: 'R0lU7yMw8D40zQUWcQcjGg==',

  // Database (SQLite for local/test)
  DATABASE_CLIENT: 'sqlite',
  DATABASE_FILENAME: '.tmp/data.db',
  DATABASE_HOST: '',
  DATABASE_PORT: 5432,
  DATABASE_NAME: 'strapi',
  DATABASE_USERNAME: 'strapi',
  DATABASE_PASSWORD: '',
  DATABASE_SSL: false,
} as const;
