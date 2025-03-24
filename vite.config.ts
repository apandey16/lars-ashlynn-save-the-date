import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as tailwind from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwind.default(),
    ],
    // Make sure Vite works alongside Next.js
    build: {
      outDir: 'dist',
    },
  };
}); 