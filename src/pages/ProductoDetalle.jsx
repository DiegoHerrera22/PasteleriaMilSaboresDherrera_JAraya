import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import products from '../data/seedProducts.js';
import { useCart } from '../contexts/CartContext.jsx';

// Detail page for a single product.  Looks up the product by id from the
// seed data.  Provides an add-to-cart button if the item exists.
export default function ProductoDetalle() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => String(p.id) === id);
  if (!product) {
    return (
      <Container>
        <h1>Producto no encontrado</h1>
        <p>El producto solicitado no existe en nuestro catálogo.</p>
      </Container>
    );
  }
  return (
    <Container>
      <h1 className="mb-3">{product.name}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid mb-3"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      )}
      <p>{product.description}</p>
      <p className="fw-bold">Precio: ${product.price.toLocaleString()}</p>
      <Button variant="primary" onClick={() => addToCart(product)}>
        Agregar al carrito
      </Button>
    </Container>
  );
}