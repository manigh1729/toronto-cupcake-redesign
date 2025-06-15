"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useState } from "react"
import { Check } from "lucide-react"

type AddToCartButtonProps = {
  product: {
    id: number
    name: string
    price: string
    image: string
  }
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function AddToCartButton({ product, variant = "outline", size = "sm", className = "" }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)

    // Reset the button after 1.5 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 1500)
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={handleAddToCart} disabled={isAdded}>
      {isAdded ? (
        <span className="flex items-center gap-1">
          <Check className="h-4 w-4" /> Added
        </span>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}
