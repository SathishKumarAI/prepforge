import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionCard } from "../components/QuestionCard";
import { Page } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Empty, Loader } from "../components/States";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";

/**
 * Slot table
 *   route    /bookmarks   (nav label: Saved)
 *   job      get back to the questions you set aside
 *   orient   saved, annotated
 *   act      the filter between them — this page's only real control
 *   review   the list itself
 *
 * Saved and annotated were two stacked sections with two coloured headings,
 * which meant scrolling past everything you bookmarked to reach anything you
 * wrote. They are one list with a filter now.
 */

type Scope = "saved" | "noted";

export function Bookmarks() {
  const { questions, loading } = useQuestions();
  const { progress } = useProgress();
  const [scope, setScope] = useState<Scope>("saved");

  const saved = useMemo(
    () => questions.filter((q) => progress.bookmarks.includes(q.id)),
    [questions, progress.bookmarks],
  );
  const noted = useMemo(
    () => questions.filter((q) => progress.notes[q.id]),
    [questions, progress.notes],
  );

  if (loading) return <Loader label="Loading your saved questions" />;

  const shown = scope === "saved" ? saved : noted;

  return (
    <Page
      title="Saved"
      orient={
        <Orient>
          <Fact label="bookmarked" value={saved.length || null} emphasis={saved.length > 0} />
          <Fact label="with a note" value={noted.length || null} />
        </Orient>
      }
    >
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Chip
          active={scope === "saved"}
          onClick={() => setScope("saved")}
          label="Bookmarked"
          count={saved.length}
        />
        <Chip
          active={scope === "noted"}
          onClick={() => setScope("noted")}
          label="With a note"
          count={noted.length}
        />
      </div>

      {shown.length === 0 ? (
        <Empty
          title={
            scope === "saved"
              ? "Nothing bookmarked yet. Open a question and hit Save to pin it here."
              : "No notes yet. Open a question and hit Add note — what tripped you up is worth writing down."
          }
          action={
            <Button asChild variant="secondary" size="sm">
              <Link to="/">Browse questions</Link>
            </Button>
          }
        />
      ) : (
        <div className="pf-deck flex flex-col gap-3">
          {shown.map((q) => (
            <QuestionCard key={q.id} q={q} />
          ))}
        </div>
      )}
    </Page>
  );
}
