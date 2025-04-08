import React, { useState } from "react";

const InformacionGeneral = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const preguntas = [
    { pregunta: "¿Cuánto dura una sesión?", respuesta: "Fotografía de producto: 2-4 horas. Interiorismo: 1-3 horas. Corporativa: jornada completa." },
    { pregunta: "¿Qué pasa si necesitamos más fotos?", respuesta: "Se pueden tomar más fotos en la sesión. Cada foto extra tiene un costo de 100 Bs (excepto en fotografía corporativa)." },
    { pregunta: "¿Cuántos fotógrafos van a la sesión?", respuesta: "Depende del tipo de sesión: Producto (1 + ayudante), Interiorismo (1 + ayudante), Corporativa (2 fotógrafos según cantidad de personal), Eventos (2 fotógrafos para cobertura completa)." },
    { pregunta: "¿Qué pasa si necesitamos cambiar la fecha?", respuesta: "Las fechas pueden reprogramarse con al menos una semana de anticipación." },
    { pregunta: "¿Son los depósitos reintegrables?", respuesta: "Si la cancelación es con más de una semana de aviso, se devuelve el depósito. Si es dentro de la semana, no se devuelve." },
    { pregunta: "¿En cuánto tiempo se entrega el producto?", respuesta: "Las fotos se entregan en 7-10 días digitalmente. Los videos en 2 semanas." },
    { pregunta: "¿Guardan un respaldo de fotos y videos?", respuesta: "Sí, guardamos el material por 3 meses. Si el cliente lo pierde, se puede reenviar sin costo." },
    { pregunta: "¿Cómo entregan la factura?", respuesta: "Enviamos la factura digitalmente por correo electrónico, según el nuevo sistema de facturación digital." },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="column">
       
          <h3 className="title">¿Qué es Community Management?</h3>
          <p className="text">La gestión comunitaria es la práctica de construir una comunidad auténtica, ya sea externamente entre sus clientes o internamente entre sus empleados y socios a través de varios tipos de interacciones.</p>
          <h3 className="title">¿Por qué es importante?</h3>
          <ul>
            <li className="list-item">✔ <strong>Retención de clientes:</strong> Ayuda a fidelizar a los clientes existentes.</li>
            <li className="list-item">✔ <strong>Captación de nuevos clientes:</strong> El boca a boca positivo impulsa el crecimiento.</li>
            <li className="list-item">✔ <strong>Reputación de marca:</strong> Construye una identidad sólida a largo plazo.</li>
          </ul>
          <h3 className="title">¿Qué diferencia a ALPHA LLAMA de otras agencias?</h3>
          <p className="text">Somos una empresa con años de experiencia en gestión de redes sociales con casos de éxito. Incluimos fotografía y videografía en todos nuestros paquetes, lo que nos diferencia de la competencia.</p>
        </div>

        <div className="column">
          <h2 className="title">Preguntas Frecuentes</h2>
          {preguntas.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.pregunta} <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          background: #f9f9f9;
          padding: 4rem 2rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .column {
          flex: 1;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .title {
          font-size: 2rem;
          color:rgb(23, 21, 21);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .text {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .list-item {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        .faq-item {
          border-bottom: 1px solid #ddd;
          padding: 1rem 0;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: bold;
          color:rgb(20, 23, 26);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          text-align: left;
          transition: color 0.3s;
        }

        .faq-question:hover {
          color:rgb(48, 30, 31);
        }

        .faq-answer {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
        }

        .faq-answer.open {
          max-height: 100px;
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
          }

          .faq-question {
            font-size: 1rem;
          }
          
          .text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default InformacionGeneral;
