
import React from 'react'
import Button from '../atoms/Button.jsx'

export default function Header({title, ctaLabel='Acción', onCta}){
  return (
    <header className="hero">
      <div className="container" style={{textAlign:'center'}}>
        <div className="badge">React 19 • Vite • Atomic</div>
        <h1>{title}</h1>
        <p className="muted">Estructura con diseño atómico, enrutamiento, test y session storage key.</p>
        <Button onClick={onCta}>{ctaLabel}</Button>
      </div>
    </header>
  )
}
