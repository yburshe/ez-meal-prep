"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuCarrot, LuHome, LuSandwich, LuStore } from "react-icons/lu";

export default function Navbar() {
  const router = useRouter();

  const links = [
    { href: "/", text: "Home", icon: <LuHome /> },
    { href: "/recipes", text: "Recipes", icon: <LuSandwich /> },
    { href: "/ingredients", text: "Ingredients", icon: <LuCarrot /> },
    { href: "/stores", text: "Stores", icon: <LuStore /> },
  ];

  return (
    <nav>
      <ul className="flex gap-6 p-6 bg-slate-50 shadow-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <div className="flex items-center gap-1 font-medium">
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
