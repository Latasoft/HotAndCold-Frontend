import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"; // Para redirigir a la página de detalles
import "./home.css"; // Asegúrate de importar el archivo CSS

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id,  // Añadimos el id del documento de Firebase
        ...doc.data(), // Añadimos los datos del producto
      }));
      setProductos(productosList);
    };

    fetchProductos();
  }, []);

  return (
    <div className="product-container">
      <div className="product-grid">
        {productos.map((producto, index) => (
          <div key={index} className="product-card">
            <Link to={`/producto/${producto.id}`}> {/* Enlace a la página de detalles del producto */}
              <img src={producto.imageUrl} alt={producto.title} className="product-image" />
              <h3>{producto.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
