// pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Nosotros from '../components/Nosotros';
import Servicios from '../components/Servicios';

import Clientes from '../components/Clientes';

const Home = () => {
  return (
    <main>
      <Hero />
      <Nosotros />
      <Servicios />
      <Clientes />

    </main>
  );
};

export default Home;