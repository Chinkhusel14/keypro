import type { Metadata } from "next";
import { PT_Sans_Caption, Righteous } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Search, ShoppingCart, User } from "lucide-react";

const ptSansCaption = PT_Sans_Caption({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans-caption",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "Key board.mn",
  description: "Санал болгох Keyboards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          ptSansCaption.variable,
          righteous.variable
        )}
      >
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-[72px] items-center">
            <div className="mr-4 hidden md:flex">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span className="text-4xl font-righteous text-foreground sm:inline-block">
                  Key board.mn
                </span>
              </a>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a
                  className="font-bold text-lg transition-colors hover:text-foreground text-secondary"
                  href="/products/keyboards"
                >
                  Бүтээгдэхүүн
                </a>
                <a
                  className="font-bold text-lg transition-colors hover:text-foreground text-secondary"
                  href="/about"
                >
                  Холбогдох
                </a>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-5 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">
                <button className="inline-flex items-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted sm:pr-12 md:w-40 lg:w-64">
                  <span className="hidden lg:inline-flex">Хайх...</span>
                  <kbd className="absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 px-1.5 font-medium opacity-100 sm:flex">
                    <Search />
                  </kbd>
                </button>
              </div>
              <nav className="flex items-center justify-between space-x-4 md:justify-end">
                <a className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <ShoppingCart />
                  <span className="sr-only">Shopping Cart</span>
                </a>
                <a className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <User />
                  <span className="sr-only">User Account</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
