import React from 'react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Bienvenido a NIKE</h1>
        <p>Descubrí nuestros productos únicos y las mejores ofertas en calzado.</p>
        <a href="/productos" className={styles.cta}>Ver Productos</a>
      </div>
    </section>
  );
}
