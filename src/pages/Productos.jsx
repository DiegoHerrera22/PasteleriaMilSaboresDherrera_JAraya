import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import productsData from '../data/seedProducts.js';
import ProductGrid from '../components/ProductGrid.jsx';

// Catalogue page.  Displays all available products from the seed data.  This
// component could be extended with search or category filters in future
// iterations.
export default function Productos() {
  const [products] = useState(productsData);
  return (
    <Container>
      <h1 className="mb-3">Productos</h1>
      <ProductGrid products={products} />
    </Container>
  );
}