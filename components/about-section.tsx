import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/1.png"
              alt="Toronto Cupcake bakery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Why Toronto Cupcake Has the Best Cupcakes in the GTA
            </h2>
            <p className="text-gray-600">
              Since our founding, we've been dedicated to creating the most delicious cupcakes using only premium
              ingredients. Our team of skilled bakers craft each cupcake with precision and care, ensuring every bite is
              pure bliss.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                </div>
                <span>Made fresh daily with premium ingredients</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                </div>
                <span>Fast, reliable delivery across the GTA</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                </div>
                <span>Custom designs for any occasion</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-pink-200 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                </div>
                <span>Corporate event and wedding specialists</span>
              </li>
            </ul>
            <Button className="bg-pink-500 hover:bg-pink-600 w-fit">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
