import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 -right-3 z-10 h-[50px] w-[50px] shadow-md cursor-pointer rounded-full bg-white`}
      onClick={onClick}
      style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <IoIosArrowForward className='font-bold text-4xl' />
    </div>
  );
}

export const PrevArrow: React.FC<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 -left-3 z-10 h-[50px] w-[50px] shadow-md cursor-pointer rounded-full bg-white`}
      onClick={onClick}
      style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <IoIosArrowBack className='font-bold text-4xl' />
    </div>
  );
}