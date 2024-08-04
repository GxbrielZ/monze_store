import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";

interface CartProps {
    isOpen: boolean;
    toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({isOpen, toggleCart}) => {
  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                className='fixed top-0 right-0 w-full h-full lg:w-1/3 bg-white shadow-lg z-50'
            >
                <div className='p-4 flex justify-between items-center border-b'>
                    <h2 className='text-xl font-semibold text-black'>
                        Koszyk
                    </h2>
                    <button onClick={toggleCart} className='text-2xl text-black'>
                        <RxCross2 />
                    </button>
                </div>
                <div className='p-4'>
                    <p>Your cart is empty.</p>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  );
};

export default Cart;