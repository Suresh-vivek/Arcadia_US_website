"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <div
      id="engineering"
      className="relative w-full h-screen bg-white text-black select-none"
    >
      <div className="group">
        <div className="text-[7px] sm:text-sm absolute top-[23%] left-[30%] sm:top-[5%] sm:left-[39%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          If guest is having issue connecting to the room
          <br />
          WIFI, engineer can be deployed to assist guest
        </div>
        <div
          className="absolute w-6 top-[30%] left-[48%] sm:top-[15%] sm:left-[48%] border-2 border-dashed border-black sm:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="absolute top-[42%] sm:top-[32%] left-[45%] sm:left-[47%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(90deg)" }}
            className="h-[2px] sm:h-1 w-12 sm:w-16 md:w-24 bg-black"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[35%] sm:top-[19%] left-[30%] sm:left-[42%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WiFI Connection Assistance
        </div>
        <div className="absolute top-[43%] sm:top-[37%] left-[25%] sm:left-[30%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(45deg)" }}
            className="h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 bg-black"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[38%] sm:top-[24%] left-[13%] sm:left-[23%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Electrical Issues
        </div>
        <div className="text-[5px] sm:text-sm absolute top-[30%] left-[2%] sm:top-[10%] sm:left-[12%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          If any electrical issue occurs in the room, guests will
          <br />
          able to notify an engineer via chatbot. Ticket order
          <br />
          will be created and sent to the respective engineer.
        </div>
        <div
          className="absolute w-4 top-[36%] left-[20%] sm:top-[21%] sm:left-[28%] border-2 border-dashed border-black sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div
          className="absolute top-[43%] sm:top-[37%] left-[63%] sm:left-[60%] bg-black h-[2px] sm:h-1 w-12 sm:w-24 md:w-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[38%] sm:top-[24%] left-[60%] sm:left-[68%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Maintenance and Repair
        </div>
        <div className="text-[5px] sm:text-sm absolute sm:top-[10%] top-[30%] sm:left-[68%] left-[65%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Any maintence or repair needed in the room can be
          <br />
          assigned to an engineer, if the issue is larger,
          <br />
          engineer can escalate the issue to a manager
        </div>
        <div
          className="absolute sm:top-[21%] top-[36%] sm:left-[73%] left-[76%] border-2 border-dashed border-black w-4 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-3xl md:text-5xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Engineering
        </motion.div>
        <div
          className="absolute top-[55%] sm:top-[62%] left-[25%] sm:left-[33%] bg-black h-[2px] sm:h-1 w-12 sm:w-24 md:w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <div
          className="absolute top-[57%] sm:top-[66%] left-[45%] sm:left-[47%] bg-black h-[2px] sm:h-1 w-12 sm:w-16 md:w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div
          className="absolute top-[55%] sm:top-[62%] left-[62%] sm:left-[60%] bg-black h-[2px] sm:h-1 w-12 sm:w-24 md:w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[58%] sm:top-[66%] left-[5%] sm:left-[22%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Plumbing Services
        </div>
        <div className="text-[5px] sm:text-sm absolute sm:top-[76%] top-[64%] sm:left-[10%] left-[3%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          If toilet is clogged or not flushing, engineer can be
          <br />
          deployed via chatbot to resolve the issue.
        </div>
        <div
          className="absolute sm:top-[73%] top-[62%] sm:left-[23%] left-[23%] border-2 border-dashed border-black w-4 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(135deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[62%] sm:top-[74%] left-[47%] sm:left-[48%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          HVAC
        </div>
        <div className="text-[7px] sm:text-sm absolute sm:top-[87%] top-[70%] sm:left-[39%] left-[29%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Any Air Conditioner or Heater issue can be attended
          <br />
          by an engineer, Guest can also requests via
          <br />
          chatbot to raise or lower the temperature in the room
        </div>
        <div
          className="absolute sm:top-[82%] top-[67%] sm:left-[48%] left-[48%] border-2 border-dashed border-black sm:w-12 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[58%] sm:top-[68%] left-[70%] sm:left-[62%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          TV Assistance
        </div>
        <div className="text-[5px] sm:text-sm absolute sm:top-[77%] top-[64%] sm:left-[65%] left-[65%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          If the guest is having trouble with the TV or TV
          <br />
          remote, guest will be able to text the chatbot.
          <br />
          Engineer will be deployed to assist the guest
        </div>
        <div
          className="absolute sm:top-[74%] top-[62%] sm:left-[66%] left-[73%] border-2 border-dashed border-black w-4 sm:w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(45deg)" }}
        ></div>
      </div>
    </div>
  );
}
