import SmallCard from "@/components/ui/SmallCard";
import { FaBitcoin } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { FaCarOn } from "react-icons/fa6";

export default function ProjectsSmall() {
    return (
        <div className="px-4 md:px-16 lg:px-32 flex py-8 max-w-7xl mx-auto" id="projects">
            <div className="my-auto w-full">
                <h2 className="text-2xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SmallCard icon={<FaBitcoin />} title="mBTC to USD" description="A simple mBTC to USD calculator with live BTC pricing." stack={['Next.js', 'React', 'Tailwind', 'Docker']} link="https://mbtc.cordmarston.com" github="https://github.com/CordMarston/mBTC-to-USD-in-NextJS"/>
                    <SmallCard icon={<FaGasPump />} title="MPGTracker" description="OAUTH app for adding vehicles and tracking gas mileage." stack={['Next.js', 'React', 'Tailwind', 'Docker', 'Postgres']} link="https://mpgtracker.app" github="https://github.com/CordMarston/NextJS-MPG-Tracker"/>
                    <SmallCard icon={<CgGames />} title="Games" description="OAUTH app containing mini games with a leaderboard." stack={['Next.js', 'React', 'Tailwind', 'Docker', 'Postgres']} link="https://mpgtracker.app" github="https://github.com/CordMarston/NextJS-MPG-Tracker"/>
                    <SmallCard icon={<MdDashboard />} title="Dashboard V2" description="Ticketing, billing, HR and sales CRM system." stack={['Vue', 'Laravel', 'Bootstrap', 'Docker', 'MySQL', 'Node']}/>
                    <SmallCard icon={<FaWordpress />} title="GameGuideHQ" description="Wordpress gaming blog. Customized plugins for tracking social analytics." stack={['Wordpress', 'CSS', 'PHP', 'Docker']} link="https://gameguidehq.com" github="https://github.com/CordMarston/Wordpress-Docker-Compose-Sample"/>
                    <SmallCard icon={<FaWordpress />} title="Powerstroke Customs" description="Wordpress business page with WooCommerce store." stack={['Wordpress', 'WooCommerce', 'Apache', 'Linux']} link="https://powerstrokecustoms.com" github="https://github.com/CordMarston/Wordpress-Docker-Compose-Sample"/>
                    <SmallCard icon={<IoCubeOutline />} title="Z Networks" description="Company page describing Z Networks with map & social widgets." stack={['HTML', 'Bootstrap', 'PHP', 'JavaScript', 'Docker']} link="https://znetworks.com"/>
                    <SmallCard icon={<FaCarOn />} title="Cars & Trucks Wallpapers" description="Android app with vehicle wallpapers. Users can upload their own and sort by popularity." stack={['Android Studio', 'Java', 'PHP', 'MySQL']}/>
                </div>
            </div>
        </div>
    )
}