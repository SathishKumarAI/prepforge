import { useMemo } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { Empty, Loader } from "../components/States";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";

export function Bookmarks() {
  const { questions, loading } = useQuestions();
  const { progress } = useProgress();

  const saved = useMemo(
    () => questions.filter((q) => progress.bookmarks.includes(q.id)),
    [questions, progress.bookmarks]
  );
  const noted = useMemo(
    () => questions.filter((q) => progress.notes[q.id] && !progress.bookmarks.includes(q.id)),
    [questions, progress.notes, progress.bookmarks]
  );

  if (loading) return <Loader label="Loading" />;

  return (
    <div>
      <h1 className="mb-1 font-display text-h1 font-semibold text-text">Saved</h1>
      <p className="mb-8 text-sm text-subtext0">Your bookmarked questions and personal notes.</p>

      <div className="mb-3 font-mono text-xs uppercase tracking-widest text-yellow">
        ★ Bookmarks · {saved.length}
      </div>
      {saved.length === 0 ? (
        <Empty title="Nothing saved yet" hint="Open a question and hit ☆ Save to pin it here." />
      ) : (
        <div className="mb-10 flex flex-col gap-3">
          {saved.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} />
          ))}
        </div>
      )}

      {noted.length > 0 && (
        <>
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            ✎ Noted · {noted.length}
          </div>
          <div className="flex flex-col gap-3">
            {noted.map((q, i) => (
              <QuestionCard key={q.id} q={q} index={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
