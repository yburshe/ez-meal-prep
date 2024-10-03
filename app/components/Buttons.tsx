import Link from "next/link";
import { LuPlus } from "react-icons/lu";

export function NewButton({ type }: { type: string }) {
  return (
    <Link
      className="text-white dark:text-neutral-100 shadow-md border absolute bottom-10 right-10 p-4 rounded-full bg-accent/70 border-accent hover:bg-accent/90"
      href={`/${type}/new`}
    >
      <LuPlus className="text-4xl" />
    </Link>
  );
}

export function Button({ text }: { text: string }) {
  return (
    <button className="mt-2 ml-auto rounded-md shadow-sm transition-colors px-6 font-semibold py-3 text-white bg-accent/70 border-accent hover:bg-accent/90">
      {text}
    </button>
  );
}
