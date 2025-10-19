import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Navigation bar component using react-bootstrap.  Each NavLink uses the
// appropriate route path so the active link is highlighted when selected.
export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Pastelería Mil Sabores
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productos" end>
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito" end>
              Carrito
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" end>
              Contacto
            </Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" end>
              Nosotros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" end>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}