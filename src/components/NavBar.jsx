/** Barra de navegación — Pastelería 1000 Sabores */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
  return (
    <header className="navbar">
      <div className="navbar__wrap">
        <div className="navbar__brand">
          <Link to="/">
            <img src="/assets/favicon.png" alt="Logo Pastelería 1000 Sabores" />
            <span>Pastelería 1000 Sabores</span>
          </Link>
        </div>
        <nav className="navbar__links">
          <Link to="/productos">Productos</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
          <Link to="/registro">Registro</Link>
        </nav>
      </div>
    </header>
  );
}