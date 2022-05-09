import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};
