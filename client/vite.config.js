import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'taskpro-server.onrender.com/taskpro',   // Adresa serverului back-end
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    sourcemap: false, // Dezactivează maparea sursei pentru producție
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