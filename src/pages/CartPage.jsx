import React from 'react';
import Button from '../atoms/Button.jsx';

/**
 * Página del carrito de compras. Muestra los productos añadidos y el total.
 */
export default function CartPage({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <div className="card" style={{ maxWidth: '500px' }}>
          <p>Tu carrito está vacío.</p>
          <p>Total:</p>
          <strong>${total.toLocaleString()}</strong>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td>${(item.price * item.qty).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <strong>Total: ${total.toLocaleString()}</strong>
          </div>
        </>
      )}
    </div>
  );
}