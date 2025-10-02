import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getItemById } from '../../api/api';

const COLLECTION_NAME = 'productos';

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getItemById(COLLECTION_NAME, id);
        if (data) {
          setProducto(data);
          setLoading(false);
        } else {
          navigate('/productos', { replace: true });
        }
      } catch (error) {
        console.error(error);
        navigate('/productos', { replace: true });
      }
    };

    fetchProducto();
  }, [id, navigate]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{producto.nombre}</h1>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: '300px' }}
        onError={(e) => (e.target.style.display = 'none')}
      />
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion || 'Sin descripción'}</p>
      <Link to="/productos" style={{ marginTop: '1rem', display: 'inline-block' }}>
        ← Volver a la lista
      </Link>
    </div>
  );
}
