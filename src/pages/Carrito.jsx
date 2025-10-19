import React from 'react';
import { useCart } from '../contexts/CartContext.jsx';
import { Container, Table, Button, Form } from 'react-bootstrap';

// Shopping cart page.  Lists all items in the cart along with their
// quantities and total price.  Allows updating quantities, removing items and
// clearing the cart.
export default function Carrito() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Container>
      <h1 className="mb-3">Carrito</h1>
      {items.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <Table responsive bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toLocaleString()}</td>
                  <td style={{ maxWidth: '100px' }}>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                  </td>
                  <td>${(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${total.toLocaleString()}</h4>
            <Button variant="secondary" onClick={clearCart} size="sm">
              Vaciar carrito
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}