"use client"

import CarImage from "@/components/CarImage"
import Landing from "@/components/Landing"
import NavBar from "@/components/Nav"

const Hero = () => {

  return (
    <div className={`${false ? "overflow-hidden pointer-events-none" : ""} relative w-full h-screen`}>
      <CarImage />
      <NavBar />
      <Landing />
    </div>
  )
}

export default Hero
