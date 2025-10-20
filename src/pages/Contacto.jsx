/** Contacto — formulario simple */
import React, { useState } from 'react';

export default function Contacto(){
  const [form, setForm] = useState({ nombre:'', correo:'', mensaje:'' });

  const onChange = e => setForm(f => ({...f, [e.target.name]: e.target.value}));
  const onSubmit = e => {
    e.preventDefault();
    alert('Gracias por tu mensaje. (Conectar a backend si corresponde)');
  };

  return (
    <main className="contenedor">
      <h2>Contacto</h2>
      <form className="formulario" onSubmit={onSubmit}>
        <div className="fila">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={onChange} placeholder="Tu nombre" />
        </div>
        <div className="fila">
          <label htmlFor="correo">Correo</label>
          <input id="correo" name="correo" type="email" value={form.correo} onChange={onChange} placeholder="tu@correo.cl" />
        </div>
        <div className="fila">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" value={form.mensaje} onChange={onChange} placeholder="¿En qué te ayudamos?"></textarea>
        </div>
        <button className="boton-primario" type="submit">Enviar</button>
      </form>
    </main>
  );
}