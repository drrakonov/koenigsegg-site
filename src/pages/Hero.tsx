"use client"

import CarVideo from "@/components/CarVideo"
import Landing from "@/components/Landing"
import NavBar from "@/components/Nav"

const Hero = () => {

  return (
    <div className={`${false ? "overflow-hidden pointer-events-none" : ""} relative w-full h-screen`}>
      <CarVideo />
      <NavBar />
      <Landing />
    </div>
  )
}

export default Hero
