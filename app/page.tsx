import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { OrderCTA } from "@/components/order-cta"
import { OccasionsSection } from "@/components/occasions-section"
import { CupcakeGallery } from "@/components/cupcake-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CupcakeGallery />
      <AboutSection />
      <OccasionsSection />
      <TestimonialsSection />
      <OrderCTA />
    </div>
  )
}
