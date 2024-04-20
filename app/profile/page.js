"use client";
import Profileproduct from "@/components/Profileproduct";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
const Page = () => {
  const router= useRouter();
  const { data: session } = useSession();
  const [products, setproducts] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    //fetching products of the current user
    const fetchProfileProducts = async () => {
      try {
        setisLoading(true);
        const response = await fetch(`/api/cards/${session?.user.id}`);
        const data = await response.json();

        setproducts(data);
      } catch (error) {
        console.log("Failed to fetch the profile products");
      } finally{
        setisLoading(false);
      }
    };

    if (session?.user.id){
      fetchProfileProducts();
    } 
    else{
      router.push('/')
    }
  }, [session]);

  //handling delete products
  const handleDelete = async (productId) => {
    const isConfirmed = confirm(
      "Are you sure you want to delete this product?"
    );
    if (isConfirmed) {
      try {
        const response = await fetch(`/api/delete-product/${productId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const filteredProducts = products.filter((item) => {
            return item._id !== productId;
          });
          setproducts(filteredProducts);
        }
      } catch (err) {
        console.log("Failed to delete the product");
      }
    }
  };
  return (
    <div className="min-h-[100vh] px-2 md:px-10 ">
      <div className="mt-10 md:mt-20 md:ml-32 ml-4">
        <h1 className="md:text-6xl text-5xl py-3 pl-2 my-2 border-l-4  font-sans font-bold border-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
        My Products
        </h1>
        <p className="text-xl mt-4">Welcome to your personalised profile</p>
      </div>
      <div className="w-[100%] flex flex-wrap justify-center items-center mt-7 mb-5  md:mt-10 gap-y-3 md:gap-y-5 ">
        {isLoading ? (
          Array.from({ length: 8 }, (_, i) => (
            <div
              className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center"
              key={i}
            >
              <Loader />
            </div>
          ))
        ): products && products.length >0 ? (
          products.map((item) => {
            return (
              <div className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center" key={item._id}>
              <Profileproduct
                productImage={item.productimage}
                category={item.category}
                productname={item.productname}
                price={item.price}
                sellarId={item.sellar._id}
                productId={item._id}
                handleDelete={() => handleDelete(item._id)}
              />
              </div>
            );
          })
        ):(
          <div className="text-2xl font-semibold text-center w-full">No products found</div>
        )

        }

        {/* {products && products.length > 0
          ? products.map((item) => {
              return (
                <div className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center" key={item._id}>
                <Profileproduct
                  
                  productImage={item.productimage}
                  category={item.category}
                  productname={item.productname}
                  price={item.price}
                  sellarId={item.sellar._id}
                  productId={item._id}
                  handleDelete={() => handleDelete(item._id)}
                />
                 </div>
              );
            })
          : Array.from({ length: 8 }, (_, i) => (
              <div
                className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center"
                key={i}
              >
                <Loader />
              </div>
            ))} */}

          
      </div>
    </div>
  );
};

export default Page;
