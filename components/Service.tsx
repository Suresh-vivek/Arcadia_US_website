import React from "react";
import Image from "next/image";

export default function Service() {
  return (
    <div className="relative w-full h-[66vh] sm:h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Service.png"}
          layout="fill"
          objectFit="cover"
          alt="Projects"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center sm:justify-around items-center h-full">
        <div className="bg-white p-2 w-40 h-24 sm:w-60 sm:h-40 flex justify-center items-center sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          In Room Dining
        </div>
        <div className="bg-white p-2 w-40 h-24 sm:w-60 sm:h-40 flex justify-center items-center sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          Amenities
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-around">
        <div className="bg-white p-2 w-40 h-24 sm:w-60 sm:h-40 flex justify-center items-center sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          Lobby Lounge
        </div>
        <div className="bg-white p-2 w-40 h-24 sm:w-60 sm:h-40 flex justify-center items-center text-nowrap sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          Poolside Service
        </div>
        </div>
      </div>
    </div>
  );
}
