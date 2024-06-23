import React from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

export default function Contact() {
  return (
    <div id="contact" className="relative w-full min-h-[66vh] sm:h-screen select-none">
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Contact.png"}
          layout="fill"
          objectFit="cover"
          alt="Projects"
        />
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row w-full text-white h-full p-4 sm:p-0">
        <div className="flex-1 flex flex-col gap-20 items-center sm:w-1/2 sm:ml-20 sm:mt-20">
          <div className="mb-5">
            <h1 className="font-bold text-3xl sm:text-5xl mb-4 text-nowrap">
              Contact Us
            </h1>
            <p className="text-xs sm:text-lg font-semibold">Daniel Lee</p>
            <p className="text-xs sm:text-lg font-semibold">
              Email Address: daniel@arcadiahospitality.ai
            </p>
            <p className="text-xs sm:text-lg font-semibold">Nikhil Jha</p>
            <p className="text-xs sm:text-lg font-semibold">
              Email Address: nikhil@arcadiahospitality.ai
            </p>
          </div>
          <div className="">
            <Image
              className=""
              src={"/qr.png"}
              alt="qr"
              width={400}
              height={400}
            />
            <h1 className=" text-xl sm:text-3xl font-semibold mt-4 text-center">
              Arcadia Demo Chatbot
            </h1>
          </div>
        </div>
        <div className="sm:w-1/2 sm:mt-20">
        <Form />
        </div>
      </div>
    </div>
  );
}
