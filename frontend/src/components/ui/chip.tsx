import { cn } from "@/lib/utils";

/**
 * Selectable pill — the single source for the toggle/filter chips that were
 * copy-pasted as local `Pill` / `Toggle` / `Chip` across Quiz, Resources,
 * Settings, Reader, and Graph. One look, one behavior, one place to change it.
 */
export function Chip({
  active,
  onClick,
  label,
  className,
}: {
  active: boolean;
  onClick: () => void;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "pill transition-all",
        active ? "border-mauve/40 bg-mauve/10 text-text" : "text-subtext0 hover:text-subtext1",
        className,
      )}
    >
      {label}
    </button>
  );
}
