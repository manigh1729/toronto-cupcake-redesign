"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  // Check if announcement has been dismissed before
  useEffect(() => {
    setIsClient(true)
    const dismissed = localStorage.getItem("announcementDismissed")
    if (dismissed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("announcementDismissed", "true")
  }

  if (!isClient || !isVisible) return null

  return (
    <div className="bg-pink-100 py-1 text-center text-sm relative">
      <p>Friday, June 13, 2025 - Toronto | Check out our new Corporate event logo cupcakes</p>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 hover:bg-pink-200 p-0"
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  )
}
