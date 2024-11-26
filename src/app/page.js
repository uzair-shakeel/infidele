import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FAQs from "./components/FAQs";
import Review from "./components/Review";
import Search from "./components/Search";
import Telegram from "./components/Telegram";
import Cheater from "./components/Cheater";

export default function Home() {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="max-w-[1380px] mx-auto">
        <Hero />
        <Cheater />
        <Telegram />
        <Review />
        <FAQs />
        <Search />
      </div>
      <Footer />
    </div>
  );
}
