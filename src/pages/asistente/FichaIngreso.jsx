import React, { useState } from 'react';
import IngresoMascota from "../../components/forms/IngresoMascota";
import IngresoCliente from "../../components/forms/IngresoCliente";
import Sidebar from "../../components/layout/Sidebar";
import ModalBase from "../../components/ui/ModalBase";

const PASOS = {
    CLIENTE: 'cliente',
    MASCOTA: 'mascota'
};

function FichaIngreso() {
    // 1. Estado para controlar la visibilidad del MODAL
    const [mostrarModal, setMostrarModal] = useState(false);
    // 2. Estado para controlar el flujo de pasos
    const [pasoActual, setPasoActual] = useState(PASOS.CLIENTE);
    // 3. Estado para guardar el ID del cliente
    const [clienteId, setClienteId] = useState(null);

    // --- Funciones del Modal y Flujo ---
    const abrirModal = () => {
        setMostrarModal(true);
        setPasoActual(PASOS.CLIENTE); // Siempre inicia el flujo en el paso 1
        setClienteId(null);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
        // Opcional: Puedes hacer un reset completo de estados aquí
    };

    const handleClienteIngresado = (newClienteId) => {
        setClienteId(newClienteId); // Guarda el ID para Pasos 2
        setPasoActual(PASOS.MASCOTA); // Avanza al paso 2
    };

    const handleMascotaIngresada = () => {
        alert("Ficha de ingreso completada con éxito!");
        cerrarModal(); // Cierra el modal al finalizar
    };
    
    // Contenido dinámico del Modal
    const ContenidoModal = () => {
        if (pasoActual === PASOS.CLIENTE) {
            return (
                <IngresoCliente 
                    onSuccess={handleClienteIngresado}
                    // Puedes pasar la función de cierre al formulario si quieres un botón de cancelar
                    onCancel={cerrarModal} 
                />
            );
        }
        
        if (pasoActual === PASOS.MASCOTA && clienteId) {
            return (
                <>
                    <p className="alert alert-info">Cliente registrado con ID: {clienteId}. Continúe con los datos de la mascota.</p>
                    <IngresoMascota 
                        clienteID={clienteId} 
                        onSuccess={handleMascotaIngresada}
                        onCancel={cerrarModal}
                    />
                    {/* Botón de regresar opcional */}
                    <button className="btn btn-secondary btn-sm mt-3" onClick={() => setPasoActual(PASOS.CLIENTE)}>
                        &larr; Volver a Cliente
                    </button>
                </>
            );
        }
        return <p>Error en el flujo de pasos.</p>;
    };

    // --- Renderizado Principal de la Página ---
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 d-none d-md-block">
                    <Sidebar/>
                </div>
                <div className="col-md-9 offset-md-3">
                    <h1 className="mt-3">Gestión de Fichas</h1>
                    
                    {/* Botón para abrir el Modal */}
                    <button 
                        className="btn btn-primary btn-lg mt-4" 
                        onClick={abrirModal}
                    >
                        + Ingresar Nueva Ficha (Cliente & Mascota)
                    </button>
                    
                    <hr className="mt-5"/>
                    <p>Aquí irá la tabla de clientes/mascotas...</p>
                    
                    {/*Renderizado Condicional del Modal*/}
                    {mostrarModal && (
                        <ModalBase 
                            titulo={`Ficha de Ingreso - Paso: ${pasoActual === PASOS.CLIENTE ? '1/2 Cliente' : '2/2 Mascota'}`}
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