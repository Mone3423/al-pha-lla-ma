import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"
import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'service_id', 
    'template_id', 
    e.target, 
    'user_id'
  ).then(
    result => console.log(result.text),
    error => console.log(error.text)
  );
};


const Footer = () => {
  return (
    <footer href="/" className="footer">
      <div className="footer-container">
        <img src={logo} alt="Logo de ALPHA LLAMA" className="logo-imagen" />

        <p className="footer-text">
          Ponte en contacto con un simple clic, y <br />
          <span className="footer-highlight">SÉ PARTE DE LA EXPERIENCIA</span>
        </p>

        <form className="footer-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre" className="footer-input" />
          <input type="email" placeholder="Email" className="footer-input" />
          <button type="submit" className="footer-button">ENVIAR</button>
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
