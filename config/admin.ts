import { defaults } from './defaults';

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', defaults.ADMIN_JWT_SECRET),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', defaults.API_TOKEN_SALT),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', defaults.TRANSFER_TOKEN_SALT),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', defaults.ENCRYPTION_KEY),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
