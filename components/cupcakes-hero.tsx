import Image from "next/image"

export function CupcakesHero() {
  return (
    <section className="relative bg-pink-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Delicious Cupcakes</h1>
          <p className="text-lg text-gray-600 mb-8">
            Handcrafted with love using only the finest ingredients. Each cupcake is baked fresh daily for the perfect
            taste and texture.
          </p>
          <div className="flex justify-center gap-4">
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/cupcake-mint-chocolate.jpeg"
                alt="Mint Chocolate Cupcake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 160px"
              />
            </div>
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/cupcake-lemon-raspberry.jpeg"
                alt="Lemon Raspberry Cupcake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 160px"
              />
            </div>
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/cupcake-chocolate-cream.jpeg"
                alt="Chocolate Cream Cupcake"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 160px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-pink-100 opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-pink-100 opacity-50 blur-3xl"></div>
    </section>
  )
}
