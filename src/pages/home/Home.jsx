import React from 'react';
import HeroSection from '../../components/Hero/HeroSection.jsx';
import NuevosLanzamientos from '../../components/Lanzamientos/NuevosLanzamientos.jsx';
import imgAirmax from '../../images/erik-mclean-MhDcpkj1Bik-unsplash.jpg';
import mariasime from '../../images/maria-sime-LoiNL9-bkak-unsplash.jpg';
import nikedunk from '../../images/niklas-du-3MqhuQljanE-unsplash.jpg';
import patterson from '../../images/patterson-patterson-JFSY9QDfaUA-unsplash.jpg';
import piyus from '../../images/piyush-haswani-oEPgAvTXiHw-unsplash.jpg';
import shyam from '../../images/shyam-mishra-nWBnEiBlFSI-unsplash.jpg';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';

const productosDummy = [
  { id: 1, nombre: 'Air Max 270', precio: 129.99, imagen: imgAirmax },
  { id: 2, nombre: 'Nike Dunk Low', precio: 109.99, imagen: mariasime },
  { id: 3, nombre: 'Adidas Ultraboost', precio: 139.99, imagen: nikedunk },
  { id: 4, nombre: 'Puma RS-X', precio: 119.99, imagen: patterson },
  { id: 5, nombre: 'Reebok Classic', precio: 99.99, imagen: piyus },
  { id: 6, nombre: 'New Balance 550', precio: 129.99, imagen: shyam},
];


export default function Home() {
  return (
    <>
      <HeroSection />
      <NuevosLanzamientos productos={productosDummy} />
      <Testimonials />
    </>
  );
}
