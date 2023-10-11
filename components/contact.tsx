"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import toast from 'react-hot-toast'

import SubmitBtn from './submit-btn'

export default function Contact() {

  const { ref } = useSectionInView('Contact'); 
  
  return (
    <motion.section 
      ref={ref}
      id="contact" 
      className='inner-pad mb-20 sm:mb-28  w-[min(100%,38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-400 text-center -mt-3'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:andrewerie@gmail.com'>andrewerie@gmail.com</a> or <br />use the form below.
      </p>
      <form className='mt-10 flex flex-col' 
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if(error){
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}>
        <input name='senderEmail' className='h-14 inputs' type="email" required maxLength={500} placeholder='Your email'  />
        <textarea name='message' className='h-52 inputs ' maxLength={5000} required placeholder='Your message' />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
