import React, { useState } from 'react';
import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import Card from '../atoms/Card.jsx';

/**
 * Página de inicio de sesión. No valida credenciales; es solo estética.
 */
export default function LoginPage() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // En un sitio real, aquí se procesaría la autenticación.
    alert('Funcionalidad de login no implementada');
  };

  return (
    <div>
      <h2>Login</h2>
      <Card style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tucorreo@duoc.cl"
            required
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" style={{ width: '100%' }}>
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
}