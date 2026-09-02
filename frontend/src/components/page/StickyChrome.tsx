import type { ReactNode } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";

/**
 * Page-level controls (search, filters, mode switches) that stay reachable but
 * get out of the way while you read.
 *
 * Scrolling down slides them up behind the app bar; scrolling up — or reaching
 * the top — brings them straight back. On a page whose job is reading, a
 * permanently-pinned filter bar spends the same 90px of every screen forever,
 * and you only want it for the two seconds you are filtering.
 *
 * Parks against the app bar's MEASURED height (--app-bar-h), never a constant:
 * the bar sizes to its content and carries safe-area padding, so a hardcoded
 * offset is wrong by exactly the notch on the devices where a mis-parked
 * element is hardest to recover from.
 */
/**
 * The offset anything sticky parks at, half a rem below the app bar.
 *
 * Lives here because this file already owns "park against the bar's MEASURED
 * height, never a constant". Two call sites had their own copy of the same
 * expression, which is exactly how one of them ends up a notch out.
 */
export const UNDER_APP_BAR = { top: "calc(var(--app-bar-h, 0px) + 0.5rem)" } as const;

export function StickyChrome({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { hidden } = useScrollDirection();

  return (
    <div
      // Sticky is not motion — the element does not animate, the page scrolls
      // under it — so reduced motion must not disable the positioning. Only the
      // transform transition is motion, and the global reduce rule handles it.
      style={{
        top: "var(--app-bar-h, 0px)",
        transitionProperty: "transform, visibility",
      }}
      // `visibility` rather than `inert` (not typed on React 18 elements) and
      // rather than opacity: it takes the control out of the tab order, so Tab
      // cannot walk into a filter that is scrolled off screen and make focus
      // appear to vanish. It flips discretely at the END of the slide out and
      // immediately on the way back in, which is the behaviour we want.
      // Opaque for the same reason the app bar and the question header are:
      // filters that let the page ghost through them read as a rendering fault,
      // and a backdrop blur does not fix it, it softens it.
      className={`sticky z-20 -mx-1 bg-base px-1 duration-200 ${
        hidden
          ? "invisible -translate-y-[calc(100%+var(--app-bar-h,0px))]"
          : "visible translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
