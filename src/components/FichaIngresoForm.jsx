import { useState } from "react";
import Swal from "sweetalert2";
import { agregarFichaClinica } from "../services/firebase";

export default function FichaIngreso({ clienteID, mascotaID }) {
  const [nombreMascota, setNombreMascota] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [motivo, setMotivo] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await agregarFichaClinica(clienteID, mascotaID, {
        nombreMascota,
        especie,
        raza,
        edad,
        peso,
        motivo,
        observaciones,
        fecha: new Date().toISOString(),
      });

      Swal.fire("Éxito", "Ficha clínica ingresada correctamente", "success");

      // Limpiar formulario
      setNombreMascota("");
      setEspecie("");
      setRaza("");
      setEdad("");
      setPeso("");
      setMotivo("");
      setObservaciones("");
    } catch (error) {
      Swal.fire("Error", "No se pudo registrar la ficha clínica", "error");
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Ficha Clínica de Ingreso</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Mascota</label>
          <input
            type="text"
            className="form-control"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Especie</label>
          <input
            type="text"
            className="form-control"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Raza</label>
          <input
            type="text"
            className="form-control"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Peso (kg)</label>
          <input
            type="number"
            className="form-control"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Motivo de ingreso</label>
          <textarea
            className="form-control"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <textarea
            className="form-control"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Registrar Ficha
        </button>
      </form>
    </div>
  );
}
