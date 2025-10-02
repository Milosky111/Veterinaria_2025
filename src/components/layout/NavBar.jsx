import { Link,useLocation,useNavigate } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const isHomePage = ["/Home", "/Perfil"].includes(location.pathname);  
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Veterinaria</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {isHomePage ? (
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {navigate("/Perfil");
                  }}
                >
                  tu perfil
                </button>
              ) : (
                <Link className="nav-link active" aria-current="page" to="/Registro">
                  registro
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <button
                  className="nav-link btn btn-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => {navigate("/");
                  }}
                >
                  cerrar sesión
                </button>
              ) : (
                <Link className="nav-link active" aria-current="page" to="/Login">
                  iniciar sesión
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}