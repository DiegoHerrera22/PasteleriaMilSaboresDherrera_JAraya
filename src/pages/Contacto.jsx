import React, { useState } from 'react';

/**
 * Página de contacto.  Incluye un formulario con campos de nombre,
 * correo electrónico y mensaje.  No se envía a ningún servidor,
 * simplemente muestra una alerta al enviarse.
 */
function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a un servicio real
    alert('Gracias por contactarnos, ' + nombre + '!');
    // Limpiamos el formulario
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <main className="contenedor">
      <h2>Contacto</h2>
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
          <label>Mensaje</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="boton-primario">
          Enviar
        </button>
      </form>
    </main>
  );
}

export default Contacto;