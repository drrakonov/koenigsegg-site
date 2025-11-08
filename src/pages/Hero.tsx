"use client"

import CarVideo from "@/components/CarVideo"
import Landing from "@/components/Landing"
import NavBar from "@/components/Nav"
import { useEffect, useRef, useState } from "react"

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
