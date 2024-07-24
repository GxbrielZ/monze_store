import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from '../../data/menuData';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='flex justify-between bg-gray-900 text-white w-screen font-domine'>
      <div className='px-3 md:px-5 py-3 flex w-full items-center'>
        <Link to='/' className='font-cookie text-3xl font-bold z-10'>
          MonZe
        </Link>
        <ul className='hidden lg:flex mx-auto lg:space-x-10 xl:space-x-12'>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className='hover:text-gray-200'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden lg:flex items-center space-x-3 items-center text-xl'>
          <Link to='/' className='hover:text-red-500'>
            <FaHeart />
          </Link>
          <Link to='/' className='hover:text-gray-200'>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
      <div
        className='lg:hidden flex mr-2 items-center text-2xl cursor-pointer z-10'
        onClick={toggleMobileMenu}
      >
        <HiMenuAlt3 />
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className='absolute lg:hidden top-0 left-0 w-full bg-gray-900 text-white p-4'
          >
            <ul className='space-y-4 pt-14 pb-4'>
              {menuData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className='block border-b pb-2 pl-2'
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-end space-x-4 text-xl my-4'>
              <Link to='/' className='hover:text-red-500'>
                <FaHeart />
              </Link>
              <Link to='/' className='hover:text-gray-200'>
                <FaShoppingCart />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;