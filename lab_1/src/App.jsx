import React from 'react';
import MobileNavigation from './components/MobileNavigation';
import logo from './logo.png';

const App = () => {
  const menuItems = [
    { label: 'Головна', link: '#home' },
    { label: 'Про нас', link: '#about' },
    { label: 'Послуги', link: '#services' },
    { label: 'Контакти', link: '#contact' }
  ];

  const handleMenuClick = (event) => {
    console.log('Обрано пункт меню:', event.target.textContent);
  };

  return (
    <div>
      <MobileNavigation 
        logoSrc={logo}
        menuItems={menuItems}
        onMenuItemClick={handleMenuClick}
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold">Вітаємо на сайті!</h1>
          <p className="mt-4 text-lg">Це приклад сторінки з мобільною навігацією.</p>
        </div>
      </div>
    );
  };
  
  export default App;