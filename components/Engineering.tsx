'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <div
      id="engineering"
      className="relative w-full h-screen bg-[#113854] text-white select-none"
    >
      <div className="group">
        <div className="absolute top-[42%] sm:top-[32%] left-[45%] sm:left-[47%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(90deg)" }}
            className="h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 bg-white"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[35%] sm:top-[17%] left-[30%] sm:left-[43%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WiFI Connection Assistance
        </div>
        <div className="absolute top-[43%] sm:top-[35%] left-[25%] sm:left-[28%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(45deg)" }}
            className="h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 bg-white"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[38%] sm:top-[22%] left-[13%] sm:left-[23%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Electrical Issues
        </div>
        <div
          className="absolute top-[43%] sm:top-[35%] left-[63%] sm:left-[62%] bg-white h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[38%] sm:top-[24%] left-[60%] sm:left-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Maintenance and Repair
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-3xl md:text-7xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 0.8 }}
        >
          Engineering
        </motion.div>
        <div
          className="absolute top-[50%] sm:top-[50%] left-[16%] sm:left-[25%] bg-white h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(0deg)" }}
        ></div>
        <div
          className="absolute top-[57%] sm:top-[68%] left-[45%] sm:left-[47%] bg-white h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div
          className="absolute top-[50%] sm:top-[50%] left-[67%] sm:left-[65%] bg-white h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(0deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[52%] sm:top-[48%] left-[5%] sm:left-[12%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Plumbing Services
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[62%] sm:top-[79%] left-[47%] sm:left-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          HVAC
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[52%] sm:top-[48%] left-[70%] sm:left-[76%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          TV Assistance
        </div>
      </div>
    </div>
  );
}
