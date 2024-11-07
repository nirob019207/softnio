import React from 'react';
import FoodSlider from './components/FoodSlider';

export const FoodItem = () => {
    return (
        <div className="fooditem max-w-[1320px] container w-full  mx-auto py-[120px] bg-[#FBF7F2] mt-20">
            <div className=" mb-8">
                <p className=" leading-9 text-primary font-[700] text-[20px] fooditem-subtitle font-roboto ml-[13px] ">Crispy, Every Bite Taste</p>
                <h2 className="lg:text-4xl leading-9 text-xl	 font-bold font-Bebas">POPULAR FOOD ITEMS</h2>
            </div>
            <FoodSlider/>

        </div>
    );
};

export default FoodItem;
