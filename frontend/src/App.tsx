import { Route, Routes } from "react-router-dom";
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

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Layout>
  );
}
