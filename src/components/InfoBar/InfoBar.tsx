import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

const InfoBar: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-around items-center p-4 bg-gray-100 shadow-sm my-8 md:my-16 lg:my-24 text-gray-900'>
        <div className='flex flex-col items-center p-2 w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0'>
            <div className='text-5xl'>
                <MdLocalShipping />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Szybka Dostawa</span>
                <p className='text-gray-700'>
                    Szybka i bezpieczna dostawa
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2 w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0'>
            <div className='text-5xl'>
                <RiSecurePaymentFill />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Bezpieczna Płatność</span>
                <p className='text-gray-700'>
                    Gwarantowane bezpieczeństwo płatności
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2 w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0'>
            <div className='text-5xl'>
                <FaHeadphones />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Szybki Kontakt</span>
                <p className='text-gray-700'>
                    Gwarantujemy kontakt ze sprzedawcą
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2 w-full sm:w-1/2 md:w-1/4 mb-4 md:mb-0'>
            <div className='text-5xl'>
                <BsBagHeartFill />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Zadowolenie klientów</span>
                <p className='text-gray-700'>
                    Potwierdzone zadowolenie klientów
                </p>
            </div>
        </div>
    </div>
  )
};

export default InfoBar;