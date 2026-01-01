"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Footer from "@/conponents/Footer";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="px-4 md:px-20 mt-20 text-center">
        <h1 className="text-xl font-bold text-[#816549]">
          Project not found
        </h1>
      </div>
    );
  }

  return (
    <div>
    <div className="px-4 md:px-20 mt-40 md:mt-40">
      {/* Title */}
      <h1 className="text-[22px] md:text-[28px] font-bold text-[#816549]">
        {project.owner}
      </h1>

      <p className="text-[#777777] mt-2">
        {project.location} • Completed {project.year}
      </p>

      {/* Main Image */}
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img
          src={project.images[activeImage]}
          alt={project.owner}
          className="w-full h-[300px] md:h-[420px] object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {project.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-[100px] h-[70px] overflow-hidden rounded-lg border
              ${
                activeImage === index
                  ? "border-[#816549]"
                  : "border-gray-300"
              }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-[18px] font-bold text-[#816549] mb-2">
          Project Overview
        </h2>
        <p className="text-[#555555] leading-relaxed">
          This project was completed with high attention to quality,
          durability, and modern construction standards.
        </p>
      </div>

      {/* Details Table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border border-[#e5e5e5]">
          <tbody>
            <tr className="border-b">
              <td className="p-4 font-semibold text-[#816549]">
                Owner
              </td>
              <td className="p-4">{project.owner}</td>
            </tr>
            <tr className="border-b">
              <td className="p-4 font-semibold text-[#816549]">
                Location
              </td>
              <td className="p-4">{project.location}</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-[#816549]">
                Year Completed
              </td>
              <td className="p-4">{project.year}</td>
            </tr>
          </tbody>
        </table>
      </div>
     
    </div>
     <Footer />
    </div>
  );
}
