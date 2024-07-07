import React from 'react';
import ShopButton from '../Shared/ShopButton';

const Hero: React.FC = () => {
  return (
    <div className='grid md:grid-cols-2 gap-2 my-2 h-[60vh]'>
        <div className='flex flex-col justify-center items-start bg-gradient-to-tr from-orange-200 to-pink-400 p-14'>
            <h1 className='font-cookie text-7xl font-bold mb-4'>
                Moda damska
            </h1>
            <p className='mb-4 md:w-96 text-gray-800'>
                Odkryj najnowsze trendy i wyjątkowe kolekcje w modzie damskiej. Nasza oferta obejmuje eleganckie sukienki, stylowe bluzki, wygodne spodnie i modne akcesoria, które podkreślą Twój unikalny styl.
            </p>
            <ShopButton />
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex flex-col justify-center items-start bg-gradient-to-tr from-amber-200 to-orange-400 p-4'>
                <h2 className='font-domine text-2xl font-bold'>
                    Moda męska
                </h2>
                <ShopButton />
            </div>
            <div className='flex flex-col justify-center items-start bg-indigo-200 p-4'>
                <h2 className='font-domine text-2xl font-bold'>
                    Moda dziecięca
                </h2>
                <ShopButton />
            </div>
            <div className='flex flex-col justify-center items-start bg-gradient-to-br from-amber-200 to-lime-300 p-4'>
                <h2 className='font-domine text-2xl font-bold'>
                    Akcesoria
                </h2>
                <ShopButton />
            </div>
            <div className='flex flex-col justify-center items-start bg-gradient-to-r from-violet-200 to-pink-200 p-4'>
                <h2 className='font-domine text-2xl font-bold'>
                    Dekoracje
                </h2>
                <ShopButton />
            </div>
        </div>
    </div>
  )
};

export default Hero;