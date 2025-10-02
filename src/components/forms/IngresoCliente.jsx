import { useState } from "react";
import Swal from "sweetalert2";
import { agregarFichaClinica } from "../../services/firebase";

export default function IngresoCliente({clienteID, mascotaID}) {
  const [nombreCliente, setNombreCliente] = useState("");
  const [rut, setRut] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comuna, setComuna] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await agregarFichaClinica(clienteID, mascotaID, {
        nombreCliente,
        rut,
        direccion,
        comuna,
        telefono,
        email,
        fecha: new Date().toISOString(),
      });

      Swal.fire("Éxito", "Ficha clínica ingresada correctamente", "success");

      // Limpiar formulario
      setNombreCliente("");
      setRut("");
      setDireccion("");
      setComuna("");
      setTelefono("");
      setEmail("");
    } catch (error) {
      Swal.fire("Error", "No se pudo registrar la ficha clínica", "error");
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Datos del cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Propietario / Responsable</label>
          <input
            type="text"
            className="form-control"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rut</label>
          <input
            type="text"
            className="form-control"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comuna</label>
          <input
            type="text"
            className="form-control"
            value={comuna}
            onChange={(e) => setComuna(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input
            type="number"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">e-mail</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrar
        </button>
      </form>
    </div>
  );
}
