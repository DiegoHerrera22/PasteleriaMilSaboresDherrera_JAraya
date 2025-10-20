/** Login — maqueta simple (autenticación real va en backend) */
import React, { useState } from 'react';

export default function Login(){
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    alert('Login de ejemplo — implementar lógica real según tu proyecto');
  };

  return (
    <main className="contenedor">
      <h2>Iniciar sesión</h2>
      <form className="formulario" onSubmit={onSubmit}>
        <div className="fila">
          <label>Usuario</label>
          <input value={usuario} onChange={e=>setUsuario(e.target.value)} />
        </div>
        <div className="fila">
          <label>Contraseña</label>
          <input type="password" value={clave} onChange={e=>setClave(e.target.value)} />
        </div>
        <button className="boton-primario" type="submit">Entrar</button>
      </form>
    </main>
  );
}