import { useState } from 'react';
import IngresoMascota from "../../components/forms/IngresoMascota";
import IngresoCliente from "../../components/forms/IngresoCliente";
import Sidebar from "../../components/layout/Sidebar";
import ModalBase from "../../components/ui/ModalBase";

const PASOS = {
    CLIENTE: 'cliente',
    MASCOTA: 'mascota'
};

function FichaIngreso() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [pasoActual, setPasoActual] = useState(PASOS.CLIENTE);
    const [datosCliente, setDatosCliente] = useState(null);

    const abrirModal = () => {
        setMostrarModal(true);
        setPasoActual(PASOS.CLIENTE);
        setDatosCliente(null);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    const handleClienteIngresado = (data) => {
        setDatosCliente(data);
        setPasoActual(PASOS.MASCOTA);
    };

    const handleMascotaIngresada = (data) => {
        console.log("Mockup Finalizado. Cliente:", datosCliente, "Mascota:", data);
        alert("Ficha de ingreso completada con éxito!");
        cerrarModal();
    };
    
    const volverACliente = () => {
        setPasoActual(PASOS.CLIENTE);
    };
    
    const ContenidoModal = () => {
        if (pasoActual === PASOS.CLIENTE) {
            return (
                <IngresoCliente 
                    onNext={handleClienteIngresado} 
                    onCancel={cerrarModal} 
                    valoresIniciales={datosCliente}
                />
            );
        }
        
        if (pasoActual === PASOS.MASCOTA && datosCliente) { 
            const nombreCliente = datosCliente.nombreCliente || "Cliente";
            return (
                <>
                    <p className="alert alert-info">Continuando el registro para: **{nombreCliente}**.</p>
                    <IngresoMascota 
                        onNext={handleMascotaIngresada}
                        onCancel={cerrarModal}
                    />
                    <button className="btn btn-secondary btn-sm mt-3" onClick={volverACliente}>
                        &larr; Volver a Cliente
                    </button>
                </>
            );
        }
        return <p>Error en el flujo de pasos.</p>;
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 d-none d-md-block">
                    <Sidebar/>
                </div>
                <div className="col-md-9 offset-md-3">
                    <h1 className="mt-3">Gestión de Fichas</h1>
                    
                    <button 
                        className="btn btn-primary btn-lg mt-4" 
                        onClick={abrirModal}
                    >
                        + Ingresar Nueva Ficha (Cliente & Mascota)
                    </button>
                    
                    {mostrarModal && (
                        <ModalBase 
                            titulo={`Ficha de Ingreso - Paso: ${pasoActual === PASOS.CLIENTE ? '1/2 Cliente (Mockup)' : '2/2 Mascota (Mockup)'}`}
                            onClose={cerrarModal}
                        >
                            <ContenidoModal />
                        </ModalBase>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FichaIngreso;