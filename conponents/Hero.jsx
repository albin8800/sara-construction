"use client";

export default function Hero() {
  return (
    <section
      className="w-full h-[820px] md:h-[745px]  bg-cover bg-center relative flex items-center pt-28 md:pt-20"
      style={{ backgroundImage: "url('/images/hero.svg')" }}
    >
      
      <div className="absolute inset-0 bg-black/30"></div>

      
      <div className="relative z-10 px-6 md:px-20 max-w-[900px]">
        
        <h1 className="text-white text-[32px] md:text-[48px] font-extrabold leading-tight max-w-[600px]">
          Designed with Purpose, Built with Precision
        </h1>

        
        <p className="text-white text-[15px] md:text-[18px] mt-4 opacity-90 max-w-[820px]">
          Our projects reflect <span className="font-bold">quality, safety and detail</span> — from planning to
          interior finishing, we build spaces that add value to your life and
          business.
        </p>

        
        <button
          className="flex items-center gap-2 mt-6 border text-white text-[15px] md:text-[16px] 
          px-[22px] md:px-[26px] py-[11px] md:py-[13px] rounded-lg 
          transition-all duration-300 hover:bg-white hover:text-[#816549] group"
        >
          Book an Appointment

         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 transition-all duration-300 group-hover:stroke-[#816549]"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
