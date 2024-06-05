"use client";
import {useState} from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export default function LightDarkToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const darkLightToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }
    if(!darkMode) {
        return (
            <button className="bg-neutral-200 p-2 rounded text-center cursor-pointer items-center flex text-xl" onClick={darkLightToggle}>
                <MdOutlineDarkMode />
            </button>
        )
    } else {
        return (
            <button className="bg-neutral-600 p-2 rounded text-center cursor-pointer items-center flex text-xl" onClick={darkLightToggle}>
                <MdOutlineLightMode />
            </button>
        )
    }
}