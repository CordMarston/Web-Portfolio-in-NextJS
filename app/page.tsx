import Header from "@/app/components/Header";
import TextTyper from "@/app/components/ui/TextTyper";
import { FaReact, FaVuejs, FaPhp, FaLaravel, FaHtml5, FaCss3, FaDocker, FaLinux, FaNode, FaBootstrap, FaGithub  } from "react-icons/fa";
import { DiJqueryLogo, DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql, SiProxmox } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="grow flex">
          <div className="grid grid-cols-2 gap-8 px-32 my-auto">
            <div className="flex">
              <div className="my-auto">
                <h1 className="text-4xl font-bold tracking-[-0.1rem] leading-[120%] max-w-[45rem] pb-4 dark:text-neutral-200"><TextTyper text="Hello there, I'm Cord Marston" delay={75} infinite={false} />&nbsp;</h1>
                <p className="leading-[2.25rem] max-w-[45rem] text-neutral-600 dark:text-neutral-400">I'm a seasoned fullstack developer with a passion for crafting robust, user-centric web applications. With expertise in both front-end and back-end technologies, I excel in creating seamless and intuitive user experiences while ensuring the underlying systems are efficient and scalable.</p>
                <p className="leading-[2.25rem] max-w-[45rem] text-neutral-600 dark:text-neutral-400 mt-4">Outside of being a developer I am a father and love watching and helping my kids pursue sports. We stay busy between baseball, basketball, football & cheer.</p>
              </div>
            </div>
            <div className="py-4 object-right">
              <img src="cordmarston.jpg" className="float-right rounded-lg w-full lg:max-w-[80%]"/>
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 flex min-h-screen ">
        <div className="my-auto w-full">
          <h2 className="text-3xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200">My Skills & Tools</h2>
          <p className="leading-[2.25rem] text-neutral-600 dark:text-neutral-400 py-4">The most valuable skill I have isn't a particular tool or language it is my strong problem-solving ability & creative thinking.</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaReact /></div>React
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaVuejs /></div>Vue
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><RiNextjsFill /></div>NextJS
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><IoLogoJavascript /></div>JavaScript
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><SiTypescript /></div>TypeScript
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><DiJqueryLogo /></div>jQuery
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaHtml5 /></div>HTML
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaCss3 /></div>CSS
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaBootstrap /></div>Bootstrap
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><RiTailwindCssFill /></div>Tailwind
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaPhp /></div>PHP
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaLaravel /></div>Laravel
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><SiMysql /></div>MySQL
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><DiPostgresql /></div>PostgreSQL
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaDocker /></div>Docker
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaLinux /></div>Linux
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaNode /></div>Node
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><SiProxmox /></div>Proxmox
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaDocker /></div>VSCode
            </div>
            <div className="bg-white p-3 leading-[2.25rem] text-neutral-600 dark:text-neutral-400 flex flex-row border-l-2">
              <div className="self-center mr-2"><FaGithub /></div>Github
            </div>
           
          </div>
        </div>
      </div>
    </main>
  );
}
