import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de listado del blog.  Muestra los artículos disponibles
 * con un título y un extracto.  Cada entrada enlaza a su página
 * de detalle correspondiente.
 */
function Blog() {
  return (
    <main className="contenedor">
      <h2>Blog</h2>
      <article className="entrada-blog">
        <h3>Cómo elegir tu outfit ideal</h3>
        <p>
          Descubre consejos para combinar prendas y accesorios de nuestra
          tienda para cualquier ocasión.
        </p>
        <Link to="/blog-detalle-1" className="boton-primario">
          Leer más
        </Link>
      </article>
      <article className="entrada-blog">
        <h3>Tendencias de moda de esta temporada</h3>
        <p>
          Analizamos las tendencias actuales y cómo puedes adaptarlas a
          tu estilo personal con nuestros productos.
        </p>
        <Link to="/blog-detalle-2" className="boton-primario">
          Leer más
        </Link>
      </article>
    </main>
  );
}

export default Blog;