'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LangSwitcher from "../components/LangSwitch";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false); 
  };

  return (
    <header className="flex justify-between items-center w-full mb-8 mx-auto py-5">
      <div className="flex justify-between items-center space-x-8 w-full">
        <Link href={"/"}>
          <Image
            src="/assets/logo.svg"
            alt="LWS Xstream Logo"
            height={100}
            width={200}
            className="h-6"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-color-purple font-semibold">
            TOP STREAMING
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            GAMES
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            TEAMS
          </a>
          {/* Search Bar and User Avatar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <Image
              src="/assets/avatar.png"
              alt="User Avatar"
              height={100}
              width={100}
              className="w-8 h-8 rounded-full"
            />
          </div>
          <LangSwitcher />
        </nav>
        {/* Mobile Drawer Button */}
        <button
          onClick={toggleDrawer}
          className="md:hidden p-2 bg-gray-800 text-white rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`${isDrawerOpen ? "block" : "hidden"} md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-10`}
        onClick={closeDrawer} 
      >
        <div className="w-2/3 bg-white p-4 absolute top-0 right-0 h-full">
          <button
            onClick={closeDrawer}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-color-purple font-semibold">
              TOP STREAMING
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              GAMES
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              TEAMS
            </a>
            {/* Search Bar and User Avatar */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
                />
                <svg
                  className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <Image
                src="/assets/avatar.png"
                alt="User Avatar"
                height={100}
                width={100}
                className="w-8 h-8 rounded-full"
              />
            </div>
            <LangSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}