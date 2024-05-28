"use client";
import Image from 'next/image'
import { useState } from 'react';
import { signOut, useSession } from "next-auth/react"
export default function LoggedInUser()
{
    const session = useSession();
    
    const [menu_open, setToggleMenu] = useState(false);

    const toggleMenu = () =>
    {
        setToggleMenu(!menu_open);
    }
    
    return (
        <li className="relative">
            <div className="p-2 rounded cursor-pointer relative" onClick={toggleMenu}>
                <div className="hidden md:inline">{ session.data?.user?.name }</div>
                { session.data?.user?.image && 
                    <Image
                        src={session.data.user.image}
                        width="30"
                        height="30"
                        alt="Profile Picture"
                        className="rounded-full inline ml-2 border-cyan-900 border-2"
                    />
                }
            </div>
            <div id="dropdown" className={`z-10 bg-white divide-gray-100 rounded-lg shadow w-full min-w-fit dark:bg-gray-700 ${menu_open ? 'absolute' : 'hidden'}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                <li>
                    <a href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-nowrap">Sign out</a>
                </li>
                </ul>
            </div>
        </li>
    )
}