"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCarrot, FaUtensils, FaStore } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: <FaHome/> },
    { name: "Recipes", href: "/recipes", icon: <FaUtensils/> },
    { name: "Ingredients", href: "/ingredients", icon: <FaCarrot/> },
    { name: "Stores", href: "/stores", icon: <FaStore/> },
  ];

  return (
    <nav>
      <ul className="flex gap-8 px-6 py-4 bg-slate-100 text-neutral-800">
        {links.map((link) => (
          <li key={link.href}>
            <Link className={`font-medium flex gap-1 items-center hover:text-slate-700 ${pathname === link.href ? 'text-slate-900' : 'text-slate-500'}`} href={link.href}>{link.icon}{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
