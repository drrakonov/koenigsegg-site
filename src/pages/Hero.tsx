"use client"

import Landing from "@/components/Landing"
import NavBar from "@/components/Nav"
import { useEffect, useState } from "react"

const CarVideo = () => (
  <video
    id="heroVideo"
    autoPlay
    playsInline
    muted
    className="absolute inset-0 w-full h-full object-cover object-top -z-10"
    src="/video/Koenigsegg-car.mp4"
  />
)

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const vid = document.getElementById("heroVideo") as HTMLVideoElement
    if (!vid) return

    const handlePlay = () => {
      setIsPlaying(true)
      setTimeout(() => {
        setIsPlaying(false)
      }, 8000)
    }

    handlePlay();
  }, [])

  return (
    <div className={`${isPlaying ? "overflow-hidden pointer-events-none" : ""} relative w-full h-screen`}>
      <CarVideo />
      <NavBar />
      <Landing />
    </div>
  )
}

export default Hero
