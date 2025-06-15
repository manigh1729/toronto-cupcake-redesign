"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function CupcakeFilters() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-8">
      <h2 className="font-playfair text-2xl font-bold mb-6">Find Your Perfect Cupcake</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search cupcakes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-pink-100"
          />
        </div>
        <Select>
          <SelectTrigger className="border-pink-100">
            <SelectValue placeholder="Filter by flavor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Flavors</SelectItem>
            <SelectItem value="chocolate">Chocolate</SelectItem>
            <SelectItem value="vanilla">Vanilla</SelectItem>
            <SelectItem value="red-velvet">Red Velvet</SelectItem>
            <SelectItem value="fruit">Fruit Flavors</SelectItem>
            <SelectItem value="specialty">Specialty</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="border-pink-100">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <Button variant="outline" size="sm" className="border-pink-200 bg-pink-50">
          Chocolate
        </Button>
        <Button variant="outline" size="sm" className="border-pink-200">
          Vanilla
        </Button>
        <Button variant="outline" size="sm" className="border-pink-200">
          Red Velvet
        </Button>
        <Button variant="outline" size="sm" className="border-pink-200">
          Fruit
        </Button>
        <Button variant="outline" size="sm" className="border-pink-200">
          Gluten Free
        </Button>
        <Button variant="outline" size="sm" className="border-pink-200">
          Vegan
        </Button>
      </div>
    </div>
  )
}
