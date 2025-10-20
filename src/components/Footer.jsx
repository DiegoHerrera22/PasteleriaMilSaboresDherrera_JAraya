import React from 'react';

/**
 * Pie de página sencillo.  Puedes ampliarlo con enlaces de redes
 * sociales o información de contacto si es necesario.
 */
function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', background: '#333', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} MiTienda - Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;