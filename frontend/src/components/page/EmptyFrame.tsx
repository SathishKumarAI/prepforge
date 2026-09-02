/**
 * Empty states are frames, not apologies.
 *
 * A visual that disappears until it has data is invisible to exactly the people
 * who have not started — the feature cannot be discovered until it is already
 * in use. So the caller passes the *zeroed structure* (the grid with no cells,
 * the axis with no line, the list with no rows) and this renders it with one
 * line naming the action underneath.
 *
 * Owns: the frame, the caption, the action slot.
 * Does NOT own: the zeroed visual — that belongs to whatever normally renders
 * there, because only it knows what its own structure looks like.
 */
import type { ReactNode } from "react";

export function EmptyFrame({
  children,
  label,
  action,
}: {
  /** The zeroed structure. Omit only when the region genuinely has no shape. */
  children?: ReactNode;
  /** One line, naming what to do. An empty screen is an invitation to act. */
  label: string;
  action?: ReactNode;
}) {
  return (
    <div>
      {children && (
        <div aria-hidden="true" className="pointer-events-none select-none opacity-45">
          {children}
        </div>
      )}
      <div className={`flex flex-wrap items-center gap-3 ${children ? "mt-3" : ""}`}>
        {/* A measure, because this is running prose. Without it the line an
            empty screen uses to explain itself is the widest text on the page —
            the app caps the ANSWER at 100ch and left the copy that talks to
            someone who has not started uncapped. */}
        <p className="max-w-prose text-small text-overlay1">{label}</p>
        {action}
      </div>
    </div>
  );
}

/**
 * The default zeroed structure for a list: a few hairline rows. Use it when the
 * region really is "a list of things" and has no more specific shape.
 */
export function EmptyRows({ rows = 3 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="h-11 rounded-lg border border-dashed border-surface0" />
      ))}
    </div>
  );
}
