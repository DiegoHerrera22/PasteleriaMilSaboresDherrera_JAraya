import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Outlet, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AdminDashboard from './admin/Dashboard.jsx';
import AdminProductsPage from './admin/ProductsPage.jsx';
import AdminUsersPage from './admin/UsersPage.jsx';

// Componente principal que configura el enrutamiento y gestiona el carrito y la sesión.
export default function App() {
  // Genera un identificador único por sesión y lo guarda en sessionStorage.
  useEffect(() => {
    const key = sessionStorage.getItem('sessionKey');
    if (!key) {
      const newKey = `${Date.now().toString(36)}-${Math.random()
        .toString(36)
        .substring(2)}`;
      sessionStorage.setItem('sessionKey', newKey);
    }
  }, []);

  // Estado para el carrito. Se inicializa leyendo sessionStorage.
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = sessionStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Persiste el carrito en sessionStorage cuando cambie.
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Agrega un producto al carrito. Si ya existe, incrementa cantidad.
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Elimina un producto del carrito.
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Layout principal del sitio público. Incluye navegación y pie de página.
  const MainLayout = () => (
    <>
      <header className="navbar">
        <div className="logo">
          {/* Ícono de pastel. Puedes reemplazar por tu propio SVG en src/assets/cake.svg */}
          <img src="/src/assets/cake.svg" alt="Pastel" width="24" height="24" />
          1000 Sabores
        </div>
        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Productos
          </NavLink>
          <NavLink to="/carrito" className={({ isActive }) => (isActive ? 'active' : '')}>
            Carrito{' '}
            <span className="badge">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
            Blog
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contacto
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
            Login
          </NavLink>
          <NavLink to="/registro" className={({ isActive }) => (isActive ? 'active' : '')}>
            Registro
          </NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Pastelería 1000 Sabores — Demo EP1
      </footer>
    </>
  );

  // Layout para el panel de administración.
  const AdminLayout = () => {
    const navigate = useNavigate();
    return (
      <>
        <header className="navbar">
          <div className="logo">
            <img src="/src/assets/cake.svg" alt="Pastel" width="24" height="24" />
            Admin – 1000 Sabores
          </div>
          <nav>
            <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
            <NavLink to="/admin/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Productos
            </NavLink>
            <NavLink to="/admin/usuarios" className={({ isActive }) => (isActive ? 'active' : '')}>
              Usuarios
            </NavLink>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sitio
            </NavLink>
          </nav>
        </header>
        <main className="container">
          <Outlet />
        </main>
        <footer className="footer">Panel administrativo</footer>
      </>
    );
  };

  return (
    <Routes>
      {/* Rutas del sitio público */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage addToCart={addToCart} />} />
        <Route path="productos" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="carrito" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
      </Route>
      {/* Rutas del panel administrativo */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="productos" element={<AdminProductsPage />} />
        <Route path="usuarios" element={<AdminUsersPage />} />
      </Route>
    </Routes>
  );
}