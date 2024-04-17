import React from "react";
import { FooterLinks } from "@/constant";
import Link from "next/link";
import logo5 from "../public/logo5.png";
import Image from "next/image";
import footerlogo from "@/public/footerlogo.png";
const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row py-10 md:py-14 justify-around items-center w-[100%] bg-gray-100 gap-10 ">
        <div className="text-center">
          <div>
            <Link href="/">
              <Image
                src={footerlogo}
                alt="logo"
                width={210}
                height={0}
                className="pl-10 pr-6 pt-10 pb-3"
              />
            </Link>
          </div>
          <div className="">

          <p className="text-xs">The Ultimate Marketplace 
          <br/>
           for College Deals!</p>
          </div>
          
        </div>
        {/* FOOTER LINK  */}
        {FooterLinks.map((item) => {
          return (
            <div className="flex-col space-y-2 items-center justify-center text-center">
              <div className="text-base ">
               {item.title}
              </div>
              {item.links.map((link) => {
                return (
                  <div className="text-gray-500 text-sm mt-1 md:text-base hover:text-black">
                    <Link href={link.url}>{link.title} </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default Footer;
