import Contacto from "@/pages/www/contacto/Contacto";
import Home from "@/pages/www/site/Home";
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes;
