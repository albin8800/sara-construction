import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/conponents/Header";
import WhatsAppButton from "@/conponents/WhatsappButton";
import ClientWrapper from "@/app/ClientWrapper";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
});

export const metadata = {
  title: "SARA Constructions",
  description:
    "SARA Constructions delivers high-quality residential, commercial, and industrial building solutions with a focus on precision, durability, and client satisfaction.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <ClientWrapper>
          <Header />
          {children}
          <WhatsAppButton />
        </ClientWrapper>
      </body>
    </html>
  );
}
