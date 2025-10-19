import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

// Registration page.  Captures user details and displays a success message.
export default function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Registro simulado completado.');
    setFormData({ nombre: '', email: '', password: '' });
  };
  return (
    <Container>
      <h1 className="mb-3">Registro</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit} style={{ maxWidth: '450px' }}>
        <Form.Group className="mb-3" controlId="registroNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registroEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="registroPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
}