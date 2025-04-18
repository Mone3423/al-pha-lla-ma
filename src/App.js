import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Footer from "./components/Footer";
import Fotografia from "./pages/servicios/Fotografia";
import WhatsAppButton from "./components/WhatsappBoton";
import CommunityManagement from "./pages/servicios/CommunityManagement";
import ScrollToTop from "./components/ScrollToTop";
import SplashCursor from './components/Animations/SplashCursor/SplashCursor'




import Clientes from "./components/Clientes";
function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <SplashCursor /> {/* Agregamos el fix aquí */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta principal */}
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/servicios/fotografia" element={<Fotografia />} />
        <Route path="/servicios/community-management" element={<CommunityManagement />} />
      </Routes>
      
      <Footer />
      
     
     
    </Router>
  );
};

export default App;