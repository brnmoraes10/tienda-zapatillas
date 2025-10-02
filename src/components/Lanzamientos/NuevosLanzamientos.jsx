import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NuevosLanzamientos.module.css';

export default function NuevosLanzamientos({ productos }) {
  return (
    <section className={styles.lanzamientos}>
      <h1>Nuevos Lanzamientos</h1>
      <div className={styles.grid}>
        {productos.map((producto) => (
          <div key={producto.id} className={styles.card}>
            <Link to={`/productos/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} />
            </Link>
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
