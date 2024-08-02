import React from 'react';
import { motion } from 'framer-motion';
import ShopButton from '../Shared/ShopButton';
import GirlPicture from '../../assets/images/GirlPicture.png';
import ManPicture from '../../assets/images/ManPicture.png';
import KidPicture from '../../assets/images/KidPicture.png';
import AccesoriesPicture from '../../assets/images/AccesoriesPicture.png';
import DecorationsPicture from '../../assets/images/DecorationsPicture.png';

const Hero: React.FC = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -10 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
    };

    return (
        <div className='grid lg:grid-cols-2 gap-1'>
            <div className='md:flex bg-gradient-to-tr from-orange-200 to-pink-400 md:h-auto'>
                <div className='flex flex-col justify-center items-start md:w-1/2 xl:w-2/5 2xl:w-1/2 mt-8 md:px-14 xl:px-4 2xl:px-14'>
                    <motion.h1
                        className='mx-auto md:mx-0 font-cookie text-6xl xl:text-5xl 2xl:text-6xl font-bold md:mb-2 lg:mb-4'
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        Moda damska
                    </motion.h1>
                    <motion.p
                        className='font-lato text-center md:text-start md:mb-2 md:w-96 xl:w-80 2xl:w-96 px-4 md:px-0 text-gray-700 text-md 2xl:text-lg'
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        Odkryj najnowsze trendy i wyjątkowe kolekcje w modzie damskiej. Nasza oferta obejmuje eleganckie sukienki, stylowe bluzki, wygodne spodnie i modne akcesoria, które podkreślą Twój unikalny styl.
                    </motion.p>
                    <motion.div
                        className='mx-auto md:mx-0'
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <ShopButton />
                    </motion.div>
                </div>
                <img src={GirlPicture} alt='Moda damska' className='w-full md:h-full object-cover' />
            </div>
            <div className='grid md:grid-cols-2 gap-1'>
                <div className='flex justify-between md:justify-start bg-gradient-to-tr from-amber-200 to-orange-400 px-4 h-64 xl:h-auto'>
                    <div className='flex flex-col justify-center items-start md:w-1/2 md:h-auto md:ml-2'>
                        <motion.h2
                            className='font-lato text-2xl md:text-xl lg:text-2xl 2xl:text-3xl mb-2 font-bold'
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            Moda męska
                        </motion.h2>
                        <motion.div
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <ShopButton />
                        </motion.div>
                    </div>
                    <img src={ManPicture} alt='Moda męska' className='w-1/2 h-auto object-cover' />
                </div>
                <div className='flex justify-between md:justify-start bg-indigo-200 px-4 h-64 xl:h-auto'>
                    <div className='flex flex-col justify-center items-start md:w-1/2 md:h-auto md:ml-2'>
                        <motion.h2
                            className='font-lato text-2xl md:text-xl lg:text-2xl 2xl:text-3xl mb-2 font-bold'
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            Moda dziecięca
                        </motion.h2>
                        <motion.div
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <ShopButton />
                        </motion.div>
                    </div>
                    <img src={KidPicture} alt='Moda dziecięca' className='w-1/2 h-auto object-cover' />
                </div>
                <div className='flex justify-between bg-gradient-to-br from-amber-200 to-lime-300 px-4 h-64 xl:h-auto'>
                    <div className='flex flex-col justify-center items-start md:w-1/2 md:h-auto md:ml-2'>
                        <motion.h2
                            className='font-lato text-2xl md:text-xl lg:text-2xl 2xl:text-3xl mb-2 font-bold'
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            Akcesoria
                        </motion.h2>
                        <motion.div
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <ShopButton />
                        </motion.div>
                    </div>
                    <img src={AccesoriesPicture} alt='Akcesoria' className='w-1/2 h-auto object-cover' />
                </div>
                <div className='flex justify-between bg-gradient-to-r from-violet-200 to-pink-200 px-4 h-64 xl:h-auto'>
                    <div className='flex flex-col justify-center items-start md:w-1/2 md:h-auto md:ml-2'>
                        <motion.h2
                            className='font-lato text-2xl md:text-xl lg:text-2xl 2xl:text-3xl mb-2 font-bold'
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            Dekoracje
                        </motion.h2>
                        <motion.div
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                        >
                            <ShopButton />
                        </motion.div>
                    </div>
                    <img src={DecorationsPicture} alt='Dekoracje' className='w-1/2 h-auto object-cover' />
                </div>
            </div>
        </div>
    )
};

export default Hero;