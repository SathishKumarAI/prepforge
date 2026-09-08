/**
 * The cursor-tracked highlight on glass chrome (see `.glass` in
 * styles/index.css): one document-level listener writes the pointer's position,
 * relative to the glass surface under it, into `--mx` / `--my`, and the
 * surface's ::after paints a soft radial highlight there.
 *
 * One listener, not one per surface — the sidebar, the app bar, the filter
 * band and every open menu would otherwise each own a pointermove handler.
 * Throttled to a frame: pointermove fires far faster than paint.
 *
 * Owns nothing else. Returns the cleanup so a React effect can call it directly.
 */
export function trackGlassCursor(): () => void {
  let frame = 0;
  let last: PointerEvent | null = null;

  function paint() {
    frame = 0;
    const e = last;
    if (!e) return;
    const surface = (e.target as Element | null)?.closest?.(".glass") as HTMLElement | null;
    if (!surface) return;
    const r = surface.getBoundingClientRect();
    surface.style.setProperty("--mx", `${e.clientX - r.left}px`);
    surface.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  function onMove(e: PointerEvent) {
    last = e;
    if (!frame) frame = requestAnimationFrame(paint);
  }

  document.addEventListener("pointermove", onMove, { passive: true });
  return () => {
    document.removeEventListener("pointermove", onMove);
    if (frame) cancelAnimationFrame(frame);
  };
}
