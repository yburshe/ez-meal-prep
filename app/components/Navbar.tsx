"use client";
import Link from "next/link";
import { LuCarrot, LuHome, LuSandwich, LuStore } from "react-icons/lu";

export default function Navbar() {
  const links = [
    { href: "/", text: "Home", icon: <LuHome /> },
    { href: "/recipes", text: "Recipes", icon: <LuSandwich /> },
    { href: "/ingredients", text: "Ingredients", icon: <LuCarrot /> },
    { href: "/stores", text: "Stores", icon: <LuStore /> },
  ];

  return (
    <nav>
      <ul className="flex gap-1 p-4 pl-6 bg-neu text-white shadow-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:bg-black/50 transition-colors block px-4 py-2 rounded-md" href={link.href}>
              <div className="flex items-center gap-1">
                {link.icon}
                {link.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
