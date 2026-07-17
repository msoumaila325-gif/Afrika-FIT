
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // 1. Change './' par '/' (ou supprime la ligne)
    base: '/', 
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        // Assure-toi que __dirname est bien reconnu (sinon utilise fileURLToPath)
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});