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
        <div className='mx-8'>
            <div className='mt-4 mx-10 flex justify-between'>
                <h2 className='font-cookie text-4xl font-bold'>
                    Dzisiejsza Selekcja
                </h2>
            </div>
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
    )
};

export default PromotedProducts;