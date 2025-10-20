
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import './App.scss'
import Layout from './Layout/Layout'
import { ROUTE_PATHS } from './utils/constants'
import SignIn from './pages/SignIn'
import Carrito from './pages/Carrito'

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.SIGN_IN} element = {<SignIn />} />
          <Route path={ROUTE_PATHS.CARRITO} element = {<Carrito/>} />
          {/* El layout se aplica en todos los siguiente componentes*/}
          <Route element= {<Layout />}>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

