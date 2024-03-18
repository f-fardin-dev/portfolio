"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div
        key={path}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 px-4 sm:px-8 lg:px-16 xl:px-20"
      >
        <motion.div
          className="fixed h-screen bg-black rounded-b-[100px] z-40 inset-x-0"
          exit={{ height: "120vh" }}
          animate={{ height: "0vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed m-auto h-fit w-fit bg-black text-white text-4xl z-50 inset-0"
          exit={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {`${(path?.[1] ?? "").toUpperCase()}${path.slice(2)}`}
        </motion.div>
        <motion.div
          className="fixed h-screen bg-black rounded-t-[100px] z-40 inset-x-0 bottom-0"
          initial={{ height: "130vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5, duration: 0.5 } }}
        />
        <nav className="h-20">
          <Navbar />
        </nav>
        <main className="h-[calc(100vh-5rem)]">{children}</main>
      </div>
    </AnimatePresence>
  );
};
