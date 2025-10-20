import React, { useState } from 'react';

/**
 * Página de registro de usuario.  Permite a un nuevo usuario
 * registrarse proporcionando nombre, correo y contraseña.  La
 * información no se envía a un servidor en este ejemplo.
 */
function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro completado. Bienvenido/a, ' + nombre + '!');
    setNombre('');
    setCorreo('');
    setUsuario('');
    setContrasena('');
  };

  return (
    <main className="contenedor">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="formulario-contacto">
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
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
          Registrarse
        </button>
      </form>
    </main>
  );
}

export default Registro;