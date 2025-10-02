import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../images/logo.jpg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div>      
            <a href="/" className={styles.logo}>
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <nav className={styles.nav}>
            <a href="/">Inicio</a>
            <a href="/sobre-nosotros">Sobre Nosotros</a>
            <a href="/productos">Productos</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <div className={styles.social}>
            <a href="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/nike" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/nike" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/bra-moraes/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} TuEmpresa. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

