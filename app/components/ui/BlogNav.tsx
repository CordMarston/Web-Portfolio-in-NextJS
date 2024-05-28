"use client";
import LightDarkToggle from "@/app/components/ui/LightDarkToggle"
import Link from "next/link"
import { useSession } from "next-auth/react"
import LoggedUserButton from "./auth/LoggedUserButton";


export default function BlogNav(){
    const session = useSession();
    return (
        <ul className="flex flex-col md:flex-row items-center gap-12 uppercase text-xs text-right inline ">
            {session.status == 'authenticated' && 
                <>
                    <li>
                        <Link href="/blog/posts/new" className="cursor-pointer dark:hover:text-sky-300 hover:text-sky-700 tracking-wide">Add Post</Link>
                    </li>
                    <LoggedUserButton/>
                </>
            }
            <li>
                <LightDarkToggle/>
            </li>
        </ul>
    )
}