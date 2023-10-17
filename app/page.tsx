import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/about"), { ssr: true });
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });
const Experience = dynamic(() => import("@/components/experience"), { ssr: true });
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Intro />  
      <About />
      <SectionDivider />    
      <Skills />
      <SectionDivider />  
      <Experience />      
      <Contact />
    </main>
  )
}
