import About from "@/components/About";
import Adventure from "@/components/Adventure";
import Hero from "@/components/Hero";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <main>
      <div className="mt-[-70px]">
        <Hero />
      </div>

      <About />
      <Adventure />
      <Rating />

    </main>
  );
}
