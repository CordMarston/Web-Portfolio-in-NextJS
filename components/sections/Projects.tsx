import Card from "@/components/ui/Card";

export default function Projects() {
    return (
        <div className="px-4 md:px-16 lg:px-32 flex py-8 max-w-8xl mx-auto" id="projects">
            <div className="my-auto w-full">
                <h2 className="text-2xl font-bold tracking-[-0.1rem] leading-[120%] dark:text-neutral-200 pb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card title="mBTC to USD" image="./projects/mbtctousd.png" link="https://mbtc.cordmarston.com" github="https://github.com/CordMarston/mBTC-to-USD-in-NextJS">
                        <p className="md:min-h-36 lg:min-h-28">I was tired of going to an exchange to get the BTC price, converting it to mBtc and then calculating the USD amount so I figured why not make a simple calculator.</p>
                        <p className="mt-4 min-h-12  md:min-h-10"><span className="font-bold">Stack:</span> NextJS, React, Tailwind, Docker</p>
                    </Card>
                    <Card title="MPGTracker" image="./projects/mpgtrackerapp.png" link="https://mpgtracker.app" github="https://github.com/CordMarston/NextJS-MPG-Tracker">
                        <p className="md:min-h-36 lg:min-h-28">MPGTracker is a simple oAUTH app that allows you to register your cars and track your gas milage with a line chart.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> NextJS, React, Typescript, Tailwind, Docker, Postgres</p>
                    </Card>
                    <Card title="Dashboard V2" image="./projects/dashboardv2.png">
                        <p className="md:min-h-36 lg:min-h-28">Dashboard V2 is a superior version of Dashboard built using modern frameworks. It includes a ticketing system, billing system, HR system & CRM with build in VoIP integration.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> Vue, Laravel, Bootstrap, Docker, MySQL, Node</p>
                    </Card>
                    <Card title="GameGuideHQ" image="./projects/gameguidehq.png" link="https://gameguidehq.com" github="https://github.com/CordMarston/Wordpress-Docker-Compose-Sample">
                        <p className="md:min-h-36 lg:min-h-28">GameGuideHQ is a passion project Wordpress blog that covers gaming news, gaming articles and gaming social media statistics. Google News featured the site as a reliable gaming source.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> Wordpress, PHP, MySQL, NGINX, Docker, CSS</p>
                    </Card>
                    <Card title="PowerstrokeCustoms" image="./projects/powerstrokecustoms.png" link="https://powerstrokecustoms.com" github="https://github.com/CordMarston/Wordpress-Docker-Compose-Sample">
                        <p className="md:min-h-36 lg:md:min-h-36 lg:min-h-28">A local diesel repair shop Wordpress site featuring WooCommerce for selling parts. The project feature complete design, logo, website, store and advertising.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> Wordpress, PHP, Apache, MySQL, Photoshop, CSS</p>
                    </Card>
                    <Card title="Cars & Truck Wallpapers" image="./projects/cartruckwallpaper.png">
                        <p className="md:min-h-36 lg:min-h-28">The Cars & Truck Wallpaper app was my first crack at developing an app in Android Studio. The app featured hundreds of vehicle wallpapers, stats on downloads and a way for users to submit their own vehicle.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> Android Studio, Java, MySQL, PHP</p>
                    </Card>
                    <Card title="Portfolio" image="./projects/cordmarston.png" link="https://cordmarston.com" github="https://github.com/CordMarston/portfolio_cordmarston_com">
                        <p className="md:min-h-36 lg:min-h-28">This portfolio was made to showcase skills & previous projects. It also allows potential clients to reach out to me.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> NextJS, React, Docker, Tailwind, Typescript</p>
                    </Card>
                    <Card title="Games" image="./projects/games.png" link="https://games.cordmarston.com" github="https://github.com/CordMarston/NextJS-React-Mini-Games">
                        <p className="md:min-h-36 lg:min-h-28">This is a mini game site that I work on in my free time. It contains simple games such as hangman, memory & more made in React.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> NextJS, React, Prisma, Docker, Tailwind, Typescript, Postgres</p>
                    </Card>
                    <Card title="Z Networks" image="./projects/znetworks.png" link="https://znetworks.com">
                        <p className="md:min-h-36 lg:min-h-28">Z Networks wanted a mobile responsive website that tell visitors about their business. The site includes various "widgets" like a contact form, map, Facebook feed and more.</p>
                        <p className="mt-4 min-h-10"><span className="font-bold">Stack:</span> Bootstrap, HTML, CSS, NGINX, PHP, jQuery</p>
                    </Card>
                </div>
                <div className="text-sm text-center py-4 text-neutral-400">Multiple other projects are still being added along with other projects that were developed under a NDAs. Most of those projects are CRMs, Wordpress Blogs and Shopify sites. </div>
            </div>
        </div>
    )
}