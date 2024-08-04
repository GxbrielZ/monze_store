import React from 'react';
import products from '../../data/products';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

const ProductListing: React.FC = () => {
  return (
    <div className='container mx-auto mt-8 px-4'>
        <h1 className='text-2xl font-bold mb-8 pl-2 pb-2 border-b-4 border-red-600'>
            NOWE PRODUKTY
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 cursor-pointer px-2'>
            {products.map(product => (
                <div key={product.id} className='relative hover:bg-gray-100 duration-300'>
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-full h-96 object-cover rounded-t-md'
                    />
                    <div className='border-b border-x p-2 rounded-b-md'>
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-semibold truncate">
                                {product.title}
                            </h2>
                            <div className='flex gap-2 text-2xl cursor-pointer text-gray-900'>
                                <FaHeartCirclePlus
                                    className='hover:text-red-600 duration-300' 
                                />
                                <BsCartPlusFill
                                    className='hover:text-green-600 duration-300'
                                />
                            </div>
                        </div>
                        <p className='text-red-600 font-semibold'>
                            {product.price.toFixed(1)} PLN
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProductListing;