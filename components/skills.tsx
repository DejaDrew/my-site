"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Skills() {

  const { ref } = useSectionInView('Skills');

  const fadeInAnimationVariants = {
    initial: { y: 100, opacity: 0},
    animate: (index:number) => (
      { 
        y: 0, 
        opacity: 1,
        transition: {
          delay: index * 0.05,
        }
      }),
  }

  return (
    <section ref={ref} id='skills' className='mb-28  max-w-[53rem] scroll-mt-28 text-center inner-pad md:mb-[20rem] md:mt-12' >
      <SectionHeading>Featured Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-4 text-md text-gray-100'>
        {
          skillsData.map((skill, index) => (
            <motion.li 
              className='bg-zinc-950/40 border border-gray-100/[0.15] rounded-xl text-md shadow-md shadow-black/30 px-4 py-2 ' 
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{once: true}}
              custom={index}
              key={index}>{skill}
            </motion.li>))
        }
      </ul>
    </section>
  )
}
