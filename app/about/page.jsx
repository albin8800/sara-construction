import About from "@/conponents/About";
import Footer from "@/conponents/Footer";
import WhyUs from "@/conponents/WhyUs";

export default function AboutUsPage() {
  return (
    <div>

    
      <div className="mt-40 md:mt-56 flex flex-col px-4 md:px-20">

      
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <hr className="grow border-[#5D4634]" />
          <h1 className="text-center text-[18px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
            Who We Are
          </h1>
          <hr className="grow border-[#5D4634]" />
        </div>

        <div className="mt-8 md:mt-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

      
          <img
            src="/images/home-about-image.svg"
            alt="About Sara Construction"
            className="w-full md:w-[45%] h-auto rounded-lg"
          />

      
          <div className="flex flex-col md:w-[55%]">

        
            <div className="leading-none">
              <h1 className="text-[64px] md:text-[96px] font-bold text-[#816549]">
                25+
              </h1>
              <p className="text-[18px] md:text-[24px] font-bold text-[#816549]">
                Years of Experience
              </p>
            </div>

          
            <p className="mt-6 text-[14px] md:text-[16px] text-[#777777] text-justify leading-relaxed">
              Sara Construction is a 25+ years experienced construction company
              based in Punalur, Kollam district, Kerala. With decades of
              experience in the construction industry, we have successfully
              delivered a wide range of residential, commercial, and renovation
              projects across different locations, earning long-term trust through
              quality workmanship and reliable service. Our skilled team follows a
              structured construction approach, using high-grade materials and
              modern building techniques to ensure every project is strong,
              durable, and built to last. We focus on precision, safety, and
              transparency at every stage of construction. With a strong
              commitment to on-time project delivery and customer satisfaction,
              Sara Construction continues to build spaces that stand as a symbol
              of strength, reliability, and excellence.
            </p>

          </div>
        </div>

      
        <div className="w-full flex flex-col md:flex-row gap-10 mt-12 md:mt-20">

    
          <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 text-center md:text-left">
            <div className="flex gap-2 items-center justify-center ">
              <img src="/icons/vision.svg" alt="Vision" />
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#816549]">
                Our Vision
              </h3>
            </div>

            <p className="text-[15px] md:text-[16px] text-[#777777] leading-relaxed text-justify">
              To become a trusted and leading construction company known for
              quality workmanship, reliable delivery, and long-term customer
              satisfaction.
            </p>
          </div>

          
          <div className="flex flex-col gap-4 justify-center w-full md:w-1/2 text-center md:text-left">
            <div className="flex gap-2 items-center justify-center ">
              <img src="/icons/mission.svg" alt="Mission" />
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#816549]">
                Our Mission
              </h3>
            </div>

            <p className="text-[15px] md:text-[16px] text-[#777777] leading-relaxed text-justify">
              To provide reliable construction solutions by combining experience,
              quality materials, and efficient project management to meet client
              expectations.
            </p>
          </div>

        </div>

      </div>

    
      <WhyUs />

  
      <div className="flex justify-center mt-12 md:mt-20 px-4">
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

    
      <Footer />
    </div>
  );
}
