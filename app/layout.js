import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/conponents/Header";



const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"], 
});

export const metadata = {
  title: "SARA Constructions",
  description: "SARA Constructions delivers high-quality residential, commercial, and industrial building solutions with a focus on precision, durability, and client satisfaction. From planning to execution, we build spaces that are functional, aesthetic, and trusted for long-term performance.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
      >
        {children}
         
        <Header />
       
      </body>
    </html>
  );
}
