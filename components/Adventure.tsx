'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Adventure() {
    const images = [
        '/adventure-1.png',
        '/adventure-2.png',
        '/adventure-3.png',
        '/adventure-4.jpg',
        '/adventure-5.jpg',
        '/adventure-6.jpg',
        '/adventure-7.png',
        '/adventure-8.png',
    ];

    return (
        <section className="bg-primary text-white py-14 lg:pb-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="flex gap-2 mb-5 items-center">
                    <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-white bg-opacity-10 rounded-xl">
                        <Image src={'/seaweed.png'} alt="Seaweed icon" height={50} width={50} quality={100} />
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">
                        Embark with us on this adventure
                    </h3>
                </div>

                <Swiper
                    spaceBetween={14}
                    slidesPerView={1.6}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                    modules={[Navigation]}
                    className="mt-10"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index} className="h-[250px] lg:h-[300px] rounded-2xl overflow-hidden">
                            <Image
                                src={src}
                                alt={`Slide image ${index + 1}`}
                                width={750}
                                height={700}
                                className="w-full h-full object-cover"
                                quality={100}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-end gap-2 mt-5">
                    <button className="custom-prev bg-white text-primary text-xl py-2 px-3 rounded-lg font-bold hover:bg-opacity-80">
                        <GrFormPrevious />
                    </button>
                    <button className="custom-next bg-white text-primary text-xl py-2 px-3 rounded-lg font-bold hover:bg-opacity-80">
                        <GrFormNext />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Adventure;
