// Simple wrapper around localStorage to abstract JSON serialization and
// deserialization.  If parsing fails or the key does not exist this function
// returns null.  Do not use in server-side rendering since localStorage is
// unavailable.
export function getItem(key) {
  if (typeof localStorage === 'undefined') return null;
  try {
    const value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (err) {
    console.error('Error reading from localStorage', err);
    return null;
  }
}

// Store a value under the specified key.  Values are JSON-stringified.
export function setItem(key, value) {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Error writing to localStorage', err);
  }
}

// Remove an item from localStorage.
export function removeItem(key) {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(key);
}