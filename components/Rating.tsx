import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function Rating() {
    return (
        <section className="bg-primary text-white pb-14 lg:pb-20">
            <div className="max-w-[1400px] mx-auto px-3">
                <div className="flex flex-col md:flex-row gap-10 xl:gap-20 border-l-4 md:border-none border-white border-opacity-30 pl-8 md:pl-0 pr-16 md:pr-0">
                    <div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <Image className="object-cover object-center" src={'/user-1.jpg'} alt="User icon" height={50} width={50} quality={100} />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden ml-[-10px]">
                                <Image className="object-cover object-center" src={'/user-2.jpg'} alt="User icon" height={50} width={50} quality={100} />
                            </div>
                            <div className="w-8 h-8 rounded-full overflow-hidden ml-[-10px]">
                                <Image className="object-cover object-center" src={'/user-3.jpg'} alt="User icon" height={50} width={50} quality={100} />
                            </div>
                            <h5 className="text-3xl font-semibold ml-3">12K+</h5>
                        </div>
                        <p className="mt-2">More than 12 thousand tours carried out around the world</p>
                    </div>

                    <div className="md:px-8 lg:px-10 xl:px-20 md:border-x border-white">
                        <div className="flex items-center">
                            <div className="text-yellow-400 text-3xl">
                                <FaStar />
                            </div>
                            <h5 className="text-3xl font-semibold ml-3">4.8</h5>
                        </div>
                        <p className="mt-2">Positive rating by our customers</p>
                    </div>

                    <div>
                        <div className="flex items-center">
                            <div className="text-sky-900 text-3xl">
                                <FaMapLocationDot />
                            </div>
                            <h5 className="text-3xl font-semibold ml-3">700+</h5>
                        </div>
                        <p className="mt-2">More than 700 destinations for you to choose from</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Rating