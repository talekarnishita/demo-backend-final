import { defaults } from './defaults';

export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', defaults.JWT_SECRET),
    },
  },
});
