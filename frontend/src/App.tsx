import { Suspense, lazy, useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { primeQuestionIndex } from "./hooks/useQuestionIndex";
import { Layout } from "./components/Layout";
import { Loader } from "./components/States";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { LEGACY_ROUTES } from "./lib/studyModes";
import { Today } from "./pages/Today";

// Today stays in the main bundle: it is where the app opens, and lazy-loading
// the first screen only moves the wait. Everything else is split — Library and
// Study between them pull the markdown renderer, the syntax highlighter, fuse
// and framer-motion, none of which the landing page uses.
const Library = lazy(() => import("./pages/Library").then((m) => ({ default: m.Library })));
const Study = lazy(() => import("./pages/Study").then((m) => ({ default: m.Study })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const Notes = lazy(() => import("./pages/Notes").then((m) => ({ default: m.Notes })));
const Reader = lazy(() => import("./pages/Reader").then((m) => ({ default: m.Reader })));

/**
 * Retired destinations, not retired features. Every one of these is now a mode
 * or a view of a surface doing the same job, so they redirect carrying their
 * intent rather than 404ing or dumping you on a default. Existing bookmarks,
 * the browser extension's links and in-app deep links all keep working.
 */
const LEGACY_VIEWS: Record<string, string> = {
  "/bookmarks": "/library?view=saved",
  "/sources": "/library?view=collections",
  "/resources": "/library?view=feed",
  "/dashboard": "/progress",
  "/graph": "/notes?view=graph",
};

function LegacyRedirect() {
  const { pathname, search } = useLocation();

  // Study's three old routes each carry a mode.
  const mode = LEGACY_ROUTES[pathname];
  if (mode) {
    const params = new URLSearchParams(search);
    params.set("mode", mode);
    return <Navigate to={`/study?${params.toString()}`} replace />;
  }

  const target = LEGACY_VIEWS[pathname];
  if (target) {
    // Merge rather than replace: an incoming link may carry a topic or an id
    // alongside the part being rewritten, and dropping it loses the intent.
    const [path, ownQuery] = target.split("?");
    const params = new URLSearchParams(search);
    new URLSearchParams(ownQuery).forEach((v, k) => params.set(k, v));
    const query = params.toString();
    return <Navigate to={query ? `${path}?${query}` : path} replace />;
  }

  return <NotFound />;
}

function NotFound() {
  return (
    <div className="max-w-prose py-12">
      <h1 className="text-h1 font-semibold text-text">That page does not exist.</h1>
      <p className="mt-2 text-small text-subtext0">
        The link may be from an older version of the app, or mistyped.
      </p>
      <div className="mt-6 flex gap-2">
        <Button asChild variant="primary">
          <Link to="/">Go to Today</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/library">Browse the library</Link>
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  useApplyTheme();
  useWarmIndex();
  return (
    <>
      <Toaster />
      <LayoutRoutes />
    </>
  );
}

/**
 * Start the question index loading once the first paint is done.
 *
 * Four of the six pages need it, and the two that do not are cheap to leave
 * waiting a moment. Doing it on idle rather than in the route means landing on
 * Library or Reader still warms the index for wherever you go next, and doing it
 * AFTER paint means it never competes with the render it would otherwise delay.
 *
 * On a repeat visit this is a disk read and a 304 — a few hundred bytes — which
 * is why it runs unconditionally instead of trying to guess the next route.
 */
function useWarmIndex() {
  useEffect(() => {
    // requestIdleCallback is absent on Safari before 16.4. A timeout is not the
    // same guarantee, but "after the current frame" is the part that matters.
    const idle = window.requestIdleCallback;
    if (!idle) {
      const t = window.setTimeout(() => void primeQuestionIndex(), 200);
      return () => window.clearTimeout(t);
    }
    const id = idle(() => void primeQuestionIndex(), { timeout: 2000 });
    return () => window.cancelIdleCallback?.(id);
  }, []);
}

function LayoutRoutes() {
  return (
    <Layout>
      <Suspense fallback={<Loader label="Loading" />}>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/study" element={<Study />} />
          <Route path="/library" element={<Library />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/progress" element={<Dashboard />} />
          <Route path="/reader" element={<Reader />} />

          {/* retired destinations */}
          <Route path="/learn" element={<LegacyRedirect />} />
          <Route path="/flashcards" element={<LegacyRedirect />} />
          <Route path="/quiz" element={<LegacyRedirect />} />
          <Route path="/bookmarks" element={<LegacyRedirect />} />
          <Route path="/sources" element={<LegacyRedirect />} />
          <Route path="/resources" element={<LegacyRedirect />} />
          <Route path="/dashboard" element={<LegacyRedirect />} />
          <Route path="/graph" element={<LegacyRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
