import React from 'react';
import styles from './About.module.css';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';

const About = () => {
  return (
    <div className={styles.nosotrosContainer}>
      <section className={styles.aboutSection}>
        <h1>Sobre Nosotros</h1>
        <p>
          En Tienda Zapatillas Nike, somos apasionados por ofrecerte los mejores modelos, 
          con la calidad y el estilo que solo Nike puede brindar.  
          Nuestra misión es ayudarte a encontrar el calzado perfecto para cada paso que des, 
          combinando comodidad, innovación y diseño.
        </p>
        <p>
          Con años en el mercado, contamos con un equipo comprometido en brindar atención personalizada, 
          asesoría experta y envíos rápidos para que vivas una experiencia de compra inigualable.
        </p>
      </section>

      <section className={styles.testimonialsSection}>
        <Testimonials />
      </section>
    </div>
  );
};

export default About;
