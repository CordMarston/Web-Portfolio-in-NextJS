import LightDarkToggle from "@/components/ui/LightDarkToggle"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


export default function PortfolioNav() {
    const scrollPage = (e:any) => {
        e.preventDefault();
        let section = e.target.dataset.section;
        if(section) {
            let element = document.getElementById(section);
            if(element) {
                element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }
    }

    return (
        <ul className="flex flex-col md:flex-row items-center gap-12 uppercase text-xs text-right inline ">
            <li><a href="#about" className="cursor-pointer dark:hover:text-sky-300 hover:text-sky-700 tracking-wide" onClick={scrollPage} data-section="about">About</a></li>
            <li><a href="#skills" className="cursor-pointer dark:hover:text-sky-300 hover:text-sky-700 tracking-wide" onClick={scrollPage} data-section="skills">Skills</a></li>
            <li><a href="#projects" className="cursor-pointer dark:hover:text-sky-300 hover:text-sky-700 tracking-wide" onClick={scrollPage} data-section="projects">Projects</a></li>
            <li><a href="#contact" className="cursor-pointer dark:hover:text-sky-300 hover:text-sky-700 tracking-wide" onClick={scrollPage} data-section="contact">Contact</a></li>
            <li>
                <a className="dark:hover:text-sky-300 hover:text-sky-700 text-xl" aria-label="github" href="https://github.com/CordMarston" target="_blank" title="GitHub">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a className="dark:hover:text-sky-300 hover:text-sky-700 text-xl" aria-label="linkedin" href="https://linkedin.com/in/CordMarston" target="_blank" title="LinkedIn">
                    <FaLinkedin />
                </a>
            </li> 
            <li>
                <a className="dark:hover:text-sky-300 hover:text-sky-700 text-xl" aria-label="Resume" href="https://cordmarston.com/Cord%20Marston%20-%20Resume.pdf" target="_blank" title="Resume">
                    <IoIosDocument />
                </a>
            </li> 
            <li title="Toggle Darkmode">
                <LightDarkToggle/>
            </li>
        </ul>
    )
}