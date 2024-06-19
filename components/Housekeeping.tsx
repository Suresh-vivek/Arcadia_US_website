"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Housekeeping() {
  return (
    <div
      id="housekeeping"
      className="relative w-full h-screen bg-[#e8e8e8] text-[#070708] select-none"
    >
      <div className="group">
        <div className="flex flex-col justify-center items-center gap-6 absolute top-[35%] left-[25%] sm:left-[35%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1>Water Bottle</h1>
          <div
            style={{ transform: "rotate(90deg)" }}
            className="h-1 w-12 bg-[#070708]"
          ></div>
        </div>
        <div className="absolute top-[35%] left-[35%] sm:left-[50%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(125deg)" }}
            className="h-1 w-48 bg-[#070708]"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[20%] left-[73%] sm:left-[58%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Toiletries
        </div>
        <div
          className="absolute top-[44%] sm:top-[42%] left-[58%] sm:left-[67%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(150deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[35%] left-[77%] sm:left-[73%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Turndown Service
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-3xl md:text-7xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          HouseKeeping
        </motion.div>

        <div
          className="absolute top-[55%] sm:top-[58%] left-[10%] sm:left-[28%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(150deg)" }}
        ></div>
        <div
          className="absolute top-[66%] left-[5%] sm:left-[38%] bg-[#070708] h-1 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(130deg)" }}
        ></div>
        <div
          className="absolute top-[60%] sm:top-[63%] left-[50%] sm:left-[63%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[60%] sm:top-[62%] left-[5%] sm:left-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Towel Delivery
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[79%] sm:top-[77%] left-[5%] sm:left-[37%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Baby Crib
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[70%] left-[60%] sm:left-[63%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Laundry and Dry Cleaning
        </div>
      </div>
    </div>
  );
}
