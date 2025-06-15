import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Toronto Cupcake Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-semibold font-playfair">Toronto Cupcake</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your go-to destination for the most delicious and freshly baked cupcakes in Toronto and the Greater
              Toronto Area.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-200 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-200 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-200 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cupcakes" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Our Cupcakes
                </Link>
              </li>
              <li>
                <Link href="/occasions" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Occasions
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-pink-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>123 Cupcake Street</p>
              <p>Toronto, ON M5V 2K4</p>
              <p>
                <a href="tel:+14165551234" className="hover:text-pink-500 transition-colors">
                  (416) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@torontocupcake.com" className="hover:text-pink-500 transition-colors">
                  info@torontocupcake.com
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get special offers, free giveaways, and new flavor announcements.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="border-pink-100" />
              <Button className="bg-pink-500 hover:bg-pink-600">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Toronto Cupcake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
