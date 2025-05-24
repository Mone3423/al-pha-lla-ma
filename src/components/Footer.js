import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        <img src={logo} alt="Logo de ALPHA LLAMA" className="logo-imagen" />

        <p className="footer-text">
          Ponte en contacto con un simple clic, y <br />
          <span className="footer-highlight">SÉ PARTE DE LA EXPERIENCIA</span>
        </p>

        <form
          action="https://formsubmit.co/alcon.13278996@gmail.com"
          method="POST"
          target="_blank"
          className="footer-form"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="footer-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="footer-input"
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.alphallama.media/" />

          <button
            type="submit"
            className={`footer-button ${submitted ? "sent" : ""}`}
          >
            {submitted ? "ENVIADO ✅" : "ENVIAR"}
          </button>
        </form>

        <div className="footer-socials">
          <a href="https://www.facebook.com/AlphaLlamaphotovideo/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/alpha_llama_photo_and_video/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://wa.me/59171948121" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright 2024 © All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

