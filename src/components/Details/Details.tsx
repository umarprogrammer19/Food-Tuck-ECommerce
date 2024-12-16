'use client';

import Image from "next/image";
import menuCategoryDill from "../../../public/assets/mainbreakfast.png";
import sampleDish1 from "../../../public/assets/bf1.png";
import sampleDish2 from "../../../public/assets/bf2.png";
import sampleDish3 from "../../../public/assets/bf3.png";
import sampleDish4 from "../../../public/assets/bf4.png";
import { useState } from "react";

export const Details = () => {
  const categoryTabs = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];
  const [category, setCategory] = useState<string>(categoryTabs[0]);

  // Static dishes data
  const dishes = [
    { id: 1, title: "Lettuce Leaf", img: sampleDish1, category: "Breakfast", price: 12.5 },
    { id: 2, title: "Fresh Breakfast", img: sampleDish2, category: "Breakfast", price: 14.5 },
    { id: 5, title: "Egg Delight", img: sampleDish3, category: "Breakfast", price: 11.0 },
    { id: 6, title: "Toast Supreme", img: sampleDish4, category: "Breakfast", price: 9.0 },
    { id: 7, title: "Morning Treat", img: sampleDish1, category: "Breakfast", price: 13.0 },
    { id: 8, title: "Pancake Stack", img: sampleDish2, category: "Breakfast", price: 15.5 },
    { id: 9, title: "Berry Bliss", img: sampleDish3, category: "Breakfast", price: 10.0 },
    { id: 10, title: "Sunrise Special", img: sampleDish3, category: "Breakfast", price: 14.0 },
    { id: 3, title: "Glow Cheese", img: sampleDish3, category: "Breakfast", price: 12.5 },
    { id: 4, title: "Mushroom Pizza", img: sampleDish4, category: "Breakfast", price: 12.5 },
  ];

  // Filter dishes based on category
  const filteredDishes = dishes
    .filter((dish) => dish.category === category)
    .slice(0, category === "Breakfast" ? 6 : undefined); // Show only 2 items if Breakfast

  return (
    <div className="container bg-black mx-auto py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-400 text-2xl italic">Choose & Pick</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
          <span className="text-orange-400">From</span> Our Menu
        </h2>
      </div>

      {/* Tabs */}
      <ul className="flex justify-center mb-8 overflow-x-auto no-scrollbar">
        {categoryTabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setCategory(tab)}
            className={`cursor-pointer text-lg md:text-xl mx-4 py-2 whitespace-nowrap 
              ${
                category === tab
                  ? "text-orange-400 font-semibold border-b-2 border-orange-400"
                  : "text-gray-600 hover:text-gray-400"
              }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Decoration and Highlighted Dish */}
        <div className="relative hidden md:flex w-1/3 flex-col items-center">
          <Image src={menuCategoryDill} alt="Decoration Dill" className="w-2/3" />
          {/* {filteredDishes.length > 0 && (
            <Image
              src={filteredDishes[0].img}
              alt={filteredDishes[0].title}
              className="absolute top-16 left-1/3 z-10 rounded-lg shadow-lg"
              width={200}
              height={200}
            />
          )} */}
        </div>

        {/* Dishes List */}
        <div className="w-full md:w-2/3">
          {filteredDishes.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredDishes.map((dish) => (
                <li key={dish.id} className="flex items-center gap-4">
                  <Image
                    src={dish.img}
                    alt={dish.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover shadow-md"
                  />
                  <div>
                    <h5 className="text-xl font-semibold">{dish.title}</h5>
                    <span className="text-lg text-orange-400 font-semibold">${dish.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl text-center text-gray-500">No dishes found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};
