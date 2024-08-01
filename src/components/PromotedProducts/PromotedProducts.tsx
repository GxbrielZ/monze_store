import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../Shared/CustomArrows';
import products from '../../data/products';

const PromotedProducts: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className='container mx-auto mt-8 md:mt-24 px-4'>
            <h1 className='text-2xl font-bold mb-4 pl-2 pb-2 border-b-4 border-red-600'>
                POLECANE PRODUKTY
            </h1>
            <div className='relative'>
              <Slider {...settings}>
                  {products.map(product => (
                      <div key={product.id} className='px-2 py-4'>
                          <div className='rounded-lg p-4 shadow bg-white transition-transform transform hover:scale-105 duration-500 cursor-pointer font-domine'>
                              <img
                                  src={product.image}
                                  alt={product.title}
                                  className='h-80 lg:h-96 w-full object-cover mb-4 rounded'
                              />
                              <h3 className='text-lg truncate'>
                                  {product.title}
                              </h3>
                              <p className='text-red-600'>
                                {product.price.toFixed(1)} PLN
                              </p>
                          </div>
                      </div>
                  ))}
              </Slider>
            </div>
        </div>
    )
};

export default PromotedProducts;