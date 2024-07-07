import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='grid md:grid-cols-2 gap-2 my-2 h-[60vh]'>
        <div className='flex flex-col justify-center bg-pink-100 p-8'>
            <h1 className='text-5xl font-bold mb-4'>Moda damska</h1>
            <p className='mb-4'>
                Odkryj najnowsze trendy i wyjątkowe kolekcje w modzie damskiej. Nasza oferta obejmuje eleganckie sukienki, stylowe bluzki, wygodne spodnie i modne akcesoria, które podkreślą Twój unikalny styl.
            </p>
            <button className='text-white bg-red-500 py-2 px-4 rounded'>
                Sprawdź Ofertę
            </button>
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex flex-col justify-center bg-blue-100 p-4'>
                <h2 className='text-xl font-bold'>Moda męska</h2>
                <button
                    className='text-white bg-red-500 py-2 px-4 rounded mt-2'
                >
                    Sprawdź Ofertę
                </button>
            </div>
            <div className='flex flex-col justify-center bg-blue-100 p-4'>
                <h2 className='text-xl font-bold'>Moda dziecięca</h2>
                <button
                    className='text-white bg-red-500 py-2 px-4 rounded mt-2'
                >
                    Sprawdź Ofertę
                </button>
            </div>
            <div className='flex flex-col justify-center bg-pink-100 p-4'>
                <h2 className='text-xl font-bold'>Akcesoria</h2>
                <button
                    className='text-white bg-red-500 py-2 px-4 rounded mt-2'
                >
                    Sprawdź Ofertę
                </button>
            </div>
            <div className='flex flex-col justify-center bg-red-100 p-4'>
                <h2 className='text-xl font-bold'>Dekoracje</h2>
                <button
                    className='text-white bg-red-500 py-2 px-4 rounded mt-2'
                >
                    Sprawdź Ofertę
                </button>
            </div>
        </div>
    </div>
  )
};

export default Hero;