import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "./add-to-cart-button"

const allCupcakes = [
  {
    id: 1,
    name: "Chocolate Caramel",
    description: "Rich chocolate cake with creamy caramel buttercream frosting",
    price: "$4.25",
    image: "/cupcake-chocolate-caramel.webp",
    tags: ["chocolate", "caramel", "popular"],
    isNew: false,
    isPopular: true,
  },
  {
    id: 2,
    name: "Chocolate Cream",
    description: "Chocolate cake with vanilla cream frosting and red candy topping",
    price: "$4.75",
    image: "/cupcake-chocolate-cream.jpeg",
    tags: ["chocolate", "vanilla", "specialty"],
    isNew: true,
    isPopular: false,
  },
  {
    id: 3,
    name: "Mint Chocolate",
    description: "Chocolate cake with mint frosting and colorful sprinkles",
    price: "$4.50",
    image: "/cupcake-mint-chocolate.jpeg",
    tags: ["chocolate", "mint", "specialty"],
    isNew: true,
    isPopular: false,
  },
  {
    id: 4,
    name: "Lemon Raspberry",
    description: "Lemon cake with raspberry frosting and fresh raspberry topping",
    price: "$4.50",
    image: "/cupcake-lemon-raspberry.jpeg",
    tags: ["lemon", "raspberry", "fruit"],
    isNew: true,
    isPopular: false,
  },
  {
    id: 5,
    name: "Chocolate Peanut Butter",
    description: "Decadent chocolate cake with peanut butter frosting and chocolate garnish",
    price: "$4.50",
    image: "/cupcake-chocolate-peanut-butter.webp",
    tags: ["chocolate", "peanut butter", "popular"],
    isNew: false,
    isPopular: true,
  },
  {
    id: 6,
    name: "Red Velvet Raspberry",
    description: "Classic red velvet cake with raspberry frosting and fresh raspberry topping",
    price: "$4.50",
    image: "/cupcake-red-velvet-raspberry.webp",
    tags: ["red velvet", "raspberry", "fruit"],
    isNew: false,
    isPopular: false,
  },
  {
    id: 7,
    name: "Chocolate Oreo",
    description: "Chocolate cake with vanilla frosting and Oreo cookie crumble",
    price: "$4.25",
    image: "/cupcake-chocolate-oreo.webp",
    tags: ["chocolate", "oreo", "popular"],
    isNew: false,
    isPopular: true,
  },
  {
    id: 8,
    name: "Chocolate Hazelnut",
    description: "Chocolate cake topped with crushed hazelnuts and chocolate ganache",
    price: "$4.50",
    image: "/cupcake-chocolate-hazelnut.webp",
    tags: ["chocolate", "hazelnut", "nuts"],
    isNew: false,
    isPopular: false,
  },
  {
    id: 9,
    name: "Chocolate Vanilla",
    description: "Chocolate cake with vanilla buttercream and a delicate pink flower",
    price: "$4.25",
    image: "/cupcake-chocolate-vanilla.webp",
    tags: ["chocolate", "vanilla"],
    isNew: false,
    isPopular: false,
  },
  {
    id: 10,
    name: "Hot Fudge Sundae",
    description: "Chocolate cake with vanilla frosting, sprinkles, and a cherry on top",
    price: "$4.75",
    image: "/cupcake-hot-fudge-sundae.webp",
    tags: ["chocolate", "vanilla", "specialty"],
    isNew: false,
    isPopular: false,
  },
  {
    id: 11,
    name: "Vanilla Bean",
    description: "Classic vanilla cake with vanilla bean buttercream frosting",
    price: "$3.95",
    image: "/cupcake-chocolate-vanilla.webp",
    tags: ["vanilla", "classic"],
    isNew: false,
    isPopular: true,
  },
  {
    id: 12,
    name: "Gluten-Free Chocolate",
    description: "Gluten-free chocolate cake with chocolate buttercream",
    price: "$4.95",
    image: "/cupcake-chocolate-oreo.webp",
    tags: ["chocolate", "gluten-free", "specialty"],
    isNew: false,
    isPopular: false,
  },
]

export function CupcakesGrid() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCupcakes.map((cupcake) => (
          <Card key={cupcake.id} className="overflow-hidden border-pink-100 hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={cupcake.image || "/placeholder.svg"}
                alt={cupcake.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {cupcake.isNew && <Badge className="absolute top-2 right-2 bg-pink-500">New</Badge>}
              {cupcake.isPopular && !cupcake.isNew && (
                <Badge className="absolute top-2 right-2 bg-purple-500">Popular</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-playfair text-lg font-semibold">{cupcake.name}</h3>
                <span className="font-medium text-pink-600">{cupcake.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{cupcake.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {cupcake.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
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
    </div>
  )
}
