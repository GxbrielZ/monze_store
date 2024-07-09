import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../Shared/CustomArrows';
import Product1 from '../../assets/images/products/Product1.jpg';
import Product2 from '../../assets/images/products/Product2.jpg';
import Product3 from '../../assets/images/products/Product3.jpg';
import Product4 from '../../assets/images/products/Product4.jpg';
import Product5 from '../../assets/images/products/Product5.jpg';
import Product6 from '../../assets/images/products/Product6.jpg';
import Product7 from '../../assets/images/products/Product7.jpg';

interface Product {
    id: number,
    image: string;
    title: string;
    price: string;
};

const products: Product[] = [
    {
        id: 1,
        image: Product1,
        title: 'Czerwone spodnie w paski',
        price: '115 PLN',
    },
    {
        id: 2,
        image: Product2,
        title: 'Białe ogrodniczki',
        price: '100 PLN',
    },
    {
        id: 3,
        image: Product3,
        title: 'Koszula w kratę',
        price: '70 PLN',
    },
    {
        id: 4,
        image: Product4,
        title: 'Biały t-shirt',
        price: '55 PLN',
    },
    {
        id: 5,
        image: Product5,
        title: 'Czarna bluzka',
        price: '130 PLN',
    },
    {
        id: 6,
        image: Product6,
        title: 'Niebieskie Jeansy',
        price: '90 PLN',
    },
    {
        id: 7,
        image: Product7,
        title: 'Biała koszulka',
        price: '45 PLN',
    },
];

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
        <div className='mx-auto px-8'>
            <div className='p-6'>
                <h2 className='text-2xl font-bold'>
                    Polecane Produkty
                </h2>
            </div>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className='p-2'>
                        <div className='rounded-lg p-4 shadow'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='h-60 w-full object-cover mb-4 rounded'
                            />
                            <h3 className='text-lg font-bold'>
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