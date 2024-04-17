import React from "react";
import Image from "next/image";
import dottedLineImage from "../public/curved-dotted-line.svg";

const WorkFlow = () => {
  return (
    <div>
      <section
        id="works"
        className="relative bg-gray-900 py-10 sm:py-16 lg:py-24"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-6 md:py-3">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl text-white md:text-5xl font-semibold text-center">
              How It Works - Buy & Sell
            </h1>
          </div>
          <div className="relative mt-12 lg:mt-20">
          {/* <!-- Horizontal SVG for larger screens --> */}
            <div className="hidden md:block absolute inset-x-0 top-2 px-20 lg:px-28 -z-1">
                <svg width="100%" height="48" viewBox="0 0 875 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24" stroke="#D4D4D8" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12"/>
                </svg>
            </div>
            
            
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Browse Products
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Explore a wide range of available items to find what you need.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Make a Deal
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Contact the seller, negotiate, and finalize your transaction
                  securely.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Sell Your Items
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Become a sellar by listing your products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default WorkFlow;
