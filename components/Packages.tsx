'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaWater } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Packages() {
    const [selectedPackage, setSelectedPackage] = useState({
        title: "Beginner's Dive",
        description:
            "Never dived before? No problem! Our Beginner's Dive is the perfect introduction to the underwater world. Guided by certified instructors, you'll learn the basics of diving and explore shallow, vibrant coral reefs teeming with marine life. This safe and fun experience is designed to help you feel confident and comfortable as you discover the magic beneath the waves.",
        duration: '2 hours',
        price: '$100',
        image: '/package-1.jpg',
    });

    const [animateKey, setAnimateKey] = useState(0);

    const packages = [
        {
            title: "Beginner's Dive",
            description:
                "Never dived before? No problem! Our Beginner's Dive is the perfect introduction to the underwater world. Guided by certified instructors, you'll learn the basics of diving and explore shallow, vibrant coral reefs teeming with marine life. This safe and fun experience is designed to help you feel confident and comfortable as you discover the magic beneath the waves.",
            duration: '2 hours',
            price: '$100',
            image: '/package-1.jpg',
        },
        {
            title: 'Underwater Photo',
            description:
                "Capture the beauty of the ocean like never before with our Underwater Photography Tour. This experience is perfect for photography enthusiasts, whether you're a professional or just starting out. You'll visit some of the most stunning marine habitats, from colorful coral gardens to schools of tropical fish. Our guides will help you find the best angles and ensure you have plenty of time to frame the perfect shot.",
            duration: '3 hours',
            price: '$150',
            image: '/package-2.jpg',
        },
        {
            title: 'Exclusive Shipwreck',
            description:
                "Step back in time and uncover the secrets of the deep with our Exclusive Shipwreck Exploration. Guided by expert divers, you'll explore a historic 19th-century shipwreck and its surrounding marine ecosystem. Marvel at the mysterious beauty of the submerged vessel as you encounter unique marine life that has made the wreck its home. This tour is ideal for experienced divers looking for a one-of-a-kind adventure.",
            duration: '4 hours',
            price: '$200',
            image: '/package-3.jpg',
        },
        {
            title: 'Family Snorkeling',
            description:
                "Bring the whole family for a fun-filled day of snorkeling in crystal-clear waters! Our Family Snorkeling Experience is perfect for all ages and skill levels. Swim alongside colorful fish, explore shallow reefs, and enjoy the beauty of the ocean in a safe and relaxed environment. This package includes all the necessary gear and expert guidance to ensure everyone has a great time.",
            duration: '1.5 hours',
            price: '$80',
            image: '/package-4.jpg',
        },
    ];

    const handlePackageSelect = (pkg: typeof packages[0]) => {
        setSelectedPackage(pkg);
        setAnimateKey((prev) => prev + 1); // Reinicia a animação
    };

    return (
        <section className="bg-white text-gray-950 py-14 lg:py-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="max-w-[750px]">
                    <div className="flex gap-2 mb-5 items-center">
                        <div className="h-12 lg:h-14 w-12 lg:w-14 p-2 bg-dark bg-opacity-10 rounded-xl">
                            <Image
                                src={'/seaweed.png'}
                                alt="Seaweed icon"
                                height={50}
                                width={50}
                                quality={100}
                            />
                        </div>
                        <h3 className="text-2xl lg:text-4xl font-bold mt-2 capitalize">
                            Choose Your Adventure
                        </h3>
                    </div>
                    <p className='xl:text-lg'>
                        Discover a variety of underwater experiences tailored for every
                        explorer. From beginners to seasoned divers, our packages are
                        designed to make your journey unforgettable.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-14 overflow-auto lg:overflow-hidden pr-5 md:pr-0">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="relative min-w-[245px] p-3 border border-primary border-opacity-10 rounded-xl overflow-hidden cursor-pointer group"
                            onClick={() => handlePackageSelect(pkg)}
                        >
                            <div className="flex items-center gap-2">
                                <div className="text-primary text-2xl md:text-3xl bg-primary bg-opacity-10 p-3 rounded-xl">
                                    <FaWater />
                                </div>
                                <h3 className="text-md 2xl:text-xl font-semibold text-primary">
                                    {pkg.title}
                                </h3>
                            </div>

                            <div
                                className={`absolute ${selectedPackage.title === pkg.title ? 'top-0' : 'top-full'
                                    } left-0 flex items-center gap-2 p-3 w-full h-full bg-primary rounded-xl transition-all duration-300 group-hover:top-0`}
                            >
                                <div className="text-white text-2xl bg-white bg-opacity-10 p-3 rounded-xl">
                                    <FaWater />
                                </div>
                                <h3 className="text-md 2xl:text-xl font-semibold text-white">
                                    {pkg.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Content with Animation */}
                <motion.div
                    key={animateKey}
                    className="flex bg-light rounded-lg mt-5 overflow-hidden md:h-[400px]"
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col justify-between items-start h-full p-8 max-w-[780px]">
                        <div>
                            <h5 className="text-2xl font-bold text-dark">
                                {selectedPackage.title}
                            </h5>
                            <div className="flex gap-3 text-sm mt-2">
                                <p>Duration: {selectedPackage.duration}</p>
                                <p className="pl-3 border-l-2 border-cyan-600">
                                    Price: {selectedPackage.price}
                                </p>
                            </div>
                            <p className="text-gray-600 my-5">{selectedPackage.description}</p>
                        </div>
                        <button className="px-5 lg:px-10 py-3 bg-primary border border-primary font-bold text-sm md:text-md hover:brightness-[118%] text-white duration-200 rounded-full uppercase">
                            Schedule now
                        </button>
                    </div>
                    <div className="hidden md:block w-full">
                        <Image
                            src={selectedPackage.image}
                            alt={selectedPackage.title}
                            width={750}
                            height={750}
                            className="h-full w-full object-cover rounded-s-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Packages;
