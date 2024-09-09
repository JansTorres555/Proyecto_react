import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6    shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold uppercase ">VENTA DE CAMISETAS</h1>
        <nav>
          <ul className="flex space-x-4 text-lg">
            <li><a href="#home" className="hover:text-gray-200">Inicio</a></li>
            <li><a href="#about" className="hover:text-gray-200">Sobre Nosotros</a></li>
            <li><a href="#services" className="hover:text-gray-200">Servicios</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
