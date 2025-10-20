import React from 'react';
import Card from '../atoms/Card.jsx';
import ProductCard from '../molecules/ProductCard.jsx';
import { products } from '../data/products.js';

/**
 * Página de inicio. Muestra un mensaje de bienvenida y algunos productos destacados.
 */
export default function HomePage({ addToCart }) {
  // Selecciona los primeros cuatro productos como destacados.
  const destacados = products.slice(0, 4);
  return (
    <div>
      <Card className="hero" style={{ marginBottom: '2rem' }}>
        <h2>Bienvenido a la Pastelería 1000 Sabores</h2>
        <p>
          Explora nuestras tortas y postres artesanales. ¡Descubre sabores clásicos y
          modernos hechos con cariño!
        </p>
      </Card>
      <h2>Destacados</h2>
      <div className="product-grid">
        {destacados.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}