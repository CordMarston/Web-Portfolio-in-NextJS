import Image from "next/image";
import Header from "@/app/components/Header"

export default function Home() {
  return (
    <main className="min-h-screen">
        <Header/>
        <div className="px-32 mx-auto mt-8">
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <div className="my-auto">
                <h1 className="text-[3rem] laptop:text-[2rem] font-bold tracking-[-0.1rem] leading-[120%] max-w-[45rem] pb-4">Hello there, I'm Cord Marston</h1>
                <p className="text-[1rem] leading-[2.6rem] max-w-[45rem] laptop:max-w-[55rem] text-[#666]">I'm a seasoned fullstack developer with a passion for crafting robust, user-centric web applications. With expertise in both front-end and back-end technologies, I excel in creating seamless and intuitive user experiences while ensuring the underlying systems are efficient and scalable.  Constantly learning and adapting to new technologies, I am committed to driving innovation and delivering high-quality digital products.</p>
              </div>
            </div>
            <div className="py-4 object-right">
              <img src="https://www.cordmarston.com/images/cordmarston.jpg" className="float-right rounded-lg"/>
            </div>
          </div>
        </div>
    </main>
  );
}
