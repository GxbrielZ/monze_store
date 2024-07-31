import React from 'react';
import accesories from '../../data/accesoriesData';

const PromotedAccesories: React.FC = () => {
    const categories = ['BIŻUTERIA', 'TORBY/PLECAKI', 'NAKRYCIA GŁOWY'];

    return (
        <div className='container mx-auto mt-12'>
            <h1 className='text-2xl font-bold mb-8 pb-2 border-b-4 border-red-600'>
                POLECANE AKCESORIA
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12'>
                {categories.map((category) => (
                    <div key={category} className='px-6 mb-8'>
                        <h2 className='text-md lg:text-xl font-bold mb-4'>
                            {category}
                        </h2>
                        <div className='space-y-4'>
                            {accesories.filter((accesory) => accesory.category === category).map((accesory) => (
                                <div
                                    key={accesory.title}
                                    className='flex items-center space-x-2 lg:space-x-4 lg:pr-4 hover:bg-gray-100 cursor-pointer duration-300'>
                                    <img
                                        src={accesory.imageUrl}
                                        alt={accesory.title}
                                        className='w-16 h-16 lg:w-20 lg:h-20 object-cover'
                                    />
                                    <div className='overflow-hidden whitespace-nowrap'>
                                        <h3 className='text-sm lg:text-lg font-semibold truncate'>
                                            {accesory.title} 
                                        </h3>
                                        <p className='text-sm lg:text-lg text-red-600'>
                                            {accesory.price} PLN
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromotedAccesories;