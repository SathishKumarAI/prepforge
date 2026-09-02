/**
 * One import thunk per lazy route, and the only place they are written down.
 *
 * Owns: the path → chunk mapping, and prefetching a chunk before it is needed.
 * Does NOT own: the routes themselves. `App.tsx` builds its `lazy()` components
 * from these same thunks, which is the point — two `import()` expressions for
 * the same module in two files are two references to ONE chunk only because the
 * bundler can see they are the same specifier, and it is easier to keep that
 * true if there is one copy of the specifier.
 *
 * Today is absent on purpose: it is in the main bundle, because lazy-loading the
 * screen the app opens on only moves the wait.
 */
export const ROUTE_CHUNKS: Record<string, () => Promise<unknown>> = {
  "/study": () => import("../pages/Study"),
  "/library": () => import("../pages/Library"),
  "/notes": () => import("../pages/Notes"),
  "/progress": () => import("../pages/Dashboard"),
  "/reader": () => import("../pages/Reader"),
};

/** Chunks already asked for. A second hover must not start a second request. */
const asked = new Set<string>();

/**
 * Start fetching a route's chunk without navigating to it.
 *
 * Called on hover and on focus of a nav link. The gap between a pointer landing
 * on a link and the click that follows is a few hundred milliseconds of nothing
 * happening, which is enough to have the chunk in memory by the time the route
 * actually renders — so the Suspense fallback never appears.
 *
 * Failures are swallowed. This is a guess about what you will click next; if it
 * is wrong, or offline, the real navigation asks again and shows its own error.
 */
export function prefetchRoute(path: string): void {
  if (asked.has(path)) return;
  const load = ROUTE_CHUNKS[path];
  if (!load) return;
  asked.add(path);
  void load().catch(() => {
    // let a real navigation retry rather than caching the failure
    asked.delete(path);
  });
}
