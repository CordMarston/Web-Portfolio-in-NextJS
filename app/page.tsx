import Header from "@/components/ui/Header";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import ProjectsSmall from "@/components/sections/ProjectsSmall";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <ProjectsSmall/>
      <Contact/>
    </main>
  );
}