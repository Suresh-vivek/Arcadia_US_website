"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <div
      id="engineering"
      className="relative w-full h-screen bg-black text-white select-none"
    >
      <div className="group">
        <div className="sm:text-xs text-[5px] absolute sm:top-[4%] top-[6%] sm:left-[23%] left-[12%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Guest can make requests via chatbot by <br /> connecting with a hotel
          manager
        </div>
        <div
          className="absolute sm:top-[11%] top-[11%] sm:left-[30%] left-[20%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[4%] top-[7%] sm:left-[60%] left-[55%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Celebration packages can be sold via chatbot. Ticket will be <br />{" "}
          automatically created and sent to the guest services team
        </div>
        <div
          className="absolute sm:top-[11%] top-[12%] sm:left-[70%] left-[70%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="absolute top-[20%] sm:top-[20%] left-[25%] sm:left-[32%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(30deg)" }}
            className="h-[2px] sm:h-1 w-6 sm:w-12 md:w-12 bg-white"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[15%] sm:top-[13%] left-[7%] sm:left-[23%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Late Check Out Requests
        </div>
        <div
          className="absolute top-[20%] sm:top-[20%] left-[63%] sm:left-[65%] bg-white h-[2px] sm:h-1 w-6 sm:w-12 md:w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(143deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[15%] sm:top-[13%] left-[60%] sm:left-[65%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Celebration Requests
        </div>
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-xl md:text-3xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Front Desk/Guest Service
        </motion.div>
      </div>
      <div className="group">
        <div className="sm:text-xs text-[5px] absolute sm:top-[43%] top-[29%] sm:left-[18%] left-[32%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Weather API connected to the chatbot <br /> for weather inquiries
        </div>
        <div
          className="absolute sm:top-[51%] top-[34%] sm:left-[25%] left-[40%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="flex flex-col justify-center items-center gap-6 absolute top-[37%] sm:top-[54%] left-[35%] sm:left-[23%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h1>Weather</h1>
          <div
            style={{ transform: "rotate(50deg)" }}
            className="h-1 w-8 sm:w-12 bg-white"
          ></div>
        </div>

        <div
          className="absolute top-[44%] sm:top-[59%] left-[58%] sm:left-[39%] bg-white h-1 w-12 sm:w-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(156deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[38%] sm:top-[51%] left-[69%] sm:left-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Transportation
        </div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[60%] top-[47%] sm:left-[44%] left-[68%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Transportation API connected to chatbot. if
          <br /> hotel offers house cars, guest can request <br /> and ticket
          will be sent to the valet team
        </div>
        <div
          className="absolute sm:top-[57%] top-[43%] sm:left-[50%] left-[75%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
        <motion.div
          className="absolute top-1/2 left-1/2 sm:top-2/3 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-xl md:text-4xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Concierge
        </motion.div>

        <div
          className="absolute top-[53%] sm:top-[72%] left-[35%] sm:left-[24%] bg-white h-1 w-6 sm:w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(148deg)" }}
        ></div>
        <div
          className="absolute top-[55%] sm:top-[76%] left-[55%] sm:left-[35%] bg-white h-1 w-6 sm:w-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[84%] top-[64%] sm:left-[16%] left-[16%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          chatbot connected to the <br /> property&apos;s website where <br />{" "}
          it can utilize information
        </div>
        <div
          className="absolute sm:top-[81%] top-[61%] sm:left-[20%] left-[20%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[55%] sm:top-[75%] left-[10%] sm:left-[17%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Operating Hours
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[59%] sm:top-[80%] left-[51%] sm:left-[32%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Local Recommendations
        </div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[89%] top-[67%] sm:left-[34%] left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Admin can add local Recommendations
          <br /> for guests via desktop version
        </div>
        <div
          className="absolute sm:top-[86%] top-[64%] sm:left-[40%] left-[70%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(90deg)" }}
        ></div>
      </div>
      <div className="group">
        <div className="absolute top-[70%] sm:top-[58%] left-[45%] sm:left-[65%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(93deg)" }}
            className="h-[2px] sm:h-1 w-8 sm:w-12 md:w-12 bg-white"
          ></div>
        </div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[64%] sm:top-[48%] left-[32%] sm:left-[62%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Golf cart rides
        </div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[37%] top-[55%] sm:left-[55%] left-[7%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          If hotel offers, guests can requests rides. Ticket will be
          <br /> created. Our AI system will evaluate proximity and the number
          <br />
          of tickets on queue, and assign to the respective bellman
        </div>
        <div
          className="absolute sm:top-[46%] top-[61%] sm:left-[65%] left-[35%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(70deg)" }}
        ></div>
        <div className="absolute top-[79%] sm:top-[73%] left-[56%] sm:left-[71%] text-xs sm:text-md md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            style={{ transform: "rotate(30deg)" }}
            className="h-[2px] sm:h-1 w-6 sm:w-8 md:w-12 bg-white"
          ></div>
        </div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[60%] top-[68%] sm:left-[44%] left-[4%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          Transportation API connected to chatbot. if
          <br /> hotel offers house cars, guest can request <br /> and ticket
          will be sent to the valet team
        </div>
        <div
          className="absolute sm:top-[68%] top-[74%] sm:left-[52%] left-[18%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(30deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[77%] sm:top-[69%] left-[23%] sm:left-[54%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Valet
        </div>
        <div
          className="absolute top-[77%] sm:top-[69%] left-[33%] sm:left-[58%] bg-white h-[2px] sm:h-1 w-8 sm:w-12 md:w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(165deg)" }}
        ></div>
        <div className="text-xs sm:text-md md:text-xl absolute top-[81%] sm:top-[75%] left-[63%] sm:left-[75%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Luggage Assistance
        </div>
        <div className="sm:text-xs text-[5px] absolute sm:top-[85%] top-[88%] sm:left-[70%] left-[60%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          During check-out process, if guest needs luggage
          <br />
          assistance. Guest can text chatbot and ticket will be
          <br />
          created and assigned.
        </div>
        <div
          className="absolute sm:top-[82%] top-[85%] sm:left-[80%] left-[80%] border-2 border-dashed border-white w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: "rotate(120deg)" }}
        ></div>
        <motion.div
          className="absolute top-3/4 sm:top-2/3 left-1/2 sm:left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-xl md:text-4xl cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Bell
        </motion.div>
      </div>
    </div>
  );
}
