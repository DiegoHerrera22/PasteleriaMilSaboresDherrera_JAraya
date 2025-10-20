import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/**
 * Barra de navegación principal.
 * Incluye enlaces a las diferentes páginas de la aplicación.
 */
function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        {/* Nombre o logo de la tienda */}
        <Link to="/">MiTienda</Link>
      </div>
      <nav className="navbar__links">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <nav className="navbar__user">
        <ul>
          <li><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/registro">Registrarse</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;