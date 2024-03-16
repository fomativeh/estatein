"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "./layout";

export default function Home() {
  const heroMargin = useContext(ModalContext)
  return (
    <main className="w-full h-fit">
      <HeroSection marginTop={heroMargin}/>
    </main>
  );
}
