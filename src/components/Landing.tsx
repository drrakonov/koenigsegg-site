"use client"

import HorizontalPage from "./sections/HorizontalPage";
import Models from "./sections/Models";
import StackSection from "./sections/StackSection"

const Landing = () => {


    return (
        <div className="landing overflow-x-hidden">
            <Models />
            <StackSection />
            <HorizontalPage /> 
            <div className="h-screen w-full bg-rose-300 text-black flex justify-center items-center text-4xl">
                <h1>
                    FOOTER
                </h1>
            </div>     
        </div>
    )
}

export default Landing;

