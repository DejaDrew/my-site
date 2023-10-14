"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import IntroStars from './intro-stars';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import headshot from "@/public/Andrew.jpg";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import IntroThreeJs from './intro-threejs';
import { Typewriter } from 'react-simple-typewriter'

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (   
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
            className="intro mb-7 md:mb-14 mt-8 px-4 text-2xl font-medium !leading-[1.6] text-[1.2rem] sm:text-[1.6rem] md:text-2xl xl:text-2xl  text-shadow-lg shadow-black/50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hi, I'm Andrew,</span> throughout my career I've worked as a{" "} <br />
            <span className="type-writer">
            <Typewriter
								words={['Director of Frontend', 'Sr. Systems Engineer', 'Sales Engineer', 'Subject Matter Expert', 'UI/UX Specialist', 'Designer', 'Full Stack Developer', 'Consultant', 'Creative Director','Business Owner','Photographer']}
								loop={99}
								cursor
								cursorStyle='_'
								typeSpeed={50}
								deleteSpeed={25}
								delaySpeed={1750}	
							/>
            </span>                       
            <p className=''>with over{" "}
            <span className="font-bold">25 years of experience</span> in the technology field. I enjoy
            building <span className="italic">relationships & enjoyable technology experiences</span>. {" "}
            <span className="font-bold">Let's connect!</span> </p>           
          </motion.h1>
          
          {/*           
          <motion.h1
            className="intro mb-7 md:mb-14 mt-8 px-4 text-2xl font-medium !leading-[1.6] text-[1.2rem] sm:text-[1.6rem] md:text-3xl xl:text-3xl 2xl:text-[1.7vw] text-shadow-lg shadow-black/50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I'm Andrew.</span> I've done a lot over my career, with a recent focus on{" "}
            <span className="font-bold"> Integration, Sales Engineering, SaaS, and AI</span> with over{" "}
            <span className="font-bold">25 years of experience</span> in the technology field. I enjoy
            building <span className="italic">relationships & enjoyable technology experiences</span>. {" "}
            <span className="font-bold">Let's connect!</span>
          </motion.h1> */}

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
  )
}
