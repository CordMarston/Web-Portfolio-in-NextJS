import Header from "@/components/ui/Header";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}