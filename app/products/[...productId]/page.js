"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import instagram from "@/public/instagram.svg";
import email from "@/public/email.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";
import SingleproductLoader from "@/components/SingleproductLoader";

const ProductDisplay = ({ params }) => {
  const router = useRouter();
  const [singleProduct, setsingleProduct] = useState(null);
  const Productid = params.productId[0]; //getting the product id from the url
  useEffect(() => {
    const handleproduct = async () => {
      try {
        const response = await fetch(
          `/api/get-product/?Productid=${Productid}`
        ); //fetching single product details from the api
        const product = await response.json();
        console.log(product.data);
        setsingleProduct(product.data);
      } catch (e) {
        console.log("Failed to fetch the products");
      }
    };
    handleproduct();
  }, [Productid]);

  return (
    <div className="min-h-[100vh]">
      {singleProduct ? (
        <div className="min-h-[100vh] mt-1 md:mt-8 py-8 mb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4  justify-center items-center">
              <div className="md:flex-1 px-4">
                <div className="md:h-[75vh] rounded-lg bg-gray-700 dark:bg-gray-700 mb-4">
                  <Image                   
                    className="w-full h-full object-fill rounded-lg"
                    src={singleProduct.productimage}
                    width={400}
                    height={600}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4 ">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {singleProduct.productname}
                </h2>
                <hr className="w-[50%] md:w-[25%] my-5 border-t-2  border-gray-600 " />
                <div className="flex mb-4">
                  <div className="mr-4 mt-2">
                    <span className="text-gray-800 font-medium text-3xl">
                      ₹{singleProduct.price}{" "}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 text-base">
                    Product Condition :{" "}
                  </span>
                  <span className=" text-gray-700 ">
                    {singleProduct.condition}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 text-base">
                    Product Category :{" "}
                  </span>
                  <span className=" text-gray-700 ">
                    {singleProduct.category}{" "}
                  </span>
                </div>

                <div class=" mb-4">
                  <div class="bg-yellow-200  py-4 pl-4 md:pl-5 shadow-md rounded-md flex flex-col gap-1">
                    <p class="text-gray-600 text-sm md:text-base">
                      &#10004; Let&apos;  s keep our community friendly!
                    </p>
                    <p class="text-gray-600 text-sm md:text-base">
                      &#10004; Always communicate with respect and courtesy.
                    </p>
                    <p class="text-gray-600 text-sm md:text-base">
                      &#10004; Respect differences, embrace kindness.
                    </p>
                  </div>
                </div>

                <div className="flex  my-6">
                  <div className="w-full  flex flex-wrap justify-between items-center gap-3 md:gap-4">
                    <Link
                      target="_blank"
                      href={`mailto:${singleProduct.sellar.email}`}
                      className="hover:shadow-form w-[100%] flex justify-center items-center rounded-md  hover:bg-[#6e38c4]  bg-[#6c28d9e8] py-3 px-8 text-center text-lg  font-sans tracking-wide text-white outline-none"
                    >
                      <Image
                        src={email}
                        alt="icon"
                        width={25}
                        height={25}
                        className="mr-3"
                      />
                      Email the Seller
                    </Link>
                    {singleProduct.instagramHandle ? ( <Link
                      target="_blank"
                      href={`${singleProduct.instagramHandle}`}
                      className="hover:shadow-form flex justify-center items-center rounded-md   bg-instagram-pattern py-3 px-8 text-center w-[100%] text-lg  font-sans tracking-wide text-white outline-none"
                    >
                      <Image
                        src={instagram}
                        alt="icon"
                        width={25}
                        height={25}
                        className="mr-3"
                      />
                      Contact on Instagram
                    </Link>):(
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:my-12">
            <span className=" font-bold text-gray-700 text-xl md:text-3xl">
              Product Description:
            </span>
            <p className="text-gray-600  text-sm mt-2">
              {singleProduct.description}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <SingleproductLoader/>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
