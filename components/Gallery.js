import React from "react";
import Image from "next/image";
import category from "../public/category.jpeg";

const Gallery = () => {
  return (
    <div>
      <div className="my-14 mx-10">
        <div>
          <h1 className="text-4xl font-semibold text-center">
            Our Happy Buyers
          </h1>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
          <div className="group cursor-pointer relative">
            <Image
              src={category}
              alt="Image 1"
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
