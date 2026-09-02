import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { QuestionCard } from "../QuestionCard";
import { Empty, Loader } from "../States";
import { Button } from "../ui/button";
import { Chip } from "../ui/chip";
import { useProgress } from "../../hooks/useProgress";
import { useUserCards } from "../../hooks/useUserCards";
import { toast } from "../ui/sonner";
import { fetchQuestionBatch } from "../../lib/api";
import { toQuestion } from "../../lib/userCards";
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

type Scope = "saved" | "noted" | "mine";

export function SavedView() {
  const { progress } = useProgress();
  // Cards you wrote out of a highlight. They live here rather than on a route
  // of their own: this view is already "the things you personally set aside",
  // and one more surface for a handful of cards is a surface to maintain.
  const { cards: userCards, remove, restore } = useUserCards();
  // `?scope=mine` is how the palette and Today link straight to the cards you
  // wrote. Read once, as the initial value: after that the chips own it, and a
  // URL that fought the chips would reset your view on every re-render.
  const [params] = useSearchParams();
  const [scope, setScope] = useState<Scope>(() =>
    params.get("scope") === "mine" ? "mine" : "saved",
  );
  // And it keeps following the URL. Reading it once looks right every time you
  // arrive from another route — the component remounts — and fails on the only
  // path that matters: picking "Library — cards I made" in the palette while
  // you are already looking at Saved. Same defect as ?id= next door.
  useEffect(() => {
    const wanted = params.get("scope");
    if (wanted === "mine" || wanted === "saved" || wanted === "noted") setScope(wanted);
  }, [params]);

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
    // ONE request, not one per bookmark. This used to be N calls to
    // /questions/{qid} — 48 bookmarks meant 48 round trips, and a browser runs
    // six at a time, so the list appeared in eight visible waves. `related` is
    // expanded server-side because every card here renders its Related section;
    // without that this view was the reason batch could not be used at all.
    fetchQuestionBatch(ids, { related: true })
      .then((got) => {
        if (!live) return;
        // A bookmark whose question no longer exists is dropped rather than
        // rendered as a blank card — the bank is rebuilt by ingest, so ids can
        // go. The route skips unknown ids, so they simply do not come back.
        setQuestions(got.filter((q): q is Question => Boolean(q && q.id)));
      })
      .catch(() => live && setQuestions([]))
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

  const chips = (
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
      {userCards.length > 0 && (
        <Chip
          active={scope === "mine"}
          onClick={() => setScope("mine")}
          label="Cards I made"
          count={userCards.length}
        />
      )}
    </div>
  );

  /** The card is captured before it goes, so Undo has something to put back. */
  function del(card: (typeof userCards)[number]) {
    remove(card.id);
    toast("Card deleted", {
      description: card.question,
      action: { label: "Undo", onClick: () => restore(card) },
    });
  }

  if (scope === "mine") {
    return (
      <>
        {chips}
        {userCards.length === 0 && (
          // Reachable with no cards at all: ?scope=mine is a link, and the chip
          // that would normally gate it is hidden until the first card exists.
          <Empty
            title="No cards of your own yet. Select a passage while reading and press c — the passage becomes the answer, you write the question."
            action={
              <Button asChild variant="secondary" size="sm">
                <Link to="/reader">Open the reader</Link>
              </Button>
            }
          />
        )}
        <div className="pf-deck flex flex-col gap-3">
          {userCards.map((c) => (
            <article key={c.id} className="panel p-4">
              <h3 className="text-body font-medium text-text">{c.question}</h3>
              <p className="mt-2 text-small leading-relaxed text-subtext0">{c.answer}</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-micro text-overlay0">
                <span className="truncate">
                  {c.source ? `From ${c.source.title}` : "From a highlight"} · {c.created.slice(0, 10)}
                </span>
                {/* Deleting the card does not touch its SM-2 row: an id that no
                    longer resolves is already dropped everywhere, and keeping
                    the history means remaking the card does not erase it — and
                    it is what makes Undo restore the schedule with the text. */}
                <Button variant="danger" size="sm" onClick={() => del(c)}>
                  Delete
                </Button>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  }

  const shown = scope === "saved" ? saved : noted;

  return (
    <>
      {chips}

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
