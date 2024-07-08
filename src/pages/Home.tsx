import React from 'react';
import Hero from '../components/Hero/Hero';
import PromotedProducts from '../components/PromotedProducts/PromotedProducts';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PromotedProducts />
    </>
  )
};

export default Home;