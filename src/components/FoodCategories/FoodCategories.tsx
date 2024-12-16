import Image from "next/image";
import Link from "next/link";

// Dummy images (replace with actual paths later)
import FoodImage1 from "../../../public/assets/food1.png";
import FoodImage2 from "../../../public/assets/food2.png";
import FoodImage3 from "../../../public/assets/food3.png";
import FoodImage4 from "../../../public/assets/food4.png";

// Type definition for the food card
type FoodCard = {
  img: string;
  buttonText: string;
};

const foodCards: FoodCard[] = [
  { img: FoodImage1.src, buttonText: "Breakfast" },
  { img: FoodImage2.src, buttonText: "Lunch" },
  { img: FoodImage3.src, buttonText: "Dinner" },
  { img: FoodImage4.src, buttonText: "Dessert" },
];

interface FoodCategoryListProps {
  foodCards: FoodCard[];
}

const FoodCategoryList = ({ foodCards }: FoodCategoryListProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-6">
      {foodCards.map((category, index) => (
        <li
          key={index}
          className="group relative w-56 h-60 overflow-hidden rounded-lg cursor-pointer"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={category.img}
              alt={category.buttonText}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 group-hover:translate-y-0 translate-y-full"></div>

          {/* Button */}
          <Link
            href="/menu"
            className="absolute bottom-4 left-4 text-white bg-orange-500 px-4 py-2 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {category.buttonText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FoodCategories = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <header className="text-center mb-10">
        <p className="text-orange-400 text-2xl italic font-serif">Food Category</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          <span className="text-orange-400">Choose </span>
          Food Item
        </h1>
      </header>

      {/* Food Category List */}
      <FoodCategoryList foodCards={foodCards} />
    </section>
  );
};

export default FoodCategories;
