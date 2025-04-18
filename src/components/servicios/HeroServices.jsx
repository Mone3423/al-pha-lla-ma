import React from "react";
import { FaChevronDown } from "react-icons/fa";
import TextPressure from "../TextAnimations/TextPressure/TextPressure"; // Importamos el componente
import "./HeroServices.css";
const isMobile = window.innerWidth <= 768;
const HeroServices = ({ titulo, descripcion, imagenFondo }) => {
  return (
    <section
      className="hero-services"
      style={{ backgroundImage: `url(${imagenFondo})` }}
    >
      {/* Contenido central */}
      <div className="hero-content">
        <TextPressure
          text={titulo}
          minFontSize={isMobile ? 40 : 90}
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#FFFFFF"
          strokeColor="#000000"
          
        />
        <p className="typing-effect">{descripcion}</p>
      </div>

      {/* Flecha para bajar al primer paquete */}
      <button
        className="scroll-down"
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default HeroServices;
