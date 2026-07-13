import type { ReactNode } from "react";

// A key cap. Used both in the shortcut cheatsheet and as inline hints next to
// the buttons those keys trigger, so shortcuts are discoverable without `?`.
export function Kbd({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={`inline-grid h-[18px] min-w-[18px] place-items-center rounded border border-white/10 bg-crust px-1 font-mono text-[10px] leading-none text-overlay0 ${className}`}
    >
      {children}
    </kbd>
  );
}
