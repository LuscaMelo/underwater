import Image from "next/image";

function CallToAction() {
    return (
        <section className="relative bg-primary text-white pb-14 overflow-x-hidden overflow-y-visible">
            <div className="max-w-[1400px] mx-auto px-5 relative mt-[-40px]">
                {/* Imagem */}
                <div className="w-full flex justify-center">
                    <Image
                        src={'/turtle.png'}
                        alt="Turtle"
                        height={498}
                        width={622}
                        quality={100}
                        className="w-auto h-auto"
                        priority
                    />
                </div>

                {/* Texto */}
                <div className="relative text-center max-w-[900px] mx-auto mt-[-20%] md:mt-[-15%] lg:mt-[-12%]">
                    <h5 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
                        Ready to dive into the adventure of a lifetime?
                    </h5>
                    <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
                        Your next great adventure starts beneath the waves. Dive into a world of wonder, explore breathtaking destinations and create memories that will last a lifetime. Take the first step and let us make it happen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <button className="px-6 lg:px-12 py-3 bg-white border border-white text-primary font-bold text-sm md:text-md hover:bg-cyan-900 hover:border-cyan-900 hover:text-white duration-200 rounded-full uppercase">
                            Book Your Tour
                        </button>
                        <button className="px-6 lg:px-12 py-3 bg-transparent border border-white font-bold text-sm md:text-md hover:bg-white text-white hover:text-primary duration-200 rounded-full uppercase">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
