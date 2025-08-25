// src/pages/HomePage.jsx
import React from "react";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom"; // Importa Link
import Navbar from "../components/navbar"; // Importa el Navbar
import '../components/home.css'; // Asegúrate de importar el archivo CSS
import Footer from "../components/footer";

function HomePage() {
  return (
    <div >
      <Navbar /> {/* Agrega el Navbar en la parte superior */}
      
      <ProductList />
       {/* Enlace a la página de agregar productos */}
      <Footer /> {/* Agregamos el Footer */}
      
    </div>
  );
}

export default HomePage;
