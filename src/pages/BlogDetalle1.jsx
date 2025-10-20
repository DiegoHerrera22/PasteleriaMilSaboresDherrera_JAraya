/** Blog Detalle 1 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogDetalle1(){
  return (
    <main className="contenedor">
      <h2>Tips para conservar tu torta perfecta</h2>
      <p>
        Mantén tu torta en un lugar fresco y evita la luz directa del sol.
        Si tiene crema, refrigérala y retírala 20 minutos antes de servir.
      </p>
      <Link to="/blog">← Volver al blog</Link>
    </main>
  );
}