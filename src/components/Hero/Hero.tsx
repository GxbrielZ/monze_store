import React from 'react';
import ShopButton from '../Shared/ShopButton';
import GirlPicture from '../../assets/images/GirlPicture.png';
import ManPicture from '../../assets/images/ManPicture.png';
import KidPicture from '../../assets/images/KidPicture.png';
import AccesoriesPicture from '../../assets/images/AccesoriesPicture.png';
import DecorationsPicture from '../../assets/images/DecorationsPicture.png';

const Hero: React.FC = () => {
  return (
    <div className='grid md:grid-cols-2 gap-2 my-2'>
        <div className='flex bg-gradient-to-tr from-orange-200 to-pink-400 px-14'>
            <div className='flex flex-col justify-center items-start md:w-1/2'>
                <h1 className='font-cookie text-7xl font-bold mb-4'>
                    Moda damska
                </h1>
                <p className='mb-4 md:w-96 text-gray-800'>
                    Odkryj najnowsze trendy i wyjątkowe kolekcje w modzie damskiej. Nasza oferta obejmuje eleganckie sukienki, stylowe bluzki, wygodne spodnie i modne akcesoria, które podkreślą Twój unikalny styl.
                </p>
                <ShopButton />
            </div>
            <img src={GirlPicture} alt='Moda damska' className='w-full h-full object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex bg-gradient-to-tr from-amber-200 to-orange-400 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2'>
                    <h2 className='font-domine text-2xl font-bold'>
                        Moda męska
                    </h2>
                    <ShopButton />
                </div>
                <img src={ManPicture} alt='Moda męska' className='w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-indigo-200 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2'>
                    <h2 className='font-domine text-2xl font-bold'>
                        Moda dziecięca
                    </h2>
                    <ShopButton />
                </div>
                <img src={KidPicture} alt='Moda dziecięca' className='w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-gradient-to-br from-amber-200 to-lime-300 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2'>
                    <h2 className='font-domine text-2xl font-bold'>
                        Akcesoria
                    </h2>
                    <ShopButton />
                </div>
                <img src={AccesoriesPicture} alt='Akcesoria' className='w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-gradient-to-r from-violet-200 to-pink-200 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2'>
                    <h2 className='font-domine text-2xl font-bold'>
                        Dekoracje
                    </h2>
                    <ShopButton />
                </div>
                <img src={DecorationsPicture} alt='Dekoracje' className='w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
        </div>
    </div>
  )
};

export default Hero;