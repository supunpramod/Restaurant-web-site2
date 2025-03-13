import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-yellow-500 font-bold mt-2">${item.price}</p>
      </div>
    </div>
  );
};

export default MenuCard;