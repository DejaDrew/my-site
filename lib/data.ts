import React from "react";
import { FaReact } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    company: "Boomi LP",
    location: "Remote",
    jobs: [
      { 
        title: "Enterprise Sales Engineer / Subject Matter Expert",
        date: "April 2022 - September 2023",
        short: "Helped to fascilitate the sale of the Boomi Platform to large enterprise customers by providing technical expertise and demonstrations of the platform and its capabilities.",
        full: ["I did stuff", "I did more stuff"],
        skills: ["Boomi Platform", "MEDDPICC", "Command of the Message", "ChatGPT", "Composable System Design", "ERP Systems", "APIs", "System Integration", "Project Architecture", "Technical Sales","Presentations", "POC Builds" , "Demos"],
      }, 
      { 
        title: "Sr. Systems Engineer / Application Architect",
        date: "August 2017 - April 2022",
        short: "Built and maintained Boomi web apps and integrations between enterprise systems for customers using the Boomi Platform. Worked with customers to understand their business needs and design solutions to meet those needs.",
        full: ["I did stuff", "I did more stuff"],
        skills: ["Boomi Flow", "React", "HTML / CSS", "JavaScript", "UI/UX", "AI / NLP Systems" ,"TypeScript", "Node.js", "Databases", "APIs", "App Architecture"],
      }, 
    ],    
    icon: React.createElement(HiBriefcase),
    date: "2019",
  },
  {
    company: "AYC Media",
    location: "Conshohocken, PA",
    jobs: [
      { 
        title: "Director of Frontend Development",
        date: "January 2015 - August 2017",
        short: "Managed a team of frontend developers and designers to build websites and web apps for clients. Worked with clients to understand their business needs and design solutions to meet those needs.",
        full: ["I did stuff", "I did more stuff"],
        skills: ["HTML / CSS", "JavaScript", "PHP", "SCSS", "Unity" ,  "WordPress", "Magento", "Shopify", "Adobe Creative Suite", "Team Management", "Project Management", "Client Relations", "Presentations", "Technical Sales"], 
      },       
    ],    
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    company: "Hybrid Logic, LLC",
    location: "Los Angeles, CA",
    jobs: [
      { 
        title: "Co-Founder / Creative Director / Lead Frontend Developer",
        date: "2006 - 2015",
        short: "Built a sucessful web design and development agency from the ground up. Worked with clients to understand their business needs and design solutions to meet those needs. Managed a team of frontend developers and designers to build websites and web apps for clients.",
        full: ["I did stuff", "I did more stuff"],
        skills: ["Business Management", "Databases", "Graphic Design", "UI/UX", "HTML / CSS", "JavaScript", "PHP", "SCSS", "WordPress", "Magento", "Shopify", "Adobe Creative Suite", "Team Management", "Project Management", "Client Relations", "Presentations", "Sales"], 
      },       
    ],    
    icon: React.createElement(FaReact),
    date: "2019",
  },
 
  
] as const;


export const skillsData = [
  "Boomi Platform",
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Databases",
  "Git",
  "Tailwind",
  "System Integration",
  "ERP Systems",
  "APIs",
  "Framer Motion",
  "Project Architecture",
  "Team Management",
  "Technical Sales",
  "Speaking",
  "Presentations",
  "'Great Demo'",
  "Adobe Creative Suite",    
] as const;