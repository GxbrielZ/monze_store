import React from 'react';
import accesories from '../../data/accesoriesData';

const PromotedAccesories: React.FC = () => {
    const categories = ['BIŻUTERIA', 'TORBY/PLECAKI', 'NAKRYCIA GŁOWY'];

    return (
        <div className='container mx-auto mt-8 px-4'>
            <h1 className='text-2xl font-bold mb-8 pl-2 pb-2 border-b-4 border-red-600'>
                POLECANE AKCESORIA
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12'>
                {categories.map((category) => (
                    <div key={category} className='px-6 mb-8'>
                        <h2 className='text-lg lg:text-xl font-bold text-center md:text-start mb-6 md:mb-4 pb-2 pl-2 border-b-2 border-red-600'>
                            {category}
                        </h2>
                        <div className='space-y-4'>
                            {accesories.filter((accesory) => accesory.category === category).map((accesory) => (
                                <div
                                    key={accesory.title}
                                    className='flex space-x-4 lg:pr-4 hover:bg-gray-100 cursor-pointer duration-300'>
                                    <img
                                        src={accesory.imageUrl}
                                        alt={accesory.title}
                                        className='w-20 md:w-16 h-20 md:h-16 object-cover'
                                    />
                                    <div className='overflow-hidden whitespace-nowrap'>
                                        <h3 className='text-md lg:text-lg font-semibold truncate'>
                                            {accesory.title} 
                                        </h3>
                                        <p className='text-md text-red-600 font-semibold'>
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