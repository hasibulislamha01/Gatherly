import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gatherly",
  description: "An event management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <nav className="w-full py-3 md:px-10 lg:px-20 flex items-center font-semibold bg-slate-800 text-white shadow-lg shadow-slate-500">
          <Link href='/' className="mr-auto text-lg text-rose-200">Gatherly</Link>
          <div className="flex items-center justify-end gap-5">
            <Link href='/'>Home</Link>
            <Link href='/form'>Form</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
