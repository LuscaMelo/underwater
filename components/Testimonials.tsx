'use client'

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function Testimonials() {

    return (
        <section className="bg-white text-gray-950 py-14 lg:py-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="relative w-full">

                    <div className="flex flex-col lg:flex-row lg:w-[87%] h-[600px] md:h-[70vh] lg:h-[450px] bg-primary rounded-xl p-3 lg:p-8">

                        <div className="lg:w-[40%] lg:py-20">
                            <div className="max-w-[750px] px-3 lg:px-0 text-white">
                                <div className="flex gap-2 mb-5 items-center">
                                    <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-dark bg-opacity-10 rounded-xl">
                                        <Image
                                            src={"/seaweed.png"}
                                            alt="Seaweed icon"
                                            height={50}
                                            width={50}
                                            quality={100}
                                        />
                                    </div>
                                    <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">
                                        what people say
                                    </h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, quia cupiditate? Deleniti aliquam est temporibus, facilis fuga, nam officiis suscipit numquam tempora commodi
                                </p>
                            </div>
                        </div>

                        <div className="absolute right-3 lg:right-0 lg:top-[10%] bottom-5 w-[92%] lg:w-[60%]">
                            <Swiper
                                spaceBetween={14}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".custom-next",
                                    prevEl: ".custom-prev",
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1280: { slidesPerView: 3 },
                                }}
                                modules={[Navigation]}
                                className=""
                            >
                                <SwiperSlide className="rounded-2xl overflow-hidden cursor-pointer">
                                    <div className="p-5 bg-gray-50 rounded-2xl">
                                        <div className="w-full flex justify-between mb-5">
                                            <Image
                                                src={"/user-1.jpg"}
                                                alt="User icon"
                                                className="rounded-full"
                                                height={80}
                                                width={80}
                                                quality={100}
                                            />

                                            <div className="text-3xl text-primary">
                                                <BiSolidQuoteAltRight />
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-800">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste voluptatem nisi nobis, a ex molestiae consectetur
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <h5 className="font-bold">Michael</h5>
                                            <span className="font-light text-xs">United States</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="h-[250px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                                    <div className="p-5 bg-gray-50 rounded-2xl">
                                        <div className="w-full flex justify-between mb-5">
                                            <Image
                                                src={"/user-1.jpg"}
                                                alt="User icon"
                                                className="rounded-full"
                                                height={80}
                                                width={80}
                                                quality={100}
                                            />

                                            <div className="text-3xl text-primary">
                                                <BiSolidQuoteAltRight />
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-800">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste voluptatem nisi nobis, a ex molestiae consectetur
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <h5 className="font-bold">Michael</h5>
                                            <span className="font-light text-xs">United States</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="h-[250px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                                    <div className="p-5 bg-gray-50 rounded-2xl">
                                        <div className="w-full flex justify-between mb-5">
                                            <Image
                                                src={"/user-1.jpg"}
                                                alt="User icon"
                                                className="rounded-full"
                                                height={80}
                                                width={80}
                                                quality={100}
                                            />

                                            <div className="text-3xl text-primary">
                                                <BiSolidQuoteAltRight />
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-800">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste voluptatem nisi nobis, a ex molestiae consectetur
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <h5 className="font-bold">Michael</h5>
                                            <span className="font-light text-xs">United States</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="h-[250px] lg:h-[400px] rounded-2xl overflow-hidden cursor-pointer">
                                    <div className="p-5 bg-gray-50 rounded-2xl">
                                        <div className="w-full flex justify-between mb-5">
                                            <Image
                                                src={"/user-1.jpg"}
                                                alt="User icon"
                                                className="rounded-full"
                                                height={80}
                                                width={80}
                                                quality={100}
                                            />

                                            <div className="text-3xl text-primary">
                                                <BiSolidQuoteAltRight />
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-800">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste voluptatem nisi nobis, a ex molestiae consectetur
                                        </p>
                                        <div className="mt-3 pt-3 border-t border-gray-200">
                                            <h5 className="font-bold">Michael</h5>
                                            <span className="font-light text-xs">United States</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>

                            {/* Custom Navigation Buttons */}
                            <div className="flex justify-end lg:justify-start gap-2 mt-5 pr-5">
                                <button className="custom-prev bg-white text-primary text-xl py-2 px-3 rounded-lg font-bold hover:bg-opacity-80">
                                    <GrFormPrevious />
                                </button>
                                <button className="custom-next bg-white text-primary text-xl py-2 px-3 rounded-lg font-bold hover:bg-opacity-80">
                                    <GrFormNext />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials