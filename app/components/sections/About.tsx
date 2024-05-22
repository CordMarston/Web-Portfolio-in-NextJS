import TextTyper from "@/app/components/ui/TextTyper";
export default function About() {
    return(
        <div className="grow flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 lg:px-32 mt-4 md:my-auto">
                <div className="flex order-2 md:order-1">
                    <div className="my-auto">
                    <h1 className="text-4xl font-bold tracking-[-0.1rem] leading-[120%] max-w-[45rem] pb-4 dark:text-neutral-200 min-h-28 md:min-h-16"><TextTyper text="Hello there, I'm Cord Marston" delay={75} infinite={false} /></h1>
                    <p className="leading-[2.25rem] max-w-[45rem] text-neutral-600 dark:text-neutral-400">I'm a seasoned fullstack developer with a passion for crafting robust, user-centric web applications. With expertise in both front-end and back-end technologies, I excel in creating seamless and intuitive user experiences while ensuring the underlying systems are efficient and scalable.</p>
                    <p className="leading-[2.25rem] max-w-[45rem] text-neutral-600 dark:text-neutral-400 mt-4">Outside of being a developer I am a father and love watching and helping my kids pursue sports. We stay busy between baseball, basketball, football & cheer.</p>
                    </div>
                </div>
                <div className="py-4 object-right order-1 md:order-2">
                    <img src="cordmarston.jpg" alt="Cord Marston 2023" className="float-right rounded-lg w-full lg:max-w-[80%]"/>
                </div>
            </div>
        </div>
    )
}