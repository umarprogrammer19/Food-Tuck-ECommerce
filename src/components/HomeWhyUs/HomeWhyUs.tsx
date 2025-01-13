import Image from 'next/image';
import img1 from '../../../public/assets/why1.png';
import img2 from '../../../public/assets/why2.png';
import img3 from '../../../public/assets/why3.png';
import img4 from '../../../public/assets/why4.png';
import img5 from '../../../public/assets/why5.png';
import img6 from '../../../public/assets/why6.png';

export const HomeWhyUs = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-16 gap-8 bg-black text-white">
      {/* Main container in column layout for small screens */}
      <div className="flex flex-col md:flex-row w-full md:w-4/5 justify-between">
        {/* Left Side Images */}
        <section className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Top Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src={img1}
                alt="Dish 1"
                width={500}
                height={500}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src={img2}
                alt="Dish 2"
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-4">
            <div className="col-span-2 sm:col-span-1 row-span-2 w-full rounded-lg shadow-lg">
              <Image
                src={img3}
                alt="Dish 3"
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="col-span-2 sm:col-span-1 row-span-2 w-full rounded-lg shadow-lg">
              <Image
                src={img4}
                alt="Dish 4"
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src={img5}
                alt="Dish 5"
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full rounded-lg shadow-lg">
              <Image
                src={img6}
                alt="Dish 6"
                width={400}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Right Side Description */}
        <section className="w-full md:w-1/2 px-6">
          <h3 className="text-4xl text-orange-500 font-bold mb-4">Why Choose Us</h3>
          <h3 className="text-3xl mb-6">Extraordinary Taste and Experience</h3>
          <p className="text-lg mb-8">
            We bring you years of experience with top-notch culinary skills,
            offering a variety of delicious meals prepared with love and precision.
          </p>

          {/* Food Categories */}
          <ul className="flex flex-wrap gap-8 mt-4">
            <li className="text-center">
              <div className="bg-orange-400 p-5 mb-2 w-20 h-20 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="/assets/burger.png"
                  alt="Burger"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="font-semibold text-lg">Pizza</span>
            </li>
            <li className="text-center">
              <div className="bg-orange-400 p-5 mb-2 w-20 h-20 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="/assets/Wine.png"
                  alt="Wine"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="font-semibold text-lg">Burger</span>
            </li>
            <li className="text-center">
              <div className="bg-orange-400 p-5 mb-2 w-20 h-20 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="/assets/Cookie.png"
                  alt="Cookie"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="font-semibold text-lg">Coffee</span>
            </li>
          </ul>

          {/* Years of Experience */}
          <div className="flex justify-evenly items-center bg-gray-100 w-full md:w-4/5 p-4 mt-6 rounded-lg border-l-8 border-orange-400 shadow-lg">
            <span className="text-5xl font-bold text-orange-400">30+</span>
            <div>
              <p className="text-black text-lg leading-5">Years of</p>
              <span className="text-black text-xl font-bold">Experience</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
