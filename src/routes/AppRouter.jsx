import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";     
import Register from "../pages/Register";
import Perfil from "../pages/Perfil";
import FichaIngreso from "../pages/asistente/FichaIngreso";

/*import ProtectedRoute from "./ProtectedRoute";*/

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/ficha_ingreso" element={<FichaIngreso/>}/>
      <Route path="/perfil" element={<Perfil/>}      
      /*<Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>}  >> Ruta protegida*/
      />
    </Routes>
  );
}