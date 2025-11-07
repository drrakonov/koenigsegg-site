"use client"
import { useGSAP } from "@gsap/react";
import StackPage from "../StackPage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const StackSection = () => {
    const line1: string[] = ["WHERE", "SPEED", "BECOMES", "ART"];
    const line2: string[] = ["ART", "BECOMES", "OBSESSION"];

    const container = useRef(null);


    useGSAP(() => {
        const stickyCard = document.querySelectorAll(".sticky-card");

        stickyCard.forEach((card, index) => {
            if(index < stickyCard.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    endTrigger: stickyCard[stickyCard.length - 1],
                    end: "top top",
                    pin: true,
                    pinSpacing: false,
                })
            }
        })
    }, { scope: container })




    return (
        <div ref={container} className="w-full">
            <StackPage line={line1} imagePath="bg-[url('/images/image.png')] z-1ap" />
            <StackPage line={line2} imagePath="bg-[url('/images/lol.png')] z-2" />
        </div>
    )
}

export default StackSection;