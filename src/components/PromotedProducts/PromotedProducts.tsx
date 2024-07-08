import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
        title: 'Białe spodnie',
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
        <div className='container mx-auto py-8'>
            <h2 className='text-2xl font-bold mb-4'>
                Polecane Produkty
            </h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className='p-2'>
                        <div className='bg-white p-4 rounded-lg shadow-lg'>
                            <img
                                src={product.image}
                                alt={product.title}
                                className='h-48 w-full object-cover mb-4 rounded-lg'
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