"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="mt-10 flex flex-col px-4 md:px-20 md:mt-20">
      
     
      <div className="flex items-center justify-center gap-4 md:gap-6">
        <hr className="grow border-[#5D4634]" />
        <h1 className="text-center text-[16px] md:text-[24px] font-bold text-[#5D4634] whitespace-nowrap">
          Latest Projects
        </h1>
        <hr className="grow border-[#5D4634]" />
      </div>

      
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.10)] group"
          >
          
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
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
            </div>
          </div>
        ))}
      </div>

     
      <div className="flex justify-center mt-10">
        <button
          className="flex items-center gap-2 border text-[#816549] text-[15px]
          px-6 py-3 rounded-lg
          transition-all duration-300 hover:bg-[#816549] hover:text-white group"
        >
          View All Projects
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
    </div>
  );
}
