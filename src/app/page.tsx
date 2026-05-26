import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsMatrix from "@/components/SkillsMatrix";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <SkillsMatrix />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
