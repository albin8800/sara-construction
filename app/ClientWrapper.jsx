"use client";

import { useLayoutEffect, useState } from "react";
import Loader from "@/conponents/Loader";

export default function ClientWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useLayoutEffect(() => {
    const hasLoaded = sessionStorage.getItem("sara-loader");

    if (hasLoaded) {
      setShowLoader(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      sessionStorage.setItem("sara-loader", "true");
      setShowLoader(false);
      document.body.style.overflow = "auto";
    }, 2600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {showLoader && <Loader />}

      <div
        style={{ visibility: showLoader ? "hidden" : "visible" }}
        className="transition-opacity duration-700"
      >
        {children}
      </div>
    </>
  );
}
