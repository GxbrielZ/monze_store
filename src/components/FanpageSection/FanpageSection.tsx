import React from 'react';
import FanmadeOne from '../../assets/images/FanSection/FanmadeOne.jpg'
import FanmadeTwo from '../../assets/images/FanSection/FanmadeTwo.jpg'
import FanmadeThree from '../../assets/images/FanSection/FanmadeThree.jpg'
import FanmadeFour from '../../assets/images/FanSection/FanmadeFour.jpg'
import FanmadeFive from '../../assets/images/FanSection/FanmadeFive.jpg'

const images = [ FanmadeOne, FanmadeTwo, FanmadeThree, FanmadeFour, FanmadeFive ];

const FanpageSection: React.FC = () => {
  return (
    <div>
        <h1 className='container mx-auto text-center text-2xl font-bold mb-8 pb-2 border-b-4 border-red-600'>
            OBSERWUJ NASZ PROFIL NA INSTAGRAMIE
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {images.map((src, index) => (
                <div key={index} className='flex justify-center'>
                    <img
                        src={src}
                        alt={`Fanmade image ${index + 1}`} 
                        className='object-cover w-full h-full'
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default FanpageSection;