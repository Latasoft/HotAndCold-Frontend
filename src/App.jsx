import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Importa los elementos de React Router
import HomePage from "./pages/HomePage";
import Climatizacion from './pages/Climatizacion';
import Tienda from './pages/tienda';
import ImageUpload from "./components/ImageUpload";
import ProductDetail from "./components/ProductDetail"; 
import Ventilacion from "./pages/Ventilacion";
import Calefaccion from "./pages/Calefaccion";
import Login from "./pages/login";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>  {/* Envolver todo en <Router> */}
      <Routes>  {/* Definir las rutas de la aplicación */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="/climatizacion" element={<Climatizacion />} />  {/* Ruta para la página de climatización */}
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/ventilacion" element={<Ventilacion />} /> 
        {/* Aquí se define la ruta para FileUpload */}
      
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/calefaccion" element={<Calefaccion />} />
        <Route path="/login" element={<Login />} />
         {/* Protegemos esta ruta con PrivateRoute */}
      <Route 
        path="/image" 
        element={
          <PrivateRoute>
            <ImageUpload />
          </PrivateRoute>
        } 
      />
      
      
      </Routes>
    </Router>
  );
}

export default App;
