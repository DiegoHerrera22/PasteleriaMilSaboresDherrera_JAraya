import React from 'react';
import { Container } from 'react-bootstrap';

// About page.  Describes the history and mission of the bakery.
export default function Nosotros() {
  return (
    <Container>
      <h1 className="mb-3">Nosotros</h1>
      <p>
        Somos una pastelería familiar fundada en 2023 con la misión de crear
        postres irresistibles a partir de ingredientes frescos y de la más alta
        calidad. Nuestro compromiso es endulzar tus momentos más especiales.
      </p>
      <p>
        Con dedicación y pasión, combinamos recetas tradicionales con toques
        innovadores para ofrecerte sabores únicos. ¡Gracias por confiar en
        nosotros!
      </p>
    </Container>
  );
}