"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    if (!isHomePage) {
      setIsScrolled(true); 
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header className="fixed top-0 w-full z-50">

      
      <div className="w-full bg-[#32291F] px-4 md:px-20 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <div className="hidden md:flex items-center gap-2">
          <img src="/icons/location.svg" className="w-4 h-4" alt="location" />
          <p className="text-white text-[14px] font-semibold">
            Joyal House Panangadu Punalur
          </p>
        </div>

        <div className="flex items-center w-full justify-between md:justify-end md:w-1/2 gap-6">
          <div className="flex items-center gap-2">
            <img src="/icons/mail.svg" className="w-4 h-4" alt="mail" />
            <p className="text-white text-[12px] md:text-[14px] font-semibold">
              saraplr7288@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/icons/call.svg" className="w-4 h-4" alt="call" />
            <p className="text-white text-[12px] md:text-[14px] font-semibold">
              +91 9446327288
            </p>
          </div>
        </div>
      </div>

      
      <nav
        className={`flex w-full md:px-20 px-4 justify-between items-center transition-all duration-300
          ${isScrolled ? "bg-white border-b" : "bg-transparent"}
        `}
      >

        <Link href="/">
        
        <img
          src={isScrolled ? "/logo-black.svg" : "/logo-white.svg"}
          alt="logo"
          className="w-24"
        />
        </Link>

       
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[16px] font-semibold transition-all duration-300
                  ${
                    pathname === link.href
                      ? isScrolled
                        ? "text-[#5D4634] border-b-2 border-[#5D4634] pb-1"
                        : "text-white border-b-2 border-white pb-1"
                      : isScrolled
                        ? "text-[#A2988E] hover:text-[#816549]"
                        : "text-[#D6CEC6] hover:text-white"
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
          className="md:hidden transition-all"
        >
          {menuOpen ? (
            <img src="/icons/close.svg" alt="close" className="w-7" />
          ) : (
            <img
              src={isScrolled ? "/icons/menu-dark.svg" : "/icons/menu.svg"}
              alt="menu"
              className="w-7"
            />
          )}
        </button>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#816549] z-40 px-6 py-6 flex flex-col">

          <div className="flex items-center justify-between mb-10">
            <img src="/logo-white.svg" alt="logo" className="w-20" />
            <button onClick={() => setMenuOpen(false)}>
              <img src="/icons/close.svg" className="w-7" alt="close" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-8 mt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[20px] font-semibold transition-all
                  ${
                    pathname === link.href
                      ? "text-white"
                      : "text-[#c2b8b0] hover:text-white"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
