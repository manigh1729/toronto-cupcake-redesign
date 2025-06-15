import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AddToCartButton } from "./add-to-cart-button"

const featuredCupcakes = [
  {
    id: 1,
    name: "Sponge cake in cupcake",
    description: "Sponge cake with mint frosting and fresh strawberry topping",
    price: "$4.25",
    image: "/spong-cake.webp",
  },
  {
    id: 2,
    name: "Mint Chocolate",
    description: "Chocolate cake with mint frosting and colorful sprinkles",
    price: "$4.50",
    image: "/cupcake-mint-chocolate.jpeg",
  },
  {
    id: 3,
    name: "Lemon Raspberry",
    description: "Lemon cake with raspberry frosting and fresh raspberry topping",
    price: "$4.50",
    image: "/cupcake-lemon-raspberry.jpeg",
  },
  {
    id: 4,
    name: "Chocolate Cream",
    description: "Chocolate cake with vanilla cream frosting and red candy topping",
    price: "$4.75",
    image: "/cupcake-chocolate-cream.jpeg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Most Popular Cupcakes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love using only the finest ingredients. Our cupcakes are baked fresh daily for the perfect
            taste and texture.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCupcakes.map((cupcake) => (
            <Card key={cupcake.id} className="overflow-hidden border-pink-100 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={cupcake.image || "/placeholder.svg"}
                  alt={cupcake.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-playfair text-lg font-semibold">{cupcake.name}</h3>
                  <span className="font-medium text-pink-600">{cupcake.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{cupcake.description}</p>
                <AddToCartButton
                  product={cupcake}
                  variant="outline"
                  size="sm"
                  className="w-full border-pink-200 hover:bg-pink-50"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-pink-500 hover:bg-pink-600">View All Flavors</Button>
        </div>
      </div>
    </section>
  )
}
