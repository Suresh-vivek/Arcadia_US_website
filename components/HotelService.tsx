"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const HotelServicesMap = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (service: any) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <div id="frontdesk" className="relative bg-black text-white p-4 md:p-8 lg:p-12 flex flex-col space-y-10 md:space-y-20 lg:space-y-40 select-none">
      <div className="flex flex-col items-center">
        <div
          className={`flex space-x-2 md:flex-row justify-center w-full md:space-x-20 lg:space-x-40 ${
            hoveredService === "Front Desk/Guest Services"
              ? "opacity-100"
              : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <h1 className="text-xs sm:text-xl md:text-2xl lg:text-3xl">
              Late Check-Out Requests
            </h1>
            <div
              className="h-1 w-16 bg-white"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <h1 className="text-xs md:text-2xl lg:text-3xl">
              Celebration Requests
            </h1>
            <div
              className="h-1 w-16 bg-white"
              style={{ transform: "rotate(135deg)" }}
            ></div>
          </div>
        </div>
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 cursor-pointer mt-4"
          onMouseEnter={() => handleMouseEnter("Front Desk/Guest Services")}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Front Desk/Guest Services
        </motion.div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-around">
        <div className="flex flex-col items-center sm:mb-4 gap-4 -mb-6">
          <div
            className={`flex space-x-4 justify-center w-full md:space-x-32 ${
              hoveredService === "Concierge" ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <div className="flex flex-col items-center gap-8 sm:gap-4 md:gap-8">
              <h1 className="text-xs md:text-2xl lg:text-3xl">Weather</h1>
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(45deg)" }}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-6 sm:gap-4 md:gap-8">
              <h1 className="text-xs md:text-2xl lg:text-3xl">
                Transportation
              </h1>
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(135deg)" }}
              ></div>
            </div>
          </div>
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Concierge")}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Concierge
          </motion.div>
          <div
            className={`flex justify-center w-full space-x-32 ${
              hoveredService === "Concierge" ? "opacity-1" : "opacity-0"
            } transition-opacity duration-300
            }`}
          >
            <div className="flex flex-col items-center gap-8 ml-10">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(150deg)" }}
              ></div>
              <h1 className="text-xs md:text-2xl">
                Operating <br /> Hours
              </h1>
            </div>
            <div style={{marginLeft: '30px'}} className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(25deg)" }}
              ></div>
              <h1 className="text-xs md:text-2xl">Local Recommendations</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-4">
          <div
            className={`flex justify-center w-full md:space-x-32 ${
              hoveredService === "Bell" ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <div className="flex flex-col items-center gap-8 sm:gap-4 md:gap-16">
              <h1 className="text-xs md:text-2xl lg:text-3xl">Housekeeping</h1>
              <div
                className="h-1 w-12 sm:w-24 bg-white"
                style={{ transform: "rotate(90deg)" }}
              ></div>
            </div>
          </div>
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer mt-12"
            onMouseEnter={() => handleMouseEnter("Bell")}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Bell
          </motion.div>
          <div
            className={`flex justify-center w-full space-x-12 sm:space-x-24 ${
              hoveredService === "Bell" ? "opacity-1" : "opacity-0"
            } transition-opacity duration-300
            `}
          >
            <div className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-24 bg-white"
                style={{ transform: "rotate(160deg)" }}
              ></div>
              <h1 className="text-xs md:text-2xl">Golf Cart Rides</h1>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div
                className="h-1 w-16 bg-white"
                style={{ transform: "rotate(15deg)", marginRight: "40px" }}
              ></div>
              <h1 className="text-xs md:text-2xl">Valet</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelServicesMap;
