import React from "react";

import InfiniteMenu from "./Components/InfiniteMenu/InfiniteMenu"; // Importar InfiniteMenu
import "./Servicios.css"; // Archivo de estilos
import fotografiaImg from "../assets/mages/P1020096 .jpg";
import videografiaImg from "../assets/mages/Alpha_Llama_Photo_and_Video_GONDWANA_6 .png";
import communityImg from "../assets/mages/_YES1228 .jpg";

const items = [
  {
    image: fotografiaImg,
    link: "/servicios/fotografia",
    title: "Fotografía",
    description: "Capturamos momentos y productos con calidad profesional.",
  },
  {
    image: videografiaImg,
    link: "/servicios/fotografia",
    title: "Videografía",
    description: "Producción de videos comerciales y promocionales.",
  },
  {
    image: communityImg,
    link: "/servicios/community-management",
    title: "Community Management",
    description: "Gestión de redes sociales con estrategia y contenido creativo.",
  },
];

const Servicios = () => {
  return (
    <section >
       <div className="servicios-container" style={{ height: "700px", position: "relative" }}>
       
      <InfiniteMenu items={items} className="icustom-scroll-text"/>
      </div>
    </section>
  );
};

export default Servicios;
