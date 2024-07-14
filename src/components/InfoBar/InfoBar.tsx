import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

const InfoBar: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-around items-center p-4 bg-gray-100 shadow-sm my-24'>
        <div className='flex flex-col items-center p-2'>
            <div className='text-5xl'>
                <MdLocalShipping />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Szybka Dostawa</span>
                <p>Szybka i bezpieczna dostawa</p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2'>
            <div className='text-5xl'>
                <RiSecurePaymentFill />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Bezpieczna Płatność</span>
                <p>Gwarantowane bezpieczeństwo płatności</p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2'>
            <div className='text-5xl'>
                <FaHeadphones />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Szybki Kontakt</span>
                <p>Gwarantujemy kontakt ze sprzedawcą</p>
            </div>
        </div>
        <div className='flex flex-col items-center p-2'>
            <div className='text-5xl'>
                <BsBagHeartFill />
            </div>
            <div className='text-center'>
                <span className='font-bold'>Zadowolenie klientów</span>
                <p>Potwierdzone zadowolenie klientów</p>
            </div>
        </div>
    </div>
  )
};

export default InfoBar;