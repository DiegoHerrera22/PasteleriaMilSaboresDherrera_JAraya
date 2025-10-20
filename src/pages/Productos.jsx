/** Catálogo de productos — cartas estilo pastelería */
import React from 'react';
import { Link } from 'react-router-dom';
import productos from '../data/productos';

export default function Productos(){
  return (
    <main className="contenedor">
      <h2>Productos destacados</h2>
      <div className="grid-productos">
        {productos.map(p => (
          <article className="tarjeta-producto" key={p.id}>
            <img src={p.imagen} alt={p.nombre} />
            <div className="contenido">
              <h3><Link to={`/producto/${p.id}`}>{p.nombre}</Link></h3>
              <p>{p.descripcion}</p>
              <p className="precio">${p.precio.toLocaleString('es-CL')}</p>
              <Link className="boton-primario" to={`/producto/${p.id}`}>Ver detalle</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}