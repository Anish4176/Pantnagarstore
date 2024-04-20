import React from "react";

const SingleproductLoader = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="min-h-[100vh] mt-1 md:mt-8 py-8 mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4  justify-center items-center">
            <div className="md:flex-1 px-4 w-[100vw] ">
              <div className="md:h-[75vh] h-[35vh] rounded-lg bg-black/30 animate-pulse  mb-4">
                <div className="w-full h-full    object-fill rounded-lg"></div>
              </div>
            </div>
            <div className="md:flex-1 w-[100vw] px-4 ">
              <h2 className="text-xl md:text-3xl bg-black/30 animate-pulse rounded-sm font-semibold h-9 md:h-14 text-gray-800 mb-2"></h2>

              <div className="flex mb-4 bg-black/30 animate-pulse  h-9">
                <div className="mr-4 mt-2">
                  <span className="text-gray-800  font-medium h-9 text-3xl"></span>
                </div>
              </div>
              <div className="mb-4 bg-black/30 animate-pulse h-6">
                <span className="font-bold  text-gray-700 text-base"></span>
                <span className="  text-gray-700 "></span>
              </div>
              <div className="mb-4 bg-black/30 animate-pulse h-6">
                <span className="font-bold bg-black/30 animate-pulse text-gray-700 text-base"></span>
                <span className=" bg-black/30 animate-pulse text-gray-700 "></span>
              </div>

              <div class=" mb-4 bg-black/30 animate-pulse h-28">
                <div class="   pl-4 md:pl-5  rounded-md flex flex-col gap-1">
                  <p class=" text-sm md:text-base"></p>
                  <p class=" text-sm md:text-base"></p>
                  <p class=" text-sm md:text-base"></p>
                </div>
              </div>

              <div className="flex  my-6 bg-black/30 animate-pulse h-10">
                <div className="w-full bg-black/30 animate-pulse  flex flex-wrap justify-between items-center gap-3 md:gap-4"></div>
              </div>
              <div className="flex  my-6 bg-black/30 animate-pulse h-10">
                <div className="w-full bg-black/30 animate-pulse  flex flex-wrap justify-between items-center gap-3 md:gap-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:my-12  ">
          <span className=" bg-black/30 animate-pulse font-bold text-xl md:text-3xl  "></span>
          <p className=" bg-black/30 animate-pulse text-sm mt-2  h-10"></p>
        </div>
      </div>
    </div>
  );
};

export default SingleproductLoader;
