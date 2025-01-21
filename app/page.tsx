import About from "@/components/About";
import Adventure from "@/components/Adventure";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="mt-[-70px]">
        <Hero />
      </div>

      <About />

      <Adventure />

    </main>
  );
}
