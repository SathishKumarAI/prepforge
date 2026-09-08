import type { ReactNode } from "react";

/** One labelled row of chips on the session setup screen. */
export function Setting({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">{children}</div>
    </div>
  );
}
