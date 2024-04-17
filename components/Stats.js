'use client'
import React from "react";
import { useEffect, useState } from "react";
const Stats = () => {
  const [totalproducts, settotalproducts] = useState(null);
  const [user, setuser] = useState(null);
  useEffect(() => {
    const handleproduct = async () => {
      try{
        const response = await fetch("/api/cards");     //fetching details of cards(products)
        const data = await response.json();
        settotalproducts(data); 
        const user1 = await fetch("/api/user");     //fetching details of cards(products)
        const userdata = await user1.json();
        setuser(userdata);

      }catch(e){
        console.log("Failed to fetch the products");
      }   
    };
    handleproduct();
  }, []);
  return (
<div>
  <div className="bg-gray-50 py-16 md:py-16 md:pt-32 md:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Explore the Journey of Our Platform
        </h2>
        
      </div>
    </div>
    <div className="mt-10 pb-1">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Registered Users
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-purple-600">
                {user? (
                    `${user.length + 23 }+`
                  ):(
                    <div className="text-purple-600 text-xs">
                      Loading...
                    </div>
                  )}
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Products Listed
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-purple-600">
                {totalproducts? (
                    `${totalproducts.length }+`
                  ):(
                    <div className="text-purple-600 text-xs">
                      Loading...
                    </div>
                  )}
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Sellars
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-purple-600">
                {user? (
                    `${user.length }+`
                  ):(
                    <div className="text-purple-600 text-xs">
                      Loading...
                    </div>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Stats;
