import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaRegClock } from 'react-icons/fa';  // Import clock icon


const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <section className="flex flex-wrap justify-between border-b-2 border-orange-400 px-6 lg:px-24 py-10">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold">
              <span className="text-orange-400">Still</span> need our support?
            </h2>
            <p className="mt-2">
              Don’t wait, make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>

          <div className="flex flex-wrap items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-100 px-4 py-2 rounded-l-md outline-none"
            />
            <button className="bg-orange-400 text-black px-4 py-2 rounded-r-md hover:bg-orange-500">
              Subscribe now
            </button>
          </div>
        </section>

        {/* Main Footer */}
        <section className="flex flex-wrap justify-between mt-10 px-6 lg:px-24">
          {/* About Us */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              fugiat nobis voluptas iure eveniet dolore quo earum.
            </p>

            <div className="mt-4">
  <p className="flex items-center">
    <span className="bg-orange-400 text-white text-xl mr-2 p-2">
      <FaRegClock />
    </span>
    Mon - Sat (8.00 - 6.00)
  </p>
  <p>Sunday - Closed</p>
</div>

          </div>

          {/* Useful Links */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Useful Links</h3>
            <ul>
              <Link href='/About'>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                About
              </li></Link>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                News
              </li>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Partners
              </li>
              <Link href='/ChefTeam'>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Team
              </li></Link>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Menu
              </li>
              <Link href='/SignUp'>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Contacts
              </li></Link>
              
            </ul>
          </div>

          {/* Help */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Help?</h3>
            <ul>
                <Link href='Faq'>
                <li className="my-2 hover:text-orange-400 cursor-pointer">FAQ</li></Link>
              
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Reporting
              </li>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Documentation
              </li>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Support Policy
              </li>
              <li className="my-2 hover:text-orange-400 cursor-pointer">
                Privacy
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="lg:w-1/4">
            <h3 className="text-lg font-bold mb-3">Recent Post</h3>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/assets/fot3.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/assets/fot2.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
            <div className="flex items-center my-2 hover:bg-gray-100/10 p-2 rounded">
              <div className="w-16 h-14 bg-gray-300 mr-3">
                <Image
                  src="/assets/fot1.png"
                  alt="Footer Leaves"
                  width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
                  height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
                  layout="intrinsic" // maintain aspect ratio
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">20 Feb 2022</p>
                <p>Keep Your Business</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-orange-400 h-16 mt-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-24 h-full">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaTwitter />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaInstagram />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 bg-gray-100 text-gray-600 flex items-center justify-center  cursor-pointer hover:text-gray-800 hover:bg-gray-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>

      <Image
        src="/assets/footerLeaves.png"
        alt="Footer Leaves"
        className="absolute bottom-0 right-0 w-24 md:w-60"
        width={106} // width for w-24 (tailwind class w-24 = 6rem = 96px)
        height={100} // height for w-24 (tailwind class w-24 = 6rem = 96px)
        layout="intrinsic" // maintain aspect ratio
      />
    </footer>
  );
};

export default Footer;
