import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import FoodCard from './FoodCard';
import image1 from '../../assets/image/download.jpeg'


const FoodSlider = () => {
    const foodItem = [
        {
          id: 1,
          title: "vegetables burger",
          review: "Barbecue Italian cuisine pizza",
          imageurl: image1
        },
        {
            id: 2,
            title: "vegetables burger",
            review: "Barbecue Italian cuisine pizza",
            imageurl: image1
          },
          {
            id: 3,
            title: "vegetables burger",
            review: "Barbecue Italian cuisine pizza",
            imageurl: image1
          },
          {
            id: 4,
            title: "vegetables burger",
            review: "Barbecue Italian cuisine pizza",
            imageurl: image1
          },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // Adjust for tablets or small desktops
                settings: {
                    slidesToShow: 3, // Show 3 cards on medium screens
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768, // Adjust for tablets
                settings: {
                    slidesToShow: 2, // Show 2 cards on small screens
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480, // Adjust for mobile
                settings: {
                    slidesToShow: 1, // Show 1 card on very small screens
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    

    const sliderRef = React.useRef(null);

    const handlePrevious = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="relative ">
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
                {foodItem.map((foodItems) => (
                    <div key={foodItems.id} className="px-2"> {/* Added padding on each card */}
                        <FoodCard data={foodItems} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FoodSlider;
