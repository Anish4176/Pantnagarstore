"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";

const Buy = () => {
  const [searchText, setsearchText] = useState("");
  const [totalproducts, settotalproducts] = useState(null);
  const [searchedProducts, setsearchedProducts] = useState([]);
  const [searchTimeout, setsearchTimeout] = useState(null);

  useEffect(() => {
    const handleproduct = async () => {
      try {
        const response = await fetch("/api/cards"); // Fetching details of cards (products)
        const data = await response.json();
        settotalproducts(data);
      } catch (e) {
        console.log("Failed to fetch the products");
      }
    };
    handleproduct();
  }, []);

  const filteredProducts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    const result = totalproducts.filter(
      (product) =>
        product.productname.match(regex) || product.category.match(regex)
    );
    setsearchedProducts(result);
  };

  const handleSearch = (e) => {
    clearTimeout(searchTimeout);
    setsearchText(e.target.value);
    setsearchTimeout(
      setTimeout(() => {
        filteredProducts(e.target.value);
      }, 500)
    );
  };

  return (
    <div className="min-h-[100vh]">
      <div className="mx-4">
        <label
          className="mx-auto border-2 mt-10 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center  py-2 px-2  rounded-2xl gap-2  focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search Any Product or Category"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
        </label>
      </div>

      <div className="my-10 ">
        <div className=" flex w-[100%] flex-wrap justify-center items-center md:gap-x-5 gap-y-3 mt-5 md:gap-y-5 md:px-10">
          {searchText ? (
            searchedProducts.length > 0 ? (
              searchedProducts.map((value) => (
                <div
                  className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center"
                  key={value._id}
                >
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
              ))
            ) : (
              <p>Oops! No Products Found.</p>
            )
          ) : totalproducts ? (
            totalproducts.map((value) => (
              <div
                className="w-1/2 md:w-1/3 lg:w-1/4  px-1 md:px-2 flex items-center justify-center"
                key={value._id}
              >
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
            ))
          ) : (
            <p>Loading Products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;
