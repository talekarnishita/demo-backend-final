import { defaults } from './defaults';

export default ({ env }) => ({
  host: env('HOST', defaults.HOST),
  port: env.int('PORT', Number(defaults.PORT)),
  app: {
    keys: env.array('APP_KEYS', [defaults.APP_KEYS.split(',')[0], defaults.APP_KEYS.split(',')[1]]),
  },
});
