import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import { Details } from "@/components/Details/Details";
import { ClientTestimonials } from "@/components/Testimonials/ClientTestimonials";
import Image from "next/image";
import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai"; // React Icon for button

export default function AboutUsSection() {
  return (

    <>
    <MainBreadcum name="About Us" pageName="About Us"/>
    <section className="flex flex-col lg:flex-row gap-8 p-5 lg:p-10">
      {/* Image Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
        <img
          className="row-span-2 w-full object-cover rounded-lg"
          src="/assets/about1.png" // Replace with your image path
          alt="Dish 1"
        />
        <img
          className="pt-0 sm:pt-0 w-full object-cover rounded-lg"
          src="/assets/about2.png" // Replace with your image path
          alt="Dish 2"
        />
        <img
          className="w-full object-cover rounded-lg"
          src="/assets/about3.png" // Replace with your image path
          alt="Dish 3"
        />
      </section>

      {/* Description Section */}
      <div className="flex-1">
        <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-4 text-orange-400">
            About Us
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-black">
            Food is an important part of a balanced diet
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
            voluptatem excepturi, nemo placeat autem iste necessitatibus minus
            unde voluptatibus!
          </p>
          {/* Placeholder Button */}
          <button className="flex items-center gap-2 bg-transparent text-black text-lg font-semibold hover:bg-gray-100 px-4 py-2 rounded-md">
            <AiOutlinePlayCircle className="w-10 h-10 text-orange-400" />
            Learn More
          </button>
        </div>
      </div>
    </section>

    {/* Middel Section */}

    <section className="my-20 flex flex-col items-center px-5">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-3">
        Why Choose Us
      </h2>

      {/* Subtitle */}
      <p className="w-full sm:w-2/3 lg:w-1/3 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus
        perspiciatis corporis ducimus aliquid optio.
      </p>

      {/* Decorative Image */}
      <section className="my-10 w-full">
      <div className="w-full mx-auto">
        <Image
          src="/assets/whyus.png" // Replace with your image path
          alt="Dishes"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>

      {/* Features Section */}
      <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 lg:gap-12 w-full">
        {/* Feature 1 */}
        <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
          <Image
            src="/assets/child.png" // Replace with your image path
            alt="Best Chefs"
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded-full"
          />
          <h4 className="text-lg lg:text-xl font-semibold my-4">Best Chefs</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            maiores nobis illo cum excepturi eum nostrum dolor animi dolores
            aspernatur.
          </p>
        </li>

        {/* Feature 2 */}
        <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
          <Image
            src="/assets/coffee.png" // Replace with your image path
            alt="120 item food"
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded-full"
          />
          <h4 className="text-lg lg:text-xl font-semibold my-4">
            120 Item Food
          </h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            maiores nobis illo cum excepturi eum nostrum dolor animi dolores
            aspernatur.
          </p>
        </li>

        {/* Feature 3 */}
        <li className="text-center flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 px-4">
          <Image
            src="/assets/person.png" // Replace with your image path
            alt="Clean Environment"
            width={100}
            height={100}
            className="w-24 h-24 object-cover rounded-full"
          />
          <h4 className="text-lg lg:text-xl font-semibold my-4">
            Clean Environment
          </h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            maiores nobis illo cum excepturi eum nostrum dolor animi dolores
            aspernatur.
          </p>
        </li>
      </ul>
    </section>

    <ClientTestimonials/>
    <Details/>
    </>
    
  );
}
