import { defineConfig } from 'umi';
import { ENVIRONMENT_DEV } from '../environment/environment.dev';

export default defineConfig({
  define: {
    'process.env': {
      ...ENVIRONMENT_DEV,
    },
  },
});
