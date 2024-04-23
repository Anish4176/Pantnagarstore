  "use client";
  import React, { useEffect, useState } from "react";
  import Card from "./Card";
  import Link from "next/link";
  import arrow from "@/public/arrow.svg";
  import Image from "next/image";
  import Loader from "./Loader";
  

  const Cards = () => {
    const [totalproducts, settotalproducts] = useState(null);
    useEffect(() => {
      const handleproduct = async () => {
        try{
          const response = await fetch("/api/cards");     //fetching details of cards(products)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();  
          
          settotalproducts(data);

        }catch(e){
          console.log("Failed to fetch the products",e.message);
        }   
      };
      handleproduct();
    }, []);

    return (
      <div className="my-16 px-2 md:px-10">
        <div>
          <h1 className="text-3xl md:text-4xl  font-semibold text-center">
            Featured Products
          </h1>
          <hr className="w-[50%] md:w-[25%] mx-auto mt-2 border-t border-gray-600 " />
        </div>
        <br />
        <div className="w-[100%] flex flex-wrap justify-center items-center  md:mt-5 gap-y-3 md:gap-y-5">
          {/* {totalproducts &&  console.log(totalproducts.data.length)} */}

          {Array.isArray(totalproducts) ?
            (totalproducts.slice(0,8).map((value) => {
              return (
                <div className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center" key={value._id}>
                <Card
                  productId={value._id}
                  productname={value.productname}
                  category={value.category}
                  price={value.price}
                  tag={value.tag}
                  productCondition={value.condition}
                  productImage={value.productimage}
                  description={value.description}
                  instragramHandle={value.instragramHandle}
                  sellar={value.sellar}
                />
                </div>
              );
            })) :
              
                (
                  Array.from({length: 8}, (_, i) => (
                    <div className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center" key={i}>
                    <Loader/>
                    </div>
                  ))
                )
            
              
            
          }
        </div>
        <div className="w-full">
      <Link href="/buy"> <button className="border-2 flex items-center justify-center  rounded-full px-4 py-2 mx-auto  mt-7 md:mt-10 hover:bg-purple-700 transition border-purple-600 bg-purple-600 text-white" >Show More Products 
      <span>
      <Image
        src={arrow}
        alt=""
        width={0}
        height={0}
        className=""
      /></span>
      </button></Link>
        </div>
      </div>
    );
  };

  export default Cards;
