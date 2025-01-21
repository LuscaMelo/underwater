import React from 'react'

function Hero() {
    return (
        <section className="relative w-full h-[84vh] overflow-hidden">
            <div className="w-full h-full">
                <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-teal-950 opacity-70"></div>

                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="./videos/water.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>

                <div className="absolute top-[48%] md:top-[40%] left-3 w-full h-full">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="max-w-[90vw] md:max-w-[700px]">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold capitalize tracking-wide">
                                Sail with us and discover all the underwater wonders
                            </h1>
                            <div className="flex gap-3 mt-7 lg:w-full">
                                <button className="px-5 lg:px-10 py-3 bg-primary border border-primary font-bold text-sm md:text-md hover:brightness-[118%] text-white duration-200 rounded-full uppercase">
                                    Find out more
                                </button>
                                <button className="px-5 lg:px-10 py-3 bg-transparent border border-white font-bold text-sm md:text-md hover:bg-white text-white hover:text-dark duration-200 rounded-full uppercase">
                                    Call us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
