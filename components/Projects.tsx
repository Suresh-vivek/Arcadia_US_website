import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="relative w-full h-[66vh] sm:h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Projects.png"}
          layout="fill"
          objectFit="cover"
          alt="Projects"
        />
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row justify-center sm:justify-around items-center h-full">
        <Link href={'#frontdesk'} className="bg-[#B08879] p-2 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          Front Desk
        </Link>
        <Link href={'#housekeeping'} className="bg-[#B08879] p-2 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          HouseKeeping
        </Link>
        <Link href={'#engineering'} className="bg-[#B08879] p-2 sm:p-4 m-1 sm:m-2 rounded-lg px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 opacity-75 hover:opacity-100">
          Engineering
        </Link>
      </div>
    </div>
  );
}
