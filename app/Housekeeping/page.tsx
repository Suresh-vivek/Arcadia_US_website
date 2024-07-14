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
        <div className="text-[7px] sm:text-sm absolute sm:top-[16%] top-[26%] sm:left-[14%] left-[2%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guests will be able to request more water via chatbot.
          <br />
          Housekeeping runner will receive the ticket order and complete
        </div>
        <div
          className="absolute sm:top-[26%] top-[32%] sm:left-[34%] left-[20%] border-2 border-dashed border-black w-6 sm:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
        <div className="absolute top-[35%] sm:top-[30%] left-[15%] sm:left-[33%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1>Water Bottle</h1>
        </div>
        <div
          style={{ transform: "rotate(50deg)" }}
          className="absolute sm:top-[39%] top-[43%] sm:left-[38%] left-[23%] h-1 w-16 bg-[#070708] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div className="sm:text-sm text-[5px] absolute sm:top-[11%] top-[19%] sm:left-[45%] left-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Once guest makes extra toiletries request, ticket will be sent to the
          housekeeper who
          <br />
          has the closest proximity to the guest will receive the ticket order.
        </div>
        <div
          className="absolute sm:top-[20%] top-[23%] sm:left-[59%] left-[75%] border-2 border-dashed border-black w-4 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="absolute top-[38%] sm:top-[35%] left-[40%] sm:left-[50%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(125deg)" }}
            className="h-1 w-36 bg-[#070708]"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute sm:top-[23%] top-[25%] left-[70%] sm:left-[56%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Toiletries
        </div>
        <div
          className="absolute top-[44%] sm:top-[42%] left-[58%] sm:left-[62%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(150deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[35%] left-[80%] sm:left-[69%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Turndown Service
        </div>
        <div className="sm:text-sm text-[5px] absolute sm:top-[46%] top-[46%] sm:left-[66%] left-[72%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guest will be able to set a time for turndown
          <br />
          Service via chatbot
        </div>
        <div
          className="absolute sm:top-[42%] top-[42%] sm:left-[74%] left-[82%] border-2 border-dashed border-black sm:w-8 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          className="absolute top-[50%] sm:top-[48%] left-[20%] sm:left-[30%] bg-[#070708] h-1 w-12 sm:w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(20deg)" }}
        ></div>
        <div
          className="absolute sm:top-[63%] top-[60%] left-[30%] sm:left-[38%] bg-[#070708] h-1 w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(130deg)" }}
        ></div>
        <div
          className="absolute top-[57%] sm:top-[60%] left-[59%] sm:left-[60%] bg-[#070708] h-1 w-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(50deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[46%] sm:top-[42%] left-[5%] sm:left-[20%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Towel Delivery
        </div>
        <div className="sm:text-sm text-[5px] absolute sm:top-[82%] top-[76%] sm:left-[25%] left-[15%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guests able to make baby crib requests. Runner will receive the
          <br />
          ticket and complete the delivery.
        </div>
        <div
          className="absolute sm:top-[50%] top-[72%] sm:left-[22%] left-[25%] border-2 border-dashed border-black w-6 sm:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[67%] sm:top-[70%] left-[25%] sm:left-[36%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Baby Crib
        </div>
        <div className="sm:text-sm text-[5px] absolute sm:top-[55%] top-[54%] sm:left-[7%] left-[1%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        If the guests requests for extra towel delivery to their room, a
          <br />
          ticket will be created. The ticket order will be assigned to the
          <br />
          housekeeping runner who has the closest proximity and lowest
          <br />
          work orders on queue. This is will increase the hotel&apos;s efficiency
        </div>
        <div
          className="absolute sm:top-[78%] top-[51%] sm:left-[37%] left-[6%] border-2 border-dashed border-black w-6 sm:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute sm:top-[66%] top-[62%] left-[60%] sm:left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Laundry and Dry Cleaning
        </div>
        <div className="sm:text-sm text-[5px] absolute sm:top-[78%] top-[71%] sm:left-[60%] left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Paid laundry and dry cleaning service available via chatbot
        </div>
        <div
          className="absolute sm:top-[74%] top-[68%] sm:left-[69%] left-[69%] border-2 border-dashed border-black w-6 sm:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
      </div>
    </div>
  );
}
