import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../Shared/CustomArrows';
import TitleBanner from '../Shared/TitleBanner';
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
              infinite: true,
              dots: false,
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
        <div className='relative'>
            <TitleBanner />
            <div className='mx-8 relative z-2 -mt-28'>
              <Slider {...settings}>
                  {products.map(product => (
                      <div key={product.id} className='px-2 py-5'>
                          <div className='rounded-lg p-4 shadow transition-transform transform hover:scale-105 duration-500 cursor-pointer font-domine'>
                              <img
                                  src={product.image}
                                  alt={product.title}
                                  className='h-96 w-full object-cover mb-4 rounded'
                              />
                              <h3 className='text-lg'>
                                  {product.title}
                              </h3>
                              <p className='text-red-500'>
                                  {product.price}
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