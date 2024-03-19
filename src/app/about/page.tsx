"use client";

import { ArrowDown } from "@app/components/about/ArrowDown";
import { Brain } from "@app/components/about/Brain";
import { Experience, ExperienceProps } from "@app/components/about/Experience";
import { Sign } from "@app/components/about/Sign";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "GraphQL",
  "Apollo",
  "Redux",
  "Framer Motion",
  "Three.js",
  "WebGL",
  "Webpack",
];

const experiences: ExperienceProps[] = [
  {
    title: "Senior JavaScript Engineer",
    desc: "My current employment. Way better than the position before!",
    period: "2024 - Present",
    company: "Apple",
    position: "left",
  },
  {
    title: "Senior React Developer",
    desc: "My current employment. Way better than the position before!",
    period: "2019 - 2024",
    company: "Apple",
    position: "right",
  },
  {
    title: "Freelancer",
    desc: "My current employment. Way better than the position before!",
    period: "2017 - 2019",
    position: "left",
  },
];

function AboutPage() {
  const container = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({ container });

  const skillRef = useRef<HTMLDivElement>(null!);
  const isSkillRefInView = useInView(skillRef, {
    margin: "-150px",
    // once: true,
  });

  const experienceRef = useRef<HTMLDivElement>(null!);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-150px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-y-scroll lg:flex" ref={container}>
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-36 xl:gap-40 px-4 sm:px-8 lg:px-16 xl:px-20 pt-4 2xl:pt-24 xl:w-1/2 lg:w-2/3 lg:pr-0">
          <div className="flex flex-col gap-4 justify-center">
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              explicabo esse nostrum, perferendis voluptas nulla rem unde
              voluptatem iusto dolorum, deserunt omnis temporibus voluptatum est
              nemo non voluptates accusamus velit?
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="self-end">
              <Sign />
            </div>
            <ArrowDown />
          </div>
          <div className="flex flex-col gap-8 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-700px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-2 rounded text-sm cursor-pointer bg-black text-white hover:bg-slate-400 hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            <ArrowDown />
          </div>
          <div
            className="flex flex-col gap-8 justify-center pb-10"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-700px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {experiences.map((experience) => (
                <Experience key={experience.title} {...experience} />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 lg:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
