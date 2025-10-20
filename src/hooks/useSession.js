
import { useEffect, useState } from 'react'
import { getSession, setSession, clearSession } from '../utils/session.js'

export default function useSession(){
  const [session, setLocal] = useState(getSession())

  useEffect(()=>{
    const handle = (e) => {
      if(e.key === null || e.key === 'app_session_key_v1'){
        setLocal(getSession())
      }
    }
    window.addEventListener('storage', handle)
    return ()=> window.removeEventListener('storage', handle)
  }, [])

  const update = (patch) => setLocal(setSession(patch))
  const reset = () => { clearSession(); setLocal(getSession()) }

  return { session, update, reset }
}
