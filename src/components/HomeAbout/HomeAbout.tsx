import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";


const HomeAbout = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-orange-500 text-lg italic mb-2">About Us</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-orange-500">We</span> Create the best foody product
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          expedita tempora, ab eum sequi magnam nisi esse quis ullam ipsum
          voluptatem excepturi, nemo placeat autem iste necessitatibus minus
          unde voluptatibus!
        </p>

        {/* List Items */}
        <ul className="space-y-4 mb-6">
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.</p>
          </li>
          <li className="flex items-center">
            <FaCheck size={20} className="text-orange-500" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </li>
        </ul>

        {/* Read More Button */}
        <Link
          href="/about"
          className="inline-block bg-transparent border border-orange-500 text-orange-500 py-2 px-6 rounded-full font-medium hover:bg-orange-500 hover:text-black transition duration-300"
        >
          Read more
        </Link>
      </div>

      {/* Right Images */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        {/* Large Top Image */}
        <div className="col-span-2">
          <Image
            src='/assets/HomeAbout1.png'
            alt="Delicious Food 1"
            width={600}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
        {/* Bottom Two Images */}
        <Image
          src='/assets/HomeAbout2.png'
          alt="Delicious Food 2"
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
        <Image
          src='/assets/HomeAbout3.png'
          alt="Delicious Food 3"
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default HomeAbout;
