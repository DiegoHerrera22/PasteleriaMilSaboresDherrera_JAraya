import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

// Simple login page.  This example does not perform real authentication but
// demonstrates controlled form inputs.  You could integrate an API later.
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you would validate credentials with a server.  Here we
    // simply display a confirmation message and reset the form.
    setMessage('Inicio de sesión simulado.');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1 className="mb-3">Iniciar Sesión</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3" controlId="loginEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}