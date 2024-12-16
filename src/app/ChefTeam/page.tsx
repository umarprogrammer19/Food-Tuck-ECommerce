import MainBreadcum from "@/components/Breadcum/MainBreadcum";
import Image from "next/image";

// Define type for chef data
interface Chef {
  name: string;
  role: string;
  image: string;
}

const chefs: Chef[] = [
  { name: "Tahsin Rumi", role: "Chef", image: "/assets/cf1.png" },
  { name: "Jordan Begum", role: "Chef", image: "/assets/cf2.png" },
  { name: "M. Mohammed", role: "Chef", image: "/assets/cf3.png" },
  { name: "Muma Kathy", role: "Chef", image: "/assets/cf4.png" },
  { name: "Biten Devgon", role: "Chef", image: "/assets/cf5.png" },
  { name: "Motin Molladuf", role: "Chef", image: "/assets/cf6.png" },
  { name: "William Rumi", role: "Chef", image: "/assets/cf7.png" },
  { name: "Kets William Roy", role: "Chef", image: "/assets/cf8.png" },
  { name: "Mahmud Mohil", role: "Chef", image: "/assets/cf9.png" },
  { name: "Akter Rahman", role: "Chef", image: "/assets/cf10.png" },
  { name: "Mondella Holly", role: "Chef", image: "/assets/cf11.png" },
  { name: "Mondella Holly", role: "Chef", image: "/assets/cf12.png" },
];

const ChefTeam = () => {
  return (
    <>
      <MainBreadcum name="Our Chef" pageName="Our Chef" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="py-12">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {chefs.map((chef, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden text-center w-full"
                >
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-[20px] font-bold text-[#232323]">
                      {chef.name}
                    </h3>
                    <p className="text-[#333333] text-[18px]">{chef.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ChefTeam;
