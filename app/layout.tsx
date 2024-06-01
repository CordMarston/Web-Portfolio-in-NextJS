import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "@/components/lib/Analytics";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cord Marston",
  description: "Cord Marston - Seattle area web developer",
  openGraph: {
    images: 'https://cordmarston.com/cordmarston.jpg',
  },
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
        <div className="bg-neutral-100 dark:bg-neutral-900">
          {children}
        </div>
      </body>
    </html>
  );
}
