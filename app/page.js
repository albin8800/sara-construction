import About from "@/conponents/About";
import Hero from "@/conponents/Hero";
import Projects from "@/conponents/Projects";
import Services from "@/conponents/Services";
import Testimonials from "@/conponents/Testimonials";
import WhyUs from "@/conponents/WhyUs";

export default function Home() {
  return (
    <>
      
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />

      <div className="flex justify-center md:mt-20 mt-10">
        <button
          className="flex items-center gap-2 border text-[#816549] text-[15px]
          px-6 py-3 rounded-lg
          transition-all duration-300 hover:bg-[#816549] hover:text-white group"
        >
          Contact Our Team
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 group-hover:stroke-white"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
