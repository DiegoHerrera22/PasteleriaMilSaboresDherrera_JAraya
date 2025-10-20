import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación
import App from './App.jsx';
// Estilos globales
import './index.css';

// Aquí se monta la aplicación en el elemento con id "root" del HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode ayuda a detectar problemas potenciales
  <React.StrictMode>
    <App />
  </React.StrictMode>
);