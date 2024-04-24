"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import form from "@/public/form.svg";
import spinner from "@/public/spinner.svg";
import { toast } from 'react-toastify';

const Sell = () => {
  const router = useRouter();
  const { data: session } = useSession();

  //if user is not logged in then redirect to home page
  if (!session?.user) {
    redirect("/login");
  }

  const [submitting, setsubmitting] = useState(false);
  const [product_details, setproduct_details] = useState({
    sellarId: session?.user.id,
    productname: "",
    category: "",
    price: "",
    // tag: "",
    condition: "",
    productimage: "",
    description: "",
    instagramHandle: "",
  });

  //function to handle image change
  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) return;
    if (!file.type.includes("image")) {
      return alert("Please select an image file");
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      setproduct_details({ ...product_details, productimage: result });
    };
  };

  //uploading in cloudinary
  const uploadImage = async (imagePath) => {
    try {
      const response = await fetch("/api/uploads", {
        //for uploading in cloudinary
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path: imagePath }),
      });
      if (response.ok) {
        const publishedImageUrl = await response.json(); //contain published cloudinary url of the image
        return publishedImageUrl;
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  //function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);
    try {
      const imageUrl = await uploadImage(product_details.productimage); //getting image url of product from cloudinary
      if (!imageUrl.url) {
        return;
      }
      if (imageUrl.url) {
        const response = await fetch("/api/create-products", {
          //post request for product details submission
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productname: product_details.productname,
            sellarId: product_details.sellarId,
            category: product_details.category,
            price: product_details.price,
            // tag: product_details.tag,
            condition: product_details.condition,
            productimage: imageUrl.url,
            description: product_details.description,
            instagramHandle: product_details.instagramHandle,
          }),
        });
        if(!response.ok){
          toast.error('Something went wrong!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }

        if (response.ok) {
          toast.success('Product Published successfully!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          router.push("/");
        }
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setsubmitting(false);
    }
  };

  //TODO: Protect route if user is not signin

  return (
    <>
      <div className="flex items-center justify-center md:p-12 pb-12 min-h-[100vh] bg-purple-100 ">
        <div className="mx-auto w-full md:max-w-[750px] backdrop-blur-3xl  py-10 px-5 md:py-8 md:px-20">
          {/* form to create a product for sell */}
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-center my-5">
                Sell Your Product
              </h1>
            </div>
            <br />
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={product_details.productname}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    productname: e.target.value,
                  });
                }}
                placeholder="Product Name"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              />
            </div>
            
            {/* product category  */}
            <div className="mb-5">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Category
              </label>
              <select
                name="category"
                id="category"
                value={product_details.category}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    category: e.target.value,
                  });
                }}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              >
                <option value="" disabled selected>
                  Select Product Category
                </option>
                <option value="Textbooks and Study Materials">
                  Textbooks and Study Materials
                </option>
                <option value="Bicycles">Bicycles</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Appliances and Kitchen Items">
                  Appliances and Kitchen Items
                </option>
                <option value="Sports and Fitness">Sports and Fitness</option>
                <option value="Room Essentials">Room Essentials</option>
                <option value="Fashion">Fashion</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {/* product price  */}
            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Price (Rupees)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={product_details.price}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    price: e.target.value,
                  });
                }}
                placeholder="e.g. 199, 349.50"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              />
            </div>
            {/* product tag */}
            {/* <div className="mb-5">
              <label
                htmlFor="tag"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Tag
              </label>
              <input
                type="text"
                name="tag"
                id="tag"
                value={product_details.tag}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    tag: e.target.value,
                  });
                }}
                placeholder="e.g.  #bicycle "
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              />
            </div> */}
            {/* product condition  */}
            <div className="mb-5">
              <label
                htmlFor="condition"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Condition
              </label>
              <select
                value={product_details.condition}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    condition: e.target.value,
                  });
                }}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              >
                <option value="" disabled selected>
                  Select Product Condition
                </option>
                <option value="New">New</option>
                <option value="Fair">Fair</option>
                <option value="Old">Old</option>
              </select>
            </div>
            {/* product images  */}
            <label
              htmlFor="tag"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Product Images
            </label>
            <div className="mb-5 w-full h-60 relative border-2 border-white rounded-md border-dashed p-6">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer "
                required
                accept="image/*"
                onChange={handleImageChange}
              />
              {!product_details.productimage && (
                <div className="text-center h-full flex items-center justify-center flex-col ">
                  <Image className="mx-auto h-12 w-12" src={form} alt="" />

                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer"
                    >
                      <span>Drag and drop</span>
                      <span className="text-indigo-600 "> or browse </span>
                      <span>image to upload</span>
                    </label>
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
              {product_details.productimage && (
                <Image
                  src={product_details.productimage}
                  className="w-full h-full z-60"
                  alt="Product image"
                  fill
                />
              )}
            </div>
            {/* product description */}
            <div className="mb-5">
              <label
                htmlFor="tag"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Product Description
              </label>
              <textarea
                name="description"
                id="description"
                required
                cols="30"
                rows="5"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
                value={product_details.description}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    description: e.target.value,
                  });
                }}
              ></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="tag"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Your Instagram URL{" "}
                <span className="text-sm font-normal">
                  (optional)
                </span>
              </label>
              <input
                type="text"
                name="instagramHandle"
                id="instagramHandle"
                value={product_details.instagramHandle}
                onChange={(e) => {
                  setproduct_details({
                    ...product_details,
                    instagramHandle: e.target.value,
                  });
                }}
                placeholder="https://www.instagram.com/anishsingh443"
                
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6D28D9] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6D28D9] py-3 px-8 text-center text-lg  font-medium text-white outline-none"
              >
                {submitting ? (
                  <div> 
                  <Image
                    src={spinner}
                    alt="Publishing..."
                    className="mx-auto "
                    width={28}
                    heigth={28}
                    
                  />
                </div>
                ) : (
                  "Publish Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sell;
