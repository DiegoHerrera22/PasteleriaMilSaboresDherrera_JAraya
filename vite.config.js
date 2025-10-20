import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para utilizar React.  Esta configuración
// activa el plugin de React, permitiendo soporte de JSX y otras
// características de React 19.  Si deseas modificar la base o
// añadir más configuraciones, puedes hacerlo aquí.
export default defineConfig({
  plugins: [react()]
});