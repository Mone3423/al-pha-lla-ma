import React from "react";
import "./Community.css";
const phoneNumber = "71948121"; // Cambia esto con tu número de WhatsApp

const serviciosData = [
  {
    titulo: "Estrategias digitales",
    descripcion: "Planeamos la mejor estrategia para que tu marca pueda sobresalir y brillar sobre la competencia.",
  },
  {
    titulo: "Community management",
    descripcion: "Nos encargamos de tu marca y creación de contenido para tus R.R.S.S.",
  },
  {
    titulo: "Capacitación en R.R.S.S. para empresas",
    descripcion: "Capacitación en redes sociales, marketing digital y creación de contenido especializado.",
  },
];

const Community = () => (
  
  <section className="community-services">
    <div className="community-container">
      {/* 🔹 Columna del video */}
      <div className="video-column">
        <div className="community-media">
          <video autoPlay loop muted playsInline className="service-video">
            <source src="/video/producción audiovisual.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>

      {/* 🔹 Columna de servicios */}
      <div className="services-column">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="service-item">
            <h2 className="service-title">
              <span className="service-number">{String(index + 1).padStart(2, '0')}.</span>
              {servicio.titulo}
            </h2>
            <p className="service-description">{servicio.descripcion}</p>
          </div>
        ))}

        {/* 🔹 Botón de consulta */}
         
      <div className="consulta-container">
        <a href={`https://wa.me/${phoneNumber}`} className="consulta-button" target="_blank" rel="noopener noreferrer">
          Consulta una Cita
          

 
        </a>
      </div>
      </div>
    </div>
  </section>
);

export default Community;
