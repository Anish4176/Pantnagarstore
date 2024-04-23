"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import cross from "../public/cross.svg";
import hamburger from "../public/hamburger.svg";
import logo5 from "../public/logo5.png";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  //handling sign out
  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } finally {
      setIsLoading(false);
    }
  };
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" w-full overflow-x-hidden   bg-violet-700 flex justify-around   items-center py-6 ">
      <div>
        <Link href="/">
        <Image src={logo5} className="w-full h-auto" alt="logo"  width={200} height={200} />
        </Link>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex text-white text-lg font-normal ">
        <div className="flex justify-center items-center space-x-3">
          <ul className=" flex lg:space-x-7 space-x-5 justify-center items-center pr-5 cursor-pointer">
            <li className="hover:scale-105">
              <Link href="/" > HOME</Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/buy"> SHOP</Link>
            </li>
            <li className="hover:scale-105">
              <Link href="/sell-products"> SELL PRODUCTS</Link>
            </li >
            {session?.user && <li className="hover:scale-105">
              <Link href="/profile" className="hover:scale-105"> MY PROFILE</Link>
            </li>}
          </ul>
        </div>
        <div>
          {session?.user ? (
            <>
              <div className="flex space-x-4">
                <button
                  className="bg-white hover:bg-slate-100 text-black px-8 py-2 rounded-lg"
                  onClick={handleSignOut}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing Out...' : 'Sign Out'}
                </button>
                <Image
                  className="rounded-full"
                  src={session.user.image}
                  alt="profile image"
                  width={40}
                  height={40}
                />
              </div>
            </>
          ) : (
            <Link href="/login">
            <button
              className="bg-white hover:bg-slate-100 text-black px-8 py-2 rounded-lg"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button> </Link>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <Image
          className="cursor-pointer  h-auto"
          onClick={toggleSidebar}
          src={hamburger}
          alt="menu"
          width={35}
          
          
        />
      </div>
      <div
        className={` ${
          isSidebarOpen ? "translate-x-0" : " translate-x-full"
        }  bg-white overflow-x-hidden right-0 flex-col gap-5 items-start justify-start py-12 px-8 h-[100vh] ease-in-out duration-300 fixed top-0 z-10  w-[60%]`}
      >
        <Image
          className="cursor-pointer absolute right-5 top-5"
          src={cross}
          alt="cross"
          width={40}
          height={40}
          onClick={toggleSidebar}
        />
        <div className="mt-10 text-lg">
          <ul className="flex-col space-y-4 ">
            <li className="hover:text-purple-600">
              <Link onClick={toggleSidebar} href="/"> HOME</Link>
            </li>
            <li className="hover:text-purple-600">
              <Link onClick={toggleSidebar} href="/buy"> SHOP</Link>
            </li>
            <li className="hover:text-purple-600">
              <Link onClick={toggleSidebar} href="/sell-products"> SELL PRODUCTS</Link>
            </li>
            {session?.user && <li className="hover:text-purple-600">
              <Link onClick={toggleSidebar} href="/profile"> MY PROFILE</Link>
            </li>}
          </ul>
        </div>
        <div>
          {session?.user ? (
            <>
              <div className="flex gap-4">
                <button onClick={() => {toggleSidebar(); signOut();}} className="border-2 rounded-md px-4 py-2 w-full mt-10 text-purple-600 hover:bg-purple-600 hover:text-white border-purple-600">Sign out</button>
           </div>
            </>
          ) : (
            <Link href="/login">
            <button onClick={toggleSidebar} className="border-2 rounded-md px-4 py-2 w-full mt-10 text-purple-600 hover:bg-purple-600 hover:text-white border-purple-600" >Sign in</button></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
