import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos';

/**
 * Página de detalle de un producto.  Utiliza el parámetro de la URL para
 * buscar el producto correspondiente en la lista de productos.  Si no
 * existe el producto se muestra un mensaje de error.  Aquí también
 * podrías implementar la funcionalidad de añadir al carrito.
 */
function Producto() {
  const { id } = useParams();
  // Buscamos el producto por id (convertimos id a número)
  const producto = productos.find((p) => p.id === Number(id));

  // Si no se encuentra el producto, mostramos un mensaje
  if (!producto) {
    return (
      <main className="contenedor">
        <h2>Producto no encontrado</h2>
        <Link to="/productos" className="boton-primario">
          Volver a productos
        </Link>
      </main>
    );
  }

  return (
    <main className="contenedor">
      <div className="detalle-producto">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="detalle-producto__imagen"
        />
        <div className="detalle-producto__info">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="precio">$ {producto.precio.toFixed(2)}</p>
          {/* Botón de añadir al carrito (por implementar) */}
          <button className="boton-primario" onClick={() => alert('Añadido al carrito')}>Añadir al carrito</button>
        </div>
      </div>
      <Link to="/productos" style={{ display: 'inline-block', marginTop: '20px' }}>
        Volver a la lista de productos
      </Link>
    </main>
  );
}

export default Producto;