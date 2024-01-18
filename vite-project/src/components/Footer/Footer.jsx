import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contacto</h2>
          <p>Correo: javicall.6@gmail.com</p>
          <p>Teléfono: +52 (686) 162 6962</p>
        </div>
        <div className="footer-section">
          <h2>Servicios</h2>
          <p>Desarrollo frontend</p>
          <p>Desarrollo backend</p>
          <p>Prototipado de pagina web</p>
          <p>Prototipado de apps</p>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <p>Desarrollo frontend</p>
          <p>Desarrollo backend</p>
          <p>Prototipado de pagina web</p>
         </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VC IMPULSA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
