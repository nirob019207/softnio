import React from 'react';
import banner from '../assets/image/banner.jpeg';
import banner2 from '../assets/image/banner2.png';
import banner3 from '../assets/image/banner3.png';



export const Banner = () => {
    return (
        <div className="bg-primary lg:h-[900px] h-auto flex relative">
            <div className="max-w-[1373px] container mx-auto px-4 py-[130px]">
                <div className="flex flex-col lg:flex-row justify-between relative">
                    
                    {/* Text Section */}
                    <div className="text-center lg:text-left">
                        <div className=' '>
                            <h2 className="lg:text-[114px] text-2xl font-bold text-white leading-tight lg:absolute z-10 bg-transparent">
                                Taste the authentic Saudi cuisine
                            </h2>
                        </div>
                        <div className='lg:bottom-0 lg:absolute'>
                            <p className="lg:text-xl text-lg   text-gray-300 w-[90%]">
                                Among the best Saudi chefs in the world, serving you something beyond flavor.
                            </p>
                            <button className="bg-[#FEBF00] mt-10 w-[157px] text-black font-semibold py-2 rounded shadow-lg hover:bg-yellow-500 transition duration-200">
                                Explore Menu
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 mt-4">
                    <div className='absolute -top-9 -right-9 lg:block hidden'>
                    <img src={banner3} alt="Delicious Saudi Cuisine" className="overflow-hidden rounded-full " />
                    </div>
                    
                    <div className='absolute bottom-2 -right-8 lg:block hidden'>
                    <img src={banner2} alt="Delicious Saudi Cuisine" className="overflow-hidden rounded-full bg-[#FEBF00]" />
                    </div>
                        <img src={banner} alt="Delicious Saudi Cuisine" className="max-w-full h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
