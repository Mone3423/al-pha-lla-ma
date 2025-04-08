import React, { useRef } from "react";
import HeroServices from "../../components/servicios/HeroServices";
import CircularGallery from "../../components/Components/CircularGallery/CircularGallery";
import { paquetesData } from "../../data/paquetesData";
import { paquetesDataVIDEO } from "../../data/paquetesDataVIDEO";
import "./Fotografia.css";

const Fotografia = () => {
  // 🔹 Referencias a cada sección
  const fotografiaRef = useRef(null);
  const videoRef = useRef(null);
  const disenoRef = useRef(null);

  // 🔹 Función para hacer scroll suave a la sección
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="contenedor-principal">
      {/* 🔹 Botones flotantes */}
      <div className="botones-flotantes">
        <button onClick={() => scrollToSection(fotografiaRef)}>Fotografía</button>
        <button onClick={() => scrollToSection(videoRef)}>Audiovisual</button>
        <button onClick={() => scrollToSection(disenoRef)}>Diseño Gráfico </button>
      </div>
      
      {/* 🔹 Sección de Fotografía */}
      <div ref={fotografiaRef} id="fotografia" className="paquete-container">
        {/* Renderizar todos los paquetes */}
        <HeroServices
          titulo="FOTOGRAFÍA "
          descripcion="Capturamos los mejores momentos con calidad profesional"
        />
        {paquetesData.map((paquete, index) => (
          <div key={index} className="paquete-container">
            <h2>{paquete.titulo}</h2>
            <p>{paquete.descripcion}</p>

            {/* Galería Circular */}
            <div className="galeria">
              <CircularGallery
                items={paquete.galeria}
                bend={4}
                textColor="#ffffff"
                borderRadius={0.1}
                font="bold 28px 'Helvetica Neue', sans-serif"
              />
            </div>

            {/* Opciones de Paquete */}
            <div className="paquete-opciones">
              {paquete.opciones.map((opcion, i) => (
                <div key={i} className="paquete-card">
                  <div className="paquete-circulo">
                    <h3>{opcion.nombre}</h3>
                    <p>{opcion.precio}</p>
                  </div>
                  <ul>
                    {opcion.detalles.map((detalle, j) => (
                      <li key={j}>{detalle}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Sección de Video */}
      <div ref={videoRef} id="video" className="paquete-container">
        <HeroServices
          titulo="AUDIOVISUAL "
          descripcion="Producción de videos impactantes para tu marca."
        />
        {paquetesDataVIDEO.map((paquete, index) => (
          <div key={index} className="paquete-container">
            <div className="contenido-superior">
              <div className="texto-descripcion">
                <h2>{paquete.titulo}</h2>
                <p>{paquete.descripcion}</p>
              </div>

              {paquete.videoUrl && (
                <div className="contenedor-video">
                  <video
                    controls
                    className="video-paquete"
                    poster={paquete.thumbnail}
                  >
                    <source src={paquete.videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5
                  </video>
                </div>
              )}
            </div>


            <div className="paquete-opciones">
              {paquete.opciones.map((opcion, i) => (
                <div key={i} className="paquete-card">
                  <div className="paquete-circulo">
                    <h3>{opcion.nombre}</h3>
                    <p>{opcion.precio}</p>
                  </div>
                  <ul>
                    {opcion.detalles.map((detalle, j) => (
                      <li key={j}>{detalle}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>


      {/* 🔹 Sección de Diseño */}
      <div ref={disenoRef} id="diseno" className="paquete-container diseno-grafico">
        <HeroServices
          titulo="DISEÑO GRÁFICO, LOGO, BRANDING "
          descripcion="TRANSMITE TU VISION POR TU MARCA"
        />
        <p>
          En este proceso nos dedicamos a identificar el problema de la marca actual o en su defecto
          las ideas principales de la marca a realizar, basándonos en la misión y visión de la marca mediante
          una reunión para profundizar el concepto.
        </p>

        <div className="diseno-servicios">
          <div className="diseno-card">
            <h3>Creación y diseño de LOGO</h3>
            <p className="precio">$200 USD</p>
            <p>Incluye dos propuestas.</p>
          </div>

          <div className="diseno-card">
            <h3>Elaboración de línea gráfica para empresas</h3>
            <p className="precio">$1500 USD</p>
            <p>Diseño de:</p>
            <ul>
              <li>Manual de Imagen Institucional</li>
              <li>Tarjetas personales</li>
              <li>Folder institucional (tamaño carta)</li>
              <li>Hojas membretadas (tamaño carta)</li>
              <li>Sobre (tamaño media carta)</li>
              <li>Señaléticas (+ plantilla para futuras señaléticas)</li>
              <li>Banner tipo roller (para eventos)</li>
              <li>Imagen de perfil y portada para redes sociales</li>
              <li>Plantilla para post en redes sociales</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Fotografia;
