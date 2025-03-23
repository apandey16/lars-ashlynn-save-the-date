import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const tailwind = await import('@tailwindcss/vite');
  
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