import Image from "next/image";
import Header from "@/app/components/Header"

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Header/>
        <div className="px-32 mx-auto mt-8">
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <div className="my-auto">
                <h1 className="text-[3rem] laptop:text-[2rem] font-bold tracking-[-0.1rem] leading-[120%] max-w-[45rem] pb-4 dark:text-neutral-50">Hello there, I'm Cord Marston</h1>
                <p className="text-[1rem] leading-[2.6rem] max-w-[45rem] laptop:max-w-[55rem] text-neutral-600 dark:text-neutral-200">I'm a seasoned fullstack developer with a passion for crafting robust, user-centric web applications. With expertise in both front-end and back-end technologies, I excel in creating seamless and intuitive user experiences while ensuring the underlying systems are efficient and scalable.</p>
                <p className="text-[1rem] leading-[2.6rem] max-w-[45rem] laptop:max-w-[55rem] text-neutral-600 mt-4">Outside of being a developer I am a father and love watching and helping my kids pursue sports. We stay busy between baseball, basketball, football & cheer. I also love watching sports, go Mariners & go Seahawks!</p>
              </div>
            </div>
            <div className="py-4 object-right">
              <img src="cordmarston.jpg" className="float-right rounded-lg"/>
            </div>
          </div>
        </div>
    </main>
  );
}
