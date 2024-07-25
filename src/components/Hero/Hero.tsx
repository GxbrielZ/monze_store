import React from 'react';
import ShopButton from '../Shared/ShopButton';
import GirlPicture from '../../assets/images/GirlPicture.png';
import ManPicture from '../../assets/images/ManPicture.png';
import KidPicture from '../../assets/images/KidPicture.png';
import AccesoriesPicture from '../../assets/images/AccesoriesPicture.png';
import DecorationsPicture from '../../assets/images/DecorationsPicture.png';

const Hero: React.FC = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-1'>
        <div className='flex bg-gradient-to-tr from-orange-200 to-pink-400 pl-4 md:px-4 md:px-14 h-96 md:h-auto'>
            <div className='flex flex-col justify-center items-start md:w-1/2 2xl:ml-6'>
                <h1 className='font-cookie text-5xl md:text-6xl font-bold md:mb-4'>
                    Moda damska
                </h1>
                <p className='md:mb-2 w-80 md:w-96 text-gray-800 text-md lg:text-md 2xl:text-lg'>
                    Odkryj najnowsze trendy i wyjątkowe kolekcje w modzie damskiej. Nasza oferta obejmuje eleganckie sukienki, stylowe bluzki, wygodne spodnie i modne akcesoria, które podkreślą Twój unikalny styl.
                </p>
                <ShopButton />
            </div>
            <img src={GirlPicture} alt='Moda damska' className='hidden md:block w-full h-full object-cover xl:ml-10' />
        </div>
        <div className='grid grid-cols-2 gap-1'>
            <div className='flex bg-gradient-to-tr from-amber-200 to-orange-400 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2 h-56 md:h-auto'>
                    <h2 className='font-domine text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold'>
                        Moda męska
                    </h2>
                    <ShopButton />
                </div>
                <img src={ManPicture} alt='Moda męska' className='hidden md:block w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-indigo-200 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2 h-56 md:h-auto'>
                    <h2 className='font-domine text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold'>
                        Moda dziecięca
                    </h2>
                    <ShopButton />
                </div>
                <img src={KidPicture} alt='Moda dziecięca' className='hidden md:block w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-gradient-to-br from-amber-200 to-lime-300 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2 h-56 md:h-auto'>
                    <h2 className='font-domine text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold'>
                        Akcesoria
                    </h2>
                    <ShopButton />
                </div>
                <img src={AccesoriesPicture} alt='Akcesoria' className='hidden md:block w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
            <div className='flex bg-gradient-to-r from-violet-200 to-pink-200 px-4'>
                <div className='flex flex-col justify-center items-start md:w-1/2 h-56 md:h-auto'>
                    <h2 className='font-domine text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold'>
                        Dekoracje
                    </h2>
                    <ShopButton />
                </div>
                <img src={DecorationsPicture} alt='Dekoracje' className='hidden md:block w-full h-48 object-cover md:w-1/2 md:h-auto' />
            </div>
        </div>
    </div>
  )
};

export default Hero;