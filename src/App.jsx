
import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'

export default function App(){
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className={({isActive})=> isActive ? 'active' : undefined}>Inicio</NavLink>
        <NavLink to="/admin" className={({isActive})=> isActive ? 'active' : undefined}>Admin</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  )
}
