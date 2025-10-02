export default function ModalBase({ titulo, onClose, children }) {
  
  return (
    // Fondo gris translúcido (backdrop)
    // El 'show' y 'display: block' son necesarios para que Bootstrap lo muestre sin JS
    <div 
      className="modal fade show" 
      style={{ 
        display: 'block', 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        zIndex: 1050, 
        overflowY: 'auto' // Permite scroll si el contenido es largo
      }}
      onClick={onClose} // Cierra si se hace clic en el fondo
    >
      <div 
        className="modal-dialog modal-lg" // Usamos modal-lg para tener buen espacio
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro cierre el modal
      >
        <div className="modal-content">
          
          {/* Encabezado del Modal */}
          <div className="modal-header">
            <h5 className="modal-title">{titulo}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose} 
              aria-label="Cerrar"
            ></button>
          </div>

          {/* Cuerpo del Modal: El contenido dinámico se inyecta aquí */}
          <div className="modal-body">
            {children} {/* 👈 TU FORMULARIO VA AQUÍ */}
          </div>
          
          {/* Opcional: Pie de página si los formularios no manejan sus propios botones */}
          
        </div>
      </div>
    </div>
  );
}