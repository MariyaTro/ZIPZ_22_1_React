import React from 'react';

const NavMenu = ({ isOpen, menuItems, onItemClick }) => {
  return (
    <div 
      className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col items-center justify-center z-40`}
    >
      {menuItems.map((item, index) => (
        <a 
          key={index} 
          href={item.link} 
          onClick={onItemClick}
          className="text-2xl my-4 text-black hover:text-blue-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default NavMenu;
