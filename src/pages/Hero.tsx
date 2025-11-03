"use client"

import Landing from "@/components/Landing"
import NavBar from "@/components/Nav"

const CarVideo = () => {
    return (
        <video
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover object-top -z-10"
            src="/video/Koenigsegg-car.mp4"
        />
    )
}


const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <CarVideo />
            <NavBar />
            <Landing />
        </div>
    )
}

export default Hero;