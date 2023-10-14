"use client";

import React, { useState, useContext } from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Header() {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <header className='z-[999] relative'>    
        <motion.div 
            className='nav-container'
            initial={{ y: -100, x:"-50%", opacity: 0}}
            animate={{ y: 0, x:"-50%", opacity: 1}}
            transition={{ type: "spring", ease: "ease", duration: 2, delay: .1, stiffness: 150 }}
        ></motion.div>
        <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-4 gap-y-1 text-[1rem] font-medium text-gray-300 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                {links.map(link=> (
                    <motion.li className='h-3/4 flex items-center justify-center relative' key={link.hash}
                        initial={{ y: -100, opacity: 0}}
                        animate={{ y: 0, opacity: 1}}
                        transition={{ type: "spring", ease: "ease", duration: 1, delay: .1, stiffness: 150 }}>
                        <Link className={
                            clsx('flex w-full items-center justify-center px-3 py-3 hover:text-white  transition text-shadow shadow-black', 
                                {"text-white": activeSection === link.name})}
                            href={link.hash}
                            onClick={()=> {
                                setActiveSection(link.name);
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                        {link.name}
                        {link.name === activeSection && <motion.span className='bg-gradient-to-b from-zinc-300/40 to-zinc-700/40 shadow-sm shadow-black/50 text-slate-100 bg-opacity-90 rounded-full absolute inset-0 -z-10'
                            layoutId='activeSection'
                            transition={{ type: "spring", damping:30, stiffness: 380 }}
                        ></motion.span>}                        
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>  
    )
}
