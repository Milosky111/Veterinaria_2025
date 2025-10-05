import { useState } from "react";

export default function IngresoCliente({ onNext, onCancel }) {
    const [nombreCliente, setNombreCliente] = useState("");
    const [rut, setRut] = useState("");
    const [direccion, setDireccion] = useState("");
    const [comuna, setComuna] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombreCliente,
            rut,
            direccion,
            comuna,
            telefono,
            email,
            fecha: new Date().toISOString(),
        };

        if (onNext) {
            onNext(formData);
        } else {
            console.error("ERROR: La prop 'onNext' no fue proporcionada al componente IngresoCliente.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Datos del cliente</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label">Propietario / Responsable</label>
                    <input type="text" className="form-control" value={nombreCliente} onChange={(e) => setNombreCliente(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rut</label>
                    <input type="text" className="form-control" value={rut} onChange={(e) => setRut(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Comuna</label>
                    <input type="text" className="form-control" value={comuna} onChange={(e) => setComuna(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input type="number" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">e-mail</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="d-flex justify-content-between">
                    {onCancel && (
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onCancel} 
                        >
                            Cancelar
                        </button>
                    )}
                    <button type="submit" className="btn btn-success ms-auto">
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    );
}