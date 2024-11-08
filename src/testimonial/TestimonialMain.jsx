import React from 'react';
import TestimonialSlider from './components/TestimonialSlider';

export const TestimonialMain = () => {
    return (
        <div className="testimonial max-w-[1320px] container w-full  mx-auto py-[120px]" id="testimonial">
            <div className=" mb-8">
                <p className=" leading-9 text-primary font-[700] text-[20px] testimonial-subtitle font-roboto ml-[13px] ">Crispy, Every Bite Taste</p>
                <h2 className="lg:text-4xl leading-9 text-xl	 font-bold font-Bebas">What Some of My Customers Say</h2>
            </div>

            <TestimonialSlider />
        </div>
    );
};

export default TestimonialMain;
