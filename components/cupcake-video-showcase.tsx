"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function CupcakeVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState("video1")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const videoRefs = {
    video1: useRef<HTMLVideoElement>(null),
    video2: useRef<HTMLVideoElement>(null),
    video3: useRef<HTMLVideoElement>(null),
  }

  const handleTabChange = (value: string) => {
    // Pause current video
    if (videoRefs[activeVideo as keyof typeof videoRefs]?.current) {
      videoRefs[activeVideo as keyof typeof videoRefs].current!.pause()
    }

    setActiveVideo(value)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    const video = videoRefs[activeVideo as keyof typeof videoRefs].current

    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    const video = videoRefs[activeVideo as keyof typeof videoRefs].current

    if (video) {
      video.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Cupcake Showcase</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Watch our delicious cupcakes come to life. Each one is handcrafted with care and attention to detail.
        </p>
      </div>

      <Card className="border-pink-100 overflow-hidden">
        <Tabs defaultValue="video1" onValueChange={handleTabChange}>
          <div className="bg-pink-50 p-4">
            <TabsList className="grid grid-cols-3 bg-white">
              <TabsTrigger value="video1">Cupcake Creation</TabsTrigger>
              <TabsTrigger value="video2">Frosting Art</TabsTrigger>
              <TabsTrigger value="video3">Finishing Touches</TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="p-0 relative">
            <TabsContent value="video1" className="m-0">
              <div className="relative w-full mx-auto" style={{ maxWidth: "500px", aspectRatio: "2/3" }}>
                <video
                  ref={videoRefs.video1}
                  src="/videos/cup1.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                />
              </div>
            </TabsContent>

            <TabsContent value="video2" className="m-0">
              <div className="relative w-full mx-auto" style={{ maxWidth: "500px", aspectRatio: "2/3" }}>
                <video
                  ref={videoRefs.video2}
                  src="/videos/cup2.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                />
              </div>
            </TabsContent>

            <TabsContent value="video3" className="m-0">
              <div className="relative w-full mx-auto" style={{ maxWidth: "500px", aspectRatio: "2/3" }}>
                <video
                  ref={videoRefs.video3}
                  src="/videos/cup3.mp4"
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                />
              </div>
            </TabsContent>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between">
              <button
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white text-pink-500 p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                onClick={toggleMute}
                className="bg-white/80 hover:bg-white text-pink-500 p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </CardContent>
        </Tabs>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Our cupcakes are made fresh daily using premium ingredients. Each one is handcrafted with love and attention
          to detail.
        </p>
      </div>
    </section>
  )
}
