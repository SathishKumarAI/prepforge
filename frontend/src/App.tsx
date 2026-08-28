import { Suspense, lazy } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { Layout } from "./components/Layout";
import { Loader } from "./components/States";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { LEGACY_ROUTES } from "./lib/studyModes";
import { Browse } from "./pages/Browse";
import { Study } from "./pages/Study";
import { Bookmarks } from "./pages/Bookmarks";

// heavy pages (recharts, force layout, pdf reader) — split out of the main bundle
const Resources = lazy(() => import("./pages/Resources").then((m) => ({ default: m.Resources })));
const Sources = lazy(() => import("./pages/Sources").then((m) => ({ default: m.Sources })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const Notes = lazy(() => import("./pages/Notes").then((m) => ({ default: m.Notes })));
const Graph = lazy(() => import("./pages/Graph").then((m) => ({ default: m.Graph })));
const Reader = lazy(() => import("./pages/Reader").then((m) => ({ default: m.Reader })));

/**
 * /learn, /flashcards and /quiz are retired destinations, not retired features
 * — each is now a mode of /study. Redirecting rather than deleting keeps every
 * existing bookmark, the browser extension's links and the in-app deep links
 * working, and carries the intent across instead of dumping you on a default.
 */
function LegacyStudyRedirect() {
  const { pathname, search } = useLocation();
  const mode = LEGACY_ROUTES[pathname];
  const params = new URLSearchParams(search);
  if (mode) params.set("mode", mode);
  return <Navigate to={`/study?${params.toString()}`} replace />;
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
          <Link to="/study">Go to Study</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/">Browse questions</Link>
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  useApplyTheme();
  return (
    <>
      <Toaster />
      <LayoutRoutes />
    </>
  );
}

function LayoutRoutes() {
  return (
    <Layout>
      <Suspense fallback={<Loader label="Loading" />}>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/study" element={<Study />} />
          <Route path="/learn" element={<LegacyStudyRedirect />} />
          <Route path="/flashcards" element={<LegacyStudyRedirect />} />
          <Route path="/quiz" element={<LegacyStudyRedirect />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
