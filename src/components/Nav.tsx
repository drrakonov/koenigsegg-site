import KoenigseggLogo from "@/svgs/KoenigseggLogo";
import Menu from "@/svgs/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const NavBar = () => {
    const menuRef = useRef<SVGSVGElement>(null)

    const originalPath = "M3.75 9h16.5m-16.5 5.75h16.5"
    const hoverPath = "M3.75 9h16.5m-16.5 6.75h16.5"



    useGSAP(() => {
        gsap.fromTo(".logo",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, delay: 6, duration: 2 }
        )
        gsap.fromTo(".menu",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, delay: 6, duration: 2 }
        )
        const svg = menuRef.current;
        if (svg) {
            const path = svg.querySelector("path")

            svg.addEventListener("mouseenter", () => {
                gsap.to(path, { attr: { d: hoverPath }, duration: .25 })
            })

            svg.addEventListener("mouseleave", () => {
                gsap.to(path, { attr: { d: originalPath }, duration: .25 })
            })
        }
    })


    return (
        <div className="fixed inset-0 z-100  w-full mt-4 h-15 py-1 px-10 flex justify-between items-center overflow-hidden">
            <KoenigseggLogo className="logo h-[80%] opacity-0" />
            <Menu ref={menuRef} className="menu h-[2em] w-[3em] cursor-pointer opacity-0" />
        </div>
    )
}

export default NavBar;