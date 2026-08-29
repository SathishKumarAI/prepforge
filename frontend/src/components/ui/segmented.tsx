import { useRef, useState, type FocusEvent, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The one segmented control, and the only place `role="tablist"` is spelled.
 *
 * Library, Study and Notes each hand-rolled the same eighteen lines: a rounded
 * strip of buttons carrying `role="tab"` and `aria-selected`. Announcing those
 * roles is a promise — a tablist is ONE tab stop that the arrow keys walk, and
 * every tab points at a panel. None of the three kept it: each was N tab stops,
 * the arrow keys did nothing, and no `tabpanel` existed anywhere in the tree.
 * A screen reader said "tab 2 of 4" and then the interaction that announcement
 * describes was simply absent.
 *
 * Owns: the roles, the roving tabindex, the arrow keys, and the strip's look.
 * Does NOT own: what a segment switches to, or where the panel lives — the page
 * renders that and passes its id in, because only the page knows what it is.
 *
 * ## Activation is manual, deliberately
 *
 * Arrow keys move focus; Enter or Space commits. WAI-ARIA prefers automatic
 * activation, but only when landing on a tab is free — and here it is not.
 * Library's Collections view fetches `/sources` on mount and Notes' graph builds
 * an index over every question, so arrowing across the row with automatic
 * activation would fire that work once per keystroke on the way past. A mouse
 * click still activates immediately; nothing about pointer use changes.
 */
export interface SegmentedOption<T extends string> {
  value: T;
  label: ReactNode;
}

export function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
  panelId,
  idPrefix,
  className,
}: {
  /** Names the group for a screen reader: "Library view", "Study mode". */
  label: string;
  value: T;
  options: SegmentedOption<T>[];
  onChange: (value: T) => void;
  /** The `id` of the element the page gave `role="tabpanel"`. */
  panelId: string;
  /** Namespaces the per-tab ids, so two rows on one page cannot collide. */
  idPrefix: string;
  className?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = options.findIndex((o) => o.value === value);
  /**
   * Where the arrows have walked to, which under manual activation is NOT the
   * selected tab. Deriving the roving index from the selection instead looks
   * right for one keypress and then stops: every Right computes "one past the
   * SELECTED tab", so the second press lands on the tab the first press already
   * reached. Measured that way before this existed — Right, Right left focus on
   * segment 2 of 4.
   *
   * `null` means "nobody has walked yet", so Tab into the row lands on the
   * selected tab, and leaving the row resets to that.
   */
  const [walked, setWalked] = useState<number | null>(null);
  const roving = walked ?? selected;

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = options.length - 1;
    let next: number;
    if (e.key === "ArrowRight") next = roving >= last ? 0 : roving + 1;
    else if (e.key === "ArrowLeft") next = roving <= 0 ? last : roving - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    // Focus only. See the note above on manual activation.
    e.preventDefault();
    setWalked(next);
    refs.current[next]?.focus();
  }

  // Leaving the row forgets the walk, so coming back by Tab starts from what is
  // actually selected rather than from wherever the arrows were left pointing.
  function onBlur(e: FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setWalked(null);
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={cn(
        "inline-flex rounded-lg border border-surface0 bg-mantle p-0.5",
        className,
      )}
    >
      {options.map((o, i) => {
        const isSelected = o.value === value;
        return (
          <button
            key={o.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${o.value}`}
            aria-selected={isSelected}
            aria-controls={panelId}
            // Roving tabindex: exactly one of these is reachable by Tab, which
            // is the whole point — four segments should cost one tab stop, not
            // four on the way to the content underneath them.
            tabIndex={i === roving ? 0 : -1}
            onClick={() => {
              setWalked(null);
              onChange(o.value);
            }}
            className={cn(
              "rounded-md px-3.5 py-1.5 text-small transition-colors duration-100",
              isSelected
                ? "bg-mauve font-medium text-on-accent"
                : "text-subtext0 hover:bg-surface0 hover:text-text",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * The other half of the contract. A tab that names a panel no element carries
 * is a dangling reference, so the two ship together rather than relying on
 * every call site to remember the second half.
 *
 * No `tabIndex={0}`. A panel earns a tab stop only when it holds nothing
 * focusable and would otherwise be unreachable; all three of these are full of
 * controls, so making the wrapper focusable would add a stop that lands on
 * nothing on the way to the first real control.
 */
export function SegmentedPanel({
  id,
  labelledBy,
  children,
  className,
}: {
  id: string;
  /** The `id` of the currently selected tab. */
  labelledBy: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div role="tabpanel" id={id} aria-labelledby={labelledBy} className={className}>
      {children}
    </div>
  );
}
