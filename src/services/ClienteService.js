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