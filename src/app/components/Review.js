import React from "react";

const reviews = [
  {
    title: "EASY AND EFFECTIVE",
    content:
      "I had suspicions about my partner for months, but I couldn’t find any proof. This tool gave me the clarity I needed in just minutes. It was quick, easy to use, and surprisingly accurate. I highly recommend it to anyone who wants peace of mind.",
    name: "SARAH",
    location: "NEW YORK",
    relationship: "In relationship since 5 years",
    bgColor: "bg-[#5738AF] text-white",
  },
  {
    title: "SADLY WRITING A GOOD REVIEW",
    content:
      "Wish I would not write this review but anyways... I didn’t expect much when I tried this service, but wow – I was blown away! It helped me uncover the truth I needed to make important decisions in my life. If you’re in doubt, don’t hesitate. This is a game-changer.",
    name: "JAMES",
    location: "LONDON",
    relationship: "In relationship since 2 years",
    bgColor: "bg-yellow-400",
  },
  {
    title: "WORTH EVERY PENNY",
    content:
      "Trust is everything in a relationship, but when I started to question my husband’s honesty, this tool came to the rescue. It gave me accurate insights about my now ex-husband on Tinder. He tried to act like it was old profiles but I could see the last activity… then he admitted everything.",
    name: "EMMA",
    location: "SYDNEY",
    relationship: "Married since 12 years",
    bgColor: "bg-gray-100 text-black",
  },
  {
    title: "FINALLY... I KNOW",
    content:
      "I had doubts but couldn’t find solid proof until I tried this tool. The results were eye-opening, and I’m so thankful for this service. It gave me the confidence to make the right choices for my future. Thank you for creating such a helpful platform!",
    name: "LUCAS",
    location: "PARIS",
    relationship: "In relationship since 8 years",
    bgColor: "bg-purple-300",
  },
];

const Review = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="relative text-[64px] leading-[70px] font-[700] text-[#FFF6E8]">
          <div>
            <img src="/reviews.svg" className="absolute -top-20 -left-20 " />
          </div>
          WE'VE HELPED THOUSANDS <br /> OF GOOD PEOPLE
        </h1>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`p-6 rounded-[16px] shadow-md ${review.bgColor}`}
          >
            <h2 className="text-lg font-bold mb-4">{review.title}</h2>
            <p className="text-sm mb-6  slider-p font-sans">{review.content}</p>
            <div className="text-sm font-bold">{review.name}</div>
            <div className=" font-bold text-[#FFCCDE] text-[20px]">{review.location}</div>
            <div className="text-sm text-gray-400">{review.relationship}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
