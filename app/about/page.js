"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1000ms duration
  }, []);

  return (
    <div>
      {/* Hero Image */}
      <section className="relative aspect-w-16 aspect-h-9" data-aos="fade-up">
        <Image
          src="/about2.JPG"
          alt="About Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100"
        />
      </section>

      {/* Banner Intro */}
      <section
        className="bg-black text-white text-center py-8"
        data-aos="fade-up"
      >
        <h1 className="text-2xl sm:text-4xl font-bold">
          About Controlled Chaos Racing
        </h1>
        <p className="mt-4 text-sm sm:text-base max-w-3xl mx-auto">
          Controlled Chaos Racing was formed in 2024 by the father-son duo Dakota
          and Chris Wold, Controlled Chaos Racing embodies the spirit of passion,
          perseverance, and family. The journey began in 2020 when Chris gifted
          Dakota with his first motorcycle, sparking a shared love for two wheels.
          After a year of riding the streets together, they took their passion to
          the next level by riding the world-renowned Circuit of the Americas, a
          moment that ignited their dream to race. In 2023, they dedicated
          countless hours to the track, sharpening their skills and preparing for
          their competitive debut. Now, with Dakota as the team’s primary rider
          and Chris as his unwavering support both on and off track, Controlled
          Chaos Racing thrives on the values of loyalty, determination, and the
          unbreakable bond of family. More than just a team, Controlled Chaos
          Racing is a platform for growth, connection, and excellence. With a
          foundation built on trust, passion, and resilience, they’re ready to
          take on new challenges and forge meaningful partnerships in the exciting
          world of motorsport.
        </p>
      </section>

      {/* Intro Team Section */}
      <section className="py-12 px-4 sm:px-8 bg-blue">
        {/* Row 1 */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          data-aos="fade-right"
        >
          <Image
            src="/about.jpg"
            alt="Team Member 1"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-center md:text-left text-white">
            <h2 className="text-xl font-bold">Chris Wold</h2>
            <p className="mt-2 text-sm sm:text-base">
              Controlled Chaos Racing started with a dream to dominate the
              racetrack and inspire the next generation of riders.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12"
          data-aos="fade-left"
        >
          <Image
            src="/about4.jpg"
            alt="Team Member 2"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-center md:text-left text-white">
            <h2 className="text-xl font-bold">Dakota Wold</h2>
            <p className="mt-2 text-sm sm:text-base">
              Born and raised in Texas, I proudly served in the Army from 2017 to
              2019, where I learned the value of grit and determination. My
              journey on two wheels began in 2020, and by 2021, I found my passion
              on the racetrack. In 2023, I took the leap into full-time track
              riding and competed in my first race that August—a moment that
              changed everything. By 2024, I embraced my first full race season,
              competing fiercely in C Superbike, SuperStock, and B Superbike,
              SuperStock. Every lap is a step closer to my dreams, fueled by
              resilience, hard work, and an unwavering love for racing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
