import Image from "next/image";

export default function Hero() {
  return (
    <section className=" text-white flex flex-col items-center justify-between relative max-w-[1380px] mx-auto">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center">
        <img src="/Group 16.png" />{" "}
        <button className="bg-[#F54E26] text-white px-6 py-3 rounded-[5px] text-[24] min-w-[128px] lg:min-w-[150px] font-[700] transition">
          LOGIN →
        </button>
      </div>

      {/* Hero Content */}
      <div className="text-center pt-[74px]">
        <h1 className="text-[40px] lg:text-[80px] tracking-[0.8px] leading-[48px] lg:leading-[90px] text-[#FFF6E8] font-[700]">
          IS SOMETHING FEELING <span className="text-[#F54E26]">OFF?</span>,{" "}
          <br />
          FIND OUT WITH AI IF YOUR{" "}
          <span className="text-[#F9BF28]">PARTNER</span>, <br />
          IS <span className="text-[#F9BF28]">CHEATING</span>.
        </h1>
        <div className="mt-6">
          <div className="flex flex-col items-center justify-center">
            <span className="text-white text-[10px] font-medium roboto leading-[26px]">
              Excellent
            </span>
            <div className="flex items-center gap-1 my-2">
              <Image src="/star.svg" alt="logo" width={40} height={40} />
              <Image src="/star.svg" alt="logo" width={40} height={40} />
              <Image src="/star.svg" alt="logo" width={40} height={40} />
              <Image src="/star.svg" alt="logo" width={40} height={40} />
              <Image src="/star.svg" alt="logo" width={40} height={40} />
            </div>
            <span className="text-[11px] leading-[22px] font-light roboto">
              Based on <span className="underline font-bold roboto">405 reviews</span>
            </span>
            <Image src='/trustpilot.svg' alt="trustpilot" width={62} height={26} />
          </div>
        </div>
      </div>
    </section>
  );
}
