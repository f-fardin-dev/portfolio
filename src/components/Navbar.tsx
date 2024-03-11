"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavLink } from "./NavLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socials = [
  { url: "/", img: "/github.png" },
  { url: "/", img: "/instagram.png" },
  { url: "/", img: "/facebook.png" },
  { url: "/", img: "/pinterest.png" },
  { url: "/", img: "/linkedin.png" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => setOpen((prev) => !prev);
  return (
    <div className="h-full flex items-center justify-start px-4 gap-4 sm:px-8 lg:px-16 xl:px-20">
      {/* Logo */}
      <div className="md:hidden lg:flex">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center"
        >
          <span className="text-white px-1">f-fardin</span>
          <span className="bg-white text-black rounded-sm px-1 h-6 flex items-center">
            -dev
          </span>
        </Link>
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 me-auto">
        {links.map((linkItem) => (
          <NavLink key={linkItem.url} {...linkItem} />
        ))}
      </div>
      {/* Socials */}
      <div className="hidden md:flex gap-4">
        {socials.map((social) => (
          <Link key={social.img} href={social.url}>
            <Image src={social.img} alt="" width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* Menu Button */}
      <div className="md:hidden ms-auto">
        <button
          className="w-8 h-6 flex flex-col justify-between z-10 relative"
          onClick={handleMenuClick}
        >
          <div className="w-8 h-[3px] rounded bg-black"></div>
          <div className="w-8 h-[3px] rounded bg-black"></div>
          <div className="w-8 h-[3px] rounded bg-black"></div>
        </button>
        {open && (
          <div className="absolute inset-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-6 text-xl">
            {links.map((linkItem) => (
              <Link href={linkItem.url} key={linkItem.url}>
                {linkItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
