import { Link,useLocation,useNavigate,Outlet } from "react-router-dom";
import loginImg from "../../assets/images/login.png";

export default function Sidebar() {
  // Simulación de datos de usuario obtenidos del AuthContext
    const userName = "Agatha Alvarez";
    const userRole = "Asistente"; 

    return (
        <aside 
            className="bg-light text-black p-3 position-fixed top-0 start-0 h-100 d-flex flex-column" 
            style={{ width: '300px', zIndex: 1040 }}
        >
            <div className="text-center mb-4 pb-3 border-bottom border-secondary">
                <img 
                    src={loginImg}
                    alt="Logo/Usuario"
                    className='d-block mx-auto mb-2 logo-style img-fluid' 
                    style={{ maxWidth: '80px', height: 'auto' }} 
                />
                <h6 className="text-blue mt-2 mb-0" style={{ lineHeight: 1.1 }}>
                    Mi Veterinaria
                </h6>
                <p className="small mb-1 text-muted" style={{ lineHeight: 1 }}>¡Hola!</p>
                <h4 className="mb-0 text-success">{userName}</h4>
                <p className="badge bg-secondary">{userRole}</p> 
            </div>
            <nav className="flex-grow-1">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link className="nav-link text-blue" to="/ficha_ingreso">
                            Nueva ficha de Mascota
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-blue" to="/modificar_mascota">
                            Actualizar datos de Mascota
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-blue" to="/modificar_cliente">
                            Actualizar datos del Cliente
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-blue" to="/consulta">
                            Buscar Cliente/Mascota
                        </Link>
                    </li>
                    <li className="nav-item mt-3">
                        <Link className="nav-link text-blue" to="/agendar_hora">
                            Agendar hora
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-blue" to="/modificar_hora">
                            Modificar/Eliminar hora
                        </Link>
                    </li>
                    <li className="nav-item mt-auto pt-3 border-top border-secondary">
                        <Link className="nav-link text-danger" to="/">
                            Cerrar Sesión
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}