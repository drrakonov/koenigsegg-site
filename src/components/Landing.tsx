"use client"
import Image from "next/image";
import spairsSVG from '../../public/svg/KG14_WH.svg';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const Landing = () => {
    const spairsRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(spairsRef.current,
            { opacity: 0 },
            { opacity: 0.7, delay: 6, duration: 3.5 }
        )
    })

    return (
        <div className="flex h-700">
            <div className="w-full h-100 flex justify-center md:justify-start mt-20 md:mt-30 md:py-[3em] md:px-[6em]">
                <Image ref={spairsRef} className="w-70 h-25 opacity-0  sm:w-90" src={spairsSVG} alt="spairs" />
            </div>
        </div>
    )
}

export default Landing;