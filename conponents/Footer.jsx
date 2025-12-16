"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Poultry Farm", href: "/poultry" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full bg-[#675C52] md:mt-20 mt-16 flex flex-col px-4 md:px-20 pb-10">

  
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 md:gap-0 items-start">

     
        <div className="flex flex-col gap-2 max-w-[205px] items-center md:items-start text-center md:text-left">
          <img className="w-20 h-20" src="/logo-white.svg" alt="Sara Construction Logo" />
          <p className="text-[16px] text-white leading-relaxed">
            Designed with Purpose, Built with Precision
          </p>
        </div>

    
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-[20px] text-white font-bold">
            Quick Links
          </p>

          <div className="flex flex-col gap-3 items-center md:items-start">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] transition-all
                  ${isActive
                    ? "text-white font-bold"
                    : "text-[#ADA39A] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

     
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="text-[20px] text-white font-bold">
            Contact Us
          </p>

          <div className="flex flex-col gap-3">
            {[
              ["/icons/location-footer.svg", "Address 1 Street 5 location 3 Area 4"],
              ["/icons/call-footer.svg", "+91 8756475890"],
              ["/icons/mail-footer.svg", "saraplr7288@gmail.com"],
              ["/icons/time-footer.svg", "Mon - Sun (8 AM - 10 PM)"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex gap-3 items-start">
                <img className="mt-1" src={icon} alt="" />
                <p className="text-[16px] text-white leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

     
      <div className="flex flex-col mt-14 gap-4 justify-center">
        <p className="text-center text-[20px] text-white font-bold">
          Connect with Us On
        </p>

        <div className="flex gap-6 justify-center">
          <img src="/icons/instagram.svg" alt="Instagram" />
          <img src="/icons/facebook.svg" alt="Facebook" />
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </div>
      </div>

      
      <p className="text-[16px] text-white text-center mt-8">
        © 2025 Sara Construction. All Rights Reserved.
      </p>

      <hr className="mt-6 border-[#867D74]" />

    
      <p className="text-center text-[16px] text-white mt-10">
        Designed and Developed by <span className="font-bold">Albin B Thomas</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center mt-4">
        <div className="flex gap-2 items-center">
          <img className="h-6 w-6" src="/icons/whatsapp.svg" alt="WhatsApp" />
          <p className="font-semibold text-white">+91 8137050102</p>
        </div>

        <div className="flex gap-2 items-center">
          <img className="h-6 w-6" src="/icons/linkedin.svg" alt="Instagram" />
          <p className="font-semibold text-white">Albin B Thomas</p>
        </div>
      </div>

    </div>
  );
}
