"use client";
import Profileproduct from "@/components/Profileproduct";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Page = () => {
  const { data: session } = useSession();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    //fetching products of the current user
    const fetchProfileProducts = async () => {
      try {
        const response = await fetch(`/api/cards/${session?.user.id}`);
        const data = await response.json();

        setproducts(data);
      } catch (error) {
        console.log("Failed to fetch the profile products");
      }
    };

    if (session?.user.id) fetchProfileProducts();
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
    <div className="min-h-[100vh]  ">
      <div className="mt-20 ml-32">
        <h1 className="text-6xl md:text-6xl pl-2 my-2 border-l-4  font-sans font-bold border-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          My Profile
        </h1>
        <p className="text-xl mt-4">Welcome to your personalised profile</p>
      </div>
      <div className="w-[100%] flex flex-wrap justify-center items-center gap-x-10 mt-7 gap-y-5">
        {products
          ? (products.map((item) => {
              <Profileproduct
                key={item._id}
                productImage={item.productimage}
                category={item.category}
                productname={item.productname}
                price={item.price}
                sellarId={item.sellar._id}
                productId={item._id}
                handleDelete={() => handleDelete(item._id)}
              />;
            }))
          :( Array.from({ length: 9 }, (_, i) => (
              <div
                className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center"
                key={i}
              >
                <Loader />
              </div>
            )))}
      </div>
    </div>
  );
};

export default Page;
