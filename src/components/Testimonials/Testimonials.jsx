import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Carlos M.',
    text: '¡Las zapatillas Nike que compré son súper cómodas y duraderas! Muy recomendado.',
  },
  {
    id: 2,
    name: 'Laura G.',
    text: 'Excelente atención y envío rápido. Las zapatillas llegaron perfectas y originales.',
  },
  {
    id: 3,
    name: 'Pedro L.',
    text: 'Me encanta la variedad de modelos Nike que tienen. Calidad 100%.',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>Testimonios</h2>
      <div className={styles.testimonialsContainer}>
        {testimonialsData.map(({ id, name, text }) => (
          <div key={id} className={styles.testimonialCard}>
            <p className={styles.testimonialText}>"{text}"</p>
            <p className={styles.testimonialName}>- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
