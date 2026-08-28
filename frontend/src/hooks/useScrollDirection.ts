import { useEffect, useState } from "react";

/**
 * Which way the page is scrolling, for chrome that gets out of the way while
 * you read and comes back the moment you look for it.
 *
 * Two guards matter and both are easy to leave out:
 *
 * - A dead zone (`threshold`). Trackpads and momentum scrolling emit one-pixel
 *   jitter in both directions, so a naive `y > lastY` comparison makes the bar
 *   flicker constantly while the page is nominally still.
 * - A top band (`topBand`). Near the top of the document there is nothing to
 *   reclaim, and hiding the bar there means the first thing a user sees on
 *   arriving at a page is chrome sliding away.
 *
 * Reads are rAF-throttled and passive, so this never blocks a scroll frame.
 */
export function useScrollDirection({
  threshold = 8,
  topBand = 96,
}: { threshold?: number; topBand?: number } = {}) {
  const [state, setState] = useState<{ direction: "up" | "down"; atTop: boolean }>({
    direction: "up",
    atTop: true,
  });

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;

    function read() {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const atTop = y <= topBand;
      const moved = y - last;

      if (Math.abs(moved) < threshold) {
        // Below the dead zone: only the atTop flag may change, so crossing the
        // top band still reveals the bar without a direction flip.
        setState((s) => (s.atTop === atTop ? s : { ...s, atTop }));
        return;
      }
      last = y;
      const direction = moved > 0 ? "down" : "up";
      setState((s) => (s.direction === direction && s.atTop === atTop ? s : { direction, atTop }));
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(read);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    read();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [threshold, topBand]);

  /** True when chrome should be out of the way. */
  return { ...state, hidden: state.direction === "down" && !state.atTop };
}
