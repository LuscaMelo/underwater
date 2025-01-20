import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'

function Navbar() {

    const navLinks = ['Home', 'About Us', 'Contact Us', 'Packages', 'Destination']

    return (
        <div className="w-full bg-transparent h-[70px]">
            <div className='max-w-[1400px] mx-auto px-3 h-full flex items-center justify-between'>
                <Image src='./logoipsum.svg' alt='Underwater logo' width={150} height={40} quality={100} />

                <div className='lg:flex items-center gap-3 lg:gap-8 hidden'>
                    <nav>
                        <ul className='flex gap-5 '>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href='/' >
                                        <span className='font-medium'>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button className='px-5 py-1 bg-transparent border border-gray-50 font-medium hover:bg-gray-50 hover:text-black rounded-full'>Call Us</button>
                </div>

                <div className='lg:hidden'>
                    <button className='px-2 py-1 text-2xl bg-transparent border border-gray-50 font-medium hover:bg-gray-50 hover:text-black rounded-xl'>
                        <IoMdMenu />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar