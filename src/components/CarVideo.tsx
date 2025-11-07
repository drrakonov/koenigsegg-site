import Image from "next/image";
import spairsSVG from '../../public/svg/KG14_WH.svg';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const CarVideo = () => {

    const spairsRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(spairsRef.current,
            { opacity: 0 },
            { opacity: 0.7, delay: 6, duration: 3.5 }
        )
    })

    return (
        <div className="h-screen">
            <div className="w-full h-screen flex justify-center md:justify-start py-[6em] md:py-[8em] md:px-[6em]">
                <Image ref={spairsRef} className="w-70 items-start h-25 opacity-0 sm:w-90" src={spairsSVG} alt="spairs" />
            </div>
            <video
                id="heroVideo"
                autoPlay
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover object-top -z-10"
                src="/video/Koenigsegg-car.mp4"
            />
        </div>
    )
}

export default CarVideo;