"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView('About');

  return (
    <motion.section className='mt-28 md:mt-40 md:text-lg xl:text-[1.3rem]  max-w-[65rem] xl:max-w-[65rem] md:text-center leading-7  md:leading-8 lg:leading-9  scroll-mt-32 inner-pad' ref={ref}  id="about" >
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >          
          <SectionHeading>About Me</SectionHeading>

          <p className='mb-10'>
            For over two decades, I have been passionate about technology and how it can solve complex problems for businesses and customers. I started my own web development company at 17, and later became the Director of Frontend Development at AYC Media, where I designed and developed a custom CMS system and a front-end framework for rapid web development.  I am always eager to learn new technologies and share my knowledge and insights with others.
          </p>
          <p >
            Since 2017, I have been a Sr. Systems Engineer and later an Enterprise Sales Engineer at Boomi, the leading cloud integration platform. I have full platform experience with specialization in Boomi Flow. I have worked with Enterprise and Fortune 100 clients, such as Pfizer, Spectrum Reach, and Honeywell, to deliver innovative and scalable solutions that enhance customer experience and company efficiency by enabling them to create and automate workflows across applications and data sources. I leverage my skills in UI/UX, web and app development, consulting, and pre-sales engineering to provide value-added services and support to my clients and team. I enjoy listening to the needs and challenges of each client, and collaborating with them to find the best way to achieve their goals.
          </p>
        </motion.div>

    </motion.section>
  )
}
