import Image from "next/image";
import spairsSVG from "../../public/svg/KG14_WH.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, forwardRef } from "react";

const CarVideo = forwardRef<HTMLVideoElement>((props, ref) => {
  const spairsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      spairsRef.current,
      { opacity: 0 },
      { opacity: 0.7, delay: 6, duration: 3.5 }
    );
  });

  return (
    <div className="h-screen relative">
      <div className="w-full h-full flex justify-center md:justify-start py-[6em] md:py-[8em] md:px-[6em]">
        <div ref={spairsRef} className="opacity-0">
          <Image
            className="w-70 items-start h-25 sm:w-90"
            src={spairsSVG}
            alt="spairs"
          />
        </div>
      </div>

      <video
        id="heroVideo"
        ref={ref}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
        src="/video/Koenigsegg-car.mp4"
      />
    </div>
  );
});

CarVideo.displayName = "CarVideo";

export default CarVideo;
