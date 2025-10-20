import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de detalle para la segunda entrada del blog.  Presenta
 * contenido ficticio sobre tendencias de moda y ofrece un enlace
 * para regresar al listado de artículos.
 */
function BlogDetalle2() {
  return (
    <main className="contenedor">
      <h2>Tendencias de moda de esta temporada</h2>
      <p>
        Cada temporada trae consigo nuevas tendencias que dictan los
        colores, patrones y estilos que veremos en las calles.  Este
        año predominan los tonos tierra y los tejidos naturales como
        el lino y el algodón.
      </p>
      <p>
        Explora nuestra colección para estar a la moda sin perder tu
        toque personal.  Recuerda que lo importante es sentirte bien
        con lo que llevas puesto.
      </p>
      <Link to="/blog" className="boton-primario">
        Volver al blog
      </Link>
    </main>
  );
}

export default BlogDetalle2;