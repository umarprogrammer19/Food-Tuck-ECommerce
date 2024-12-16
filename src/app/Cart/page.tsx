

import Image from 'next/image'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from '@/components/ui/input'
import MainBreadcum from '@/components/Breadcum/MainBreadcum'
import Link from 'next/link'




const Cart = () => {
    return (
        <div>
            <MainBreadcum name='Shopping Cart' pageName='Shopping Cart' />
            <div className="w-[80%] m-auto max-lg:w-[95%]">
                <Table className='mt-20 mb-10 max-sm:text-xs '>
                    <TableHeader className='h-[72px] rounded-sm box_shadow'>
                        <TableRow className='border-none outline-none '>
                            <TableHead className='pl-4  '>Product</TableHead>
                            <TableHead className='pl-4 '>Price</TableHead>
                            <TableHead className='pl-4 '>Quantity</TableHead>
                            <TableHead className='pl-4 '>Subtotal</TableHead>
                            <TableHead className='pl-4 '>Remove</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody >
                        <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                            <TableCell className='pl-4 max-sm:pl-0'>
                                <div className="flex items-center">
                                    <Image src={"/assets/shop12.svg"} alt='no img found' width={40} height={40}></Image>
                                    <h2 className='pl-4 max-sm:pl-1 max-sm:pr-2'>Burgur</h2>
                                </div>
                            </TableCell>
                            <TableCell className='pl-4'>$21</TableCell>
                            <TableCell className='pl-4'>
                                <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"01"} type='number' />
                            </TableCell>
                            <TableCell className='pl-4'>$21</TableCell>
                            <TableCell className='pl-4'>X</TableCell>
                        </TableRow>
                        <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                            <TableCell className='pl-4 max-sm:pl-0'>
                                <div className="flex items-center">
                                    <Image src={"/assets/shop9.svg"} alt='no img found' width={40} height={40}></Image>
                                    <h2 className='pl-4 max-sm:pl-1 max-sm:pr-2'>Pizza</h2>
                                </div>
                            </TableCell>
                            <TableCell className='pl-4'>$41</TableCell>
                            <TableCell className='pl-4'>
                                <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"01"} type='number' />
                            </TableCell>
                            <TableCell className='pl-4'>$51</TableCell>
                            <TableCell className='pl-4'>X</TableCell>
                        </TableRow>
                        <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                            <TableCell className='pl-4 max-sm:pl-0'>
                                <div className="flex items-center">
                                    <Image src={"/assets/shop15.svg"} alt='no img found' width={40} height={40}></Image>
                                    <h2 className='pl-4 max-sm:pl-1 max-sm:pr-2'>Fresh Lime</h2>
                                </div>
                            </TableCell>
                            <TableCell className='pl-4'>$38</TableCell>
                            <TableCell className='pl-4'>
                                <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"01"} type='number' />
                            </TableCell>
                            <TableCell className='pl-4'>$38</TableCell>
                            <TableCell className='pl-4'>X</TableCell>
                        </TableRow>
                        <TableRow className='h-[72px] rounded-sm box_shadow font-medium' >
                            <TableCell className='pl-4 max-sm:pl-0'>
                                <div className="flex items-center">
                                    <Image src={"/assets/shop14.svg"} alt='no img found' width={40} height={40}></Image>
                                    <h2 className='pl-4 max-sm:pl-1 max-sm:pr-2'>Chocolate Muffin</h2>
                                </div>
                            </TableCell>
                            <TableCell className='pl-4'>$38</TableCell>
                            <TableCell className='pl-4'>
                                <Input className='w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs' value={"01"} type='number' />
                            </TableCell>
                            <TableCell className='pl-4'>$38</TableCell>
                            <TableCell className='pl-4'>X</TableCell>
                        </TableRow>


                    </TableBody>
                </Table>

                <div className="p-6 rounded-lg py-20">
                    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                        {/* Coupon Code Section */}
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Coupon Code</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                diam pellentesque bibendum non.
                            </p>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Enter Here code"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                />
                                <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-primary_color">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Total Bill Section */}
                        <div className=''>
                            <h3 className="font-semibold text-lg mb-2">Total Bill</h3>
                            <div className="p-4 rounded-md space-y-2 border border-gray-300">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span >Cart Subtotal</span>
                                    <span className="font-medium">$120.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping Charge</span>
                                    <span className="font-medium">$0.00</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total Amount</span>
                                    <span>$205.00</span>
                                </div>
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-orange-400 text-white rounded hover:bg-primary_color">
                                <Link href="/checkout"> Proceed to Checkout</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart