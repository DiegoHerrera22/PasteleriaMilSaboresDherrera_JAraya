import React, { useState } from 'react';
import Input from '../atoms/Input.jsx';
import Select from '../atoms/Select.jsx';
import Button from '../atoms/Button.jsx';
import Card from '../atoms/Card.jsx';
import { regiones } from '../data/regions.js';

/**
 * Página de registro de usuario. Permite ingresar datos personales y selecciona región/comuna.
 */
export default function RegisterPage() {
  const [run, setRun] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [region, setRegion] = useState(regiones[0].nombre);
  const [comuna, setComuna] = useState(regiones[0].comunas[0]);
  const [tipoUsuario, setTipoUsuario] = useState('Cliente');

  // Actualiza la comuna cuando cambia la región seleccionada
  const handleRegionChange = (e) => {
    const nuevaRegion = e.target.value;
    setRegion(nuevaRegion);
    const regionObj = regiones.find((r) => r.nombre === nuevaRegion);
    setComuna(regionObj.comunas[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro enviado. Esta demo no almacena los datos.');
    // Reiniciamos el formulario
    setRun('');
    setNombres('');
    setApellidos('');
    setCorreo('');
    setDireccion('');
    setRegion(regiones[0].nombre);
    setComuna(regiones[0].comunas[0]);
    setTipoUsuario('Cliente');
  };

  return (
    <div>
      <h2>Registro</h2>
      <Card style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <Input
            label="RUN (sin puntos ni guion)"
            type="text"
            value={run}
            onChange={(e) => setRun(e.target.value)}
            required
          />
          <Input
            label="Nombres"
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
          />
          <Input
            label="Apellidos"
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
          <Input
            label="Correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="usuario@duoc.cl"
            required
          />
          <Input
            label="Dirección"
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <Select
            label="Región"
            options={regiones.map((r) => ({ value: r.nombre, label: r.nombre }))}
            value={region}
            onChange={handleRegionChange}
          />
          <Select
            label="Comuna"
            options={regiones
              .find((r) => r.nombre === region)
              .comunas.map((c) => ({ value: c, label: c }))}
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
          />
          <Select
            label="Tipo de usuario"
            options={[
              { value: 'Cliente', label: 'Cliente' },
              { value: 'Administrador', label: 'Administrador' },
            ]}
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          />
          <Button type="submit" style={{ width: '100%' }}>
            Registrarme
          </Button>
        </form>
      </Card>
    </div>
  );
}