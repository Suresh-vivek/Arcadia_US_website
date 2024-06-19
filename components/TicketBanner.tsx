"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function TicketBanner() {
  return (
    <div className="bg-[#e8e8e8] w-full px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col sm:flex-row py-4 items-center select-none">
      <Image
        src="/Image1.jpg"
        alt="Image1"
        width={500}
        height={500}
        className=" sm:w-auto sm:h-auto"
      />
      <div className="flex flex-col items-center justify-center px-4 sm:px-10 text-[#4b4b4b]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30 }}
          variants={imageVariants}
          className=""
        >
         <Image  src="/arrow2.svg" width={50} height={100} alt="Image3" style={{ transform: "rotate(270deg)" }} /> 
        </motion.div>
        <div className="text-[#4b4b4b] text-nowrap">
          AI Creating the Ticket Order
        </div>
      </div>
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 60 }}
        variants={imageVariants}
      >
        <Image
          src="/Image2.png"
          alt="Image2"
          width={300}
          height={500}
          className="w-3/4 sm:w-auto sm:h-auto"
        />
      </motion.div>
    </div>
  );
}
