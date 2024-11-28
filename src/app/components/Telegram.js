import React from "react";

const Telegram = () => {
  return (
    <div className=" mt-[50px] md:mt-[304px] text-white flex flex-col items-center justify-center max-w-[1200px] mx-auto">
      {/* Left Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-[64px] leading-[70px] font-[700] ">
            SEARCH ANYONE! <br />
            INSTANT RESULTS, <br />
            <span className="text-[#D0D5FF]">
              VARIOUS DATING <br /> APPS DATABASES.
            </span>
          </h1>
          <div className="relative mt-12 flex items-center">
            <img src="/bumble.svg" />
            <img src="/tinder.svg" className="absolute top-0 left-14" />
            <img src="/hinge.svg" className="absolute top-0 left-[108px]" />
          </div>
        </div>

        {/* Right Content */}
        <div className="sm:w-1/2  p-6 rounded-lg text-left relative">
          <div className="absolute -top-[100px] left-0 bg-[#5738AF] text-[#D0D5FF] -rotate-[20deg] text-[60px] leading-[70px] px-3 py-1 rounded-[5px] font-[700]">
            WTF!
          </div>
          <div className="absolute -top-[75px] left-[150px] h-[80px] w-[80px] ">
            <img src="/palm.svg" className="h-full w-full" />
          </div>
          <p className="text-[#A7A9BE] text-[15px] leading-[28px]">
            Our Mission is putting an End to Cheating and Betrayal. We are
            dedicated to restoring trust and protecting values in relationships.
            With the power of AI, we've built a revolutionary tool to uncover
            dishonesty and expose unfaithful behavior. No one deserves to have
            their trust abused or their time wasted by deceit. Thanks to
            advanced artificial intelligence, you can now gain clarity and
            discover if your partner is being unfaithful. Together, we can stand
            against dishonesty and create a world where trust thrives.
          </p>
          {/* Telegram Link */}
          <div className="mt-6 ">
            <a
              href="#"
              className="text-[#FFCCDE] font-[700] text-[36px] leading-[40px] space-y-2"
            >
              <p>JOIN OUR SUPPORT</p>
              <p className="hover:underline">TELEGRAM GROUP</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telegram;
