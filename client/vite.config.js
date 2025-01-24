import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Dezactivează maparea sursei
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'assets/[name].[hash][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});