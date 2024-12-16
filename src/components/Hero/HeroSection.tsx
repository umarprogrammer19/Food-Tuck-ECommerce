import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import herobg from '../../../public/assets/herobg.png'

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white">
      <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${herobg.src})`,
    }}
  ></div>
  
  {/* Black Overlay */}
  <div 
    className="absolute inset-0 bg-black opacity-90"
  ></div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-12 lg:px-28">
        {/* Left Content */}
        <div className="flex flex-col items-start lg:w-6/12 z-10">
          <span className="text-orange-500 font-semibold text-lg mb-2">
            Its Quick & Amusing!
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-orange-500">The</span> Art of speed food Quality
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            unde facere consectetur dolor iure soluta.
          </p>
          <Link
            href="/menu"
            className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-medium py-3 px-6 rounded-full transition duration-300"
          >
            See Menu
          </Link>
        </div>

        {/* Social Icons with White Lines */}
        <div className="absolute left-11 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-10 hidden md:flex">
  {/* Top White Line */}
  <div className="w-0.5 h-16 bg-white"></div>
  {/* Icons */}
  <div className="flex flex-col space-y-4">
    <div className="w-10 h-10 flex items-center justify-center text-orange rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition duration-300">
      <FaFacebookF size={18} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center text-orange-500 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition duration-300">
      <FaTwitter size={18} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center text-orange rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition duration-300">
      <FaPinterestP size={18} />
    </div>
  </div>
  {/* Bottom White Line */}
  <div className="w-0.5 h-16 bg-white"></div>
</div>


        {/* Right Image with Small Icons and Line */}
        <div className="w-full lg:w-6/12 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10 relative">
          <div className="relative">
            {/* Main Dish Image */}
            <Image
              src="/assets/dishimg.png" // Path to your dish image
              alt="Delicious Dish"
              width={600}
              height={600}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
