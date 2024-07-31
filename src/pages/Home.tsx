import React from 'react';
import Hero from '../components/Hero/Hero';
import ProductListing from '../components/ProductListing/ProductListing';
import Commercial from '../components/Commercial/Commercial';
import PromotedProducts from '../components/PromotedProducts/PromotedProducts';
import PromotedAccesories from '../components/PromotedAccesories/PromotedAccesories';
import InfoBar from '../components/InfoBar/InfoBar';
import FanpageSection from '../components/FanpageSection/FanpageSection';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductListing />
      <Commercial />
      <PromotedProducts />
      <PromotedAccesories />
      <InfoBar />
      <FanpageSection />
      <Footer />
    </>
  )
};

export default Home;