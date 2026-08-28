import type { ReactNode } from "react";

/**
 * A key cap. Used in the shortcut sheet and inline beside the buttons those
 * keys trigger, so shortcuts are discoverable without pressing `?` first.
 */
export function Kbd({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={`inline-grid h-[18px] min-w-[18px] place-items-center rounded border border-surface1 bg-crust px-1 font-mono text-micro leading-none text-overlay1 ${className}`}
    >
      {children}
    </kbd>
  );
}
