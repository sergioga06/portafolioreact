import Contacto from "@/pages/www/contacto/Contacto";
import { Proyecto } from "@/pages/www/proyectos/Proyecto";
import Home from "@/pages/www/site/Home";
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contacto" element={<Contacto />} />
       <Route path="/proyectos" element={<Proyecto />} />
    </Routes>
  )
}

export default AppRoutes;
