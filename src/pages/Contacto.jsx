import React from 'react';
import { Container } from 'react-bootstrap';

// Contact page.  Provides contact information and a simple descriptive
// paragraph.  Expand this page with a contact form if desired.
export default function Contacto() {
  return (
    <Container>
      <h1 className="mb-3">Contacto</h1>
      <p>¿Tienes alguna duda o quieres hacer un pedido especial?</p>
      <p>Envíanos un correo a <a href="mailto:info@pasteleriamilsabores.cl">info@pasteleriamilsabores.cl</a> o llámanos al +56 9 1234 5678.</p>
      <p>Nuestro local está ubicado en Santiago, Chile.</p>
    </Container>
  );
}