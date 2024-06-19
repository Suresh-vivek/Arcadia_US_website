import React from "react";
import Image from "next/image";

export default function LobbyLounge() {
  return (
    <>
      <div>
        <h1 className=" text-2xl sm:text-5xl py-10 text-center text-[#113854] font-bold">
          Lobby Lounge
        </h1>
      </div>
      <div className="relative w-full h-[66vh] sm:h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/Lobby.png"}
            layout="fill"
            objectFit="cover"
            alt="Lobby"
          />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center sm:space-x-8 items-center h-full">
          <div className="bg-white flex text-center justify-center items-center  w-52 sm:w-80 h-48 sm:p-4 m-3 sm:m-2 rounded-lg px-4 sm:px-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Guest orders Food and Beverage to the Lobby Lounge via Chatbot
          </div>
          <div className="bg-white  text-center flex justify-center items-center w-52 sm:w-80 h-48 sm:p-4 m-3 sm:m-2 rounded-lg px-4 sm:px-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Ticket Created for Bar/Kitchen and Server
          </div>
          <div className="bg-white  text-center flex justify-center items-center w-52 sm:w-80 h-48 sm:p-4 m-3 sm:m-2 rounded-lg px-4 sm:px-6 sm:py-8 text-sm sm:text-xl font-semibold">
            Server Delivers to the Guest
          </div>
        </div>
      </div>
    </>
  );
}
