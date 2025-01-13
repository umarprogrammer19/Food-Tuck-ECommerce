'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import MainBreadcum from '@/components/Breadcum/MainBreadcum';
import Link from 'next/link';

interface CartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number; // Defaults to 1, but always required here for calculations
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Fetch cart items from localStorage on component mount
    useEffect(() => {
        try {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
            // Ensure quantity is always set to 1 if missing
            const normalizedCart = storedCart.map(item => ({
                ...item,
                quantity: item.quantity || 1,
            }));
            setCartItems(normalizedCart);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
        }
    }, []);

    // Update localStorage with new cart data
    const updateLocalStorage = (updatedCart: CartItem[]) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Handle quantity changes
    const handleQuantityChange = (index: number, quantity: number) => {
        const updatedItems = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    // Remove an item from the cart
    const handleRemoveItem = (index: number) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
        window.location.reload();
    };

    // Calculate subtotal for a single item
    const calculateSubtotal = (price: number, quantity: number) => {
        // Ensure price and quantity are valid numbers
        return (price * Math.max(1, quantity)).toFixed(2);
    };

    // Calculate the total amount
    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + parseFloat(calculateSubtotal(item.price, item.quantity)), 0);

    return (
        <div>
            <MainBreadcum name="Shopping Cart" pageName="Shopping Cart" />
            <div className="w-[80%] m-auto max-lg:w-[95%]">
                {cartItems.length > 0 ? (
                    <>
                        {/* Cart Table */}
                        <Table className="mt-20 mb-10 max-sm:text-xs">
                            <TableHeader className="h-[72px] rounded-sm box_shadow">
                                <TableRow className="border-none outline-none">
                                    <TableHead className="pl-4">Product</TableHead>
                                    <TableHead className="pl-4">Price</TableHead>
                                    <TableHead className="pl-4">Quantity</TableHead>
                                    <TableHead className="pl-4">Subtotal</TableHead>
                                    <TableHead className="pl-4">Remove</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cartItems.map((item, index) => (
                                    <TableRow
                                        key={item.id}
                                        className="h-[72px] rounded-sm box_shadow font-medium"
                                    >
                                        <TableCell className="pl-4 max-sm:pl-0">
                                            <div className="flex items-center">
                                                <Image
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                />
                                                <h2 className="pl-4 max-sm:pl-1 max-sm:pr-2">{item.name}</h2>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pl-4">${item.price.toFixed(2)}</TableCell>
                                        <TableCell className="pl-4">
                                            <Input
                                                className="text-black-500 w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs"
                                                value={item.quantity || 1}
                                                type="number"
                                                min={1}
                                                onChange={(e) =>
                                                    handleQuantityChange(index, parseInt(e.target.value, 10) || 1)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="pl-4">
                                            ${calculateSubtotal(item.price, item.quantity)}
                                        </TableCell>
                                        <TableCell className="pl-4">
                                            <button
                                                className="text-red-500 hover:underline"
                                                onClick={() => handleRemoveItem(index)}
                                            >
                                                X
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        {/* Cart Summary Section */}
                        <div className="p-6 rounded-lg py-20">
                            <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                                {/* Coupon Code Section */}
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Coupon Code</h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Enter a valid coupon code to get discounts.
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-300"
                                        />
                                        <button className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                {/* Total Bill Section */}
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Total Bill</h3>
                                    <div className="p-4 rounded-md space-y-2 border border-gray-300">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Cart Subtotal</span>
                                            <span>${calculateTotal().toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Shipping Charge</span>
                                            <span>$20.00</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total Amount</span>
                                            <span>${(calculateTotal() + 20).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-500">
                                        <Link href="/Checkout">Proceed to Checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // Empty Cart Message
                    <div className="mt-20 text-center">
                        <h2 className="text-xl font-semibold">Your cart is empty!</h2>
                        <Link href="/" className="text-orange-500 hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;