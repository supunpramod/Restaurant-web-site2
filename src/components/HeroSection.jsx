import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 text-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">Welcome to TastyBites</h1>
        <p className="text-xl mb-6">Savor the flavors of our finest dishes!</p>
        <Link to="/reservations" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">Book a Table</Link>
      </div>
    </section>
  );
};

export default HeroSection;