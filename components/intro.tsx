"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { Typewriter } from 'react-simple-typewriter'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import {AiOutlineLoading} from 'react-icons/ai';
import IntroThreeJs from './intro-threejs';
import headshot from "@/public/Andrew.jpg";


export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(false); 
  }, []);

  return (
    <>
      
      {isLoading && ( 
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div className="">
            <AiOutlineLoading className='animate-spin h-10 w-10 text-gray-500' />
          </div>
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        className='intro-bg w-full relative overflow-hidden '>
      
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3}}
        >      
          <IntroThreeJs />
        </motion.div>
        <div className='flex flex-col items-center text-slate-400 z-2 absolute pt-[100px] md:pt-0 md:w-full md:top-[50%] md:translate-y-[-50%] lg:pb-15'>
          <section ref={ref} id='home' className='lg:max-w-[75vw] xl:max-w-[45rem] text-center scroll-mt-[100rem]'>
            { 
              <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                      initial={{ opacity: 0, scale: .5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 3, type: 'spring', stiffness: 260, delay: 0.1}}>
                      <Image src={headshot} width={192} height={192} quality={96} priority={true} className='h-[10vw] w-[10vw] min-w-[140px] min-h-[140px] max-w-[220px] max-h-[220px] rounded-full object-cover shadow-xl shadow-black/50 border-[0.25rem] border-slate-400' alt="Andrew Erie" />
                    </motion.div>                  
                </div>
              </div> 
            }

            <motion.h1
              className="intro mb-7 md:mb-14 mt-8 px-4  font-base !leading-[1.6] text-[1rem] sm:text-[1.3rem] text-lg md:text-[1.5rem] xl:text-[1.6rem]  text-shadow-lg shadow-black/50"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="font-bold">Hi, I'm Andrew.</span> Throughout my career I've worked as a{" "} <br />
              <span className="type-writer">
              <Typewriter
                  words={['Boomi Engineer','Director of Frontend', 'Sr. Systems Engineer', 'Enterpise Sales Engineer', 'Subject Matter Expert', 'UI/UX Specialist', 'Designer', 'Full Stack Developer', 'Consultant', 'Creative Director','Entrepreneur','Motion Artist']}
                  loop={99}
                  cursor
                  cursorStyle='_'
                  typeSpeed={50}
                  deleteSpeed={25}
                  delaySpeed={1600}  
                />
              </span>                       
              <p className=''>with over{" "}
              <span className="font-bold">25 years of experience</span> in the technology field. I enjoy
              building <span className="italic">relationships & enjoyable technology experiences</span>. {" "}
              <span className="font-bold">Let's connect!</span> </p>           
            </motion.h1>
            
            <motion.div
              className='flex flex-col sm:flex-row items-center justify-center gap-5 px-4 mb-20p text-lg font-medium'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3}}
            >
              <Link href="#contact" onClick ={()=> { setActiveSection('Contact'); setTimeOfLastClick(Date.now()); }} 
                className='group introBtn btnLight'>
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' />
              </Link>
              <a href="/resume.pdf" download className='group introBtn btnDark'>Download Resume <HiDownload className='group-hover:translate-y-1 transition' /></a>
              <a href="https://www.linkedin.com/in/andrew-erie-64a8295a/" target='_blank' className='group introBtn btnDark btnIcon '><BsLinkedin className='group-hover:scale-110 transition'/></a>
            </motion.div>
          
          </section>
        </div>
      </motion.div>
    </>
  )
}
