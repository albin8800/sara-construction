import Link from "next/link";

export default function About() {
  return (
    <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          About Us
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      <div className="mt-6 md:mt-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <img
          src="/images/home-about-image.svg"
          alt=""
          className="w-full md:w-[45%] h-auto"
        />

        <div className="flex flex-col md:w-[55%]">
          <div className="leading-none">
            <h1 className="text-[56px] md:text-[96px] font-bold text-[#816549]">
              25+
            </h1>
            <p className="text-[20px] md:text-[24px] font-bold text-[#816549]">
              Years of Experience
            </p>
          </div>

          <p className="mt-6 text-[14px] md:text-[16px] text-[#777777] text-justify">
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
            of strength, reliability, and excellence, serving clients across
            multiple regions.
          </p>

      <Link href="/about">
          <button
            className="w-fit flex items-center gap-2 mt-6 border text-[#816549] text-[15px] md:text-[16px] 
        px-[22px] md:px-[26px] py-[11px] md:py-[13px] rounded-lg
        transition-all duration-300 hover:bg-[#816549] hover:text-white group"
          >
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-all duration-300 group-hover:stroke-white"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
