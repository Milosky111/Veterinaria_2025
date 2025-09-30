import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5H1umYrZYQRYPYeYZBfFRveP87Cqiy9o",
  authDomain: "veterinaria-inacap25.firebaseapp.com",
  projectId: "veterinaria-inacap25",
  storageBucket: "veterinaria-inacap25.firebasestorage.app",
  messagingSenderId: "612409988903",
  appId: "1:612409988903:web:19f4d7c2c3d6ce5cf67b02",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Función para agregar ficha clínica
export const agregarFichaClinica = async (clienteID, mascotaID, datos) => {
  try {
    return await addDoc(
      collection(db, "Clientes", clienteID, "Mascotas", mascotaID, "FichaClinica"),
      datos
    );
  } catch (error) {
    console.error("Error agregando ficha clínica:", error);
    throw error;
  }
};