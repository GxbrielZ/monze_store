import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 font-domine text-white pt-8'>
        <div className='container mx-auto border-b border-gray-800 pb-2'>
            <h2 className='font-cookie text-5xl font-bold pl-3'>MonZe</h2>
        </div>
        <div className='container mx-auto flex flex-col md:flex-row justify-between p-5 text-sm border-b border-gray-800'>
            <div className='mb-5 md:mb-0'>
                <h2 className='font-bold mb-2'>O NAS</h2>
                <ul className='space-y-1'>
                    <li>O firmie MonZe</li>
                    <li>Zakupy w MonZe</li>
                    <li>Opinie klientów</li>
                </ul>
            </div>
            <div className='mb-5 md:mb-0'>
                <h2 className='font-bold mb-2'>METODY PŁATNOŚCI</h2>
                <ul className='space-y-1'>
                    <li>Płatności Online</li>
                    <li>Przelew</li>
                    <li>Blik</li>
                    <li>Za Pobraniem</li>
                </ul>
            </div>
            <div className='mb-5 md:mb-0'>
                <h2 className='font-bold mb-2'>OBSŁUGA KLIENTA</h2>
                <ul className='space-y-1'>
                    <li>Kontakt</li>
                    <li>Polityka Prywatności</li>
                    <li>Regulamin</li>
                    <li>Reklamacje</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className=''>
                <h2 className='font-bold mb-2'>SPOŁECZNOŚCI</h2>
                <ul className='space-y-2'>
                    <li>
                        <a href="#" className='flex items-center space-x-2'>
                            <span className='text-xl'>
                                <FaFacebookSquare />
                            </span>
                            <span className=''>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center space-x-2'>
                            <span className='text-xl'>
                                <FaInstagram />
                            </span>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center space-x-2'>
                            <span className='text-xl'>
                                <FaXTwitter />
                            </span>
                            <span>Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='container mx-auto'>
            <p className='text-sm text-gray-500 text-center p-6'>
                MonZe &copy;2024 Wszelkie Prawa Zastrzeżone 
            </p>
        </div>
    </footer>
  )
};

export default Footer;