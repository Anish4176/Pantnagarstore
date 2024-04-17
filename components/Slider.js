import React from "react";
import Image from "next/image";
import hero from "../public/hero1.png";
import Link from "next/link";
const Slider = () => {
  return (
    <div className="h-[90vh] flex items-center w-[100%] bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 relative overflow-hidden ">
      <div className=" flex space-x-6 items-center justify-center h-[100vh] px-4 md:px-10">
        <div className="text-center md:text-left lg:w-[50%] -mt-12 lg:mt-0">
          <h1 className="mb-4 md:mb-12  text-[2.9rem] md:text-[3.2rem] font-semibold text-white">
            Welcome
            {" "}
            <br className="lg:hidden"/>
              to Pantnagar Marketplace!
          </h1>
          <p className="mb-14 text-base md:text-2xl font- tracking-wide text-white">
          Your campus marketplace for safe buying and selling of new and used products at best prices!
          </p>
          <Link
            href="/buy"
            className="rounded-md bg-white px-4 py-3 md:px-6 md:py-4 text-sm md:text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            Browse Products
          </Link>
          <Link
            href="/sell-products"
            className="rounded-md mx-4 bg-white px-4 py-3 md:px-6 md:py-4 text-sm md:text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            Start Selling
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Image src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
