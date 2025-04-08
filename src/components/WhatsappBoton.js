import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "59171948121"; // Número con código de país
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Función para generar nueva posición aleatoria
  const updatePosition = () => {
    const maxX = window.innerWidth - 64; // 64px = ancho del botón
    const maxY = window.innerHeight - 64;
    setPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  };

  useEffect(() => {
    updatePosition(); // Posición inicial
    const interval = setInterval(updatePosition, 5000); // Cambia posición cada 5 segundos
    
    // Actualizar posición al redimensionar pantalla
    const handleResize = () => updatePosition();
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-16 h-16 z-[999] cursor-pointer"
      style={{
        left: position.x,
        top: position.y
      }}
      animate={{
        left: position.x,
        top: position.y
      }}
      transition={{ 
        duration: 2.5,
        ease: "easeInOut",
        repeatDelay: 2
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: [0, 10, -10, 0], // Animación al hover
        transition: { duration: 0.3 } 
      }}
      whileTap={{ scale: 0.8 }}
    >
      <img
        src="/whatsapp-icon.svg"
        alt="Contactar por WhatsApp"
        className="w-8 h-8"
      />
    </motion.a>
  );
};

export default WhatsAppButton;