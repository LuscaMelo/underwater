'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

function Adventure() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    const openModal = (src: string) => {
        setSelectedImage(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    // Disable scroll when the modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Clean up when the component is unmounted or modal state changes
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (
        <section className="bg-primary text-white pb-14 lg:pb-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="max-w-[750px]">
                    <div className="flex gap-2 mb-5 items-center">
                        <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-white bg-opacity-10 rounded-xl">
                            <Image src={'/seaweed.png'} alt="Seaweed icon" height={50} width={50} quality={100} />
                        </div>
                        <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">
                            Embark on this adventure
                        </h3>
                    </div>
                    <p className='xl:text-lg'>Immerse yourself in an unforgettable journey beneath the waves. Whether {"you're"} an experienced diver or exploring the ocean for the first time, our adventures are designed to leave you breathless and in awe. Immerse yourself and create memories that will last a lifetime.
                        See below some of our latest expeditions.</p>
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
                        <SwiperSlide
                            key={index}
                            className="h-[250px] lg:h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => openModal(src)}
                        >
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

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div
                    className="fixed inset-0 z-[999] my-blur bg-black bg-opacity-80 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-[83%] md:w-[50%] lg:w-[32%] 2xl:w-[28%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-primary hover:text-dark duration-300 hover:brightness-110 p-2 bg-white rounded-full shadow-xl text-xl"
                            onClick={closeModal}
                        >
                            <AiOutlineClose />
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Selected image on carousel"
                            width={1200}
                            height={800}
                            className="w-full h-full object-contain rounded-2xl pointer-events-none"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Adventure;
