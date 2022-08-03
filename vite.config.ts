import { ConfigEnv, UserConfig, loadEnv } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';

const CWD = process.cwd();


// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD);
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [
      createVuePlugin(),
      vueJsx(),
    ],
    server: {
      port: 3002,
      host: '0.0.0.0',
    },
  };
};

