import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const righteous = Righteous({ weight: '400', subsets: ["latin"], variable: '--font-righteous' });

export const metadata: Metadata = {
  title: 'Keyboard.mn',
  description: 'Premium mechanical keyboards and accessories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${righteous.variable}`}>
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-800/60">
              <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-righteous text-2xl text-gray-800 dark:text-gray-200">Keyboard.mn</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  <Link href="/keyboards" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Keyboards</Link>
                  <Link href="/switches" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Switches</Link>
                  <Link href="/keycaps" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Keycaps</Link>
                  <Link href="/stabilizers" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Stabilizers</Link>
                  <Link href="/accessories" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Accessories</Link>
                </nav>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="sr-only">Shopping Cart</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="sr-only">User Account</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
                  © 2024 Keyboard.mn. All rights reserved.
                </p>
                <nav className="flex items-center space-x-4 text-sm font-medium">
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">About</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Contact</Link>
                  <Link href="/shipping" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">Shipping & Returns</Link>
                  <Link href="/faq" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">FAQ</Link>
                </nav>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}