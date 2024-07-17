import React from 'react';
import { motion } from 'framer-motion';
import CommercialPic from '../../assets/images/CommercialPic.png';

const Commercial: React.FC = () => {
    const variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className='flex flex-col md:flex-row items-center px-4 lg:px-12 my-12 md:my-24 bg-gray-100 text-gray-900'>
            <div className='w-full md:w-1/2 flex justify-center pt-4 md:pt-0'>
                <img
                    src={CommercialPic}
                    alt="Fashion Model"
                    className='rounded-lg shadow-lg bg-gradient-to-tr from-orange-200 to-pink-400'
                />
            </div>
            <motion.div
                className='w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={variants}
            >
                <h1 className='font-cookie text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 md:my-2 xl:my-4 2xl:my-6'>
                    MonZe - Odkryj Swój Styl
                </h1>
                <p className='font-domine md:text-sm lg:text-md xl:text-lg w-11/12 md:w-[95%] lg:w-full mx-auto md:mx-0 mb-4'>
                    Sprawdź kolekcje, które zachwycą Cię swoją różnorodnością i wyrafinowaniem. Od klasycznych, eleganckich strojów po nowoczesne, miejskie stylizacje - każdy znajdzie coś dla siebie. Nasze ubrania są wyrazem najnowszych trendów, a jednocześnie ponadczasowej elegancji.<br />
                    Dołącz do grona zadowolonych klientów MonZe i odkryj świat, gdzie moda spotyka się z luksusem. Dzięki nam zawsze będziesz wyglądać stylowo i czuć się wyjątkowo.
                </p>
            </motion.div>
        </div>
    )
};

export default Commercial;