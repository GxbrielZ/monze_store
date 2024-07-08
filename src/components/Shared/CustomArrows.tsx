import React from 'react';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-arrow custom-arrow-next`}
        style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
}
  
export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-arrow custom-arrow-prev`}
        style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%' }}
        onClick={onClick}
      />
    );
}