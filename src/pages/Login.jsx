import React, { useState } from 'react';

/**
 * Página de inicio de sesión.  Incluye un formulario de usuario y
 * contraseña.  La autenticación real se debería implementar en un
 * servidor; aquí simplemente mostramos una alerta.
 */
function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido, ${usuario}!`);
    setUsuario('');
    setContrasena('');
  };

  return (
    <main className="contenedor">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="formulario-contacto">
        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="boton-primario">
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;