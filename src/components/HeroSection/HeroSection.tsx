"use client";
import Image from "next/image";
import styles from "./HeroSection.module.scss"

const HeroSection = ({ marginTop }: { marginTop: string | null }) => {
  return (
    // Hero section wrapper(Height and margin-top is dynamic)
    <section
      className="bg-dark_01 text-white flex justify-between items-center"
      style={{
        height: `calc(100vh - ${marginTop})`,
        marginTop: `${marginTop}`,
      }}
    >
      {/* Hero section details */}
      <section className="h-full w-[50%] bg-dark_02 pl-[10vw]"></section>
      
      {/* Hero section image */}
      <figure className={`h-full w-[50%] relative bg-[red] ${styles.heroImageWrapper}`}>
      </figure>
    </section>
  );
};

export default HeroSection;
