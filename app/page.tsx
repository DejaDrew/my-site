import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Intro />  
      <About />    
      <Skills />
      <Experience />
      
      <Contact />
    </main>
  )
}
