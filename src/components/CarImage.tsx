import Image from "next/image";
import spairsSVG from "../../public/svg/KG14_WH.svg";
import { useRef } from "react";
import heroImg from "../../public/images/hero-img.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CarImage = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="h-screen relative overflow-hidden select-none">
      
      <div className="w-full h-full flex justify-center md:justify-start py-[6em] md:py-[8em] md:px-[6em] pointer-events-none">
        <div className="opacity-35">
          <Image
          
            className="w-70 items-start h-25 sm:w-90"
            src={spairsSVG}
            alt="spairs"
          />
        </div>
      </div>

      <div
        ref={imgRef}
        className="absolute inset-0 w-full h-full -z-10 origin-center will-change-transform"
      >
        <Image
          src={heroImg}
          alt="hero-img"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CarImage;
