"use client"

import Footer from "./sections/Footer";
import HorizontalPage from "./sections/HorizontalPage";
import Models from "./sections/Models";
import StackSection from "./sections/StackSection"

const Landing = () => {


    return (
        <div className="landing overflow-x-hidden">
            <Models />
            <StackSection />
            <HorizontalPage /> 
            <Footer />     
        </div>
    )
}

export default Landing;

