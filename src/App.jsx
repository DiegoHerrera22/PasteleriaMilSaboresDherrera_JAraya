import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos el componente de navegación
import NavBar from './components/NavBar';
// Importamos las páginas de la aplicación
import Home from './pages/Home';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Nosotros from './pages/Nosotros';
import Blog from './pages/Blog';
import BlogDetalle1 from './pages/BlogDetalle1';
import BlogDetalle2 from './pages/BlogDetalle2';
import Footer from './components/Footer';

/**
 * Componente raíz de la aplicación.  Aquí se define el router y las
 * rutas hacia cada página.  También se incluye la barra de navegación
 * para que aparezca en todas las vistas.
 */
function App() {
  return (
    <Router>
      {/* La barra de navegación se mantiene visible en todas las páginas */}
      <NavBar />
      {/* Definición de rutas.  Cada ruta carga un componente distinto */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        {/* Ruta dinámica para mostrar el detalle de un producto en base a su id */}
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
      {/* Pie de página, aparece al final de todas las rutas */}
      <Footer />
    </Router>
  );
}

export default App;