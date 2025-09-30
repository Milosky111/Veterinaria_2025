import IngresoMascota from "../components/FichaIngresoMascota"; // formulario
import IngresoCliente from "../components/FichaIngresoCliente";
// import CerrarSesion from "../components/CerrarSesion"; para mas adelante

function FichaIngreso() {
  return (
    <div className="container mt-4">
      <h1>Ficha de ingreso</h1>
      <IngresoMascota clienteID="cliente123" mascotaID="mascota456" />
      {/* <CerrarSesion /> */}
      {/* Componente del formulario */}
      <IngresoCliente clienteID="cliente123" mascotaID="mascota456" />
      
    </div>
  );
}

export default FichaIngreso;
