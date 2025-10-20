export const SESSION_KEY = 'app_session_key_v1'
function ensureInit(){
  if(!sessionStorage.getItem(SESSION_KEY)){
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ createdAt:new Date().toISOString(), user:null, cart:[] }))
  }
}
export function getSession(){ ensureInit(); try{ return JSON.parse(sessionStorage.getItem(SESSION_KEY)) }catch{ return null } }
export function setSession(patch){ ensureInit(); const cur=getSession()||{}; const nxt={...cur,...patch}; sessionStorage.setItem(SESSION_KEY, JSON.stringify(nxt)); return nxt }
export function clearSession(){ sessionStorage.removeItem(SESSION_KEY) }
