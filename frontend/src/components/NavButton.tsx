import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Refined directional / navigation buttons used across study flows
 * (Flashcards, Quiz, Learn) and the 404 page. Replaces the old "← Prev" /
 * "Next →" text-arrow pills: a real chevron sits in its own token-tinted disc
 * that animates on hover, so the control reads as a deliberate component
 * rather than an emoji arrow glued to text.
 */

type Dir = "prev" | "next";

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dir?: Dir;
  label: string;
  tone?: "default" | "primary";
}

export const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ dir = "next", label, tone = "default", className, ...props }, ref) => {
    const disc = (
      <span
        className={cn(
          "grid h-6 w-6 shrink-0 place-items-center rounded-full transition-all duration-300",
          tone === "primary"
            ? "bg-crust/20 text-crust"
            : "bg-white/[0.06] text-subtext0 group-hover:bg-mauve/20 group-hover:text-mauve",
          dir === "prev"
            ? "group-hover:-translate-x-0.5"
            : "group-hover:translate-x-0.5"
        )}
      >
        {dir === "prev" ? <ChevronLeft /> : <ChevronRight />}
      </span>
    );
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex select-none items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
          tone === "primary"
            ? "bg-gradient-to-r from-mauve to-blue text-crust shadow-glow hover:brightness-105"
            : "border border-white/10 bg-surface0/40 text-subtext1 hover:border-white/20 hover:text-text",
          className
        )}
        {...props}
      >
        {dir === "prev" && disc}
        <span>{label}</span>
        {dir === "next" && disc}
      </button>
    );
  }
);
NavButton.displayName = "NavButton";

/** A quieter icon-led button for actions like "exit" / "back to overview". */
export function BackButton({ label, className, ...props }: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-overlay1 transition-colors hover:bg-surface0/60 hover:text-text",
        className
      )}
      {...props}
    >
      <span className="transition-transform duration-300 group-hover:-translate-x-0.5"><ChevronLeft /></span>
      {label}
    </button>
  );
}

function ChevronLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// re-export for callers that want the raw icon
export { ChevronLeft, ChevronRight };
