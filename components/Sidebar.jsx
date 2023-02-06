import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="inline-block p-3 text-white bg-purple-800 rounded-lg cursor-pointer">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="inline-block p-3 my-4 text-white bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="inline-block p-3 my-4 text-white bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="inline-block p-3 my-4 text-white bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="inline-block p-3 my-4 text-white bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="w-full ml-20">{children}</main>
    </div>
  );
};

export default Sidebar;