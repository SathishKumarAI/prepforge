import { useCallback, useEffect, useMemo, useRef, type PointerEvent } from "react";

/**
 * Hover with intent, from a pointer that actually MOVED.
 *
 * A row that selects on `mouseenter` selects on a scroll: Chrome re-dispatches
 * the pointer's position after content moves under it, so scrolling the list
 * to find a question switched the open answer (COD-166 removed that). But
 * the user wants the preview — "I don't wanna click". The difference between
 * the two is movement: a hand steering the mouse onto a row produces
 * `pointermove` events whose coordinates change; a scroll, a reflow under a
 * resting pointer, and Chrome's post-scroll re-dispatch all arrive at the
 * SAME coordinates. So a move under `MIN_TRAVEL` px arms nothing.
 *
 * Mouse only. A pen or a finger does not hover, and on touch the tap that
 * follows already selects.
 *
 * Returns `move` for a target's `onPointerMove` and `cancel` for its
 * `onPointerLeave`. One timer: moving onto a second target restarts it for
 * that one, so a hand crossing five rows arms five times and fires once.
 */
const MIN_TRAVEL = 2;

export function useHoverIntent<T>(onIntent: (value: T) => void, ms = 250) {
  const timer = useRef<number>();
  const last = useRef({ x: -1, y: -1 });
  const intent = useRef(onIntent);
  intent.current = onIntent;

  const cancel = useCallback(() => window.clearTimeout(timer.current), []);

  const move = useCallback(
    (value: T, e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const travel = Math.abs(e.clientX - last.current.x) + Math.abs(e.clientY - last.current.y);
      last.current = { x: e.clientX, y: e.clientY };
      if (travel < MIN_TRAVEL) return;
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => intent.current(value), ms);
    },
    [ms],
  );

  useEffect(() => cancel, [cancel]);
  // One identity, so a caller can list it as a dependency without re-running.
  return useMemo(() => ({ move, cancel }), [move, cancel]);
}
