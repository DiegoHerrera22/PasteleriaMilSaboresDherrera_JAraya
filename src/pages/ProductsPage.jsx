import React, { useState, useMemo } from 'react';
import ProductCard from '../molecules/ProductCard.jsx';
import { products } from '../data/products.js';

/**
 * Página de productos con filtros de búsqueda por nombre y categoría.
 */
export default function ProductsPage({ addToCart }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  // Obtiene lista única de categorías a partir de los productos.
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return cats;
  }, []);

  // Filtra productos según query y categoría seleccionada.
  const filtered = products.filter((p) => {
    const matchesCategory = category ? p.category === category : true;
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const limpiarFiltros = () => {
    setQuery('');
    setCategory('');
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Columna lateral para filtros */}
      <aside style={{ width: '230px', flexShrink: 0 }}>
        <h2>Productos</h2>
        <div className="field">
          <label htmlFor="search">Buscar</label>
          <input
            id="search"
            type="text"
            placeholder="Buscar por nombre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={limpiarFiltros} style={{ width: '100%' }}>
          Limpiar filtros
        </button>
      </aside>
      {/* Contenedor de tarjetas de productos */}
      <section style={{ flex: 1 }}>
        <div className="product-grid">
          {filtered.map((prod) => (
            <ProductCard key={prod.id} product={prod} onAdd={addToCart} />
          ))}
        </div>
        {filtered.length === 0 && <p>No se encontraron productos.</p>}
      </section>
    </div>
  );
}