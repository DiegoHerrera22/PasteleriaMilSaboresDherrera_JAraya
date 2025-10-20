/** Blog Detalle 2 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogDetalle2(){
  return (
    <main className="contenedor">
      <h2>Sabores de temporada: ¿qué elegir?</h2>
      <p>
        En primavera predominan los frutos rojos; en invierno, el chocolate y
        los cítricos reconfortan. ¡Explora el catálogo y encuentra tu favorito!
      </p>
      <Link to="/blog">← Volver al blog</Link>
    </main>
  );
}