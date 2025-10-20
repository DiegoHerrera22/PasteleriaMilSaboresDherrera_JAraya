/** Blog — listado simple */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog(){
  return (
    <main className="contenedor">
      <h2>Blog</h2>
      <article className="entrada-blog">
        <h3><Link to="/blog-detalle-1">Tips para conservar tu torta perfecta</Link></h3>
        <p>Consejos prácticos para mantener el sabor y la textura por más tiempo.</p>
      </article>
      <article className="entrada-blog">
        <h3><Link to="/blog-detalle-2">Sabores de temporada: ¿qué elegir?</Link></h3>
        <p>Recomendaciones de sabores según la estación del año.</p>
      </article>
    </main>
  );
}