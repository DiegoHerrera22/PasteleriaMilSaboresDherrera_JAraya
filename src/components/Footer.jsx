/** Pie de página — Pastelería 1000 Sabores */
import React from 'react';

export default function Footer(){
  return (
    <footer>
      <div className="contenedor">
        <p>© {new Date().getFullYear()} Pastelería 1000 Sabores — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}