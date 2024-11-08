import React from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt, FaUsers, FaCommentDots } from 'react-icons/fa';
import { InputField, TextAreaField } from './components/InputFieldComponents'; // Adjust path as necessary

export const Book = () => {
    return (
        <div className="book max-w-[1320px] container w-full mx-auto mt-40 lg:h-[790px] py-[120px] h-auto" id="book">
            <div className="mb-8">
                <p className="leading-9 text-primary font-[700] text-[20px] book-subtitle font-roboto ml-[13px]">Book Now</p>
                <h2 className="lg:text-4xl text-xl font-bold font-Bebas text-white">Book Your Table</h2>
                <p className="text-[16px] mt-2 max-w-[650px] font-sans text-white">
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                </p>
            </div>

          <div className='w-full lg:w-2/3'>
              {/* Booking Form */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-white">
                <InputField icon={FaUser} type="text" placeholder="Name" />
                <InputField icon={FaEnvelope} type="email" placeholder="Email" />
                <InputField icon={FaCalendarAlt} type="date" placeholder="Registration Date" />
                <InputField icon={FaUsers} type="number" placeholder="Total People" />
                
                <div className="md:col-span-2">
                    <TextAreaField icon={FaCommentDots} placeholder="Message" />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 ">
                    <button 
                        type="submit" 
                        className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
                    >
                        Book Now
                    </button>
                </div>
            </form>
          </div>
        </div>
    );
};

export default Book;
