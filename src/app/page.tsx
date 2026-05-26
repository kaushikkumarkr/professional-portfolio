import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductionPhilosophy from "@/components/ProductionPhilosophy";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Perspectives from "@/components/Perspectives";
import SkillsMatrix from "@/components/SkillsMatrix";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black">
        <Hero />
        <ProductionPhilosophy />
        <Experience />
        <Projects />
        <Perspectives />
        <SkillsMatrix />
        <Education />
      </main>
      <Footer />
    </>
  );
}
