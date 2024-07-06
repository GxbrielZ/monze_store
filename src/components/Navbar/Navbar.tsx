import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-gray-950 text-white'>
            <div className='mx-auto px-4 py-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link to='/' className='text-2xl font-bold'>
                        MonZe
                    </Link>
                </div>
                <div className='hidden md:flex flex-grow justify-center space-x-4'>
                    {['KOBIETA', 'MĘŻCZYZNA', 'DZIECKO', 'AKCESORIA', 'OZDOBY'].map((menu) => (
                        <div
                            key={menu}
                            className='relative'
                            onMouseEnter={() => setHoveredMenu(menu)}
                            onMouseLeave={() => setHoveredMenu('')}
                        >
                            <Link
                                to={`/${menu.toLowerCase()}`}
                                className='px-4 py-2'
                            >
                                {menu}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex items-center space-x-4'>
                    <button className='relative text-xl'>
                        <FaHeart />
                    </button>
                    <button className='relative text-2xl'>
                        <MdOutlineShoppingCart />
                    </button>
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none text-2xl'
                        >
                            <HiMenuAlt3 />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-900 text-white px-4 py-2">
                    {['KOBIETA', 'MĘŻCZYZNA', 'DZIECKO', 'BASIC', 'WYPRZEDAŻ'].map((menu) => (
                        <div key={menu} className="py-2">
                            <Link
                                to={`/${menu.toLowerCase()}`} className="block"
                            >
                                {menu}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {hoveredMenu && (
                <div className='absolute w-full bg-white text-black shadow-lg z-10'>
                    <div className='container mx-auto px-4 py-4 flex justify-between'>
                        <div>
                            <h3 className='font-bold pb-2'>ODZIEŻ</h3>
                            <ul>
                                <li>Bluzki</li>
                                <li>Bluzy</li>
                                <li>Kamizelki</li>
                                <li>Koszule</li>
                                <li>Koszulki</li>
                                <li>Kurtki/Płaszcze</li>
                                <li>Marynarki</li>
                                <li>Polo</li>
                                <li>Spódnice</li>
                                <li>Sukienki</li>
                                <li>Swetry</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold pb-2'>SPODNIE</h3>
                            <ul>
                                <li>Jeansy</li>
                                <li>Spodnie dresowe</li>
                                <li>Spodnie sztruksowe</li>
                                <li>Szorty</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold pb-2'>OBUWIE</h3>
                            <ul>
                                <li>Botki</li>
                                <li>Kapcie</li>
                                <li>Klapki</li>
                                <li>Półbuty</li>
                                <li>Trampki</li>
                                <li>Sandały</li>
                                <li>Sneakersy</li>
                                <li>Śniegowce</li>
                                <li>Trapery</li>
                                <li>Trekkingi</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold pb-2'>DODATKI</h3>
                            <ul>
                                <li>Akcesoria</li>
                                <li>Bielizna</li>
                                <li>Czapki/Kapelusze</li>
                                <li>Kosmetyki</li>
                                <li>Okulary</li>
                                <li>Paski</li>
                                <li>Portfele</li>
                                <li>Rękawiczki</li>
                                <li>Skarpetki</li>
                                <li>Szaliki/Apaszki</li>
                                <li>Torby/Plecaki</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
};

export default Navbar;