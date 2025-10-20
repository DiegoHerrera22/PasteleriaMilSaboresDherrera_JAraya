import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Configuración de Vite para React 19 */
export default defineConfig({
  plugins: [react()],
});