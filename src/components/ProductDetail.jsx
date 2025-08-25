import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import Navbar from "../components/navbar"; // Importa el Navbar
import { doc, getDoc } from "firebase/firestore";
import Footer from "../components/footer";
import "./home.css";

function ProductDetail() {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const productDoc = doc(db, "productos", id);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProducto(productSnapshot.data());
      } else {
        console.log("Producto no encontrado");
      }
    };

    fetchProductDetail();
  }, [id]); // Ejecutar cada vez que el id cambia

  if (!producto) {
    return <div>Cargando...</div>; // Mientras carga el producto
  }

  return (
    <div >
        <Navbar /> 

    <div className="product-detail">
      <div className="product-detail-left">
        <img src={producto.imageUrl} alt={producto.title} className="product-detail-image" />
      </div>
      <div className="product-detail-right">
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default ProductDetail;
