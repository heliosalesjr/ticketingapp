import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helio's Ticketing App",
  description: "Generated by Hélio Sal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-col items-center border-b mb-4 px-4 py-4">
          <div className="max-w-5xl w-full">
            <MainNav />
          </div>
        </nav>
        <main className="flex flex-col items-center">
          <div className="max-w-5xl w-full">
            {children}
          </div>
        </main>
        
        </body>
    </html>
  );
}
