import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
import { useCart } from '../Cart/CartContext';
import { FaTrash } from "react-icons/fa";

interface CartProps {
    isOpen: boolean;
    toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, toggleCart }) => {
    const { cart, removeFromCart } = useCart();

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
                    <div className='px-4'>
                        {cart.length === 0 ? (
                            <p className='text-black p-4'>
                                Twój koszyk jest pusty...
                            </p>
                        ) : (
                            <ul>
                                {cart.map(item => (
                                    <li key={item.id} className='flex justify-between items-center border-b py-2'>
                                        <div className='flex text-black gap-x-2'>
                                            <img src={item.image} alt={item.title} className='w-16 h-16 object-cover' />
                                            <div>
                                                <p className='font-sans font-semibold'>
                                                    {item.title}
                                                </p>
                                                <p className='text-red-600 font-sans font-semibold'>
                                                    {item.price.toFixed(1)} PLN
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className='text-black'
                                        >
                                            <FaTrash />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cart;