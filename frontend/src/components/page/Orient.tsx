/**
 * Zone 1 — the orient bar. One horizontal row, at most four facts, capped in
 * height. A fact earns its place only if it changes what you do in the next
 * thirty seconds: "12 due now" does, "sessions all-time" does not — that is
 * review.
 *
 * Deliberately not a card and not a grid of tiles: six tiles in six hues are
 * one insight and five distractions competing for the same glance.
 */
import type { ReactNode } from "react";

const MAX_FACTS = 4;

export function Orient({ children }: { children: ReactNode }) {
  const facts = Array.isArray(children) ? children.flat().filter(Boolean) : [children];
  if (import.meta.env.DEV && facts.length > MAX_FACTS) {
    console.warn(
      `[Orient] ${facts.length} facts — the contract caps this at ${MAX_FACTS}. ` +
        `Move the rest to the review zone.`,
    );
  }
  return (
    <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-surface0 pb-4">
      {children}
    </dl>
  );
}

export function Fact({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  /**
   * `null` / `undefined` renders an em dash, never a zero. Zero is a
   * measurement; an em dash is "nobody has told us yet", and printing 0 for
   * the second makes an untouched page look like a bad week.
   */
  value: number | string | null | undefined;
  /** Marks the one fact that should carry the accent. At most one per bar. */
  emphasis?: boolean;
}) {
  // Group thousands here rather than at each call site — "8231" is a number you
  // have to parse, "8,231" is one you read.
  const shown =
    value === null || value === undefined || value === ""
      ? "—"
      : typeof value === "number"
        ? value.toLocaleString()
        : value;
  return (
    <div className="flex items-baseline gap-2">
      <dd
        className={`text-h3 font-semibold tabular-nums ${
          emphasis ? "text-mauve" : "text-text"
        }`}
      >
        {shown}
      </dd>
      <dt className="text-small text-overlay1">{label}</dt>
    </div>
  );
}
