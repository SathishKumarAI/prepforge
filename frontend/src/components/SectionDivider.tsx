import { cn } from "@/lib/utils";

/**
 * Labelled section divider for dense pages — a hairline rule with an optional
 * eyebrow label and hint, so long views break into scannable bands instead of
 * one undifferentiated wall. Use above a group of cards/stats.
 */
export function SectionDivider({
  label,
  hint,
  className,
}: {
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 py-1", className)}>
      <span className="font-mono text-micro uppercase tracking-[0.14em] text-overlay1">
        {label}
      </span>
      {hint && <span className="text-small text-overlay0">{hint}</span>}
      <span className="h-px flex-1 bg-gradient-to-r from-surface1/70 to-transparent" />
    </div>
  );
}
