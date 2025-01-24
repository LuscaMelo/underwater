'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'
import { IoChevronForwardSharp, IoClose } from 'react-icons/io5'
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

function Navbar() {
    const navLinks = ['Home', 'About Us', 'Packages', 'Destination', 'Testimonials']
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    function handleMenu() {
        setMenuOpen((prev) => {
            const newState = !prev
            if (newState) {
                // Impede a rolagem da página quando o menu está aberto
                document.body.style.overflow = 'hidden';
            } else {
                // Permite a rolagem da página novamente quando o menu está fechado
                document.body.style.overflow = '';
            }
            return newState
        })
    }

    // Fechar o menu quando um link for clicado na versão mobile
    function handleLinkClick() {
        if (menuOpen) {
            handleMenu()
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`sticky top-0 w-full z-[99] duration-300 ${scrolled ? 'bg-white shadow-lg shadow-[#00000007]' : 'bg-transparent'}`}>
            <div className='max-w-[1400px] mx-auto px-3 h-[70px] flex items-center justify-between'>
                <Link href='/'>
                    <Image className={`brightness-[10000%] ${scrolled ? 'filter-none' : ''}`} src='./logoipsum.svg' alt='Underwater logo' width={150} height={40} quality={100} />
                </Link>

                <div className='lg:flex items-center gap-3 lg:gap-8 hidden'>
                    <nav>
                        <ul className={`flex gap-5 ${scrolled ? 'text-black' : 'text-white'}`}>
                            {navLinks.map((link, index) => {
                                const linkId = link.toLowerCase().replace(/\s+/g, '-'); // Cria o id baseado no nome do link
                                return (
                                    <li key={index}>
                                        <Link href={`#${linkId}`}>
                                            <span className={`font-medium border-b-2 border-transparent hover:border-primary duration-300`}>
                                                {link}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <button className={`px-5 py-1 bg-transparent border font-medium duration-200 rounded-full uppercase text-sm ${scrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-dark'}`}>
                        Call Us
                    </button>
                </div>

                <div className={`lg:hidden ${menuOpen ? 'hidden' : ''}`}>
                    <button
                        onClick={handleMenu}
                        className={`px-2 py-1 text-2xl bg-transparent border font-medium duration-200 rounded-xl ${scrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-dark'}`}>
                        <IoMdMenu />
                    </button>
                </div>
            </div>

            {/* Menu para dispositivos móveis */}
            <div className={`${menuOpen ? 'left-0 md:right-0' : 'left-[-100vw] md:right-[-100vw]'} absolute top-0 duration-300 w-screen md:w-[50%] max-h-[100vh] h-screen bg-primary p-5 overflow-hidden lg:hidden z-[50]`}>
                <div className="flex items-center justify-between border-b border-white border-opacity-20 pb-5">
                    <Link className='brightness-[1000000]' href='/'>
                        <Image src='./logoipsum.svg' alt='Underwater logo' width={150} height={40} quality={100} />
                    </Link>
                    <button
                        onClick={handleMenu}
                        className='text-2xl text-cyan-900 bg-light bg-opacity-40 text-opacity-70 p-1 rounded-xl hover:brightness-110'>
                        <IoClose />
                    </button>
                </div>

                <div className="flex flex-col justify-between h-[82%]">
                    <nav>
                        <ul className='flex flex-col gap-4 mt-14'>
                            {navLinks.map((link, index) => {
                                const linkId = link.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <li key={index}>
                                        <Link className='flex items-center justify-between' href={`#${linkId}`} onClick={handleLinkClick}>
                                            <span className='font-medium text-2xl text-white border-b-2 border-transparent duration-300 hover:text-cyan-900'>
                                                {link}
                                            </span>
                                            <div className="text-xl text-white text-opacity-50">
                                                <IoChevronForwardSharp />
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="flex gap-3 w-full justify-center">
                        <div className="p-3 bg-cyan-800 bg-opacity-80 text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                            <FaInstagram />
                        </div>
                        <div className="p-3 bg-cyan-800 bg-opacity-80 text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                            <FaLinkedin />
                        </div>
                        <div className="p-3 bg-cyan-800 bg-opacity-80 text-xl text-white rounded-full cursor-pointer hover:brightness-110 duration-300">
                            <FaTiktok />
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                onClick={handleMenu}
                className={`absolute top-0 w-screen h-screen ${menuOpen ? 'bg-black/50' : 'hidden'} transition-opacity duration-300 lg:hidden`}></div>
        </div>
    )
}

export default Navbar
