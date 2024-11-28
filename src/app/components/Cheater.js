"use client";
import React, { useState } from "react";

const cheaterDetails = [
  {
    question: "LAST LOGGED IN",
    answer: "You will see when they last connected.",
  },
  {
    question: "LAST ACTIVITY",
    answer: "Displays the last activity performed by the user.",
  },
  {
    question: "CREATION DATE",
    answer: "Shows the date when the profile was created.",
  },
  {
    question: "LAST LOCATION",
    answer: "Provides the last known location of the user.",
  },
];

const Cheater = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6">
      <div>
        {/* Header Section */}
        <div className=" mb-12">
          <h1 className="text-[38px] md:text-[48px] lg:text-[64px] font-bold leading-[48px] md:leading-[70px]">
            WE ALREADY DETECTED <br />
            MORE THAN +5000 CHEATERS
          </h1>
        </div>

        {/* Cheater Profiles Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start gap-6">
          {/* Example Cards */}
          <div className="relative h-[233px] w-[234px] ">
            <div className=" overflow-hidden h-full w-full">
              <img
                src="/kevin.png"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <p className="absolute h-[100px] w-[100px] flex items-center justify-center text-[20px] uppercase font-[700] -bottom-10 -right-5 p-5 text-[#F9BF28] bg-[#FFF6E8] rounded-full">
              Cheater
            </p>
          </div>
          <div className="relative h-[233px] w-[234px] ">
            <div className=" h-full w-full">
              <img
                src="/steven.png"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <p className="absolute h-[100px] w-[100px] flex items-center justify-center text-[20px] uppercase font-[700] -bottom-10 -right-5 p-5 text-[#F9BF28] bg-[#FFF6E8] rounded-full">
              Cheater
            </p>
          </div>
        </div>
      </div>

      {/* Cheater Details Section */}
      <div className="mt-12 w-full max-w-2xl">
        <p className="text-[24px] font-[700] leading-[40px]">
          WE WILL PROVIDE YOU ALL DETAILS (SO THEY CAN'T SAY IT'S AN OLD
          PROFILE)
        </p>
        {cheaterDetails.map((item, index) => (
          <div key={index} className="border-b border-gray-600 py-6">
            <div
              onClick={() => toggleDetail(index)}
              className={`flex justify-between items-center cursor-pointer transition-colors duration-200 ${
                openIndex === index ? "text-[#F54E26]" : "text-[#A7A9BE]"
              }`}
            >
              <span className="text-[36px] leading-[40px]   font-bold">
                {item.question}
              </span>
              <span
                className={`text-3xl transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-400 mt-2">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cheater;
