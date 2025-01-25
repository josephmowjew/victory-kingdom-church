import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { CartButton } from "@/components/CartButton";

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
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                  <div className="flex items-center space-x-8">
                    <a href="/" className="text-2xl font-bold text-yellow-500">
                      Victory Kingdom Church
                    </a>
                    <MainNav />
                  </div>
                  <div className="flex items-center space-x-4">
                    <CartButton />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
