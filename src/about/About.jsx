import React, { useState } from 'react';
import image1 from '../assets/image/banner.jpeg';

export const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Define tab data in a JSON-like structure
  const tabs = [
    { id: 'overview', label: 'About',heading:"Exceptional culinary experience and delicious food", content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis porro molestias similique expedita. Facere nemo assumenda culpa, iste doloribus unde rem eveniet nisi nostrum deserunt ullam. Officiis ut molestias magnam, hic aperiam ratione.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis porro molestias similique expedita. Facere nemo assumenda culpa, iste doloribus unde rem eveniet nisi nostrum deserunt ullam. Officiis ut molestias magnam, hic aperiam ratione.' },
    { id: 'mission', label: 'Experience',heading:"beautiful culinary experience and delicious food", content: 'Our mission is to provide the best quality products and services to our customers, ensuring a positive impact on society and the environment.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis porro molestias similique expedita. Facere nemo assumenda culpa, iste doloribus unde rem eveniet nisi nostrum deserunt ullam. Officiis ut molestias magnam, hic aperiam ratione.' },
    { id: 'vision', label: 'Contact',heading:"Amaijing culinary experience and delicious food", content: 'We envision a future where innovation and sustainability go hand in hand to create a better world for everyone.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis porro molestias similique expedita. Facere nemo assumenda culpa, iste doloribus unde rem eveniet nisi nostrum deserunt ullam. Officiis ut molestias magnam, hic aperiam ratione.' }
  ];

  const currentTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  const currentTabhead = tabs.find(tab => tab.id === activeTab)?.heading;


  return (
         <div className='container'>
           
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 py-[150px]">
      <div>
        <img src={image1} alt="Banner" className="w-full lg:h-[400px]  h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col space-y-4">
        

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-3">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab.id ? 'bg-primary text-white px-8' : 'bg-gray-200 text-gray-800 px-8'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <h1 className='text-5xl leading-1 text-black font-montserrat'>
            {currentTabhead}

        </h1>

        {/* Tab content */}
        <div className="mt-4 text-gray-600 text-xl">
          {currentTabContent}
        </div>
      </div>
    </div>
                </div>
           
  );
};
