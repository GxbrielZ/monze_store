import React from 'react';

const TitleBanner: React.FC = () => {
  return (
    <div className='relative'>
      <style>{`
        .triangle {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
      `}</style>
      <div className='mt-2 pl-10 py-7 lg:py-5 bg-gradient-to-tr from-pink-300 to-orange-200 triangle w-[600px] h-[180px]'>
        <h2 className='font-cookie text-4xl lg:text-5xl font-bold'>
          Dzisiejsza Selekcja
        </h2>
      </div>
    </div>
  );
};

export default TitleBanner;