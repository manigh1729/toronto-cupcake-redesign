"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Send, X, Loader2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  text: string
  sender: "user" | "support"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! How can we help you today?",
    sender: "support",
    timestamp: new Date(),
  },
]

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate support response after a delay
    setTimeout(() => {
      const supportMessage: Message = {
        id: messages.length + 2,
        text: getAutoResponse(newMessage),
        sender: "support",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, supportMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getAutoResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping")) {
      return "We deliver across the Greater Toronto Area (GTA). Delivery fees start at $10 and vary based on location. For same-day delivery, please order before 11 AM."
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      return "Our cupcakes start at $3.95 each, with specialty flavors at $4.50. We also offer bulk discounts for orders of a dozen or more!"
    } else if (lowerMessage.includes("allergen") || lowerMessage.includes("nut") || lowerMessage.includes("gluten")) {
      return "We offer nut-free and gluten-free options. Please let us know about any allergies when placing your order, and we'll accommodate your needs."
    } else if (lowerMessage.includes("custom") || lowerMessage.includes("corporate") || lowerMessage.includes("logo")) {
      return "Yes, we offer custom designs and corporate logo cupcakes! Please email us at orders@torontocupcake.com with your requirements for a quote."
    } else {
      return "Thank you for your message! Our customer support team will get back to you shortly. If you need immediate assistance, please call us at (416) 555-1234."
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? "bg-pink-600" : "bg-pink-500"} hover:bg-pink-600 transition-all`}
          aria-label={isOpen ? "Close chat" : "Open chat support"}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 shadow-xl z-50 border-pink-100">
          <CardHeader className="bg-pink-500 text-white p-4 flex flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/logo.png" alt="Support" />
                <AvatarFallback className="bg-pink-300 text-pink-800">TC</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Toronto Cupcake Support</h3>
                <p className="text-xs text-pink-100">We typically reply in a few minutes</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-pink-600 h-8 w-8"
            >
              <X size={18} />
              <span className="sr-only">Close</span>
            </Button>
          </CardHeader>

          <ScrollArea className="h-80 p-4">
            <CardContent className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === "user" ? "text-pink-100" : "text-gray-500"}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-100 text-gray-800">
                    <div className="flex items-center gap-1">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <p className="text-sm">Typing...</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </ScrollArea>

          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="border-pink-100 focus-visible:ring-pink-500"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-pink-500 hover:bg-pink-600"
                disabled={!newMessage.trim()}
              >
                <Send size={18} />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
