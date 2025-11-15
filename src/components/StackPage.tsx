type StackPageProps = {
    line: string[];
    imagePath: string;
}

const StackPage = ({ line, imagePath }: StackPageProps) => {
    return (
        <div className="sticky-card h-screen w-full flex justify-center items-center relative">
            <div className={`h-full w-full absolute -z-1 opacity-100 bg-cover bg-center bg-no-repeat ${imagePath}`}>
                <div className="h-full w-full absolute bg-black opacity-60"></div>
            </div>
            
            {/* art becomes obsession. */}
            <h1 className={`mask-clip 
                    leading-[140%] tracking-widest sm:tracking-normal sm:leading-[100%] lg:leading-[150%] xl:leading-40 
                    font-black text-[45px] xs:text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] xl:text-[180px] 
                    flex flex-col h-[90%] w-[95%] sm:w-[90%] justify-center items-center 
                    bg-cover bg-center bg-no-repeat ${imagePath}`}>
                {line.map((txt, id) => (
                    <span key={id}>{txt}</span>
                ))}
            </h1>
        </div>
    )
}

export default StackPage;