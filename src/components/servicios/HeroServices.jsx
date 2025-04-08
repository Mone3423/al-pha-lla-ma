import React from "react";
import { FaChevronDown } from "react-icons/fa";
import TextPressure from "../TextAnimations/TextPressure/TextPressure"; // Importamos el componente
import "./HeroServices.css";

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
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#FFFFFF"
          strokeColor="#000000"
          minFontSize={90}
        />
        <p className="typing-effect">{descripcion}</p>
      </div>

      {/* Flecha para bajar al primer paquete */}
      <button
        className="scroll-down"
        onClick={() =>
          document.getElementById("primer-paquete").scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaChevronDown />
      </button>
    </section>
  );
};

export default HeroServices;
