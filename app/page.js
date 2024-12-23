import Navbar from "@/components/navbar";
import Hero from "@/components/heroImg";
import PlatinumSponsor from "@/components/platinumSponsor";
import Highlights from "@/components/highlights";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PlatinumSponsor/>
      <Highlights />
      <Footer />
    </div>
  );
}
