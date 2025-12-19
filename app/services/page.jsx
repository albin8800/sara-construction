export const dynamic = "force-dynamic";


import Footer from "@/conponents/Footer";
import ServicesClient from "./ServicesClient";
import { Suspense } from "react";

export default function ServicePage() {
  return (
    <div>
      {/* HERO */}
      <div className="relative w-full mt-32">
        <img
          src="/images/servicepage.svg"
          className="w-full object-cover"
          alt="services"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[28px] md:text-[48px] font-bold">
            Our Services
          </h1>
        </div>
      </div>

      {/* CLIENT CONTENT */}
      <Suspense fallback={null}>
        <ServicesClient />
      </Suspense>

      <Footer />
    </div>
  );
}
