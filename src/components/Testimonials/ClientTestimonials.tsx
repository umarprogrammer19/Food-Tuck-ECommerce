'use client';

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "https://i.pravatar.cc/150?img=1", // Random avatar
    role: "Graphic Designer",
    comment:
      "Working with this team has been a game-changer for me. Their professionalism and dedication are unmatched!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Lee",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "Software Engineer",
    comment:
      "I am thrilled with the results! The service exceeded my expectations in every possible way.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophia Williams",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "Marketing Specialist",
    comment:
      "Highly recommend this company! They truly care about their clients and deliver amazing results.",
    rating: 5,
  },
  {
    id: 4,
    name: "Liam Brown",
    avatar: "https://i.pravatar.cc/150?img=4",
    role: "Project Manager",
    comment:
      "Fantastic experience! The team went above and beyond to ensure everything was perfect.",
    rating: 4,
  },
  {
    id: 5,
    name: "Olivia Smith",
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "Content Creator",
    comment:
      "An absolute pleasure to work with! I couldn't be happier with the results.",
    rating: 5,
  },
];

export const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next testimonial
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous testimonial
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 bg-black text-white relative overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-xl italic text-orange-400">Testimonials</p>
        <h2 className="text-4xl font-semibold">
          What our <span className="text-orange-400">clients</span> are saying
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Slides */}
        <div className="flex overflow-hidden relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-full transition-transform duration-500 ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="bg-white text-black rounded-lg p-8 shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="text-orange-400 text-2xl mb-4">“”</div>
                  <p className="text-center text-gray-600 mb-6">
                    {testimonial.comment}
                  </p>

                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`${
                          index < testimonial.rating
                            ? "text-orange-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 rounded-full p-2 shadow-lg z-10"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 rounded-full p-2 shadow-lg z-10"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
