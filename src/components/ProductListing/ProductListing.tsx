import React from 'react';
import products from '../../data/products';

const ProductListing: React.FC = () => {
  return (
    <div className='container mx-auto mt-6 p-4'>
        <h1 className='text-2xl font-bold mb-8 pb-2 border-b-4 border-red-600'>
            NOWE PRODUKTY
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer px-2'>
            {products.map(product => (
                <div key={product.id} className='border p-4 relative hover:bg-gray-100 duration-300 rounded-md'>
                    <img src={product.image} alt={product.title} className='w-full h-48 lg:h-80 object-cover mb-2' />
                    <h2 className="text-lg font-semibold">
                        {product.title}
                    </h2>
                    <p className="text-red-600 font-semibold">
                        {product.price.toFixed(1)} PLN
                    </p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ProductListing;