import type { Metadata } from "next";
import { Poppins , Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/sm-components/Navbar";
import CustomCursor from "@/sm-components/small-components/CustomCursor";
import ChatPopUp from "@/sm-components/Agent-PopUpModel";
import Footer from "@/sm-components/Footer";
import Skip from "@/sm-components/small-components/Skip-to-up";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Smalakar",
  description: "This is a website of Supriyo Malakar, a software engineer and a freelancer who is working on web-development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caveat.variable} antialiased`}
      >
        <ChatPopUp />
        <Navbar />
        <CustomCursor />
        {children}
        <Skip />
        <Footer />
      </body>
    </html>
  );
}
