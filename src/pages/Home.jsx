import React from 'react'
import Header from '../components/organisms/Header.jsx'
import StatCard from '../components/molecules/StatCard.jsx'
import useSession from '../hooks/useSession.js'

export default function Home(){
  const { session, update, reset } = useSession()
  return (
    <>
      <Header
        title="Vista Pública (Sitio)"
        ctaLabel="Guardar nombre en sesión"
        onCta={()=>{
          const name = window.prompt('Escribe tu nombre para guardarlo por sesión:')
          if(name) update({ user: { name } })
        }}
      />
      <main className="container">
        <section className="grid">
          <div className="card" style={{gridColumn:'span 12'}}>
            <h2>Bienvenido{session?.user?.name ? `, ${session.user.name}` : ''}</h2>
            <p className="muted">La sesión dura lo que dure esta pestaña.</p>
            <div style={{display:'flex',gap:'.5rem',marginTop:'.5rem'}}>
              <button className="btn" onClick={()=>update({ cart:[...(session?.cart||[]), {id:Date.now(), qty:1}] })}>
                Añadir al carrito (demo)
              </button>
              <button className="btn" onClick={reset}>Reset sesión</button>
            </div>
          </div>
          <div style={{gridColumn:'span 3'}}><StatCard label="Items carrito" value={session?.cart?.length ?? 0} hint="sessionStorage"/></div>
          <div style={{gridColumn:'span 3'}}><StatCard label="Usuario" value={session?.user?.name ?? '—'} hint="por sesión"/></div>
          <div style={{gridColumn:'span 6'}} className="card">
            <h3>Tabla demo</h3>
            <table className="table-like">
              <thead><tr><th>Ítem</th><th>Cantidad</th></tr></thead>
              <tbody>
                {(session?.cart ?? []).map((it, idx)=>(<tr key={it.id}><td>Producto #{idx+1}</td><td>1</td></tr>))}
                {((session?.cart ?? []).length===0) && <tr><td colSpan="2"><small className="muted">Vacío</small></td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
