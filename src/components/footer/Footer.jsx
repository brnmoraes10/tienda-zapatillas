import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.logo}>TuEmpresa</div>

          <nav className={styles.nav}>
            <a href="/">Inicio</a>
            <a href="/sobre-nosotros">Sobre Nosotros</a>
            <a href="/productos">Productos</a>
            <a href="/contacto">Contacto</a>
          </nav>

          <div className={styles.social}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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

