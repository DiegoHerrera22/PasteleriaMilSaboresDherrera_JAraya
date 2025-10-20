/** Registro — maqueta simple */
import React, { useState } from 'react';

export default function Registro(){
  const [form, setForm] = useState({ nombre:'', correo:'', usuario:'', clave:'' });
  const onChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}));
  const onSubmit = e => {
    e.preventDefault();
    alert('Registro de ejemplo — conectar con backend si aplica');
  };

  return (
    <main className="contenedor">
      <h2>Crear cuenta</h2>
      <form className="formulario" onSubmit={onSubmit}>
        <div className="fila">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={onChange} />
        </div>
        <div className="fila">
          <label htmlFor="correo">Correo</label>
          <input id="correo" name="correo" type="email" value={form.correo} onChange={onChange} />
        </div>
        <div className="fila">
          <label htmlFor="usuario">Usuario</label>
          <input id="usuario" name="usuario" value={form.usuario} onChange={onChange} />
        </div>
        <div className="fila">
          <label htmlFor="clave">Contraseña</label>
          <input id="clave" name="clave" type="password" value={form.clave} onChange={onChange} />
        </div>
        <button className="boton-primario" type="submit">Registrarme</button>
      </form>
    </main>
  );
}