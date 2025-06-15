import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Birthday Party",
    content:
      "The cupcakes were absolutely delicious! Everyone at my daughter's birthday party loved them. The designs were beautiful and exactly what we wanted.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Corporate Event",
    content:
      "We ordered cupcakes with our company logo for a product launch. They were a huge hit! The attention to detail was impressive and the taste was amazing.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer L.",
    role: "Wedding",
    content:
      "Toronto Cupcake created the perfect cupcake tower for our wedding. Not only did they look stunning, but they tasted incredible. Our guests couldn't stop raving about them!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about Toronto Cupcake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-pink-500 text-pink-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
