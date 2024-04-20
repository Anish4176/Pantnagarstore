import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Profileproduct = ({
  productImage,
  category,
  productname,
  price,
  sellarId,
  handleDelete,
}) => {
  const { data: session } = useSession();
  const pathname = usePathname();
 
  return (
    <div className="w-full  bg-white shadow-md rounded-xl  hover:shadow-xl">
      <div>
        <Image
          src={productImage}
          alt="Product"
          objectFit="cover"
          width={200}
          height={200}
          className="md:h-64 w-[100%] h-52 object-cover rounded-t-md"
        />
        <div className="px-4 py-3 w-full">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {category}
          </span>
          <p className="text-base font-medium text-black truncate block capitalize">
            {productname}
          </p>

          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ₹{price}
            </p>
          </div>
        </div>
        {session?.user?.id === sellarId && pathname == "/profile" && (
          <div className="flex w-full justify-center items-center ">
            <p
              onClick={handleDelete}
              className="cursor-pointer text-lg font-semibold text-red-500 text-center  my-3"
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profileproduct;
