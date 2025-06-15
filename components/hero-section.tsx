import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6 max-w-md">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Delicious Cupcakes for Every Occasion
            </h1>
            <p className="text-lg text-gray-600">
              Toronto's premier destination for freshly baked, handcrafted cupcakes. Perfect for birthdays, weddings,
              corporate events, or just because.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg">Order Now</Button>
              <Button variant="outline" className="border-pink-200 px-8 py-6 text-lg">
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/main_hero.png"
              alt="Assortment of delicious cupcakes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-pink-100 opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-pink-100 opacity-50 blur-3xl"></div>
    </section>
  )
}
