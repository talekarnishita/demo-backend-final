import path from 'path';
import { defaults } from './defaults';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', defaults.DATABASE_CLIENT);

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', defaults.DATABASE_HOST || 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', defaults.DATABASE_NAME),
        user: env('DATABASE_USERNAME', defaults.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', defaults.DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', defaults.DATABASE_SSL) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', defaults.DATABASE_HOST || 'localhost'),
        port: env.int('DATABASE_PORT', defaults.DATABASE_PORT),
        database: env('DATABASE_NAME', defaults.DATABASE_NAME),
        user: env('DATABASE_USERNAME', defaults.DATABASE_USERNAME),
        password: env('DATABASE_PASSWORD', defaults.DATABASE_PASSWORD),
        ssl: env.bool('DATABASE_SSL', defaults.DATABASE_SSL) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', defaults.DATABASE_FILENAME)),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
