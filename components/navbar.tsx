"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { CartSheet } from "./cart-sheet"
import { UsaTariffsBanner } from "./usa-tariffs-banner"
import { AnnouncementBar } from "./announcement-bar"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cupcakes", href: "/cupcakes" },
    { name: "Occasions", href: "/occasions" },
    { name: "Corporate", href: "/corporate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white">
              <div className="flex flex-col gap-6 px-2 py-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Toronto Cupcake Logo" width={40} height={40} className="h-10 w-10" />
                    <span className="text-xl font-semibold">Toronto Cupcake</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-pink-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <Button className="w-full bg-pink-500 hover:bg-pink-600">Order Now</Button>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Toronto Cupcake Logo" width={40} height={40} className="h-10 w-10" />
            <span className="hidden md:inline-block text-xl font-semibold font-playfair">Toronto Cupcake</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-pink-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <CartSheet />
          <Button className="hidden md:inline-flex bg-pink-500 hover:bg-pink-600">Order Now</Button>
        </div>
      </div>
      <UsaTariffsBanner />
      <AnnouncementBar />
    </header>
  )
}
