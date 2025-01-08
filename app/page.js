"use client";

import { useEffect } from "react";
import Hero from "@/components/heroImg";
import PlatinumSponsor from "@/components/platinumSponsor";
import Highlights from "@/components/highlights";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000 }); // Animation duration in ms

  }, []);

  return (
    <div>
      <Hero />
      <PlatinumSponsor />

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 p-4 py-12">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right" // Add AOS animation
        >
          <Image
            src="/father-and-son.png" // Replace with your actual image path
            alt="Controlled Chaos Racing Team"
            width={600} // Adjust based on your image size
            height={400} // Adjust based on your image size
            className="w-full h-auto rounded-lg shadow-inner"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left lg:mt-40 sm:mt-10 xs:mt-14"
          data-aos="fade-left" // Add AOS animation
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Who We Are</h2>
          <p className="text-gray-700 text-lg">
            We are a passionate and determined father-son motorcycle racing team:
            Chris Wold (#928) and Dakota Wold (#627). From serving our country in
            the Army to pursuing the ultimate racing dream, we bring grit, heart,
            and unshakable dedication to every lap. Join us as we push the limits,
            rising from novice club racers to contenders in the high-octane world
            of MotoAmerica. This is more than a journey—it’s a testament to
            chasing dreams and creating a legacy on two wheels!
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 px-4" data-aos="fade-up">
        <Highlights />
      </section>
    </div>
  );
}
