"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function dismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute top-0 left-0 bg-slate-200/50 h-screen w-screen flex justify-center items-center">
      <div className="w-96 h-96 m-auto bg-white">
        <button onClick={dismiss}>
          <LuX />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
