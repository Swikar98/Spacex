"use client";
import React, { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {BsGlobeAmericas } from 'react-icons/bs'
import Link from "next/link";
const languages = [
  {id:1 , flag:"fi fi-us", route: "/en"},
  {id:2 , flag:"fi fi-np", route: "/np"}
 
];
const LanguageSelectBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex flex-col justify-center items-center  relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="  cursor-pointer p-2 "
        >
          <span className=" text-2xl ">
            <BsGlobeAmericas/>
          </span>
        </div>
        <div
          className={`flex flex-col bg-orange-100 w-16  rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-8 `}
        >
          {languages.map((item) => (
            <div
              key={item}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center  
              p-2  hover:bg-orange-300 cursor-pointer 
              `}>
              <Link href={item.route}>
                <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 fixed opacity-50 z-0 inset-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default LanguageSelectBox;
