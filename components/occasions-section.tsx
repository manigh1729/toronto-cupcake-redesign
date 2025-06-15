import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const occasions = [
  {
    id: 1,
    title: "Birthdays",
    image: "/5.png",
    description: "Make any birthday special with our custom cupcakes",
  },
  {
    id: 2,
    title: "Weddings",
    image: "/6.png",
    description: "Elegant cupcake towers for your perfect day",
  },
  {
    id: 3,
    title: "Corporate Events",
    image: "/4.png",
    description: "Impress clients with branded logo cupcakes",
  },
  {
    id: 4,
    title: "Special Celebrations",
    image: "/3.png",
    description: "From graduations to anniversaries, we've got you covered",
  },
]

export function OccasionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Perfect for Every Occasion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whatever you're celebrating, our cupcakes add that special touch. From personal celebrations to corporate
            events, we create custom designs to match your theme.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion) => (
            <Card
              key={occasion.id}
              className="group overflow-hidden border-pink-100 hover:shadow-lg transition-shadow"
            >
              {/* Zoom wrapper */}
              <div className="relative h-48 overflow-hidden transform transition-transform duration-300 ease-out origin-center group-hover:scale-108">
                <Image
                  src={occasion.image || "/placeholder.svg"}
                  alt={occasion.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-playfair text-lg font-semibold mb-2">
                  {occasion.title}
                </h3>
                <p className="text-sm text-gray-600">{occasion.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
