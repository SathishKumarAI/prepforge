import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Selectable filter/toggle pill — the single source for what used to be five
 * copy-pasted `Pill` / `Toggle` / `Chip` definitions across Quiz, Resources,
 * Settings, Reader and Graph.
 *
 * The selected state is a neutral fill, not an accent tint: a filter row is
 * often twenty chips, and twenty accent-tinted chips make the accent mean
 * nothing. The accent stays on the primary action.
 */
export function Chip({
  active,
  onClick,
  label,
  count,
  className,
}: {
  active: boolean;
  onClick: () => void;
  label: ReactNode;
  /** Optional trailing count. Rendered quietly, tabular. */
  count?: number;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "pill transition-colors duration-100",
        active
          ? "border-surface2 bg-surface1 text-text"
          : "text-subtext0 hover:bg-surface0 hover:text-text",
        className,
      )}
    >
      {label}
      {count !== undefined && (
        <span className={active ? "text-subtext0" : "text-overlay0"}>{count}</span>
      )}
    </button>
  );
}
