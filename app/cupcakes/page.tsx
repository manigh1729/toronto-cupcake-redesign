import { CupcakesHero } from "@/components/cupcakes-hero"
import { CupcakesGrid } from "@/components/cupcakes-grid"
import { CupcakeVideoShowcase } from "@/components/cupcake-video-showcase"
import { CupcakeFilters } from "@/components/cupcake-filters"

export const metadata = {
  title: "Our Cupcakes | Toronto Cupcake",
  description: "Explore our delicious range of freshly baked cupcakes for every occasion.",
}

export default function CupcakesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CupcakesHero />
      <div className="container mx-auto px-4 py-8">
        <CupcakeFilters />
        <CupcakesGrid />
        <CupcakeVideoShowcase />
      </div>
    </div>
  )
}
