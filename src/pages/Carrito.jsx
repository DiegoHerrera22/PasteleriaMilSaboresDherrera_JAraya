import React, { useState } from 'react';

/**
 * Página del carrito.  Aquí se podría mantener el estado de los
 * productos añadidos.  Para simplificar, inicializamos el carrito
 * vacío y mostramos un mensaje.  Puedes extender esta lógica para
 * persistir los productos seleccionados por el usuario.
 */
function Carrito() {
  // Estado local del carrito; comienza vacío
  const [carrito] = useState([]);

  return (
    <main className="contenedor">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} - $ {item.precio.toFixed(2)} (x{item.cantidad})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Carrito;