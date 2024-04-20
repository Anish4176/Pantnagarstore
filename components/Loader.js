// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="cursor-pointer animate-pulse bg-white shadow-md rounded-md duration-500 w-full">
      <div className="animate-pulse md:h-64 w-[100%] h-52 object-cover rounded-t-md      bg-black/30"></div>
      <div className="px-1 md:px-2 py-1 md:py-3 w-full ">
        <div className=" rounded-sm h-16">
        <div className="text-gray-400  uppercase text-[10px] bg-black/30 animate-pulse h-3"></div>
        <p className="text-base my-2 font-normal text-gray-600 md:font-medium bg-black/30 animate-pulse truncate block h-3 capitalize"></p>
        <div className="flex items-center h-5 md:h-8 bg-black/30 animate-pulse my-2">
          <p className="text-base md:text-lg font-medium md:font-semibold text-black cursor-auto my-2 md:my-3"></p>
          <div className="  px-3 md:px-4 py-1 md:py-2 text-center">
            <div className="text-[10px] md:text-[13px] text-white"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

