import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-black text-white flex flex-col justify-between"
    >
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" // Image in the public folder
          alt="Motorcycle Racing Hero Image"
          layout="fill" // Ensures the image covers the section
          objectFit="cover" // Scales the image proportionally
          objectPosition="center center" // Keeps the focus on the motorcycle
          priority={true}
          className="opacity-80"
        />
      </div>

      {/* Heading at the Top */}
      <div className="z-10 text-center xs:pt-14 sm:pt-12 md:pt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Welcome to Controlled Chaos Racing
        </h1>
      </div>

      {/* Subtext at the Marked Position */}
      <div className="z-10 text-center mb-12 sm:mb-16 md:mb-50">
        <p className="text-sm sm:text-base md:text-lg xs:text-base">
          Speed. Precision. Passion.
        </p>
      </div>
    </section>
  );
}
