import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.jpg';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </a>

        <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
        <label htmlFor="menu-toggle" className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className={styles.menu}>
          <a href="/" className={styles.link}>Inicio</a>
          <a href="/about" className={styles.link}>Nosotros</a>
          <a href="/contact" className={styles.link}>Contacto</a>
          <a href="/productos" className={styles.link}>Productos</a>
        </nav>
      </div>
    </header>
  );
}
