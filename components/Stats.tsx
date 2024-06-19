import Image from "next/image";
import React from "react";

export default function Stats() {
  return (
    <div className="relative mb-4">
      <img
        className="z-[-1] w-auto h-96 sm:w-full sm:h-full aspect-auto object-fill object-center"
        src="/Stat.png"
        alt="Landing Image"
      />
      <div className="absolute top-1/3 sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 sm:w-2/5 h-2/5 border rounded-lg flex items-center justify-center">
        <div className="flex flex-wrap justify-between items-center w-full h-full text-white text-xl sm:text-3xl font-bold">
          <div className="w-1/2 h-1/2 border flex justify-center items-center ">2023</div>
          <div className="w-1/2 h-1/2 border flex justify-center items-center ">4.46 Billion</div>
          <div className="w-1/2 h-1/2 border flex justify-center items-center ">2024</div>
          <div className="w-1/2 h-1/2 border flex justify-center items-center ">7.50 Billion</div>
        </div>
      </div>
      <div className="absolute mx-2 text-justify sm:mx-0 bottom-0 sm:bottom-0 sm:right-0 sm:mb-4 sm:mr-32 text-white text-[10px] text-wrap sm:w-1/2">
      Insights, Business Research. “Hotel and Hospitality Management Software Market Size, Share, Growth, and Industry Analysis, by Type (on-Premises, Saas-Based), by Application (under 200 Rooms, 200 to 399 Rooms, 400 to 700m Rooms, More than 700 Rooms) and Regional Forecast to 2032.” Hotel and Hospitality Management Software Market Size, 2032, www.businessresearchinsights.com/market-reports/hotel-and-hospitality-management-software-market-112608. Accessed 8 June 2024. 

      </div>
    </div>
  );
}