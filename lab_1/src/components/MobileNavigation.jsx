import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import NavMenu from './NavMenu';

const MobileNavigation = ({
  logoSrc,
  menuItems,
  onMenuItemClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Меню відкрито:', !isMenuOpen); 
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (event) => {
    onMenuItemClick?.(event);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      {logoSrc && <img src={logoSrc} alt="Logo" className="h-10 w-auto" />}
      <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
      <NavMenu isOpen={isMenuOpen} menuItems={menuItems} onItemClick={handleMenuItemClick} />
    </nav>
  );
};

export default MobileNavigation;