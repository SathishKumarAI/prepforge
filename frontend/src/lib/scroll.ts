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
