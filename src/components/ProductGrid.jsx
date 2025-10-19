import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';

// Grid component that lays out a collection of products in a responsive
// Bootstrap row.  It delegates to ProductCard for rendering each item.
export default function ProductGrid({ products }) {
  return (
    <Row className="g-3">
      {products.map((product) => (
        <Col key={product.id} xs={12} md={6} lg={4} xl={3}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}