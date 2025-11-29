"use client"
import useIsAnimating from "@/store/useIsAnimating";
import useNav from "@/store/useNavOpen";
import KoenigseggLogo from "@/svgs/KoenigseggLogo";
import Menu from "@/svgs/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
    const menuRef = useRef<SVGSVGElement>(null);
    const { setNavOpen, navOpen } = useNav();
    const { isAnimating } = useIsAnimating();

    const originalPath = "M3.75 9h16.5m-16.5 5.75h16.5"
    const hoverPath = "M3.75 9h16.5m-16.5 6.75h16.5"

    useEffect(() => {
        console.log("navOpen:", navOpen);
    }, [navOpen])

    const toggleNav = () => {
        if(isAnimating) return;
        console.log("khull rha hun")
        setNavOpen(true);
    }


    useGSAP(() => {
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
    }, [])


    return (
        <div className="nav-bar fixed inset-0 z-30 w-full mt-4 h-15 py-1 px-10 flex justify-between items-center overflow-hidden">
            <KoenigseggLogo className="logo h-[80%]" />
            <Menu ref={menuRef} onClick={toggleNav} className="menu h-[2em] w-[3em] cursor-pointer" />
        </div>
    )
}

export default NavBar;