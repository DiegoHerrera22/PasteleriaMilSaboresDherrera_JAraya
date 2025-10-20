
/**
 * Session storage manager (by session) with a fixed session key.
 * If the key doesn't exist, it initializes it.
 */
export const SESSION_KEY = 'app_session_key_v1'

function ensureInit(){
  if(!sessionStorage.getItem(SESSION_KEY)){
    const init = { createdAt: new Date().toISOString(), user: null, cart: [] }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(init))
  }
}

export function getSession(){
  ensureInit()
  try{
    return JSON.parse(sessionStorage.getItem(SESSION_KEY))
  }catch{
    return null
  }
}

export function setSession(patch){
  ensureInit()
  const current = getSession() || {}
  const next = { ...current, ...patch }
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(next))
  return next
}

export function clearSession(){
  sessionStorage.removeItem(SESSION_KEY)
}
