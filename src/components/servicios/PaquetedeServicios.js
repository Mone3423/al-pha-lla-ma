import React from "react";
import "../servicios/PaquetedeServicios.css";


const PaqueteServicios = ({ titulo, precio, detalles = [], servicios = [], imagenes = [] }) => {
  const totalServicios = servicios.length || 1; // Evitar división por 0

  return (
    <section className="paquete-servicios">
      <div className="paquete-contenedor">
        
        {/* Círculo central */}
        <div className="centro-paquete">
          <p className="precio">{precio}</p>
          <h3>{titulo}</h3>
          
        </div>

        {/* Servicios en órbita con iconos */}
        {servicios.length > 0 && (
          <div className="servicios-orbita">
            {servicios.map((servicio, index) => {
              const angle = (360 / totalServicios) * index + 10; // Se suma 10° para evitar superposición
              return (
                <div
                  className="servicio"
                  key={index}
                  style={{
                    transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`
                  }}
                >
                  <div className="icono"><h3>{servicio.icono} {servicio.titulo}</h3></div>
                  {servicio.descripcion && <p>{servicio.descripcion}</p>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PaqueteServicios;
