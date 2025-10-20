
# React 19 + Vite • Atomic Design • Router • Tests • Session Storage

Estructura base lista para migración, con:
- **React 19** + **Vite**
- **Diseño Atómico** (atoms/molecules/organisms)
- **Enrutamiento** con `react-router-dom` (rutas `/` y `/admin`)
- **Tests** con Vitest (incluye `toBeTruthy`)
- **Local Storage por sesión** (usa `sessionStorage` con `SESSION_KEY` fijo)

## Scripts
```bash
npm install
npm run dev       # levanta en http://localhost:5173
npm run build
npm run preview
npm run test
```

## Estructura
```
src/
  components/
    atoms/       # Botón, Heading, etc.
    molecules/   # StatCard, etc.
    organisms/   # Header, etc.
  hooks/         # useSession
  pages/         # Home, Admin
  utils/         # session storage helpers
  styles/        # index.css
  __tests__/     # pruebas (toBeTruthy)
public/          # favicon, robots
```

## Notas para la migración visual
- Reemplaza contenidos de `Home.jsx` y `Admin.jsx` con tu UI real.
- Coloca tus imágenes en `public/` y referencia con rutas absolutas (`/mis-img/...`).
- Ajusta estilos en `src/styles/index.css` o añade tu framework preferido.
