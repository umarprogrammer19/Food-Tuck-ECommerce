'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart, FaUserAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const fetchCartQuantity = () => {
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalQuantity = storedCart.reduce(
          (total: number, item: { quantity?: number }) => total + (item.quantity || 1),
          0
        );
        setCartQuantity(totalQuantity);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartQuantity(0);
      }
    };

    fetchCartQuantity();
    window.addEventListener("storage", fetchCartQuantity);

    return () => {
      window.removeEventListener("storage", fetchCartQuantity);
    };
  }, []);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-24">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/Menu" className="hover:text-orange-500">
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-orange-500">
            Blog
          </Link>
          <div className="relative group">
            <Link href="/About" className="hover:text-orange-500">
              About
            </Link>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white py-2 rounded">
              <Link href="/ChefTeam" className="block px-4 py-1 hover:bg-orange-400">
                Our Team
              </Link>
            </div>
          </div>
          <Link href="/Shop" className="hover:text-orange-500">
            Shop
          </Link>
          <Link href="/SignUp" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Logo (Centered) */}
        <div className="text-center md:mb-10">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Food<span className="text-white">tuck</span>
          </Link>
        </div>

        {/* Search, Cart, and Auth Icons (Right-Aligned) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-orange-500 z-10" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-orange-500"
            />
          </div>

          {/* Cart Icon with Quantity */}
          <Link href="/Cart" className="relative">
            <FaShoppingCart size={20} className="text-white" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </Link>

          {/* User Icon */}
          <Link href="/SignUp">
            <FaUserAlt size={20} className="text-white" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-orange-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-orange-500">
            Home
          </Link>
          <Link href="/Menu" className="block hover:text-orange-500">
            Menu
          </Link>
          <Link href="/Blog" className="block hover:text-orange-500">
            Blog
          </Link>
          <Link href="/About" className="block hover:text-orange-500">
            About
          </Link>
          <Link href="/Shop" className="block hover:text-orange-500">
            Shop
          </Link>
          <Link href="/SignUp" className="block hover:text-orange-500">
            Contact
          </Link>

          {/* Search Bar (Mobile) */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-orange-500 z-10" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white px-4 py-2 pl-10 rounded-full focus:outline-none border border-orange-500"
            />
          </div>

          {/* Icons (Mobile) */}
          <div className="flex justify-around mt-4 space-x-4">
            <Link href="/Cart" className="relative">
              <FaShoppingCart size={20} className="text-white" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </Link>
            <Link href="/SignUp">
              <FaUserAlt size={20} className="text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}