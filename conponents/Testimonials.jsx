"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const isPaused = useRef(false);

  const [maxHeight, setMaxHeight] = useState(null);
  const [cardWidth, setCardWidth] = useState(0);

  /* 🔹 HEIGHT SYNC — DESKTOP ONLY */
  useEffect(() => {
    const calculateHeights = () => {
      if (window.innerWidth < 640) {
        setMaxHeight(null);
        return;
      }

      const heights = cardRefs.current
        .slice(0, testimonials.length)
        .map((el) => el?.offsetHeight || 0);

      setMaxHeight(Math.max(...heights));
    };

    calculateHeights();
    window.addEventListener("resize", calculateHeights);
    return () => window.removeEventListener("resize", calculateHeights);
  }, []);

  /* 🔹 CARD WIDTH MEASUREMENT (CRITICAL FIX) */
  useEffect(() => {
    const measureWidth = () => {
      if (cardRefs.current[0]) {
        const width =
          cardRefs.current[0].getBoundingClientRect().width + 16; // gap-4
        setCardWidth(width);
      }
    };

    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  /* 🔹 AUTO SCROLL — FULL CARD PER SCROLL */
  useEffect(() => {
    if (!cardWidth) return;

    const container = containerRef.current;
    let interval;

    interval = setInterval(() => {
      if (isPaused.current) return;

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      // Infinite loop reset
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - cardWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  return (
    <section className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          Customer Testimonials
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
        onTouchStart={() => (isPaused.current = true)}
        onTouchEnd={() => (isPaused.current = false)}
        className="
          md:mt-20
          mt-10
          flex gap-4
          overflow-x-auto
          overflow-y-visible
          no-scrollbar
          scroll-smooth
          items-start
        "
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-[90vw] sm:w-[510px] flex"
          >
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                minHeight:
                  maxHeight && window.innerWidth >= 640
                    ? maxHeight
                    : "auto",
              }}
              className="
                flex flex-col
                w-full
                bg-[#F5EFE9]
                rounded-2xl
                p-6
                gap-6
              "
            >
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[20px] font-semibold text-[#816549]">
                  {item.name}
                </h2>
                <p className="text-[14px] text-[#B2A293]">
                  {item.place}
                </p>
              </div>

              <p className="text-[16px] leading-relaxed text-[#777777]">
                {item.review}
              </p>

              <div className="flex justify-center gap-1 mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < item.rating ? "#816549" : "none"}
                    stroke="#816549"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
