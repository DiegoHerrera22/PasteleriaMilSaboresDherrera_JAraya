import React from 'react';
import { Container } from 'react-bootstrap';

// Home page component.  Presents a simple welcome message and prompts the user
// to explore the catalogue.  You can enrich this page with images and
// promotional content as desired.
export default function Home() {
  return (
    <Container>
      <h1 className="mb-3">Bienvenido a Pastelería Mil Sabores</h1>
      <p>
        En nuestra pastelería encontrarás tortas, postres y dulces artesanales
        para cada ocasión. Explora nuestro catálogo y déjate tentar por
        nuestros sabores.
      </p>
    </Container>
  );
}