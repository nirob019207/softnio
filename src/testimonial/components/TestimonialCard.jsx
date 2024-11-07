import React from 'react';

const TestimonialCard = ({ data }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch rounded-lg shadow-lg overflow-hidden h-auto lg:h-[555px] w-full">
            {/* Text Section */}
            <div className="w-full lg:w-1/2  flex flex-col bg-[#FEBF00] lg:p-[77px] p-3 relative">
                <div className="flex-grow">
                    <p className="text-gray-600 text-lg">
                        <span className="font-bold text-[40px]">"</span>{data.review}
                    </p>
                </div>

                {/* This container is pushed to the bottom */}
                <div className="mt-auto flex justify-between items-center border-b-2 border-black pb-3 w-full">
                    <div>
                        <p className="font-bold text-[18px] text-[#0A1425] font-Bebas">Khalid al Malek</p>
                        <p>Jeddah, Saudi Arabia</p>
                    </div>
                    <img src={data.imageurl} alt="Reviewer" className="w-12 h-12 rounded-full" />
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full lg:w-1/2 lg:mt-0 mt-5">
                <div className="w-full h-full">
                    <iframe
                        src={data.videoUrl}
                        title={`${data.title} Video`}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;