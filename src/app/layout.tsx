import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Raleway } from "next/font/google";
import TopNav from "@/components/TopNav/TopNav";
import Footer from "@/components/Footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Lextecher",
  description: "Lextecher professional website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable} `}>
      <body className={`font-sans antialiased`}>
        <TopNav />
        <section className="mt-[5.25rem]"> {children}</section>
        <Footer />
      </body>
    </html>
  );
}
