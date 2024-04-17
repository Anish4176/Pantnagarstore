import React from "react";
import Image from "next/image";
import category from "../public/category.jpeg";
const Category = () => {
  return (
    <div className="my-14">
      <div>
        <h1 className="text-3xl md:text-4xl  font-semibold text-center">
          Collections
        </h1>
        <hr className="w-[50%] md:w-[25%] mx-auto mt-2 border-t border-gray-600 " />
      </div>
      <br />
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 ">
        <div className="relative rounded overflow-hidden">
          <Image src={category} alt="Category" className="w-full" objectFit="cover" />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Hanging Planters
          </p>
        </div>
        <div className="relative rounded overflow-hidden">
          <Image src={category} alt="Category" className="w-full" objectFit="cover" />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Hanging Planters
          </p> 
        </div>
        <div className="relative rounded o  verflow-hidden">
          <Image src={category} alt="Category" className="w-full" objectFit="cover" />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Hanging Planters
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
