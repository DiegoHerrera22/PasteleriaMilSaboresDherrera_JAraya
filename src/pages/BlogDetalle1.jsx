import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de detalle para la primera entrada del blog.  Incluye
 * contenido de ejemplo y un enlace de regreso al listado del blog.
 */
function BlogDetalle1() {
  return (
    <main className="contenedor">
      <h2>Cómo elegir tu outfit ideal</h2>
      <p>
        Elegir la combinación perfecta de prendas puede parecer
        complicado, pero con algunos consejos puedes lograr un look
        increíble sin esfuerzo.  Piensa primero en la ocasión y el
        nivel de formalidad requerido.  Una vez definido, combina
        colores neutros con un elemento destacado para dar balance a
        tu conjunto.
      </p>
      <p>
        En nuestra tienda encontrarás una gran variedad de camisetas,
        pantalones y accesorios que puedes mezclar y combinar para
        crear tu estilo personal.
      </p>
      <Link to="/blog" className="boton-primario">
        Volver al blog
      </Link>
    </main>
  );
}

export default BlogDetalle1;