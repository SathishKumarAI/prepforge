import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { Layout } from "./components/Layout";
import { Loader } from "./components/States";
import { ChevronLeft } from "./components/NavButton";
import { Toaster } from "./components/ui/sonner";
import { Learn } from "./pages/Learn";
import { Browse } from "./pages/Browse";
import { Flashcards } from "./pages/Flashcards";
import { Quiz } from "./pages/Quiz";
import { Bookmarks } from "./pages/Bookmarks";

// heavy pages (recharts, force-graph, pdf reader) — split out of the main bundle
const Resources = lazy(() => import("./pages/Resources").then((m) => ({ default: m.Resources })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const Notes = lazy(() => import("./pages/Notes").then((m) => ({ default: m.Notes })));
const Graph = lazy(() => import("./pages/Graph").then((m) => ({ default: m.Graph })));
const Reader = lazy(() => import("./pages/Reader").then((m) => ({ default: m.Reader })));

function NotFound() {
  return (
    <div className="grid place-items-center py-32 text-center">
      <div>
        <div className="font-display text-6xl font-black text-mauve">404</div>
        <p className="mt-2 text-subtext0">That page doesn’t exist.</p>
        <Link
          to="/"
          className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-surface0/40 px-4 py-2 text-sm font-medium text-subtext1 transition-colors hover:border-white/20 hover:text-text"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/[0.06] text-subtext0 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:bg-mauve/20 group-hover:text-mauve">
            <ChevronLeft />
          </span>
          Back to study
        </Link>
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
        <Route path="/learn" element={<Learn />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quiz" element={<Quiz />} />
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
