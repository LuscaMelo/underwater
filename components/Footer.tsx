import Image from "next/image";
import Link from 'next/link'
import { AiFillHeart } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

function Footer() {

    const navLinks = ['Home', 'About Us', 'Packages', 'Destination', 'Testimonials']

    return (
        <section className="bg-gray-900 text-gray-50 py-14 lg:pt-20">
            <div className="max-w-[1400px] mx-auto px-5 md:px-3">
                <div className="flex flex-col md:flex-row gap-14 justify-between">
                    <div>
                        <Image className='brightness-[10000%]' src='./logoipsum.svg' alt='Underwater logo' width={180} height={40} quality={100} />
                        <h2 className="mt-1">Explore. Experience. Remember forever.</h2>

                        <div className="flex gap-8 mt-16 text-sm md:text-md">
                            <div>
                                <span className="text-thin text-sm">Email</span>
                                <p>hello@underwater.com</p>
                            </div>
                            <div>
                                <span className="text-thin text-sm">Phone Number</span>
                                <p>+55 (11) 12345-6789</p>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-5">
                            <div className="p-2 bg-primary text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                                <FaInstagram />
                            </div>
                            <div className="p-2 bg-primary text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                                <FaLinkedin />
                            </div>
                            <div className="p-2 bg-primary text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                                <FaTiktok />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-3 md:text-end text-lg font-semibold'>
                            {navLinks.map((link, index) => {
                                const linkId = link.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <li key={index}>
                                        <Link href={`#${linkId}`}>
                                            <span className='hover:text-primary duration-200'>
                                                {link}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-10 mt-10 text-sm md:text-md">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center font-thin text-gray-200">
                        <p>&copy; 2025 Underwater Inc. All rights reserved.</p>
                        <span className="flex gap-1 items-center">
                            Made with <span className="text-red-500"><AiFillHeart /></span> by <span>Lucas Melo</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer