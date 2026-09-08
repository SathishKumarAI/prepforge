import { useEffect, useRef, useState, type ReactNode } from "react";
import { UNDER_APP_BAR } from "../page/StickyChrome";
import { Button } from "../ui/button";

/**
 * Hover intent for the list peek — the same number the row peek uses
 * (QuestionsView.PEEK_MS), because two hover delays on one screen is two
 * different feels for the same gesture. Duplicated as a value rather than
 * imported, so this file has no reason to import the view it sits inside.
 */
const PEEK_MS = 250;

/**
 * The put-away list, reachable from the page gutter: a slim handle that opens
 * the list as an OVERLAY on hover, never a push — reflowing the paragraph
 * under the cursor is what makes the push version of this unusable.
 *
 * One element owns both the handle and the panel, and it is the element that
 * grows — so moving from the handle onto the list never crosses a gap that
 * would count as leaving.
 *
 * Parked in the page gutter (`lg:px-10` on main), not at the grid's left edge.
 * At left-0 the handle sat on the answer's first glyph and its hover box
 * swallowed the first 12px of every line, so you could not select from the
 * start of a paragraph.
 *
 * Owns: whether the overlay is open, and the hover / Escape that change it.
 * Does NOT own the list — it renders whatever it is handed, so the overlay and
 * the in-grid column can never show two lists that drift apart.
 */
export function ListPeek({
  count,
  onKeepOpen,
  children,
}: {
  /** Rows loaded so far, for the overlay's header. */
  count: number;
  /** "Keep open" and the handle: the list comes back for good. */
  onKeepOpen: () => void;
  children: ReactNode;
}) {
  const [peeking, setPeeking] = useState(false);
  const revealTimer = useRef<number>();
  // Hover is an accelerator here, never the only way in: the handle it sits on
  // is a real button, and the chrome carries a real toggle. A pointer that
  // cannot hover simply never calls this.
  const canHover = window.matchMedia("(hover: hover)").matches;

  function peekList(on: boolean) {
    window.clearTimeout(revealTimer.current);
    if (!canHover) return;
    if (on) revealTimer.current = window.setTimeout(() => setPeeking(true), PEEK_MS);
    else setPeeking(false);
  }
  useEffect(() => () => window.clearTimeout(revealTimer.current), []);

  // Escape closes the peek. It is an overlay over the thing you were reading,
  // so it needs the same way out as every other overlay in the app.
  useEffect(() => {
    if (!peeking) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPeeking(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [peeking]);

  return (
    <div
      onMouseEnter={() => peekList(true)}
      onMouseLeave={() => peekList(false)}
      className={`absolute inset-y-0 -left-6 z-20 hidden lg:block ${peeking ? "w-[22rem]" : "w-6"}`}
    >
      <div style={UNDER_APP_BAR} className="sticky">
        {peeking ? (
          <div className="panel ml-1 max-h-[calc(100vh-var(--app-bar-h,0px)-2rem)] overflow-y-auto p-2 shadow-pop">
            <div className="mb-2 flex items-center justify-between gap-2 px-1">
              <span className="text-micro text-overlay1">
                <span className="tabular-nums">{count}</span> question
                {count === 1 ? "" : "s"}
              </span>
              <Button variant="ghost" size="sm" onClick={onKeepOpen}>
                Keep open
              </Button>
            </div>
            {children}
          </div>
        ) : (
          // Visible, so the hover zone is discoverable rather than a
          // secret. A button, so it also answers a click and a Tab.
          <button
            type="button"
            onClick={onKeepOpen}
            aria-label="Show the question list"
            title="Show the question list"
            className="ml-2 h-24 w-1.5 rounded-full bg-surface0 transition-colors duration-100 hover:bg-surface2"
          />
        )}
      </div>
    </div>
  );
}
