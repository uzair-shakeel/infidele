export default function Hero() {
  return (
    <section className=" text-white min-h-screen flex flex-col items-center justify-between relative">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center p-6">
        <img src="/Group 16.png" />{" "}
        <button className="bg-[#F54E26] text-white px-6 py-3 rounded-[5px] text-[24] min-w-[150px] font-[700] transition">
          LOGIN →
        </button>
      </div>

      {/* Hero Content */}
      <div className="text-center mt-16">
        <h1 className="text-[73px] leading-[90px] text-[#FFF6E8] font-[700]">
          IS SOMETHING FEELING <span className="text-[#F54E26]">OFF?</span>,{" "}
          <br />
          FIND OUT WITH AI IF YOUR{" "}
          <span className="text-[#F9BF28]">PARTNER</span>, <br />
          IS <span className="text-[#F9BF28]">CHEATING</span>.
        </h1>
        <div className="mt-6">
          <div className="space-y-2 flex flex-col gap-4 items-center justify-center">
            <span className="text-white text-[15px] leading-[22px] font-medium">
              Excellent
            </span>
            <div className="flex gap-1 ">
              <img src="/star.svg" />
              <img src="/star.svg" />
              <img src="/star.svg" />
              <img src="/star.svg" />
              <img src="/star.svg" />
            </div>
            <span className="text-[15px] leading-[22px] font-light">
              Based on <span className="underline font-[700]">405 reviews</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
