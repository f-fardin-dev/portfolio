"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 lg:px-16 xl:px-20">
        {/* hero image */}
        <div className="h-1/2 lg:h-4/5 lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="Hero image"
            fill
            className="object-contain"
          />
        </div>
        {/* info */}
        <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Crafting Digital Experience, Designing Tomorrow.
          </h1>
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creative
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-2 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
