import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CommercialOne from '../../assets/images/Commercial/CommercialOne.jpg';
import CommercialTwo from '../../assets/images/Commercial/CommercialTwo.jpg';
import CommercialThree from '../../assets/images/Commercial/CommercialThree.jpg';

const images = [CommercialOne, CommercialTwo, CommercialThree];
const titles = [
    'ODKRYJ SWÓJ STYL Z MONZE',
    'ŚWIETNA JAKOŚĆ W ROZSĄDNEJ CENIE',
    'ZANURZ SIĘ W ŚWIECIE ZAKUPÓW'
];

const Commercial: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full h-96 md:h-[40rem] mt-12 md:mt-24'>
            <AnimatePresence>
                <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Summer Sale"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='object-cover w-full h-full absolute inset-0'
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
            <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        transition={{ duration: 1 }}
                        className='absolute'
                    >
                        <h1 className='font-lato text-white text-center mx-2 sm:mx-0 text-4xl md:text-6xl font-bold'>
                            {titles[currentImage]}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
};

export default Commercial;