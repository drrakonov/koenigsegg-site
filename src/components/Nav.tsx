import KoenigseggLogo from "@/svgs/KoenigseggLogo";
import Menu from "@/svgs/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {

    useGSAP(() => {
        gsap.fromTo(".logo", 
            {opacity: 0, x: -50},
            {opacity: 1, x: 0, delay: 6, duration: 2}
        )
    })

    useGSAP(() => {
        gsap.fromTo(".menu", 
            { opacity: 0, x: 50 }, 
            { opacity: 1, x: 0, delay: 6, duration: 2 }
        )
    })


    return (
        <div className="fixed inset-0  w-full mt-4 h-15 py-1 px-10 flex justify-between items-center overflow-hidden">
            <KoenigseggLogo className="logo h-[80%] opacity-0" />
            <Menu className="menu h-[2em] w-[3em] cursor-pointer" />
        </div>
    )
}

export default NavBar;