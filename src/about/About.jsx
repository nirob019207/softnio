import React, { useState } from 'react';
import image1 from '../assets/image/banner.jpeg';

export const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Define tab data in a JSON-like structure
  const tabs = [
    { id: 'overview', label: 'Overview', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum blanditiis porro molestias similique expedita. Facere nemo assumenda culpa, iste doloribus unde rem eveniet nisi nostrum deserunt ullam. Officiis ut molestias magnam, hic aperiam ratione.' },
    { id: 'mission', label: 'Mission', content: 'Our mission is to provide the best quality products and services to our customers, ensuring a positive impact on society and the environment.' },
    { id: 'vision', label: 'Vision', content: 'We envision a future where innovation and sustainability go hand in hand to create a better world for everyone.' }
  ];

  const currentTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      <div>
        <img src={image1} alt="Banner" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        

        {/* Tab navigation */}
        <div className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-4 text-gray-600">
          {currentTabContent}
        </div>
      </div>
    </div>
  );
};
