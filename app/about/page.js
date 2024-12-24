import Image from "next/image";


export default function About() {
  return (
    <div>
      {/* Hero Image */}
      <section className="relative aspect-w-16 aspect-h-9">
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
      <section className="bg-black text-white text-center py-8">
        <h1 className="text-2xl sm:text-4xl font-bold">
          About Controlled Chaos Racing
        </h1>
        <p className="mt-4 text-sm sm:text-base max-w-3xl mx-auto">
        Controlled Chaos Racing started with a dream to dominate the
        racetrack and inspire the next generation of riders.
          Discover the story behind our team, our passion for racing, and the
          relentless pursuit of speed and precision.
        </p>
      </section>

      {/* Intro Team Section */}
      <section className="py-12 px-4 sm:px-8 bg-blue">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
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
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
          <Image
            src="/about4.jpg"
            alt="Team Member 2"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-center md:text-left text-white">
            <h2 className="text-xl font-bold">Dakota wold</h2>
            <p className="mt-2 text-sm sm:text-base">
              Our team is made up of talented, passionate individuals who
              live and breathe motorcycle racing.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        {/* <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <Image
            src="/team-3.jpg"
            alt="Team Member 3"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="mt-2 text-sm sm:text-base">
              To become the ultimate name in motorcycle racing, setting
              records and blazing trails for future champions.
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
}


// export default function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Welcome to the About Us page of Controlled Chaos Racing!</p>
//     </div>
//   );
// }
