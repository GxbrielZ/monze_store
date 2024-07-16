import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 font-domine text-white p-8'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-4 md:mb-0'>
                <h2 className='font-cookie text-5xl font-bold'>MonZe</h2>
                <nav className='mt-4'>
                    <ul className='flex space-x-4'>
                        <li>
                            <a href="#" className='hover:underline'>
                                Sklep
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Regulamin
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline'>
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='mb-4 md:mb-0'>
                <ul className='flex space-x-4'>
                    <li>
                        <a href="#" className=''>
                            <FaFacebookSquare />
                        </a>
                    </li>
                    <li>
                        <a href="#" className=''>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#" className=''>
                            <FaXTwitter />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-800 pt-4'>
            <ul className='flex space-x-4 mb-4 md:mb-0'>
                <li>
                    <a href="#" className='hover:underline'>
                        Dostawa
                    </a>
                </li>
                <li>
                    <a href="#" className='hover:underline'>
                        Polityka prywatności
                    </a>
                </li>
                <li>
                    <a href="#" className='hover:underline'>
                        Polityka Cookie
                    </a>
                </li>
                <li>
                    <a href="#" className='hover:underline'>
                        Metody płatności
                    </a>
                </li>
                <li>
                    <a href="#" className='hover:underline'>
                        Warunki umowy
                    </a>
                </li>
            </ul>
            <p className='text-sm text-gray-500'>
                MonZe &copy;2024 Wszelkie Prawa Zastrzeżone 
            </p>
        </div>
    </footer>
  )
};

export default Footer;