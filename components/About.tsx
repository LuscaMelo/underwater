'use client'

import { motion } from "motion/react";
import Image from "next/image";

function About() {
    return (
        <section className="bg-primary text-white py-14 lg:py-20" id="teste">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-14">
                    <div className="lg:w-[45%]">
                        <div className="max-w-[500px]">
                            <div className="flex gap-2 mb-5 items-center">
                                <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-white bg-opacity-10 rounded-xl">
                                    <Image className="" src={'/seaweed.png'} alt="Seaweed icon" height={50} width={50} quality={100} />
                                </div>
                                <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">Who we are</h3>
                            </div>
                            <p>We are a passionate team of ocean lovers dedicated to creating unforgettable underwater experiences. Founded with a mission to connect people with the wonders of the sea, our company offers unique and safe diving adventures for all skill levels.</p>
                            <p>Our vision is to inspire a deeper appreciation for marine life while promoting sustainable tourism practices that protect our oceans for generations to come.</p>
                            <button className="px-5 lg:px-10 py-3 bg-transparent border border-white font-bold text-sm md:text-md hover:bg-white hover:text-primary text-white duration-200 rounded-full uppercase mt-7">
                                schedule tour
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[55%]">
                        <div className="grid grid-cols-2 gap-3 perspective">
                            <motion.div
                                className="h-full rounded-2xl overflow-hidden"
                                whileHover={{
                                    rotateY: 20,
                                    rotateX: -10,
                                }}
                                transition={{ duration: 0.5 }}
                                style={{ perspective: 1000 }}
                            >
                                <Image className="h-full object-cover object-bottom" src={'/about-1.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={750} quality={100} />
                            </motion.div>
                            <div className="flex flex-col gap-3 h-full">
                                <motion.div
                                    className="h-full rounded-2xl overflow-hidden"
                                    whileHover={{
                                        rotateY: -15,
                                        rotateX: 10,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    style={{ perspective: 1000 }}
                                >
                                    <Image className="h-full object-cover object-bottom" src={'/about-2.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={500} quality={100} />
                                </motion.div>
                                <motion.div
                                    className="h-full rounded-2xl overflow-hidden"
                                    whileHover={{
                                        rotateY: 15,
                                        rotateX: -10,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    style={{ perspective: 1000 }}
                                >
                                    <Image className="h-full object-cover object-bottom" src={'/about-3.jpg'} alt="Image of corals at the bottom of the sea" height={500} width={500} quality={100} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
