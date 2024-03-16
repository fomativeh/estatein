"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DiscoverModal from "@/components/DiscoverModal/DiscoverModal";
import { createContext, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const loadModalState = () => {
  let storedModalState: any = localStorage.getItem("modalClicked");

  //If user loads site for the first time, or cache got cleared
  if (
    storedModalState == undefined ||
    storedModalState == null ||
    (JSON.parse(storedModalState) && storedModalState == false)
  ) {
    return false;
  } else {
    return true;
  }

  // //If cache got tampered with and cache value can't be parsed
  // if(!JSON.parse(storedModalState)){
  //   return false
  // }

  // if()
};

//Assign modal state
const modalClickedCache: boolean = loadModalState();

export const ModalContext = createContext<string | null>(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //Modal state
  const [modalClicked, setModalClicked] = useState<boolean>(modalClickedCache);
  console.log(modalClicked)

  //Navbar margin top
  const [navMargin, setNavMargin] = useState<string>(
    modalClicked ? "0px" : "50px"
  );

  //Hero section margin top
  const [heroMargin, setHeroMargin] = useState<string>(
    modalClicked ? "100px" : "130px"
  );

  //Store modal state in localstorage when clicked
  const handleModalClick = () => {
    setModalClicked(true);
    localStorage.setItem("modalClicked", JSON.stringify(true));
    setNavMargin("0px");
    setHeroMargin("100px");
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="flex justify-center items-start">
        {/* Wraps the entire website */}
        <div className="site-wrap w-[100vw] min-h-[100vh] max-w-[3000px] flex flex-col justify-start items-center">
          {/* Discover Modal */}
          {!modalClicked && (
            <DiscoverModal setModalClicked={handleModalClick} />
          )}

          {/* Navbar */}
          <Navbar marginTop={navMargin} />

          {/* Other page contents */}
          <ModalContext.Provider value={heroMargin}>
            {children}
          </ModalContext.Provider>
        </div>
      </body>
    </html>
  );
}
