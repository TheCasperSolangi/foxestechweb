"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="mb-3">
        After going through the multi-stage selection process{" "}
        <span className="font-medium">we hire the best developers out there.</span>, our software house decided to expand its expertise into <span className="font-medium">full-stack web development</span>. We invested in coding bootcamps for our team members to learn the necessary skills. {" "}
        <span className="italic">Our favorite part of software development</span> is the problem-solving aspect. We thrive on the feeling of finally figuring out a solution to a complex problem. Our core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and we are also proficient in TypeScript and Prisma. We are always looking to expand our tech stack and stay updated with the latest technologies. We are currently seeking <span className="font-medium">full-time developers</span> to join our team.
      </p>

      <p>
        <span className="italic">When we're not coding</span>, we enjoy team-building activities, such as playing video games together or watching movies. We also value continuous learning within our company culture. Some of us are currently diving into subjects like{" "}
        <span className="font-medium">history and philosophy</span>, while others are honing their musical skills, learning how to play instruments like the guitar.
      </p>
    </motion.section>
  );
}
