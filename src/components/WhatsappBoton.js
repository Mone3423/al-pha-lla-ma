import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "59171948121"; // Número de WhatsApp
  const [position, setPosition] = useState({ x: 20, y: 20 });

  // Actualizar la posición del botón de manera aleatoria
  const updatePosition = () => {
    const maxX = window.innerWidth - 80; // Evita que salga de la pantalla
    const maxY = window.innerHeight - 80;
    
    setPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  };

  useEffect(() => {
    updatePosition(); // Establece una posición inicial
    const interval = setInterval(updatePosition, 5000); // Cambia cada 5s

    window.addEventListener("resize", updatePosition); // Se ajusta si cambia el tamaño de la pantalla

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14 z-[999] cursor-pointer"
      style={{ left: position.x, top: position.y }}
      animate={{ left: position.x, top: position.y }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.8 }}
    >
      <img
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        className="w-10 h-10"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"; // Imagen de respaldo
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
