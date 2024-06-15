'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="relative w-full h-[66vh] sm:min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 py-10 md:py-20">
      <Image
        className="z-[-1]"
        src="/Landing.png"
        layout="fill"
        objectFit="cover"
        alt="Landing"
        objectPosition="center"
      />
      <div className="flex items-center space-y-4 sm:space-x-4 mt-16 sm:mt-20">
        <Image
          className="bg-[#0e3753] sm:p-2 sm:pl-4 w-8 h-8 sm:w-16 sm:h-16"
          src="/Arcadia_logo.png"
          width={80}
          height={80}
          alt="logo"
        />
        <h1
          style={{ margin: "0px" }}
          className="text-xl sm:text-2xl md:text-3xl font-bold pl-2 text-white sm:pl-4"
        >
          Arcadia Hospitality
        </h1>
      </div>

      <motion.div
        className="mt-20 sm:mt-20 md:mt-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white loading sm:mb-3"
          style={{ textShadow: "1px 1px 2px #000000" }}
        >
          Streamlining Hospitality
        </h1>
        <h1
          className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white loading"
          style={{ textShadow: "1px 1px 2px #000000" }}
        >
          Operations with the Power of AI
        </h1>
      </motion.div>
    </div>
  );
}
