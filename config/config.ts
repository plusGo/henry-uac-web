import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none', // 依赖的模块是否也需要转换编译，这里涉及IE11的兼容性
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  title: 'umi-admin-boilerplate',
  favicon: 'assets/favicon.ico',
  dynamicImport: {
    // 分包并动态加载
    loading: '@/components/PageProgress',
  },
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
    },
    { 'http-equiv': 'Expires', content: '0' },
    { 'http-equiv': 'Pragma', content: 'no-cache' },
    { 'http-equiv': 'Cache-control', content: 'no-store' },
    { 'http-equiv': 'Cache', content: 'no-cache' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    { name: 'google', value: 'notranslate' },
  ],
  theme: {},
  base: '/',
  publicPath: '/',
  targets: {
    ie: 11,
  },
  locale: {},
  hash: false,
});
