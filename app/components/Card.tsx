import Link from "next/link";
import React from "react";

export default function Card({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href}>
      <div className="p-4 hover:shadow-sm border bg-neutral-50 dark:bg-neutral-800  dark:border-neutral-600 rounded-xl min-w-72">
        {children}
      </div>
    </Link>
  );
}
