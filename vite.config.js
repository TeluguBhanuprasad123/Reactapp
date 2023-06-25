import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: '',
    sourcemap: true,
    base: '/Reactapp/',
    assetsInlineLimit: 0,
  },
  
});
