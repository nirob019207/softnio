import React from 'react';

const FoodCard = ({ data }) => {
    return (
        <div className="bg-white text-white shadow-xl rounded-lg p-6 max-w-sm mx-auto">
            <div className="flex flex-col items-center">
           
                <img src={data.imageurl} alt="Reviewer" className="w-16 h-16 rounded-full shadow-md border-2 border-red-500" />
                
             
                <div className="w-full my-4">
                    <div className="border-b-2 mx-auto w-[20%] border-red-500"></div>
                </div>
            </div>
            
            {/* Text Content */}
            <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-[#0A1425]">{data.title}</h3>
                <p className="text-[16px] text-[#0A1425]  font-[roboto] leading-relaxed mt-2">{data.review}</p>
            </div>
        </div>
    );
};

export default FoodCard;
