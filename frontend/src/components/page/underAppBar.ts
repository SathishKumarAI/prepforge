/**
 * The offset anything sticky parks at, half a rem below the app bar.
 *
 * Parks against the bar's MEASURED height (--app-bar-h, published by
 * shell/AppBar), never a constant: the bar sizes to its content and carries
 * safe-area padding, so a hardcoded offset is wrong by exactly the notch on
 * the devices where a mis-parked element is hardest to recover from. Two call
 * sites once had their own copy of this expression, which is exactly how one
 * of them ends up a notch out.
 */
export const UNDER_APP_BAR = { top: "calc(var(--app-bar-h, 0px) + 0.5rem)" } as const;
