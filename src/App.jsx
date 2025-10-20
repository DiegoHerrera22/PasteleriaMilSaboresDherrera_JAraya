/** Aplicación principal — Pastelería 1000 Sabores */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Productos from './pages/Productos.jsx';
import Producto from './pages/Producto.jsx';
import Carrito from './pages/Carrito.jsx';
import Contacto from './pages/Contacto.jsx';
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetalle1 from './pages/BlogDetalle1.jsx';
import BlogDetalle2 from './pages/BlogDetalle2.jsx';

export default function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detalle-1" element={<BlogDetalle1 />} />
        <Route path="/blog-detalle-2" element={<BlogDetalle2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}