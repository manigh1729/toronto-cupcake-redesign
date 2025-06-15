import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { CartProvider } from "@/components/cart-provider"
import { UsaTariffsNotification } from "@/components/usa-tariffs-notification"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Toronto Cupcake | Delicious Freshly Baked Cupcakes",
  description:
    "Toronto Cupcake is your go-to destination for the most delicious and freshly baked cupcakes in Toronto and the Greater Toronto Area (GTA).",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} font-sans min-h-screen bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatSupport />
            <UsaTariffsNotification />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
