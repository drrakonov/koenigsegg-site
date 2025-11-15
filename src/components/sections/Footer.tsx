import Logo from "@/svgs/Logo";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="h-screen w-full relative bg-[#ffb703] px-5 pb-5">
            <div className="custom-border h-full w-full bg-[#282C20] md:px-[10%]">
                <div className="h-full w-full p-5 sm:grid grid-cols-6 flex flex-col justify-center items-center py-[35%] md:py-0">
                    <div className="sm:col-span-3 flex justify-center items-center">
                        <div className="h-full w-full px-10 pb-0 sm:pb-10 pt-10 flex flex-col items-center gap-3 md:gap-10">
                            <span className="uppercase text-[2em] sm:text-[3em] md:text-[4.5em] text-white leading-tight sm:leading-15">
                                the <br />
                                <span className="ml-10">show</span> <br />
                                must <br />
                                go on
                            </span>
                            <div className="flex gap-1 sm:gap-3 items-center">
                                <Logo className="h-20" />
                                <Image width={30} height={30} className="cursor-pointer h-8 sm:h-10" src="/svg/insta.svg" alt="insta" />
                                <Image width={20} height={20} className="cursor-pointer h-8 sm:h-10" src="/svg/x.svg" alt="x" />
                                <Image width={30} height={30} className="cursor-pointer h-8 sm:h-10" src="/svg/youtube.svg" alt="youtube" />
                                <Image width={30} height={30} className="cursor-pointer h-8 sm:h-10" src="/svg/linkedin.svg" alt="linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-3 h-full grid grid-cols-3 sm:py-[30%] md:py-[40%]">
                        <div className="col-span-1 flex flex-col justify-evenly text-sm sm:text-xl font-bold">
                            <button className="cursor-pointer">
                                Megacars
                            </button>
                            <button className="cursor-pointer">
                                Technology
                            </button>
                            <button className="cursor-pointer">
                                About
                            </button>
                            <button className="cursor-pointer">
                                History
                            </button>
                        </div>
                        <div className="col-span-1 flex flex-col justify-evenly text-sm sm:text-lg">
                            <button className="cursor-pointer">
                                Dealer locator
                            </button>
                            <button className="cursor-pointer">
                                Shop
                            </button>
                            <button className="cursor-pointer">
                                Contact
                            </button>
                        </div>
                        <div className="col-span-1 flex flex-col justify-evenly text-sm sm:text-lg">
                            <button className="cursor-pointer">
                                Carees
                            </button>
                            <button className="cursor-pointer">
                                Press
                            </button>
                            <button className="cursor-pointer">
                                Factory tours
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute w-full flex justify-center md:justify-start bottom-5">
                <div className="text-background text-xs font-bold ml-5">
                    <span className="font-light">
                        © 2025 Drakonov.
                    </span> All rights reserved
                </div>
            </div>

        </footer>
    );
};

export default Footer;
