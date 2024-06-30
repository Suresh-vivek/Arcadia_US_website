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
        <div className="text-sm absolute sm:top-[16%] sm:left-[14%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guests will be able to request more water via chatbot.
          <br />
          Housekeeping runner will receive the ticket order and complete
        </div>
        <div
          className="absolute sm:top-[26%] sm:left-[34%] border-2 border-dashed border-black w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
        <div className="absolute top-[30%] left-[25%] sm:left-[33%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1>Water Bottle</h1>
        </div>
        <div
          style={{ transform: "rotate(50deg)" }}
          className="absolute top-[39%] left-[38%] h-1 w-16 bg-[#070708] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div className="text-sm absolute sm:top-[11%] sm:left-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Once guest makes extra toiletries request, ticket will be sent to the
          housekeeper who
          <br />
          has the closest proximity to the guest will receive the ticket order.
        </div>
        <div
          className="absolute sm:top-[20%] sm:left-[59%] border-2 border-dashed border-black w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="absolute top-[35%] left-[35%] sm:left-[50%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(125deg)" }}
            className="h-1 w-36 bg-[#070708]"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[23%] left-[73%] sm:left-[56%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Toiletries
        </div>
        <div
          className="absolute top-[44%] sm:top-[42%] left-[58%] sm:left-[62%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(150deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[35%] left-[77%] sm:left-[69%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Turndown Service
        </div>
        <div className="text-sm absolute sm:top-[46%] sm:left-[66%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guest will be able to set a time for turndown
          <br />
          Service via chatbot
        </div>
        <div
          className="absolute sm:top-[42%] sm:left-[74%] border-2 border-dashed border-black w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-3xl md:text-5xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          HouseKeeping
        </motion.div>

        <div
          className="absolute top-[55%] sm:top-[48%] left-[10%] sm:left-[30%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(20deg)" }}
        ></div>
        <div
          className="absolute top-[63%] left-[5%] sm:left-[38%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(130deg)" }}
        ></div>
        <div
          className="absolute top-[60%] sm:top-[60%] left-[50%] sm:left-[60%] bg-[#070708] h-1 w-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(50deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[60%] sm:top-[42%] left-[5%] sm:left-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Towel Delivery
        </div>
        <div className="text-sm absolute sm:top-[82%] sm:left-[25%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guests able to make baby crib requests. Runner will receive the
          <br />
          ticket and complete the delivery.
        </div>
        <div
          className="absolute sm:top-[50%] sm:left-[22%] border-2 border-dashed border-black w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[79%] sm:top-[70%] left-[5%] sm:left-[36%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Baby Crib
        </div>
        <div className="text-sm absolute sm:top-[55%] sm:left-[7%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        If the guests requests for extra towel delivery to their room, a
          <br />
          ticket will be created. The ticket order will be assigned to the
          <br />
          housekeeping runner who has the closest proximity and lowest
          <br />
          work orders on queue. This is will increase the hotel&apos;s efficiency
        </div>
        <div
          className="absolute sm:top-[78%] sm:left-[37%] border-2 border-dashed border-black w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[66%] left-[60%] sm:left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Laundry and Dry Cleaning
        </div>
        <div className="text-sm absolute sm:top-[78%] sm:left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Paid laundry and dry cleaning service available via chatbot
        </div>
        <div
          className="absolute sm:top-[74%] sm:left-[69%] border-2 border-dashed border-black w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
      </div>
    </div>
  );
}
