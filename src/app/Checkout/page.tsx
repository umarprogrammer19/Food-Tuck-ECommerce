
import MainBreadcum from '@/components/Breadcum/MainBreadcum'
import Link from 'next/link'


const Checkout = () => {
    return (
        <div>
            <MainBreadcum name='Checkout Page' pageName='Checkout Page'/>
            <div className="p-8 max-md:p-1 py-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping and Billing Form */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                        <form className="grid grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-11 gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border p-2 rounded col-span-2 sm:col-span-1"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <select className="border p-2 roundedmax-md:col-span-2">
                                <option>Choose country</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>UK</option>
                            </select>
                            <select className="border p-2 rounded max-md:col-span-2">
                                <option>Choose city</option>
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Zip code"
                                className="border p-2 rounded max-md:col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Address 1"
                                className="border p-2 rounded col-span-2"
                            />
                            <input
                                type="text"
                                placeholder="Address 2"
                                className="border p-2 rounded col-span-2"
                            />
                        </form>
                        <div className="mt-6">
                            <label className="flex  flex-col ">
                                <h2 className='font-bold text-xl'>Billing Address</h2>
                                <div className="flex ">

                                    <input type="checkbox" className="mr-2" />
                                    Same as shipping address
                                </div>
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-6 max-sm:flex-col ">
                            <button className="bg-white w-[50%] max-sm:w-full h-[58px] text-black px-6 py-2  hover:bg-gray-500 border-2 border-gray-300">
                                <Link href={"/cart"}>&lt; Back to cart</Link>
                            </button>
                            <button className="bg-primary_color w-[50%] max-sm:w-full h-[58px] text-white px-6 py-2  max-sm:mt-5 hover:bg-primary_color">
                                Proceed to shipping &rarr;
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">

                        <div className="space-y-4">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b pb-4"
                                >
                                    <img
                                        src="/assets/checkoutimg.svg"
                                        alt="Chicken Tikka Kabab"
                                        className="w-16 h-16 rounded-lg"
                                    />
                                    <div className="flex-1 px-4">
                                        <h3 className="text-lg font-semibold">
                                            Chicken Tikka Kabab
                                        </h3>
                                        <p className="text-gray-500 text-sm">150 gm net</p>
                                    </div>
                                    <span className="text-gray-600">$50</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 mt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Sub-total</span>
                                <span>$130</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>25%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>$54.76</span>
                            </div>
                        </div>
                        <div className="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>$432.65</span>
                        </div>
                        <button className="w-full bg-primary_color text-white py-2 mt-6 rounded-lg hover:bg-primary_color h-[58px]">
                            Place an order &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout