import React from 'react'
import useSession from '../hooks/useSession.js'
export default function Admin(){
  const { session } = useSession()
  return (
    <main className="container">
      <div className="grid">
        <div className="card" style={{gridColumn:'span 12'}}>
          <h1>Panel Admin</h1>
          <p className="muted">Enrutamiento separado para administración (demo).</p>
        </div>
        <div className="card" style={{gridColumn:'span 6'}}>
          <h2>Resumen de Sesión</h2>
          <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(session, null, 2)}</pre>
        </div>
        <div className="card" style={{gridColumn:'span 6'}}>
          <h2>Accesos rápidos</h2>
          <ul>
            <li><span className="badge">Usuarios</span></li>
            <li><span className="badge">Productos</span></li>
            <li><span className="badge">Pedidos</span></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
