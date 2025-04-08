import React from 'react';
import './NuestroTrabajo.css';
import fondoProceso from '../assets/mages/YES8182-.svg'; // Asegura tener esta imagen

const NuestroTrabajo = () => {
  const fases = [
    {
      titulo: "Análisis",
      contenido: "Analizaremos tu caso y elegiremos la mejor manera de transmitir la esencia de tu negocio, empresa o marca personal."
    },
    {
      titulo: "Preproducción",
      contenido: "Trabajaremos una idea creativa que desarrollaremos a través del Storytelling y el guion. Días antes del rodaje, realizaremos una visita técnica a la localización para asegurarnos que cumplan todas las necesidades técnicas. A partir de ahí, elaboraremos un Storyboard que nos permitirá planificar el rodaje/sesión."
    },
    {
      titulo: "Rodaje",
      contenido: "El día del rodaje pondremos todo nuestro equipo técnico y artístico a tu disposición para que todo salga según lo planeado."
    },
    {
      titulo: "Postproducción",
      contenido: "En esta última fase, reorganizamos todo el material en la sala de montaje y editamos el vídeo/foto que se presentará al público. Este abarca el montaje de las escenas, selección de la música, postproducción de sonido, grabación voz en off con locutor, integración de gráfico o VFX y finalmente, el etalonaje."
    },
    {
      titulo: "Entrega",
      contenido: "En la entrega se definen los distintos formatos en los que será entregado el proyecto. Trabajamos con formatos para cualquier tipo de RRSS o vídeo."
    }
  ];

  return (
    <section className="proceso-container">
      <div className="parallax-bg" style={{ backgroundImage: `url(${fondoProceso})` }}></div>
      
      <div className="proceso-contenido">
        <h2 className="titulo-seccion">Nuestro proceso de trabajo</h2>
        
        <div className="linea-tiempo">
          {fases.map((fase, index) => (
            <div key={index} className="paso-card">
              <div className="paso-indicador">
                <span>{index + 1}</span>
              </div>
              <h3>{fase.titulo}</h3>
              <p>{fase.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestroTrabajo;