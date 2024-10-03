"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuCarrot, LuHome, LuSandwich, LuStore } from "react-icons/lu";

export default function Navbar() {
  const path = usePathname();
  console.log(path)
  const links = [
    { href: "/", text: "Home", icon: <LuHome /> },
    { href: "/recipes", text: "Recipes", icon: <LuSandwich /> },
    { href: "/ingredients", text: "Ingredients", icon: <LuCarrot /> },
    { href: "/stores", text: "Stores", icon: <LuStore /> },
  ];

  return (
    <nav className="">
      <ul className="flex gap-6 px-8 py-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link className={`hover:text-neutral-800 dark:hover:text-neutral-200 ${path === link.href ? "text-neutral-900 dark:text-neutral-100 underline underline-offset-8 decoration-accent decoration-2" : "text-neutral-500"}`} href={link.href}>
              <div>
                {/* {link.icon} */}
                {link.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
