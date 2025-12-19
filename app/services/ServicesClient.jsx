"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");

  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (serviceId) {
      setOpenId(Number(serviceId));
    }
  }, [serviceId]);

  return (
    <div className="mt-16 px-4 md:px-20 flex flex-col gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.10)]"
        >
          {/* HEADER */}
          <div
            className="flex items-center justify-between px-6 py-5 cursor-pointer"
            onClick={() =>
              setOpenId(openId === service.id ? null : service.id)
            }
          >
            <div className="flex items-center gap-4">
              <div className="px-3 py-3 bg-[#816549] rounded-lg">
                <img src={service.icon} alt={service.title} />
              </div>
              <h2 className="text-[#816549] font-bold text-[18px] md:text-[22px]">
                {service.title}
              </h2>
            </div>

            <img
              src={
                openId === service.id
                  ? "/icons/arrow-up.svg"
                  : "/icons/arrow-down.svg"
              }
              className="w-10 h-10"
              alt="toggle"
            />
          </div>

          {/* EXPAND */}
          {openId === service.id && (
            <div className="px-6 pb-6 text-[#777777] text-[14px] md:text-[16px]">
              {service.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
