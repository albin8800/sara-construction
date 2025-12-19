"use client";

import { services } from "@/data/services";
import Link from "next/link";

export default function Services() {
  return (
    <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">

      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          Our Services
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      <div className="md:mt-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col px-6 py-6 bg-white shadow-[0_0_15px_rgba(0,0,0,0.10)] rounded-2xl gap-6"
          >
            <div className="flex gap-4 items-center">
              <div className="px-3 py-3 bg-[#816549] rounded-lg">
                <img src={service.icon} alt={service.title} />
              </div>
              <h1 className="text-[#816549] text-[22px] md:text-[24px] font-bold">
                {service.title}
              </h1>
            </div>

            <p className="text-[14px] md:text-[16px] text-[#777777] text-justify">
              {service.description}
            </p>

            <Link href={`/services?service=${service.id}`}>

            <button
              className="mt-auto w-fit flex items-center gap-2 border text-[#816549] text-[14px] md:text-[16px]
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
                className=" w-5 h-5 transition-all duration-300 group-hover:stroke-white"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          className="w-fit flex items-center gap-2 border text-[#816549] text-[15px] md:text-[16px]
          px-[22px] md:px-[26px] py-[11px] md:py-[13px] rounded-lg
          transition-all duration-300 hover:bg-[#816549] hover:text-white group"
        >
          Explore All
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
      </div>
    </div>
  );
}
