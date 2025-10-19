import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext.jsx';

// Card component for displaying a single product.  It shows the image,
// description and price, and allows adding the product to the shopping cart.
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const handleAdd = () => addToCart(product);
  return (
    <Card className="h-100">
      {product.image && (
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="flex-grow-1">{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">${product.price.toLocaleString()}</span>
          <Button variant="primary" onClick={handleAdd} size="sm">
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}