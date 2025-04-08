import React from "react";
import "./Nosotros.css";
import NuestroTrabajo from "../components/Nuestrotrabajo";

const Nosotros = () => {
  return (
    <>
      <section className="quienes-somos-section">
        <div className="content-container">
          <div className="grid-container">
            {/* Columna de texto */}
            <div className="text-column">
              <h1 className="titulo-principal">¿QUIÉNES SOMOS?</h1>
              <div className="texto-destacado">
                <p>
                  Somos un <strong>emprendimiento</strong> dedicado a empresas turísticas,
                  hoteles, restaurantes y atención al cliente.
                </p>
                <p>
                  Innovamos en el marketing digital desde hace 4 años, con un alcance visual a nivel nacional
                  utilizando tecnologías avanzadas y creatividad.
                </p>
                <p>
                  Nos especializamos en crear contenido para redes sociales, ayudando
                  a nuestros clientes a fortalecer su presencia con material propio.
                </p>
              </div>
              <div className="separador">
                <hr className="linea-divisora" />
              </div>
            </div>

            {/* Columna de video */}
            <div className="video-column">
              <div className="video-contain">
                <video controls autoPlay muted loop className="presentation-video">
                  <source src="/video/soy alpha llama.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NuestroTrabajo />
      
    </>
  );
};

export default Nosotros;
