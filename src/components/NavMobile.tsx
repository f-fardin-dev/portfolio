"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { links } from "./Navbar";

const topVariants = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: "rgba(255,255,255)" },
};

const centerVariants = { closed: { opacity: 1 }, opened: { opacity: 0 } };

const bottomVariants = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: "rgba(255,255,255)" },
};

const listVariants = {
  closed: { x: "100vw" },
  opened: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const listItemVariants = {
  closed: { x: -20, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

export const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen((prev) => !prev);

  return (
    <div className="md:hidden ms-auto z-10 overflow-hidden">
      <button
        className="w-8 h-[25.5px] flex flex-col justify-between z-10 relative"
        onClick={handleMenuClick}
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-[3px] rounded bg-black origin-left"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-[3px] rounded bg-black"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-8 h-[3px] rounded bg-black origin-left"
        ></motion.div>
      </button>

      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-xl overflow-hidden"
        >
          {links.map((linkItem) => (
            <motion.div key={linkItem.url} variants={listItemVariants}>
              <Link href={linkItem.url}>{linkItem.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
