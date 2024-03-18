import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { NavMobile } from "./NavMobile";

export const links = [
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
  return (
    <div className="h-full flex items-center justify-start gap-4">
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
      {/* Small Screen Navigation */}
      <NavMobile />
    </div>
  );
};
