import React from 'react'
export default function StatCard({label, value, hint}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
        <strong style={{fontSize:'1.75rem'}}>{value}</strong>
        <small className="muted">{hint}</small>
      </div>
      <div className="muted" style={{marginTop:'.5rem'}}>{label}</div>
    </div>
  )
}
