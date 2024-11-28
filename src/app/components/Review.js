"use client";

import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../globals.css";

const reviews = [
  {
    title: "EASY AND EFFECTIVE",
    content:
      "I had suspicions about my partner for months, but I couldn't find any proof. This tool gave me the clarity I needed in just minutes. It was quick, easy to use, and surprisingly accurate. I highly recommend it to anyone who wants peace of mind.",
    name: "SARAH",
    location: "NEW YORK",
    relationship: "In relationship since 5 years",
    bgColor: "bg-[#5738AF] text-white",
  },
  {
    title: "SADLY WRITING A GOOD REVIEW",
    content:
      "Wish I would not write this review but anyways... I didn't expect much when I tried this service, but wow – I was blown away! It helped me uncover the truth I needed to make important decisions in my life. If you're in doubt, don't hesitate. This is a game-changer.",
    name: "JAMES",
    location: "LONDON",
    relationship: "In relationship since 2 years",
    bgColor: "bg-yellow-400",
  },
  {
    title: "WORTH EVERY PENNY",
    content:
      "Trust is everything in a relationship, but when I started to question my husband's honesty, this tool came to the rescue. It gave me accurate insights about my now ex-husband on Tinder. He tried to act like it was old profiles but I could see the last activity… then he admitted everything.",
    name: "EMMA",
    location: "SYDNEY",
    relationship: "Married since 12 years",
    bgColor: "bg-gray-100 text-black",
  },
  {
    title: "FINALLY... I KNOW",
    content:
      "I had doubts but couldn't find solid proof until I tried this tool. The results were eye-opening, and I'm so thankful for this service. It gave me the confidence to make the right choices for my future. Thank you for creating such a helpful platform!",
    name: "LUCAS",
    location: "PARIS",
    relationship: "In relationship since 8 years",
    bgColor: "bg-purple-300",
  },
  {
    title: "LIFE-CHANGING DISCOVERY",
    content:
      "I was skeptical at first, but this tool exceeded my expectations. It provided me with concrete evidence that helped me confront a difficult situation in my relationship. The peace of mind it gave me was invaluable.",
    name: "OLIVIA",
    location: "TORONTO",
    relationship: "Married since 3 years",
    bgColor: "bg-green-400 text-black",
  },
  {
    title: "QUICK AND RELIABLE",
    content:
      "I needed answers fast, and this service delivered. Within minutes, I had the information I was looking for. The interface was intuitive, and the results were presented clearly. It's a must-try for anyone in doubt.",
    name: "ETHAN",
    location: "BERLIN",
    relationship: "In relationship since 1 year",
    bgColor: "bg-blue-400 text-white",
  },
  {
    title: "SAVED ME FROM A BIG MISTAKE",
    content:
      "I was about to make a huge commitment without knowing the full picture. Thanks to this tool, I uncovered some crucial information that made me reconsider. It's not just a service; it's a lifesaver.",
    name: "SOPHIA",
    location: "MIAMI",
    relationship: "Dating for 6 months",
    bgColor: "bg-red-400 text-white",
  },
  {
    title: "PROFESSIONAL AND DISCREET",
    content:
      "What impressed me most was the professionalism and discretion of this service. The results were comprehensive, yet the process felt completely private and secure. I felt respected as a user throughout my experience.",
    name: "ALEXANDER",
    location: "MOSCOW",
    relationship: "Engaged for 1 year",
    bgColor: "bg-indigo-400 text-white",
  },
];

export default function ScrollableReviews() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#1a1a1a]">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <FaQuoteLeft className="text-[#00A651] text-5xl" />
        </div>
        <h1 className="text-4xl md:text-[64px] leading-tight font-bold text-[#FFF6E8] mt-8">
          WE'VE HELPED THOUSANDS <br /> OF GOOD PEOPLE
        </h1>
      </div>

      {/* Reviews Container */}
      <div className="w-full max-w-7xl relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start"
            >
              <div
                className={`p-6 rounded-[16px] shadow-md flex flex-col justify-between h-full ${review.bgColor}`}
              >
                <div>
                  <h2 className="text-[30px] leading-[33px] font-bold mb-4">
                    {review.title}
                  </h2>
                  <p className=" text-[12.50px] leading-[21px] mb-6 font-serif in-h-[120px]">
                    {review.content}
                  </p>
                </div>
                <div>
                  <div className="text-[20px] leading-[22px] font-bold">
                    {review.name}
                  </div>
                  <div className="font-bold text-[#FFCCDE] text-[20px]">
                    {review.location}
                  </div>
                  <div className="text-[12.50px] leading-[21px] ">
                    {review.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
