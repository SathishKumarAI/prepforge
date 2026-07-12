import { Link, Route, Routes } from "react-router-dom";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { Layout } from "./components/Layout";
import { Learn } from "./pages/Learn";
import { Browse } from "./pages/Browse";
import { Flashcards } from "./pages/Flashcards";
import { Quiz } from "./pages/Quiz";
import { Resources } from "./pages/Resources";
import { Dashboard } from "./pages/Dashboard";
import { Bookmarks } from "./pages/Bookmarks";
import { Notes } from "./pages/Notes";
import { Graph } from "./pages/Graph";
import { Reader } from "./pages/Reader";

function NotFound() {
  return (
    <div className="grid place-items-center py-32 text-center">
      <div>
        <div className="font-display text-6xl font-black text-mauve">404</div>
        <p className="mt-2 text-subtext0">That page doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-xl border border-mauve/40 bg-mauve/10 px-5 py-2.5 text-text">
          ← Back to study
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  useApplyTheme();
  return (
    <Layout>
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
    </Layout>
  );
}
