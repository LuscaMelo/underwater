'use client'

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { Swiper as SwiperType } from 'swiper/types';

function Destination() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const destinations = [
        {
            video: "./videos/destination-1.mp4",
            title: "Coral Gardens",
            description: "Swim through fields of colorful coral and spot exotic marine life."
        },
        {
            video: "./videos/destination-2.mp4",
            title: "Mystic Shipwreck",
            description: "Discover the haunting beauty of a 19th-century shipwreck."
        },
        {
            video: "./videos/destination-3.mp4",
            title: "Dolphin Cove",
            description: "Enjoy a magical dive alongside playful dolphins."
        },
        {
            video: "./videos/destination-4.mp4",
            title: "Turtle Bay",
            description: "A natural refuge where you can swim alongside sea turtles."
        },
    ];

    const isFirstSlide = activeSlide === 0;
    const isLastSlide = activeSlide === destinations.length - 1;

    return (
        <section className="bg-gray-50 text-gray-950 py-14 lg:pt-20">
            <div className="max-w-[1400px] mx-auto lg:px-3">
                <div className="max-w-[750px] px-3 lg:px-0">
                    <div className="flex gap-2 mb-5 items-center">
                        <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-dark bg-opacity-10 rounded-xl">
                            <Image
                                src={"/seaweed.png"}
                                alt="Seaweed icon"
                                height={50}
                                width={50}
                                quality={100}
                                priority={true}
                            />
                        </div>
                        <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">
                            Dream Destinations
                        </h3>
                    </div>
                    <p>
                        Embark on a journey to some of the most breathtaking underwater locations. From vibrant coral reefs to mysterious shipwrecks, each destination offers a unique adventure waiting to be discovered. Dive into the wonders of the ocean and uncover hidden treasures beneath the surface.
                    </p>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    pagination={{ clickable: true, el: '.custom-pagination' }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Atualiza o slide ativo
                    className="mt-10"
                >
                    {destinations.map((destination, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[450px] md:h-[400px] 2xl:h-[600px] lg:rounded-xl overflow-hidden group">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={destination.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                ></video>

                                {/* Hover Effect */}
                                <div
                                    className={`absolute top-0 left-0 px-8 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-white gap-4 ${activeSlide === index ? 'opacity-100' : 'opacity-0'} duration-300`}
                                >
                                    <h5 className="text-5xl lg:text-7xl font-black text-center">{destination.title}</h5>
                                    <p className="text-xl text-center">{destination.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex items-center justify-center mt-6 px-3 lg:px-0">
                    <div className="flex justify-center items-center gap-2 w-full lg:w-auto">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            disabled={isFirstSlide}
                            className={`text-primary text-3xl hover:bg-primary hover:text-white p-1 lg:rounded-full duration-300 hidden lg:block ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <GrFormPrevious />
                        </button>

                        {/* Custom Pagination */}
                        <div className="custom-pagination"></div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                disabled={isFirstSlide}
                                className={`lg:text-primary border border-primary bg-primary lg:bg-transparent hover:bg-primary text text-white text-xl py-2 px-3 rounded-lg lg:rounded-full lg:hidden duration-300 ${isFirstSlide ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <GrFormPrevious />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                disabled={isLastSlide}
                                className={`lg:text-primary border lg:border-0 border-primary bg-primary lg:bg-transparent hover:bg-primary hover:text-white lg:text-3xl text-white text-xl py-2 px-3 lg:p-1 rounded-lg lg:rounded-full duration-300 ${isLastSlide ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <GrFormNext />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Destination;
