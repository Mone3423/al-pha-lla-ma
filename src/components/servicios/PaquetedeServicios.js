import React, { useState } from "react";
import "../servicios/PaquetedeServicios.css";

const PaqueteServicios = ({ titulo, precio, detalles = [], servicios = [], imagenes = [] }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const totalServicios = servicios.length || 1;

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <section className="paquete-servicios">
      <div className="paquete-contenedor">
        {/* Círculo central */}
        <div className="centro-paquete" onClick={abrirModal}>
          <p className="precio">{precio}</p>
          <h3>{titulo}</h3>
        </div>

        {/* Servicios orbitando - solo en desktop */}
        {servicios.length > 0 && (
          <div className="servicios-orbita">
            {servicios.map((servicio, index) => {
              const angle = (360 / totalServicios) * index + 10;
              return (
                <div
                  className="servicio"
                  key={index}
                  style={{
                    transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`
                  }}
                >
                  <div className="icono">
                    <h3>{servicio.icono} {servicio.titulo}</h3>
                  </div>
                  {servicio.descripcion && <p>{servicio.descripcion}</p>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal en móviles */}
      {mostrarModal && (
        <div className="modal-servicios">
          <div className="modal-contenido">
            <button className="cerrar-modal" onClick={cerrarModal}>×</button>
            <div className="lista-servicios">
              {servicios.map((servicio, index) => (
                <div key={index} className="servicio-modal">
                  <div className="servicio-header">
                    <span className="servicio-icono">{servicio.icono}</span>
                    <h3 className="servicio-titulo">{servicio.titulo}</h3>
                  </div>
                  <p className="servicio-descripcion">{servicio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PaqueteServicios;
