import { ChevronLeft, ChevronRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const carModels = [
    {
        "line1": "worlds first",
        "line2": "mega gt for four",
        "para": "The Koenigsegg Gemera redefines what a hypercar can be — the world’s first Mega-GT. With seating for four and luggage space for all, it combines breathtaking performance with everyday usability. Powered by an advanced hybrid system delivering over 1,700 hp, the Gemera brings together innovation, efficiency, and power in perfect harmony. Experience the thrill of Koenigsegg performance — now shared with family and friends.",
        "imagePath": "/images/gamera.jpg"
    },
    {
        "line1": "road legal",
        "line2": "track legend",
        "para": "The Koenigsegg Jesko Attack is built for the track, engineered to dominate every curve and straight with absolute precision. Featuring advanced aerodynamics, a lightning-fast nine-speed Light Speed Transmission, and a twin-turbo V8 producing up to 1,600 hp, the Jesko Attack is the ultimate expression of performance and control. Every detail is crafted for maximum downforce, agility, and speed — a pure embodiment of Koenigsegg’s relentless pursuit of perfection.",
        "imagePath": "/images/jesko_attack.jpg"
    },
    {
        "line1": "fastest",
        "line2": "ever made",
        "para": "The Koenigsegg Jesko Absolut is designed with one purpose — to be the fastest car ever made. Every line, surface, and detail is sculpted for ultimate aerodynamic efficiency and minimal drag. Powered by Koenigsegg’s twin-turbo V8 producing up to 1,600 hp, the Jesko Absolut delivers extreme performance with unparalleled stability at high speed. It represents the peak of Koenigsegg engineering — where power meets perfection, and limits are meant to be broken.",
        "imagePath": "/images/jesko_absolut.jpeg"
    },
    {
        "line1": "the driver's",
        "line2": "dream",
        "para": "The Koenigsegg CC850 is a modern tribute to the car that started it all — the iconic CC8S. Blending timeless design with cutting-edge innovation, the CC850 celebrates Koenigsegg’s 20th anniversary in breathtaking style. Powered by a twin-turbo V8 producing up to 1,385 hp, it features the revolutionary Engage Shift System — seamlessly combining manual and automatic driving in one. The CC850 is a perfect balance of heritage and innovation, crafted for those who honor the past while driving into the future.",
        "imagePath": "/images/cc850.jpg"
    }

]


const Models = () => {
    const [currentModel, setCurrentModel] = useState(0);
    const [direction, setDirection] = useState(1);
    const model = carModels[currentModel];

    const nextModel = () => {
        setDirection(1);
        setCurrentModel((prev) => (prev + 1) % carModels.length);
    }

    const prevModel = () => {
        setDirection(-1);
        setCurrentModel((prev) => (prev - 1 + carModels.length) % carModels.length);
    }

    return (
        <>
            <div className="h-40 bg-linear-to-b from-[#1F1F1F] to-background"></div>
            <div className="md:h-[850px] w-full flex flex-col py-3">
                <h1 className="flex items-center justify-between px-2 md:px-10">
                    <span className="uppercase text-[2em] md:text-[50px]">Models</span>
                    <span className="">
                        <button className="flex gap-3 items-center text-lg cursor-pointer">
                            Discover More <MoveRightIcon size={20} />
                        </button>
                    </span>
                </h1>
                <div className="flex-1 relative flex flex-col md:flex-row justify-center md:items-center w-full">
                    <div className="w-full md:w-1/2 h-fit md:pl-10 flex items-center">
                        <div className="w-full md:w-[50vw] flex md:pl-10 items-center">
                            <Image
                                className="object-cover"
                                src={model.imagePath}
                                alt="car-models"
                                width={800}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="w-full md:absolute flex justify-between px-2">
                        <button onClick={prevModel} className="cursor-pointer">
                            <ChevronLeft size={35} />
                        </button>
                        <button onClick={nextModel} className="cursor-pointer">
                            <ChevronRight size={35} />
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 h-fit md:pr-10 px-3 flex flex-col justify-center space-y-5 md:space-y-15">
                        <span className="text-white uppercase px-30 md:px-8 text-[30px] md:text-[40px]">
                            <h1 className="justify-self-start">{model.line1}</h1>
                            <h1 className="justify-self-center">{model.line2}</h1>
                        </span>
                        <p className="text-white text-sm sm:text-lg">
                            {model.para}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Models;