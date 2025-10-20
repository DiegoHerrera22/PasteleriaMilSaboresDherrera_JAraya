/** Carrito — versión base con estado local (extiende según tu flujo) */
import React, { useState } from 'react';

export default function Carrito(){
  const [items] = useState([]); // TODO: conectar con estado global o localStorage

  return (
    <main className="contenedor">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {items.map((it, idx) => <li key={idx}>{it.nombre}</li>)}
        </ul>
      )}
    </main>
  );
}