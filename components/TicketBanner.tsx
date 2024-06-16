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
    <div className="bg-[#e8e8e8] w-full px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col sm:flex-row py-4 items-center">
      <Image
        src="/Image1.png"
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            width="50"
            height="50"
            className="w-12 h-12 sm:w-24 sm:h-24 text-[#4b4b4b]"
          >
            <path
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </motion.div>
          <div className="text-[#4b4b4b]">AI Creating the Ticket Order</div>
      </div>
      <motion.div
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
