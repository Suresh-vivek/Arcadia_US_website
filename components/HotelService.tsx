"use client";
import { useState } from "react";

const HotelServicesMap = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (service: any) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <div className="relative bg-black text-white p-4 md:p-8 lg:p-12 flex flex-col space-y-40">
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center w-full space-x-80 ${
            hoveredService === "Front Desk/Guest Services"
              ? "opacity-1"
              : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl">Late Check-Out Requests</h1>
            <div
              className="h-1 w-16 bg-white"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-2xl">Celebration Requests</h1>
            <div
              className="h-1 w-16 bg-white"
              style={{ transform: "rotate(135deg)" }}
            ></div>
          </div>
        </div>
        <div
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 cursor-pointer mt-4"
          onMouseEnter={() => handleMouseEnter("Front Desk/Guest Services")}
          onMouseLeave={handleMouseLeave}
        >
          Front Desk/Guest Services
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="flex flex-col items-center mb-4 gap-4">
          <div
            className={`flex justify-center w-full space-x-32 ${
              hoveredService === "Concierge" ? "opacity-1" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl">Weather</h1>
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(45deg)" }}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-2xl">Transportation</h1>
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(135deg)" }}
              ></div>
            </div>
          </div>
          <div
            className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Concierge")}
            onMouseLeave={handleMouseLeave}
          >
            Concierge
          </div>
          <div
            className={`flex justify-center w-full space-x-32 ${
              hoveredService === "Concierge" ? "opacity-1" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-8 ml-20">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(150deg)" }}
              ></div>
              <h1 className="text-2xl">Operating <br /> Hours</h1>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(25deg)" }}
              ></div>
              <h1 className="text-2xl">Local Recommendations</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <div
            className={`flex justify-center w-full space-x-32 ${
              hoveredService === "Bell" ? "opacity-1" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-16">
              <h1 className="text-2xl">Housekeeping</h1>
              <div
                className="h-1 w-28 bg-white"
                style={{ transform: "rotate(90deg)" }}
              ></div>
            </div>
          </div>
          <div
            className="text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer mt-12"
            onMouseEnter={() => handleMouseEnter("Bell")}
            onMouseLeave={handleMouseLeave}
          >
            Bell
          </div>
          <div
            className={`flex justify-center w-full space-x-32 ${
              hoveredService === "Bell" ? "opacity-1" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-24 bg-white"
                style={{ transform: "rotate(160deg)" }}
              ></div>
              <h1 className="text-2xl">Golf Cart Rides</h1>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(15deg)",
                  marginRight: "40px" }}
              ></div>
              <h1 className="text-2xl">Valet</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelServicesMap;
