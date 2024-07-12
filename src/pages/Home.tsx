import React from 'react';
import Hero from '../components/Hero/Hero';
import PromotedProducts from '../components/PromotedProducts/PromotedProducts';
import Commercial from '../components/Commercial/Commercial';
import PromotedAccesories from '../components/PromotedAccesories/PromotedAccesories';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PromotedProducts />
      <Commercial />
      <PromotedAccesories />
    </>
  )
};

export default Home;