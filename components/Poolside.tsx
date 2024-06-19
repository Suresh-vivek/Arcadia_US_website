import React from "react";
import Image from "next/image";

export default function Poolside() {
  return (
    <>
      <div>
        <h1 className=" text-2xl sm:text-5xl py-10 text-center text-[#113854] font-bold">
          Poolside Service
        </h1>
      </div>
      <div className="relative w-full h-[33vh] flex sm:h-screen">
        <div className="absolute inset-0 z-0 w-1/2">
          <Image
            src={"/Pool1.png"}
            layout="fill"
            objectFit="cover"
            alt="Lobby"
          />
        </div>
        <div className="absolute inset-0 z-0 w-1/2 left-1/2">
            <Image
                src={"/Pool2.png"}
                layout="fill"
                objectFit="cover"
                alt="Lobby"
            />
        </div>
        <div className="absolute z-10 flex flex-col justify-center items-center h-full left-[5%] sm:left-1/4">
          <div className="bg-white flex text-center justify-center items-center w-72 sm:w-full h-1/4 sm:h-32 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Guest orders Food and Beverage to the Lobby Lounge via Chatbot
          </div>
          <div className="bg-white p-2 text-center flex justify-center items-center w-72 h-1/4 sm:w-full sm:h-32 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Ticket Created for Bar/Kitchen and Server
          </div>
          <div className="bg-white p-2 text-center flex justify-center items-center w-72 h-1/4 sm:w-full sm:h-32 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Server Delivers to the Guest
          </div>
        </div>
      </div>
    </>
  );
}
