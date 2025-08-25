// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChNbvvWg49ZhvH7cdf5OUDpRm_eKqPzqg",
  authDomain: "hotandcold-15168.firebaseapp.com",
  projectId: "hotandcold-15168",
  storageBucket: "hotandcold-15168.firebasestorage.app",
  messagingSenderId: "260161120532",
  appId: "1:260161120532:web:cdaab6ddb9c338be863a01"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exporta para usarlos en otros archivos
export { app, db, auth, storage };
