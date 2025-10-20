import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de inicio.  Presenta un mensaje de bienvenida y un enlace
 * destacado hacia la sección de productos.  Puedes personalizar
 * completamente este componente para que refleje la portada de tu
 * tienda, incluyendo imágenes de hero y promociones.
 */
function Home() {
  return (
    <main className="contenedor">
      <section style={{ textAlign: 'center', padding: '60px 0' }}>
        <h1>Bienvenido a MiTienda</h1>
        <p>Encuentra los mejores productos al mejor precio.</p>
        <Link to="/productos" className="boton-primario">
          Ver productos
        </Link>
      </section>
    </main>
  );
}

export default Home;