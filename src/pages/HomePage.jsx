import Service from "../components/common/Service";
import Blog from "../components/common/Blog";
import About from "../components/common/About";
import WorkingProcess from "../components/common/workingProcess";
import { assets } from "../assets/assets.js";
import HomePageFaq from "../components/common/HomePageFaq.jsx";
import Contact from "../components/common/Contact.jsx";

const HomePage = () => {
  return (
    <>
      <section className="bg-black w-full align-middle h-[100dvh] relative">
        <div>
          <img
            src={assets.homeTwo}
            alt="home"
            className="w-full h-[100dvh] object-cover opacity-50"
          />
        </div>
        <div className="text-white absolute top-60 left-4 lg:left-10 w-full md:w-[70%] lg:w-1/2  flex flex-col gap-4">
          <h1 className="text-2xl md:text-5xl">
            Scroll Less. Grow More With -{" "}
            <span className="text-orange-400 font-bold">Clickefy</span>
          </h1>
          <p className="text-sm md:text-lg">
            Fuel your business with data-driven digital marketing that delivers
            real results. From SEO to social media, we craft strategies that
            scale brands and drive ROI.
          </p>
          <button className="bg-orange-400 font-semibold rounded-full w-30 h-10 hover:bg-orange-500 hover:translate-y-[-8px] transition duration-500 active:translate-y-0 ">
            Get Started
          </button>
        </div>
      </section>
      <About />
      <Service />
      <WorkingProcess />
      <Blog />
      <Contact />
      <HomePageFaq/>
    </>
  );
};

export default HomePage;
