"use client";
import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const SearchCards = ({ searchText }) => {
  const [totalproducts, settotalproducts] = useState(null);
  useEffect(() => {
    const handleproduct = async () => {
      try {
        const response = await fetch("/api/cards"); //fetching details of cards(products)
        const data = await response.json();
        settotalproducts(data);
      } catch (e) {
        console.log("Failed to fetch the products");
      }
    };
    handleproduct();
  }, []);
  const filteredProducts = () => {
    const regex = new RegExp(searchText, "gi");
    const result = totalproducts.data.filter((product) =>
      product.productname.match(regex) || product.category.match(regex)
    );
    settotalproducts(result);
  };
  return (
    <div className="my-16">
      <br />
      <div className="w-[100%] flex flex-wrap justify-center items-center gap-x-10 mt-7 gap-y-5">
        {/* {totalproducts &&  console.log(totalproducts.data.length)} */}

        {totalproducts ? (
          totalproducts.data.map((value) => {
            return (
              <Card
                key={value._id}
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
            );
          })
        ) : (
          <p>Loading Products...</p>
        )}
      </div>
    </div>
  );
};

export default SearchCards;
