"use client";
import {useState} from 'react';
import Link from 'next/link'
import PortfolioNav from "@/app/components/ui/PortfolioNav";
import BlogNav from "@/app/components/ui/BlogNav";

type HeaderProps = {
    blog?: boolean
}

export default function Header({blog}:HeaderProps) {
    const [navBarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navBarOpen);
    }

    return (
        <header className="flex items-center flex-wrap justify-between px-8 md:px-16 lg:px-32 bg-white py-4 shadow-2xl dark:bg-neutral-800 dark:text-neutral-400">
            <Link  href="/" className="bg-black dark:hover:bg-sky-300 hover:bg-sky-700 text-white p-2 text-2xl rounded cursor-pointer ">
                CM
            </Link>
            <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
           
            <div id="navbar-default" className={`${navBarOpen ? 'mt-4' : 'hidden'}  w-full md:block md:w-auto`}>
                {blog? <BlogNav/> : <PortfolioNav/>}
            </div>
        </header>
    )
}