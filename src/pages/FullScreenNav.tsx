"use client"
import useIsAnimating from "@/store/useIsAnimating";
import useNav from "@/store/useNavOpen";
import KoenigseggLogo from "@/svgs/KoenigseggLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const FullScreenNav = () => {
    const fullScreenRef = useRef(null);
    const fullNavLinksRef = useRef(null);
    const { navOpen, setNavOpen } = useNav();
    const { isAnimating, setIsAnimating } = useIsAnimating();


    const toggleNav = () => {
        if(isAnimating) return;
        setNavOpen(false);
    }

    function pageTransitionAnimation() {
        setIsAnimating(true);

        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        tl.to('.fullscreennav', {
            display: 'block',
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
        
    }

    function pageTransitionAnimationReverse() {
        setIsAnimating(true);
        
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
        
    }

    useGSAP(() => {
        
        if(navOpen) {
            pageTransitionAnimation();
        } else {
            pageTransitionAnimationReverse();
        }
    }, [navOpen])


    return (
        <div ref={fullScreenRef} id="fullscreennav" className="fullscreennav h-screen hidden w-full overflow-hidden fixed z-50">
            <div className="h-screen w-full fixed">
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className="relative">
                <div className="navlink flex w-full justify-between p-5 items-center">
                    <KoenigseggLogo className="w-35 md:w-45" />
                    <div onClick={toggleNav} className="h-20 md:h-30 w-20 md:w-30 cursor-pointer">
                        <X className="h-full w-full text-white hover:text-[#ffb703]" strokeWidth={"0.4"} />
                    </div>
                </div>
                <div id="all-links" className="py-20" >
                    <div className="link origin-top relative border-t border-white cursor-pointer">
                        <h1 className="text-[2.5em] lg:text-[8vw] text-center font-medium lg:leading-[0.8] uppercase">megacars</h1>
                        <div className="moveLink absolute flex top-0">
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to see everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="megacars" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to see everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_absolut.jpeg" alt="megacars" />
                            </div>
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to see everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="megacars" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to see everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_absolut.jpeg" alt="megacars" />
                            </div>
                        </div>
                    </div>
                    <div className="link origin-top relative border-t border-white cursor-pointer">
                        <h1 className="text-[2.5em] lg:text-[8vw] text-center font-medium lg:leading-[0.8] uppercase ">technology</h1>
                        <div className="moveLink absolute flex top-0">
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to know everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/terrier.png" alt="technology" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to know everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/terrier.png" alt="technology" />
                            </div>
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to know everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/terrier.png" alt="technology" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to know everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/terrier.png" alt="technology" />
                            </div>
                        </div>
                    </div>
                    <div className="link origin-top relative border-t border-white cursor-pointer">
                        <h1 className="text-[2.5em] lg:text-[8vw] text-center font-medium lg:leading-[0.8] uppercase ">about</h1>
                        <div className="moveLink absolute flex top-0">
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to get everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_attack.jpg" alt="about" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to get everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_attack.jpg" alt="about" />
                            </div>
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to get everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_attack.jpg" alt="about" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to get everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/jesko_attack.jpg" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="link origin-top relative border-y border-white cursor-pointer">
                        <h1 className="text-[2.5em] lg:text-[8vw] text-center font-medium lg:leading-[0.8] uppercase ">history</h1>
                        <div className="moveLink absolute flex top-0">
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to read everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="history" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to read everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="history" />
                            </div>
                            <div className="moveX flex items-center bg-[#ffb703] text-background">
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to read everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="history" />
                                <h2 className="whitespace-nowrap text-[2.5em] lg:text-[8vw] text-center font-medium leading-[0.8] uppercase ">to read everything</h2>
                                <Image className="h-22 object-cover w-55 shrink-0 rounded-full" height={400} width={800} src="/images/gamera.jpg" alt="history" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav;