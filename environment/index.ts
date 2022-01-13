import { ENVIRONMENT_DEV } from './environment.dev';
import { ENVIRONMENT_PROD } from './environment.prod';

type EnvironmentType = typeof ENVIRONMENT_DEV & typeof ENVIRONMENT_PROD;
export const environment: EnvironmentType = process.env as any;
