"use client";
import { ReactElement, MouseEvent, useRef, useState } from "react"
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

type SmallCardProps = {
    icon: ReactElement,
    description: string,
    title: string,
    link?: string,
    github?: string,
    stack: Array<string>
}

export default function SmallCart({icon, description, title, link, github, stack}:SmallCardProps) {
    const card = useRef<HTMLInputElement>(null);
    const [opacity, setOpacity] = useState(0);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    function handleMouseEnter() {
        setOpacity(1);
    }

    function handleMouseLeave() {
        setOpacity(0);
    }

    function handleMouseMove(e: MouseEvent) {
        if(card.current) {
            const rect = card.current.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    }


    return (
        <div ref={card} className="relative flex flex-col rounded-md border border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{opacity: opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 55%)`}}></div>
            <div className="flex flex-col space-y-3 h-full justify-between">
                <div className="flex w-full items-center justify-between dark:text-neutral-200">
                    <div className="flex items-center space-x-[10px]">
                        <span className="text-xl">{icon}</span> 
                        {link ? (
                        
                            <a href={ link } target="_blank" className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline">
                                { title } 
                                <span className="text-sm text-neutral-500">
                                    <ImNewTab />
                                </span>
                            </a>
                        ) : (
                            <span>
                                { title }
                            </span>
                        )}
                    </div>
                    {github ? <a href={ github } target="_blank" className="text-xl"><FaGithub /></a> : ''}
                </div>
                <p className="text-sm dark:text-neutral-400 py-1">{description}</p>
                <div className="flex items-center space-x-1">
                    {stack.length > 0  ? (
                        stack.map((item, index) => ( 
                            <span key={index} className="cursor-default rounded-md inline-flex border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300">{ item }</span>
                        ))
                    ) : ''}
                    
                </div>
            </div>
        </div>
    )
}