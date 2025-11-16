import Image from "next/image";
import spairsSVG from "../../public/svg/KG14_WH.svg";
import { forwardRef } from "react";

const CarVideo = forwardRef<HTMLVideoElement>((props, ref) => {

  return (
    <div className="h-screen relative">
      <div className="w-full h-full flex justify-center md:justify-start py-[6em] md:py-[8em] md:px-[6em]">
        <div className="opacity-35">
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
        //autoPlay
        //playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
        src="/video/Koenigsegg-car.mp4"
      />
    </div>
  );
});

CarVideo.displayName = "CarVideo";

export default CarVideo;
