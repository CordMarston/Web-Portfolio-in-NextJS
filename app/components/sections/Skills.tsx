"use client";
import { FaReact, FaVuejs, FaPhp, FaLaravel, FaHtml5, FaCss3, FaDocker, FaLinux, FaNode, FaBootstrap, FaGithub  } from "react-icons/fa";
import { DiJqueryLogo, DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMysql, SiProxmox } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import onScreen from "@/app/components/hooks/OnScreen";

export default function Skills() {
    const { isInViewport, ref } = onScreen();
    return (
        <div className="min-h-screen flex mt-16 md:mt-0" ref={ref} id="skills">
            <div className="px-4 md:px-16 lg:px-32 md:my-auto w-full">
                <h2 className="text-3xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">My Skills & Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] py-4 gap-8">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 child:bg-white child:p-3 child-hover:scale-110 child:border-l-4 child:flex child:flex-row child:leading-[2.25rem] child:text-neutral-600 child:dark:bg-neutral-800 child:dark:text-neutral-400 child:transition-opacity child:ease-in child:duration-300 " id="skillsHolder">
                        <div className={`hover:border-cyan-600 hover:text-cyan-600 dark:hover:text-cyan-600 delay-[0.15s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaReact /></div>React
                        </div>
                        <div className={`hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-600 delay-[0.3s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaVuejs /></div>Vue
                        </div>
                        <div className={`hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white delay-[0.45s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><RiNextjsFill /></div>NextJS
                        </div>
                        <div className={`hover:border-yellow-400 hover:text-yellow-400 dark:hover:text-yellow-400 delay-[0.6s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><IoLogoJavascript /></div>JavaScript
                        </div>
                        <div className={`hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-600 delay-[0.75s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><SiTypescript /></div>TypeScript
                        </div>
                        <div className={`hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-600 delay-[0.9s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><DiJqueryLogo /></div>jQuery
                        </div>
                        <div className={`hover:border-orange-500 hover:text-orange-500 dark:hover:text-orange-500 delay-[1.05s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaHtml5 /></div>HTML
                        </div>
                        <div className={`hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-600 delay-[1.2s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaCss3 /></div>CSS
                        </div>
                        <div className={`hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-600 delay-[1.35s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaBootstrap /></div>Bootstrap
                        </div>
                        <div className={`hover:border-sky-500 hover:text-sky-500 dark:hover:text-sky-500 delay-[1.5s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><RiTailwindCssFill /></div>Tailwind
                        </div>
                        <div className={`hover:border-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-400 delay-[1.65s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaPhp /></div>PHP
                        </div>
                        <div className={`hover:border-red-400 hover:text-red-400 dark:hover:text-red-400 delay-[1.8s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaLaravel /></div>Laravel
                        </div>
                        <div className={`hover:border-orange-400 hover:text-orange-400 dark:hover:text-orange-400 delay-[1.95s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><SiMysql /></div>MySQL
                        </div>
                        <div className={`hover:border-sky-800 hover:text-sky-800 dark:hover:text-sky-800 delay-[2.1s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><DiPostgresql /></div>PostgreSQL
                        </div>
                        <div className={`hover:border-cyan-300 hover:text-cyan-300 dark:hover:text-cyan-300 delay-[2.25s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaDocker /></div>Docker
                        </div>
                        <div className={`hover:border-orange-400 hover:text-orange-400 dark:hover:text-orange-400 delay-[2.4s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaLinux /></div>Linux
                        </div>
                        <div className={`hover:border-lime-500 hover:text-lime-500 dark:hover:text-lime-500 dark:hover:border-lime-500 delay-[2.55s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaNode /></div>Node
                        </div>
                        <div className={`hover:border-orange-500 hover:text-orange-500 dark:hover:text-orange-500 delay-[2.7s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><SiProxmox /></div>Proxmox
                        </div>
                        <div className={`hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-600 delay-[2.85s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaDocker /></div>VSCode
                        </div>
                        <div className={`hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white delay-[3s] ${isInViewport ? "opacity-100" : "opacity-0"}`}>
                            <div className="self-center mr-2"><FaGithub /></div>Github
                        </div>
                    </div>
                    <p className="my-auto leading-[2.25rem] max-w-[45rem] text-neutral-600 dark:text-neutral-400 italic">
                    Other than languages & tools my most valuable skill I have is my problem solving ability. My analytical skills enable me to break down problems into manageable parts and systematically address each one, making me more efficient and effective in my work.
                    </p>
                </div>
            </div>
        </div>
    )
}