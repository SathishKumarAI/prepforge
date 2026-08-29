import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionCard } from "../QuestionCard";
import { Empty, Loader } from "../States";
import { Button } from "../ui/button";
import { Chip } from "../ui/chip";
import { useProgress } from "../../hooks/useProgress";
import { fetchQuestion } from "../../lib/api";
import type { Question } from "../../lib/types";

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

export function SavedView() {
  const { progress } = useProgress();
  const [scope, setScope] = useState<Scope>("saved");

  /**
   * Fetched by id, not filtered out of the whole bank.
   *
   * This used to hold all 39.7 MB to find the handful of ids you bookmarked,
   * which is the same defect COD-79 fixed next door in the questions view — and
   * it is worse here, because the set is usually under fifty.
   */
  const ids = useMemo(() => {
    const wanted = new Set([...progress.bookmarks, ...Object.keys(progress.notes)]);
    return [...wanted];
  }, [progress.bookmarks, progress.notes]);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(ids.length > 0);

  useEffect(() => {
    if (ids.length === 0) {
      setQuestions([]);
      setLoading(false);
      return;
    }
    let live = true;
    setLoading(true);
    Promise.all(ids.map((id) => fetchQuestion(id).catch(() => null)))
      .then((got) => {
        if (!live) return;
        // A bookmark whose question no longer exists is dropped rather than
        // rendered as a blank card — the bank is rebuilt by ingest, so ids can go.
        setQuestions(got.filter((q): q is Question => Boolean(q && q.id)));
      })
      .finally(() => live && setLoading(false));
    return () => {
      live = false;
    };
  }, [ids]);

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
    <>
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
    </>
  );
}
