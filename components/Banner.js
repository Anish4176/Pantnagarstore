import React from "react";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <section className="bg-black overflow-visible my-0 py-24 ">
        <div className="text-white items-center text-center flex flex-col">
          <h2 className="font-bold text-2xl lg:text-4xl">
            Unlock Campus Deals
          </h2>
          <p className=" mx-3 mt-6 max-w-xl text-lg md:text-xl leading-8 text-slate-400">
            Explore a treasure trove of pre-owned goods right on your campus.
            Discover great bargains today!
          </p>
          <Link
            href="/buy"
            className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-7 px-5 py-4 rounded-lg tracking-wide text-white"
          >
            <div className="ml-2 flex">
              Buy Now{" "}
              <span>
                <Image src={arrow} alt="" width={0} height={0} className="" />
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
