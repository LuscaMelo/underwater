import Image from "next/image"

function About() {
    return (
        <section className="bg-primary text-white py-14 lg:py-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-14">
                    <div className="lg:w-[45%]">
                        <div className="max-w-[500px]">
                            <h3 className="text-2xl lg:text-4xl font-bold mb-5">Who We Are</h3>
                            <p>We are a passionate team of ocean lovers dedicated to creating unforgettable underwater experiences. Founded with a mission to connect people with the wonders of the sea, our company offers unique and safe diving adventures for all skill levels.</p>
                            <p>Our vision is to inspire a deeper appreciation for marine life while promoting sustainable tourism practices that protect our oceans for generations to come.</p>
                            <button className="px-5 lg:px-10 py-3 bg-transparent border border-white font-bold text-sm md:text-md hover:bg-white hover:text-primary text-white duration-200 rounded-full uppercase mt-5">
                                schedule tour
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[55%]">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-full rounded-2xl overflow-hidden">
                                <Image className="h-full object-cover object-bottom" src={'/about-1.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={750} quality={100} />
                            </div>
                            <div className="flex flex-col gap-3 h-full">
                                <Image className="h-full object-cover object-bottom rounded-2xl overflow-hidden" src={'/about-2.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={500} quality={100} />
                                <Image className="h-full object-cover object-bottom rounded-2xl overflow-hidden" src={'/about-3.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={500} quality={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About