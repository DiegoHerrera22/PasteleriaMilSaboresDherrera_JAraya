/** Detalle de producto — muestra información completa */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productos from '../data/productos';

export default function Producto(){
  const { id } = useParams();
  const producto = productos.find(p => String(p.id) === String(id));

  if(!producto){
    return (
      <main className="contenedor">
        <p>Producto no encontrado.</p>
        <Link to="/productos" className="boton-primario">Volver al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="contenedor">
      <div className="detalle-producto">
        <div className="detalle-producto__imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-producto__info">
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p className="precio">${producto.precio.toLocaleString('es-CL')}</p>
          <button className="boton-primario" onClick={()=>alert('Agregar al carrito (pendiente de lógica)')}>
            Agregar al carrito
          </button>
          <div style={{marginTop:12}}>
            <Link to="/productos">← Volver</Link>
          </div>
        </div>
      </div>
    </main>
  );
}