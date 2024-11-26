import React from "react";

const Search = () => {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header Text */}
      <div className="text-center">
        <h1 className="text-[80px] leading-[88px] font-[700] text-[#FFCCDE]  mb-4">
          DON'T HAVE ANY DOUBT ANYMORE
        </h1>
        <a
          href="#"
          className="text-[80px] leading-[88px] font-[700] text-[#F54E26] hover:underline flex items-center justify-center"
        >
          SEARCH THE CHEATER{" "}
          <span className="ml-2 text-lg no-underline">hi</span>
        </a>
      </div>

      {/* Subtext */}
      <div className="mt-4 text-[#A7A9BE] text-[18px] leading[32px] text-center">
        <p>
          You can finally move on with your life and find someone of your worth
        </p>
        <p>Results may take 10 to 40 minutes</p>
      </div>
    </div>
  );
};

export default Search;
