import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import Carrito from './pages/Carrito.jsx';
import Contacto from './pages/Contacto.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Blog from './pages/Blog.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

// Top-level application component.  It wraps the router in the CartProvider so
// any component in the tree can consume cart context.  The NavigationBar is
// rendered outside of the <Routes> so it persists across pages.
export default function App() {
  return (
    <CartProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </CartProvider>
  );
}