import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  url: string;
  title: string;
}

export const NavLink = ({ url, title }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={`rounded p-1 ${path === url && "bg-black text-white"}`}
    >
      {title}
    </Link>
  );
};
