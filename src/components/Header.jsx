import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">TastyBites</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          <li><Link to="/reservations" className="hover:text-yellow-400">Reservations</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;