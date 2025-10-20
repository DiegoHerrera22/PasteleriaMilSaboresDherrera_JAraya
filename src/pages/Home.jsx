import React from 'react'
export default function Home(){
  return (
    <main className="container">
      <div className="card">
        <h1>Home</h1>
        <p>React 19 + Vite minimal funcionando.</p>
        <button className="btn" onClick={()=>alert('OK')}>Probar botón</button>
      </div>
    </main>
  )
}
