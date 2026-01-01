"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import Footer from "@/conponents/Footer";

export default function ProjectsPage() {
  const PROJECTS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  const paginatedProjects = projects.slice(startIndex, endIndex);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full mt-32 md:w-full">
        <img className="w-full fill object-cover" src="/images/aboutpage.svg" alt="aboutus" />
        <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[28px] md:text-[48px] font-bold tracking-wide">
          Projects
        </h1>
      </div>
      </div>

      <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <hr className="grow border-[#5D4634]" />
          <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
            Our Projects
          </h1>
          <hr className="grow border-[#5D4634]" />
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => (
            <div
              key={project.slug} // ✅ FIXED KEY
              className="bg-white rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.10)] group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.owner}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h2 className="text-[#816549] text-[20px] font-bold">
                  {project.owner}
                </h2>

                <p className="text-[#777777] text-[14px]">
                  {project.location}
                </p>

                <span className="text-[13px] text-[#999999]">
                  Completed: {project.year}
                </span>

                <Link href={`/projects/${project.slug}`}>
                  <button
                    className="mt-4 w-fit flex items-center gap-2 border text-[#816549] text-[14px]
                    px-5 py-2.5 rounded-lg
                    transition-all duration-300 hover:bg-[#816549] hover:text-white group"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 group-hover:stroke-white"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 mb-20">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border text-sm transition
                    ${
                      currentPage === page
                        ? "bg-[#816549] text-white border-[#816549]"
                        : "border-[#816549] text-[#816549] hover:bg-[#816549] hover:text-white"
                    }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
