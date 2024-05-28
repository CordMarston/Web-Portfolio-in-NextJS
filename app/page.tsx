import Header from "@/components/ui/Header";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900 pb-10">
      <div className="flex flex-col min-h-screen">
        <Header/>
        <About/>
      </div>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}