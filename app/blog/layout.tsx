import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/app/components/lib/Analytics";
import Header from "../components/ui/Header";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cord Marston - Blog",
  description: "Cord Marston - Seattle area web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={inter.className}>
        <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900">
          <div className="flex flex-col min-h-screen">
            <SessionProvider>
              <Header blog={true}/>
              {children}
            </SessionProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
