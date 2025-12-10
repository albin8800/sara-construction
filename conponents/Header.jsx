"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";




export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const pathname = usePathname();

    const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Poultry Farm", href: "/poultry" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setIsScrolled(true);
            else setIsScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
      <header className="fixed top-0 w-full z-50">
        <div className="w-full bg-[#32291F] h-auto px-4 md:px-20 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          <div className="hidden md:flex items-center gap-2">
            <img src="/icons/location.svg" className="w-4 h-4" alt="location" />
            <p className="text-white md:text-[14px] text-3 font-semibold">
              Joyal House Panangadu Punalur
            </p>
          </div>

          <div className="flex items-center w-full justify-between md:justify-end md:w-1/2 gap-6">
            <div className="flex items-center gap-2">
              <img src="/icons/mail.svg" className="w-4 h-4" alt="mail" />
              <p className="text-white md:text-[14px] text-[12px] font-semibold">
                saraplr7288@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/call.svg" className="w-4 h-4" alt="call" />
              <p className="text-white md:text-[14px] text-[12px] font-semibold">
                +91 9446327288
              </p>
            </div>
          </div>
        </div>

        <nav
          className={`flex w-full h-auto md:px-20 px-4 justify-between items-center ${
            isScrolled ? "bg-white" : "bg-transparent"
          }`}
        >
          <div>
            <img
              src={isScrolled ? "/logo-black.svg" : "/logo-white.svg"}
              alt=""
            />
          </div>

          <ul
            className={`hidden md:flex gap-8 transition-all duration-300 font-semibold 
  ${isScrolled ? "text-[#A2988E]" : "text-[#A19B94]"}`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`
          transition-all duration-300
          ${
            pathname === link.href
              ? isScrolled
                ? "text-[#5D4634] text-[16px] font-semibold"
                : "text-[#FFFFFF] text-[16px] font-semibold"
              : "hover:text-[#746254]"
          }
        `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`md:hidden transition-all duration-300`}
>
  {isScrolled ? (
    
    menuOpen ? (
      <img src="/icons/close.svg" alt="close" className="w-7" />
    ) : (
      <img src="/icons/menu-dark.svg" alt="menu" className="w-7" />
    )
  ) : (
    
    menuOpen ? (
      <img src="/icons/close.svg" alt="close" className="w-7" />
    ) : (
      <img src="/icons/menu.svg" alt="menu" className="w-7" />
    )
  )}
</button>

{menuOpen && (
  <div
    className={`md:hidden fixed top-8.5 left-0 w-full h-screen bg-[#816549] z-40 px-6 py-6 flex flex-col transition-all duration-300`}
  >
    
    <div className="flex items-center justify-between w-full mb-10">
      <img src="/logo-white.svg" alt="logo" className="w-20" />

      <button onClick={() => setMenuOpen(false)}>
        <img src={isScrolled ? "/icons/close.svg" : "/icons/close.svg"}
          className="w-7"
          alt="close" 
        />
      </button>
    </div>

    
    <div className="flex flex-col items-center justify-center gap-8 mt-10">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`
            text-[20px] font-semibold transition-all duration-200
            ${
              pathname === link.href
                ? "text-[#ffffff]"
                : "text-[#c2b8b0] hover:text-[#5D4634]"
            }
          `}
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
)}


        </nav>
      </header>
    );
}