"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HorizontalPage = () => {

    useGSAP(() => {

        gsap.to(".horizontal-section", {
            xPercent: -66.85,
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-section",
                scroller: "body",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true,
                //markers: true
            }

        })
    })

    return (
        <div className="horizontal-section min-h-screen w-[300vw] bg-background flex">
            <div className="tech-ach h-screen w-screen grid sm:grid-cols-8 bg-background py-15 sm:py-0 pl-20 pr-10">
                <div className="grid order-2 sm:order-1 col-span-3 py-2 sm:py-30 gap-3 sm:gap-3">
                    <span className="text-[0.9em] sm:text-[1.3em] uppercase leading-5">Technological <br /> Achievements</span>
                    <p className="text-sm sm:text-[1em] md:text-[1.2em] leading-tight">
                        Staying ahead of the curve in a very
                        competitive e-mobility landscape in true
                        Koenigsegg fashion, we are offering our
                        ground-breaking components to visionary
                        clientele. Sharing this technology enables
                        Koenigsegg to have a positive impact on
                        CO2 reduction.
                    </p>
                    <button className="flex items-center cursor-pointer">
                        Discover our solution <ArrowRight size={18} />
                    </button>
                </div>
                <div className="grid order-1 sm:order-2 col-span-5 justify-center gap-4 sm:pt-0 py-10">
                    <div className="uppercase mt-10 h-fit text-[2em] sm:text-[3em] md:text-[4em] leading-15">
                        in house <br /> <span className="ml-15">innovations</span>
                    </div>
                    <Image width={800} height={600} src="/images/terrier.png" alt="terrier" />
                </div>
            </div>
            {/* ABOUT US */}
            <div className="about-us h-screen w-screen grid sm:grid-cols-8 pr-10 md:pr-35 pl-10 bg-white text-background">
                <div className="grid order-2 sm:order-1 col-span-3 sm:py-10 items-center">
                    <Image width={450} height={600} src="/images/carbon-body.jpg" alt="carbon-body" />
                </div>
                <div className="grid col-span-5 order-1 sm:order-2 py-5 md:py-15 p-5 md:p-25">
                    <div className="text-[0.9em] sm:text-[1.3em] uppercase leading-5 h-fit flex justify-self-end">About Us</div>
                    <div>
                        <span className="text-[2em] sm:text-[2.5em] md:text-[4em] uppercase leading-15">why we
                            <br />
                            <span className="ml-15">do what</span>
                            <br />
                            we do
                        </span>
                    </div>
                    <div className="flex justify-self-end pl-[30%] md:pl-[40%]">
                        <p className="text-sm sm:text-[1em] md:text-[1.3em] leading-tight tracking-tight">
                            Every single detail of a Koenigsegg car is
                            measured against our continuing goal: to
                            enhance vehicle performance.
                        </p>
                    </div>
                    <button className="flex justify-self-center items-center cursor-pointer">
                        Discover more <ArrowRight size={18} />
                    </button>
                </div>
            </div>
            <div className="our-history h-screen w-screen grid sm:grid-cols-8 bg-[#ffb703]">
                <div className="grid col-span-5 py-5 sm:py-15 pl-10 md:pl-40 pr-10 md:pr-30 text-black">
                    <div className="text-[0.9em] sm:text-[1.3em] uppercase leading-5 h-fit flex justify-self-start">Our History</div>
                    <div >
                        <span className="text-[2em] sm:text-[2.5em] md:text-[4em] uppercase leading-5 sm:leading-10 md:leading-15 tracking-tight ">
                            Delivering on
                            <br /> <span className="ml-15">A singular</span>
                            <br /> Vision
                        </span>
                    </div>
                    <div className="flex justify-self-end pl-[40%]">
                        <p className="text-sm sm:text-[1em] md:text-[1.3em] leading-tight tracking-tight">
                            On August 12, 1994, a 22-year-old
                            Christian von Koenigsegg decided to follow
                            his dream and build the world’s greatest
                            sports car. Koenigsegg Automotive is born.
                        </p>
                    </div>
                    <button className="flex justify-self-center items-center cursor-pointer">
                        Discover more <ArrowRight size={18} />
                    </button>
                </div>
                <div className="grid col-span-3 items-center mr-5 md:pr-3 justify-center ml-10 sm:ml-0">
                    <Image width={450} height={600} src="/images/microsoftTeams.png" alt="microsoft-teams" />
                </div>
            </div>
        </div>
    )
}

export default HorizontalPage;