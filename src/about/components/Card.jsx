import React from 'react';
import { FaTruck, FaUtensils, FaBoxOpen } from 'react-icons/fa';

export const Card = () => {
  const cards = [
    { id: 1, icon: <FaTruck className="text-blue-500 text-3xl" />, text: 'Fast Delivery', description: 'Get your food quickly to your door.' },
    { id: 2, icon: <FaUtensils className="text-green-500 text-3xl" />, text: 'Excellent Dining', description: 'Experience top-notch dining service.' },
    { id: 3, icon: <FaBoxOpen className="text-red-500 text-3xl" />, text: 'Pickup Delivery', description: 'Pick up your order at your convenience.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex items-start space-x-4  p-6 "
        >
          <div className='bg-white shadow-md rounded-full p-4'>
            {card.icon}
          </div>
          <div>
            <span className="font-bold text-xl text-black">{card.text}</span>
            <p className="text-gray-400 text-lg font-[400]">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
