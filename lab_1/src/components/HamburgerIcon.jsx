import React from 'react';

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer z-50 relative w-8 h-6 flex flex-col justify-between"
    >
      <div className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
      <div className={`h-1 w-full bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
      <div className={`h-1 w-full bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
    </div>
  );
};

export default HamburgerIcon;