import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { menuItems, mainMenuItems } from '../../data/menuData';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string>('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-gray-950 text-white shadow-md'>
            <div className='mx-auto px-4 py-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link to='/' className='text-2xl font-bold'>
                        MonZe
                    </Link>
                </div>
                <div className='hidden md:flex flex-grow justify-center space-x-4'>
                    {mainMenuItems.map((menu) => (
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
                <div className="md:hidden bg-gray-950 text-white px-4 py-2">
                    {mainMenuItems.map((menu) => (
                        <div key={menu} className='py-2'>
                            <Link
                                to={`/${menu.toLowerCase()}`} className='block'
                            >
                                {menu}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {hoveredMenu && menuItems[hoveredMenu] && (
                <div className='absolute w-full bg-white text-black shadow-lg z-10'>
                    <div className='container mx-auto px-4 py-4 flex justify-between'>
                        {Object.keys(menuItems[hoveredMenu]).map((category) => (
                            <div key={category}>
                                <h3 className='font-bold pb-2' >
                                    {category}
                                </h3>
                                <ul>
                                    {menuItems[hoveredMenu][category].map((item: string) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
};

export default Navbar;