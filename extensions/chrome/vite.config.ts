import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { crx } from "@crxjs/vite-plugin";

import manifest from './manifest.json' assert { type: 'json' } 
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
