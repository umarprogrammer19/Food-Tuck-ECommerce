

import MainBreadcum from '@/components/Breadcum/MainBreadcum'
import Image from 'next/image'




const Menu = () => {
    return (
        <div>
           <MainBreadcum name='Menu' pageName='Menu'/>
            <div className="section1  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <Image
                        src="/assets/menu3.svg"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>

                {/* Menu Section */}
                <div className="w-full lg:w-1/2 lg:pl-10 pt-10 lg:p-5">
                    <div className="">

                        <Image
                            src="/assets/Coffee.svg"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Starter Menu
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Alder Grilled Chinook Salmon</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">32$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Berries and Creme Tart</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">43$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Tormentoso Bush Pizza Pintoage</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">14$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Spicy Vegan Potato Curry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">
                {/* Menu Section */}
                <div className="w-full lg:w-1/2 lg:pl-10  lg:p-5">
                    <div className="">

                        <Image
                            src="/assets/Coffee.svg"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Main Course
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Optic Big Breakfast Combo Menu</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">32$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Cashew Chicken With Stir-Fry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">43$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg"> Vegetables & Green Salad</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">14$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Spicy Vegan Potato Curry</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">35$</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <Image
                        src="/assets/menu4.svg"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


            </div>
            <div className="section3 w-full flex justify-center items-center min-h-[468px] relative frame5_bg  py-10 mt-10 ">
                <div className="w-full h-full bg-black opacity-90 absolute top-0"></div>
                <div className="container w-[80%] z-10 flex justify-between max-sm:justify-center flex-wrap ">
                    <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
                        <Image
                            src={"/assets/icon51.svg"}
                            alt="Search Icon"
                            width={120}
                            height={120}
                        />
                        <h1 className="font-bold text-2xl max-sm:text-lg">Professional Chefs</h1>
                        <h2 className="font-bold text-4xl max-sm:text-xl">420</h2>
                    </div>
                    <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
                        <Image
                            src={"/assets/icon52.svg"}
                            alt="Search Icon"
                            width={120}
                            height={120}
                        />
                        <h1 className="font-bold text-2xl max-sm:text-lg">Items of fodd</h1>
                        <h2 className="font-bold text-4xl max-sm:text-xl">320</h2>
                    </div>
                    <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
                        <Image
                            src={"/assets/icon53.svg"}
                            alt="Search Icon"
                            width={120}
                            height={120}
                        />
                        <h1 className="font-bold text-2xl max-sm:text-lg">Years of experience</h1>
                        <h2 className="font-bold text-4xl max-sm:text-xl">20+</h2>
                    </div>
                    <div className="item w-[218px] text-white h-[247px] flex flex-col justify-between items-center mt-7">
                        <Image
                            src={"/assets/icon54.svg"}
                            alt="Search Icon"
                            width={120}
                            height={120}
                        />
                        <h1 className="font-bold text-2xl max-sm:text-lg">Happy Customers</h1>
                        <h2 className="font-bold text-4xl max-sm:text-xl">220</h2>
                    </div>

                </div>
            </div>
            <div className="section4  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-start">
                    <Image
                        src="/assets/menu2.svg"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>

                {/* Menu Section */}
                <div className="w-full lg:w-1/2 lg:pl-10 pt-10 lg:p-5">
                    <div className="">

                        <Image
                            src="/assets/Coffee.svg"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Desserts
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Pain au chocolat</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">32$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Pastry, blueberries, lemon juice</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">43$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Creamy mascarpone cake</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">14$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Creamy mascarpone cake</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5  w-[90%] lg:w-[80%] m-auto flex flex-col lg:flex-row items-center lg:items-start py-10 lg:py-10 space-y-6 lg:space-y-0 ">
                {/* Menu Section */}
                <div className="w-full lg:w-1/2 lg:pl-10  lg:p-5">
                    <div className="">

                        <Image
                            src="/assets/Coffee.svg"
                            alt="Starter Menu Dish"
                            width={24}
                            height={24}

                        />
                        <h2 className="sm:text-5xl text-4xl font-bold mb-6 flex items-center">
                            Drinks
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Tormentoso BushTea Pintoage</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Toasted French bread topped with romano, cheddar</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">32$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Caffe Latte Campuri</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                <p className=" text-gray-400">700 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">43$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start border-b pb-4 h-[111px]">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg"> Aperol Spritz Capacianno</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Ground cumin, avocados, peeled and cubed</p>
                                <p className=" text-gray-400">1000 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">14$</p>
                        </div>

                        {/* Menu Item */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="sm:text-2xl font-bold text-lg">Caffè macchiato</h3>
                                <p className=" text-gray-500 max-sm:text-xs">Spreadable cream cheese, crumbled blue cheese</p>
                                <p className=" text-gray-400">560 CAL</p>
                            </div>
                            <p className="text-2xl text-orange-500 font-bold">35$</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <Image
                        src="/assets/menu1.svg"
                        alt="Starter Menu Dish"
                        width={448}
                        height={626}

                    />
                </div>


            </div>
            <div className="section6 py-20 w-[90%] lg:[80%] flex flex-col justify-between items-center m-auto min-h-[273px]">
                <p className='text-lg'>Partners & Clients</p>
                <h1 className='text-5xl font-bold max-xl:pt-10 text-center max-sm:text-3xl'>We work with the best pepole</h1>
                <div className="flex justify-evenly w-full flex-wrap items-center pt-10">
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu61.svg"
                            alt="Starter Menu Dish"
                            width={240}
                            height={129}
                        />
                    </div>
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu62.svg"
                            alt="Starter Menu Dish"
                            width={166}
                            height={128}
                        />
                    </div>
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu63.svg"
                            alt="Starter Menu Dish"
                            width={143}
                            height={127}
                        />
                    </div>
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu64.svg"
                            alt="Starter Menu Dish"
                            width={130}
                            height={129}
                        />
                    </div>
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu65.svg"
                            alt="Starter Menu Dish"
                            width={169}
                            height={129}
                        />
                    </div>
                    <div className="flex justify-center items-center h-[130px] w-[190px]">
                        <Image
                            src="/assets/menu65.svg"
                            alt="Starter Menu Dish"
                            width={113}
                            height={129}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu