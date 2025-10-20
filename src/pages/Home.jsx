/** Portada — Pastelería 1000 Sabores */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <main className="contenedor">
      <section className="hero">
        <h1>Pastelería 1000 Sabores</h1>
        <p>Postres artesanales hechos con cariño. Tortas, cupcakes, alfajores y más.</p>
        <Link className="boton-primario" to="/productos">Ver catálogo</Link>
      </section>
    </main>
  );
}