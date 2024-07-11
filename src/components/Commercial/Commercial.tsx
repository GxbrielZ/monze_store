import React from 'react';
import CommercialPic from '../../assets/images/CommercialPic.png';

const Commercial: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row items-center px-6 my-24 bg-gray-100'>
        <div className='w-full md:w-1/2 flex justify-center'>
            <img
                src={CommercialPic}
                alt="Fashion Model"
                className='rounded-lg shadow-lg bg-gradient-to-tr from-orange-200 to-pink-400'
            />
        </div>
        <div className='w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left'>
            <h1 className='font-cookie text-6xl font-bold mb-4'>
                MonZe - Odkryj Swój Styl
            </h1>
            <p className='font-domine text-lg w-3/4'>
                Sprawdź kolekcje, które zachwycą Cię swoją różnorodnością i wyrafinowaniem. Od klasycznych, eleganckich strojów po nowoczesne, miejskie stylizacje - każdy znajdzie coś dla siebie. Nasze ubrania są wyrazem najnowszych trendów, a jednocześnie ponadczasowej elegancji.<br />
                Dołącz do grona zadowolonych klientów MonZe i odkryj świat, gdzie moda spotyka się z luksusem. Dzięki nam zawsze będziesz wyglądać stylowo i czuć się wyjątkowo.
            </p>
        </div>
    </div>
  )
};

export default Commercial;