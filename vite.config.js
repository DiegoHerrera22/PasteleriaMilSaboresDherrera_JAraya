import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure Vitest.  The jsdom environment simulates a browser DOM.  The
  // setupFiles entry runs before each test suite to register custom matchers.
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
});