import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split vendor libraries
          lottie: ['lottie-web'],        // Split lottie-web into its own chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the warning limit (optional)
  },
});
