import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SafarKarao",
    location: "Karachi, Pakistan",
    description:
      "At SafarKarao, we signed an contract with SafarKarao to develop and maintain their android, web and iOS application we are still providing them our services.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Management System",
    location: "Pakistan",
    description:
      "We have powered more than 350+ Schools, Institutes and Corporates firms by providing the Software as a service to them using our industry grade management system.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - Present",
  },
  {
    title: "Independent Clients",
    location: "Worldwide",
    description:
      "1/3 of our developers are for independent project and we have more than 1000+ Satisfied clients from all over the world.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SafarKarao - Pakistan's first carpooling app",
    description:
      "built on top of MERN Stackes, we deliver SafarKarao pakistan revolutionary carpooling app.",
    tags: ["Firebase", "Next.js", "Express", "React-Native", "Mongodb"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Talkingsnap App",
    description:
      "Powered by wordpress, talking snap app was a web dev delivered by our team, our satisfied client loved it.",
    tags: ["Firebase", "Php", "Wordpress", "Mysql", "Web App"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Management System and Admin Panel",
    description:
      "Along with expertise in other areas such as Android and iOS we also have industry ready SaaS such as Learning Management System, School management system and other Management dashboards etc.",
    tags: ["AWS", "Azure", "JAVA", "Oracle", "Springboot"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Wordpress",
  "UI/UX Designing",
  "Figma Services",
  "Adobe Express Services",
  "AWS",
  "Azure",
  "Learning Management System",
  "Hospital Management System",
  "School Management System",
  "Employees Database",
  "Flutter",
  "Ionic"
] as const;
