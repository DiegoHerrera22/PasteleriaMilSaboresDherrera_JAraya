import React from 'react';
import { Link } from 'react-router-dom';
import productos from '../data/productos';

/**
 * Página que lista todos los productos disponibles.  Cada producto se
 * muestra en una tarjeta con su imagen, nombre, descripción corta y
 * precio.  Al hacer clic en el nombre del producto se navega hacia
 * la página de detalle.
 */
function Productos() {
  return (
    <main className="contenedor">
      <h2>Productos</h2>
      <div className="grid-productos">
        {productos.map((producto) => (
          <article key={producto.id} className="tarjeta-producto">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="tarjeta-producto__imagen"
            />
            <h3>{producto.nombre}</h3>
            {/* Mostramos sólo las primeras 60 letras de la descripción */}
            <p>{producto.descripcion.slice(0, 60)}...</p>
            <p className="precio">$ {producto.precio.toFixed(2)}</p>
            <Link to={`/producto/${producto.id}`} className="boton-primario">
              Ver detalle
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Productos;