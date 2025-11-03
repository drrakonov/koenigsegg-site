import Image from "next/image";
import spairsSVG from '../../public/svg/KG14_WH.svg';


const Landing = () => {
    return (
        <div className="flex h-700">
            <div className="w-full h-100 flex justify-center md:justify-start mt-5 md:mt-30 md:px-[6em]">
                <Image className="w-70 h-25  sm:w-90 opacity-50" src={spairsSVG} alt="spairs" />
            </div>
        </div>
    )
}

export default Landing;