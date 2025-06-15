"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function UsaTariffsNotification() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check if notification has been dismissed before
  useEffect(() => {
    setIsClient(true)
    const dismissed = localStorage.getItem("tariffNotificationDismissed")
    if (dismissed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("tariffNotificationDismissed", "true")
  }

  if (!isClient || !isVisible) return null

  return (
    <div className="fixed bottom-20 right-6 z-40 max-w-sm">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded shadow-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <div className="ml-3 flex-1 cursor-pointer">
                <p className="text-sm font-medium text-amber-800">USA TARIFFS</p>
                <p className="text-xs text-amber-700 mt-1">
                  Important information about our ingredients and suppliers. Click to learn more.
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center">USA TARIFFS</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  At Toronto Cupcake, we've always been committed to using the best ingredients, sourcing locally
                  whenever possible to support Canadian farmers and businesses. When Canadian options weren't available,
                  we relied on long-standing partnerships with suppliers in the U.S. and Mexico to bring in high-quality
                  ingredients like nuts, vanilla, and other key baking essentials.
                </p>
                <p>
                  Unfortunately, recent U.S. trade policies have disrupted these partnerships, forcing us to look
                  elsewhere for the ingredients that make our cupcakes special. While this change wasn't our choice, it
                  has given us the opportunity to connect with new ethical and sustainable suppliers around the
                  world—partners who share our commitment to quality and fair trade.
                </p>
                <p>
                  We're disappointed that the U.S. has stepped away from the agreements that once ensured a reliable
                  supply chain, but we're also excited about the new possibilities ahead. This shift allows us to
                  explore even better ingredients while staying true to what makes Toronto Cupcake unique.
                </p>
                <p>
                  We want to thank our amazing customers for your support as we navigate these changes. Rest assured,
                  our cupcakes will continue to be made with love, care, and the best ingredients we can find—no matter
                  where in the world they come from!
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-amber-500 hover:bg-amber-100"
                onClick={handleDismiss}
              >
                <span className="sr-only">Dismiss</span>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
