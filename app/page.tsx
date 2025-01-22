import About from "@/components/About";
import Adventure from "@/components/Adventure";
import Destination from "@/components/Destination";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <main>
      <div className="mt-[-70px]" id="hero">
        <Hero />
      </div>

      <div id="about-us">
        <About />
        <Adventure />
        <Rating />
      </div>

      <div id="packages">
        <Packages />
      </div>

      <div id="destination">
        <Destination />
      </div>

    </main>
  );
}
