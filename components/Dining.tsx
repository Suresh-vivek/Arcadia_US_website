"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Dining() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center text-[#4b4b4b]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl py-10 text-center"
      >
        In Room Dining
      </motion.div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 px-4 font-bold">
        <div className="flex flex-col items-center">
          <Image src="/Image3.png" width={200} height={300} alt="Image3" />
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-4 text-center"
          >
            Guest orders via Chatbot
          </motion.h1>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-around space-y-20 sm:space-y-20">
            <div className="flex flex-col justify-center sm:items-center">
              <motion.svg
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="50"
                height="50"
                className="w-12 h-12 sm:w-24 sm:h-24"
              >
                <path
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </motion.svg>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
               className="text-center text-xs sm:text-base text-nowrap">
                Server Receives Order
              </motion.h1>
            </div>
            <div className="flex flex-col justify-center sm:items-center">
              <motion.svg
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="50"
                height="50"
                className="w-12 h-12 sm:w-24 sm:h-24"
              >
                <path
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </motion.svg>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
               className="text-center text-xs sm:text-base text-nowrap">
                Kitchen Receives Order
              </motion.h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.svg
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              width="50"
              height="50"
              className="w-12 h-12 sm:w-24 sm:h-24"
            >
              <path
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </motion.svg>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
             className="text-center text-xs sm:text-base">
              Server Picks up Order from Kitchen and <br /> Delivers to the
              guest
            </motion.h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-4 border-[#113854]">
            <Image
              className="sm:h-52"
              src="/Roadmap.png"
              width={300}
              alt="Image4"
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
