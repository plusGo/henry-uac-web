import { defineConfig } from 'umi';
import { ENVIRONMENT_PROD } from '../environment/environment.prod';

export default defineConfig({
  define: {
    'process.env': {
      ...ENVIRONMENT_PROD,
    },
  },
});
