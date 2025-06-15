import { Button } from "@/components/ui/button"

export function OrderCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-pink-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Ready to Order Your Perfect Cupcakes?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Order online 24/7 and enjoy fast, reliable delivery across the GTA. Custom orders welcome!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-50 px-8">
            Order Now
          </Button>
          <Button variant="outline" size="lg" className="border-white text-pink-500 hover:bg-pink-400 px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
