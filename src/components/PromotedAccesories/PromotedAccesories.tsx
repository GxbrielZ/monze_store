import React from 'react';
import accesories from '../../data/accesoriesData';

const PromotedAccesories: React.FC = () => {
    const categories = ['BIŻUTERIA', 'TORBY/PLECAKI', 'NAKRYCIA GŁOWY'];

    return (
        <div className='flex justify-center my-2 font-domine'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-28'>
                {categories.map((category) => (
                    <div key={category}>
                        <h2 className='text-xl font-bold mb-6'>
                            {category}
                        </h2>
                        <div className='space-y-4'>
                            {accesories.filter((accesory) => accesory.category === category).map((accesory) => (
                                <div
                                    key={accesory.title}
                                    className='flex items-center space-x-4 pr-4 hover:bg-gray-100 cursor-pointer duration-300'>
                                    <img
                                        src={accesory.imageUrl}
                                        alt={accesory.title}
                                        className='w-20 h-20 object-cover'
                                    />
                                    <div>
                                        <h3 className='text-lg font-semibold'>
                                            {accesory.title} 
                                        </h3>
                                        <p className='text-red-500'>
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