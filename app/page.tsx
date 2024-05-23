import Header from "@/app/components/Header";
import Skills from "@/app/components/sections/Skills";
import About from "@/app/components/sections/About";
import Projects from "@/app/components/sections/Projects";
import Contact from "@/app/components/sections/Contact";

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