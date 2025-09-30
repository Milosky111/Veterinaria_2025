import FichaIngresoForm from "../components/FichaIngresoForm"; // tu formulario
// import CerrarSesion from "../components/CerrarSesion"; para mas adelante

function FichaIngreso() {
  return (
    <div className="container mt-4">
      <h2>Clínica Veterinaria</h2>
      //{/* <CerrarSesion /> */}
      
      {/* Componente del formulario */}
      <FichaIngresoForm clienteID="cliente123" mascotaID="mascota456" />
    </div>
  );
}

export default FichaIngreso;
