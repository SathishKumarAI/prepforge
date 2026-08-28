/**
 * Scrolling helpers that respect the user's motion preference.
 *
 * The global `@media (prefers-reduced-motion: reduce)` block sets
 * `scroll-behavior: auto`, which covers CSS-driven and anchor scrolling — but a
 * `behavior: "smooth"` passed in JavaScript overrides the stylesheet, so every
 * scrollIntoView call was animating regardless of the setting. That is the one
 * reduced-motion hole a stylesheet cannot close.
 */

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** scrollIntoView that jumps instantly when the user asked for less motion. */
export function scrollToElement(
  el: Element | null | undefined,
  block: ScrollLogicalPosition = "center",
): void {
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block });
}

/**
 * Freeze the page behind an overlay, without losing where you were.
 *
 * Without any lock, opening the mobile nav and flicking scrolls the content
 * underneath it: the drawer is `fixed` so it stays put, but you close it and
 * find yourself somewhere else. Measured before: scrollY went 0 to 800 with the
 * drawer open.
 *
 * `overflow: hidden` on the body is the usual one-liner and it is wrong here.
 * This app sets `height: 100%` on html, body and #root, so hiding the overflow
 * collapses the scrollport and the browser DISCARDS the scroll offset —
 * measured, opening the drawer at y=400 teleported the page to y=0 and closing
 * it left you there. Pinning the body with a negative offset keeps the position
 * addressable, and it is restored explicitly on unlock.
 *
 * Also compensates for the scrollbar's width so locking does not shift the
 * layout sideways, and restores exactly the previous inline values rather than
 * assuming they were empty.
 */
export function lockBodyScroll(): () => void {
  const { body } = document;
  const y = window.scrollY;
  const previous = {
    position: body.style.position,
    top: body.style.top,
    width: body.style.width,
    paddingRight: body.style.paddingRight,
  };
  const gap = window.innerWidth - document.documentElement.clientWidth;

  body.style.position = "fixed";
  body.style.top = `-${y}px`;
  body.style.width = "100%";
  if (gap > 0) body.style.paddingRight = `${gap}px`;

  return () => {
    body.style.position = previous.position;
    body.style.top = previous.top;
    body.style.width = previous.width;
    body.style.paddingRight = previous.paddingRight;
    // Restore before the browser paints the unpinned body, or the page flashes
    // at the top for a frame.
    window.scrollTo(0, y);
  };
}
