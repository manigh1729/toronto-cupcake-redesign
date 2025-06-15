import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AddToCartButton } from "./add-to-cart-button"

const additionalCupcakes = [
  {
    id: 5,
    name: "Chocolate Hazelnut",
    description: "Chocolate cake topped with crushed hazelnuts and chocolate ganache",
    price: "$4.50",
    image: "/cupcake-chocolate-hazelnut.webp",
  },
  {
    id: 6,
    name: "Chocolate Vanilla",
    description: "Chocolate cake with vanilla buttercream and a delicate pink flower",
    price: "$4.25",
    image: "/cupcake-chocolate-vanilla.webp",
  },
  {
    id: 7,
    name: "Hot Fudge Sundae",
    description: "Chocolate cake with vanilla frosting, sprinkles, and a cherry on top",
    price: "$4.75",
    image: "/cupcake-hot-fudge-sundae.webp",
  },
  {
    id: 8,
    name: "Red Velvet Raspberry",
    description: "Classic red velvet cake with raspberry frosting and fresh raspberry topping",
    price: "$4.50",
    image: "/cupcake-red-velvet-raspberry.webp",
  },
]

export function CupcakeGallery() {
  return (
    <section className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">More Delicious Flavors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide variety of handcrafted cupcakes, each made with premium ingredients and baked fresh daily.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalCupcakes.map((cupcake) => (
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
