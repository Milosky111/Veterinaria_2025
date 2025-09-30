import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";     
import Register from "../pages/Register";
import FichaIngreso from "../pages/FichaIngreso";
/*import ProtectedRoute from "./ProtectedRoute";*/

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/home" element={<Home />}/>
      <Route path="/ficha-ingreso" element={<FichaIngreso/>}      
      /*<Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>}  >> Ruta protegida*/
      />
    </Routes>
  );
}