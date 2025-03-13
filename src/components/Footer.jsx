import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>© 2025 TastyBites. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://facebook.com" className="mx-2 hover:text-yellow-400">Facebook</a>
          <a href="https://instagram.com" className="mx-2 hover:text-yellow-400">Instagram</a>
          <a href="https://twitter.com" className="mx-2 hover:text-yellow-400">Twitter</a>
        </div>
        <p className="mt-2">123 Flavor Street, Food City</p>
        <p>Open: Mon–Sun, 11 AM–10 PM</p>
      </div>
    </footer>
  );
};

export default Footer;