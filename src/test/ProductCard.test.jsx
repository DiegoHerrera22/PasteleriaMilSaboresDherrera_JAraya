import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard.jsx';
import { CartProvider } from '../contexts/CartContext.jsx';

// Minimal unit test demonstrating how to render a component using
// React Testing Library within the Vitest environment.  This test verifies
// that the product name and price appear in the rendered output.
test('renders product card with name and price', () => {
  const product = {
    id: 1,
    name: 'Torta de Prueba',
    price: 1234,
    description: 'Descripción de prueba',
    image: '',
  };
  render(
    <CartProvider>
      <ProductCard product={product} />
    </CartProvider>
  );
  expect(screen.getByText('Torta de Prueba')).toBeInTheDocument();
  expect(screen.getByText(/1\,234/)).toBeInTheDocument();
});