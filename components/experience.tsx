"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  
  const { ref } = useSectionInView("Experience", .3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-80 w-full max-w-[100rem] inner-pad relative">
      <SectionHeading>Recent experience</SectionHeading>
      <div className="xl:bg-zinc-700/70 xl:mt-5 xl:absolute xl:left-1/2 xl:h-full xl:w-[2px]"></div>
      <div className="verticalTimeline mt-20 md:mt-0 md:pt-20 -mb-[6rem]"> 
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="group vt-item max-w-[800px] ml-auto mr-auto xl:ml-0 xl:even:mr-0 xl:w-[50%] xl:-mt-[8rem] xl:pr-10 xl:even:pr-0 xl:even:pl-10 xl:first:mt-0 xl:even:ml-auto relative ">
              <div className="hidden xl:block">
                {/* TODO: combine and make conditional */}
                <motion.div 
                  initial={{ opacity: 0, scale:0}}
                  whileInView={{ opacity: 1, scale:1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, type: 'spring', stiffness: 260, delay: 0.1}}
                  className="group-even:hidden absolute top-[50%] -mt-[24px] -right-[27px] text-[2rem] p-2 text-zinc-600 bg-zinc-900 shadow-md shadow-zinc-950/70 rounded-full border-2 border-zinc-600">{item.icon}</motion.div>    
                <motion.div 
                  initial={{ opacity: 0, scale:0}}
                  whileInView={{ opacity: 1, scale:1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, type: 'spring', stiffness: 260, delay: 0.1}}
                  className="group-odd:hidden absolute top-[50%] -mt-[24px] -left-[25px] text-[2rem] p-2 text-zinc-600 bg-zinc-900 shadow-md shadow-zinc-950/70 rounded-full border-2 border-zinc-600">{item.icon}</motion.div>    
              </div>
              <motion.div 
                initial={{ opacity: 0, scale:.8}}
                whileInView={{ opacity: 1, scale:1 }}
                viewport={{ once: true }}
                transition={{ duration: 5, type: 'spring', stiffness: 360}}
                className=" md:bg-zinc-950/40 mb-10 md:rounded-2xl md:border md:border-gray-100/20 md:shadow-lg md:shadow-black/50 text-gray-100 md:p-10 "
              >             
                
                <h3 className="font-semibold text-xl capitalize text-center md:text-left">{item.company}</h3>
                <p className="font-normal text-gray-500 mb-8 text-center md:text-left">{item.location}</p>  

                <ul>
                {
                  item.jobs.map((job, index2) => (                  
                    <React.Fragment key={index2}>
                      <li className="flex flex-col mb-10 last:mb-0 pl-8 border-l-8 border-l-slate-500/10 ">
                        <h4 className="text-slate-200/95 font-semibold capitalize mb-1">{job.title}</h4>
                        <p className="font-normal text-gray-500 mb-3">{job.date}</p>  
                        <p className="font-normal text-gray-300 block mb-5">{job.short}</p> 
                        <ul className="mb-3">
                          <p className="mb-2 text-sm text-gray-500">Featured Skills</p>
                          {
                            job.skills.map((skill, index3) => (   
                              <React.Fragment key={index3}>                     
                                <li  className="text-gray-300 inline-block text-sm bg-zinc-700/50 px-2 py-1 mr-2 mb-2 rounded-full">{skill}</li> 
                              </React.Fragment>
                            ))
                          }
                        </ul>            
                      </li>
                    </React.Fragment>
                  ))
                }
                </ul>
              </motion.div>
            </div>
          </React.Fragment>       
        ))}
      </div>
      <div className="hidden lg:flex pt-10 relative top-[126px]">
        <a href="/resume.pdf" download className="bg-zinc-950/90 bottom-5 mx-auto text-sm text-zinc-100/30 border border-zinc-100/10 px-5 py-2 rounded-full z-10 hover:border-zinc-100/30 transition hover:text-zinc-100/50">My extended work history is on my resume</a>
      </div>
    </section>
  );
}