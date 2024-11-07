import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import image1 from '../../assets/image/download.jpeg'


const TestimonialSlider = () => {
    const testimonialsData = [
        {
          id: 1,
          title: "Delicious Chicken Mandi",
          review: "You can't go wrong with Chicken Mandi; I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
          videoUrl: "https://www.youtube.com/embed/example_video_id",
          imageurl: image1
        },
        {
          id: 2,
          title: "Amazing Shawarma",
          review: "The shawarma was packed with flavors, and the sauces were just perfect. Highly recommended for shawarma lovers!",
          videoUrl: "https://www.youtube.com/embed/example_video_id2",
          imageurl: image1
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,  // Hide default arrows
    };

    const sliderRef = React.useRef(null);

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="relative">
            {/* Custom navigation buttons positioned differently for large and small screens */}
            <div className="hidden lg:block">
                <div className="absolute -top-16 right-4 z-10 flex space-x-2">
                    <button 
                        onClick={handlePrevious} 
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <FaArrowLeft className="text-gray-600" />
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <FaArrowRight className="text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="block lg:hidden">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                    <button 
                        onClick={handlePrevious} 
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <FaArrowLeft className="text-gray-600" />
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                        <FaArrowRight className="text-gray-600" />
                    </button>
                </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} data={testimonial} />
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
