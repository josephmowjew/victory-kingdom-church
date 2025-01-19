import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";

// Primary font for headings and nav
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

// Secondary font for body text
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Victory Kingdom Church",
  description: "A place where faith grows, community thrives, and lives are transformed through the power of God's love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
