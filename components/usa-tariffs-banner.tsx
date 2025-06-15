"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AlertTriangle, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function UsaTariffsBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check if banner has been dismissed before
  useEffect(() => {
    setIsClient(true)
    const dismissed = localStorage.getItem("tariffBannerDismissed")
    if (dismissed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening the dialog when clicking the X
    setIsVisible(false)
    localStorage.setItem("tariffBannerDismissed", "true")
  }

  if (!isClient || !isVisible) return null

  return (
    <div className="bg-amber-500 text-white py-1 text-center text-sm relative">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="flex items-center justify-center gap-1 mx-auto hover:underline">
            <AlertTriangle className="h-3 w-3" />
            <span>USA TARIFFS - Important information about our ingredients and suppliers</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">USA TARIFFS</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              At Toronto Cupcake, we've always been committed to using the best ingredients, sourcing locally whenever
              possible to support Canadian farmers and businesses. When Canadian options weren't available, we relied on
              long-standing partnerships with suppliers in the U.S. and Mexico to bring in high-quality ingredients like
              nuts, vanilla, and other key baking essentials.
            </p>
            <p>
              Unfortunately, recent U.S. trade policies have disrupted these partnerships, forcing us to look elsewhere
              for the ingredients that make our cupcakes special. While this change wasn't our choice, it has given us
              the opportunity to connect with new ethical and sustainable suppliers around the world—partners who share
              our commitment to quality and fair trade.
            </p>
            <p>
              We're disappointed that the U.S. has stepped away from the agreements that once ensured a reliable supply
              chain, but we're also excited about the new possibilities ahead. This shift allows us to explore even
              better ingredients while staying true to what makes Toronto Cupcake unique.
            </p>
            <p>
              We want to thank our amazing customers for your support as we navigate these changes. Rest assured, our
              cupcakes will continue to be made with love, care, and the best ingredients we can find—no matter where in
              the world they come from!
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white hover:bg-amber-600 p-0"
        onClick={handleDismiss}
        aria-label="Dismiss notification"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  )
}
