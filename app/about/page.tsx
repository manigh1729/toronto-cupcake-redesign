import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | Toronto Cupcake",
  description:
    "Learn about Toronto Cupcake and our founder Michelle Harrison's journey to creating delicious cupcakes.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-pink-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Toronto Cupcake</h1>
            <p className="text-lg text-gray-600">
              Discover the story behind Toronto's premier destination for freshly baked, handcrafted cupcakes.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] w-full max-w-[400px] mx-auto md:mx-0 rounded-lg overflow-hidden">
              <Image
                src="/Michelle_at_kitchen.webp"
                alt="Michelle Harrison, Founder of Toronto Cupcake"
                width={400}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-lg mb-6">
                Toronto Cupcake was created by Michelle Harrison to pursue her love of baking. Inspired by her mother,
                Michelle opened Toronto Cupcake in August 2010 as one of Canada's first gourmet cupcakeries.
              </p>
              <p className="text-gray-600 mb-6">
                With a passion for creating delicious treats and an eye for beautiful designs, Michelle has grown
                Toronto Cupcake from a small bakery into one of the GTA's most beloved cupcake destinations. Her
                commitment to quality ingredients and exceptional taste has made Toronto Cupcake a staple for
                celebrations across the city.
              </p>
              <p className="text-gray-600 mb-8">
                Every cupcake is still made with the same care and attention to detail that Michelle brought to her very
                first batch. It's this dedication to quality that keeps our customers coming back for more.
              </p>

              <h3 className="font-playfair text-2xl font-bold mb-4">Our Sweet Journey</h3>
              <p className="text-gray-600 mb-4">
                Welcome to Toronto Cupcake! Founded in 2010, we are proud to be Toronto's leading destination for
                gourmet branded cupcakes. Whether you're celebrating a birthday, hosting a corporate event, or simply
                indulging in a sweet treat, our handcrafted cupcakes are made fresh daily using the finest ingredients.
                Explore our wide range of classic and seasonal flavors, and enjoy fast, reliable delivery across the
                GTA.
              </p>
              <p className="text-gray-600 mb-8 italic">
                We love the idea that our treats are making people happy every time they bite into one. How much fun is
                that!
              </p>
              <p className="text-gray-600 mb-8">
                At Toronto Cupcake, we believe in giving back to the community. Since our inception, we have partnered with numerous local organizations, donating our time and/or delicious cupcakes to support causes that make a difference in local and regional communities. We are committed to making a positive impact in our community and welcome opportunities to collaborate on charitable events.
              </p>
              <p className="text-gray-600 mb-8">
                Ready to experience the best cupcakes in Toronto? Browse our selection online or get in touch to discuss custom orders. From corporate events to weddings, we have the perfect cupcakes to make your occasion unforgettable. Order today and have our gourmet cupcakes delivered right to your door!
              </p>


              <Button className="bg-pink-500 hover:bg-pink-600">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Toronto Cupcake, we believe in creating moments of joy through delicious treats made with love and
              care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-pink-500">🧁</span>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4">Quality Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest ingredients in our cupcakes, from premium chocolate to fresh seasonal fruits. No
                artificial flavors or preservatives, ever.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-pink-500">🌱</span>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices, from sourcing local ingredients whenever possible to using
                eco-friendly packaging for our delicious treats.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl text-pink-500">❤️</span>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in giving back to our community through partnerships with local charities and organizations,
                supporting causes that matter to Toronto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-pink-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Taste the Toronto Cupcake Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the joy of our handcrafted cupcakes for yourself. Order online for delivery across the GTA or
            visit our bakery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-500 hover:bg-pink-50 px-8">
              Order Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-pink-500 hover:bg-pink-400 px-8">
              Visit Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
