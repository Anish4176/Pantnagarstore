import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";

const Card = ({productId,productname,category,productCondition,sellar,tag,price, productImage,description,instragramHandle}) => {
  const router= useRouter();
  const handleProductClick = () => {
    router.push(`/products/${productId}`);
  }
 // Truncate function
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div onClick={handleProductClick} className="cursor-pointer w-full   bg-white shadow-md rounded-md duration-500 md:hover:scale-105 hover:shadow-xl">
      <div >
        <Image
          src={productImage}
          alt="Product"
          objectFit="cover"
          width={200}
          height={200}
          className="md:h-64 w-[100%] h-52 object-cover rounded-t-md"
        />
        <div className="pl-2 md:pl-4 py-1 md:py-3 w-full">
          <span className="text-gray-400 mr-3 uppercase text-[10px] md:text-sm ">{truncateText(category, 15)}</span>
          <p className="text-base font-normal text-gray-600 md:font-medium truncate block capitalize">
          {truncateText(productname, 10)}
          </p>
         
          <div className="flex items-center">
            <p className="text-base md:text-lg font-medium md:font-semibold text-black cursor-auto my-2 md:my-3">
            ₹{price}
            </p>
            
            <div className="ml-auto bg-purple-600 px-3 md:px-4 py-1 md:py-2 text-center">
              <div className="text-[10px] md:text-[13px] text-white">Buy</div>
             
                
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
