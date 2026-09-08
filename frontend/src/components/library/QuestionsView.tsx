import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { DeepStudyLinks } from "./DeepStudyLinks";
import { FilterBand } from "./FilterBand";
import { ListPeek } from "./ListPeek";
import { QuestionDetail } from "./QuestionDetail";
import { QuestionRow } from "./QuestionRow";
import { CardSkeletonGrid, Empty } from "../States";
import { UNDER_APP_BAR } from "../page/underAppBar";
import { Button } from "../ui/button";
import { useProgress } from "../../hooks/useProgress";
import { useQuestion } from "../../hooks/useQuestion";
import { PAGE, useQuestionPages } from "../../hooks/useQuestionPages";
import { scrollToElement } from "../../lib/scroll";
import { isDue } from "../../lib/srs";

/**
 * The Questions view of the Library: a filter band, a server-paged list on the
 * left that scrolls inside itself, one question's detail on the right.
 *
 * The list stays where it is. Three earlier rules put it away by themselves —
 * a downward scroll, arriving with ?id= in the URL (which a reload also does),
 * and a hover on a row switching the open question — and together they read as
 * the page moving under you whenever you scrolled the list to find something.
 * Now only the Hide list button hides it, and only a click or the keys select.
 *
 * Owns: which question is selected, whether the list is hidden, recall mode,
 * and the keys that walk the list. Does NOT own the fetching
 * (hooks/useQuestionPages), the filter controls (FilterBand), the hover overlay
 * for a hidden list (ListPeek), the reading list (DeepStudyLinks), or a row or
 * the detail.
 *
 * Change → file: search/chips/Recall/Hide list → FilterBand; paging, page size
 * or the sentinel → useQuestionPages; the gutter handle and overlay → ListPeek;
 * the two-pane grid, selection, j/k → here.
 */

/** Whether the list pane is put away. Same shape as Layout's `pf-sidebar-open`. */
const LIST_HIDDEN_KEY = "pf-library-list-hidden";

/**
 * Recall mode: every answer starts hidden, Space reveals it, then you rate
 * yourself and the rating schedules the card. Remembered, because it is a way
 * of working through the list rather than a per-question choice.
 */
const RECALL_KEY = "pf-library-recall";

export function QuestionsView() {
  const { progress } = useProgress();
  // Counted over the graded cards, not over the bank — a due date is a property
  // of a card you have graded, so this needs no questions at all. Same reasoning
  // as the nav badge in Layout.
  const dueCount = useMemo(
    () => Object.values(progress.srs).filter((c) => c.seen && isDue(c)).length,
    [progress.srs],
  );
  const [topic, setTopic] = useState<string | null>(null);
  const [diff, setDiff] = useState<string | null>(null);
  // A link into the library can carry its search in ?q= — that is how a related
  // question you cannot see from here (filtered out, or past the render window)
  // gets you to the card instead of nowhere.
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  useEffect(() => {
    const q = params.get("q");
    if (q !== null) setQuery(q);
  }, [params]);

  const { rows, meta, hasMore, loading, paging, error, sentinel } = useQuestionPages(
    query,
    topic,
    diff,
  );
  const total = meta?.total ?? 0;
  const topics = meta?.topics ?? [];

  // ---- selection ---------------------------------------------------------
  /**
   * Which question the detail pane is showing. In the URL so a refresh, a back
   * button and a shared link all land on the same question.
   *
   * `useState(params.get("id"))` alone reads the URL ONCE. Arriving at Library
   * from elsewhere remounts this component and looks correct, which is what hid
   * the bug: pick a question in Ctrl+K while you are ALREADY on this view and
   * the URL becomes ?id=q002, the search box picks up the ?q= that travelled
   * with it — that one has had a sync effect since #46 — and the answer pane
   * keeps showing whatever you were reading. No error, no empty state, just the
   * wrong answer under the right heading in the list.
   */
  const [selectedId, setSelectedId] = useState<string | null>(params.get("id"));
  /**
   * Below lg the panes cannot share the screen, so the detail REPLACES the list
   * and this says which one you are looking at.
   *
   * It starts from the URL for the same reason: `false` meant a phone opening a
   * shared ?id= link got the list of 18,284 and no way to know which one the
   * link meant. Only a tap set it, so the one entry point that cannot tap —
   * the link — was the one that did not work.
   */
  const [detailOnly, setDetailOnly] = useState(() => Boolean(params.get("id")));

  // The URL is the source of truth for these, not just at mount.
  useEffect(() => {
    const id = params.get("id");
    if (!id || id === selectedId) return;
    setSelectedId(id);
    setDetailOnly(true);
  }, [params, selectedId]);

  // ---- the list pane, hidden ---------------------------------------------
  // Above lg the two panes are fixed, so a long answer is capped at whatever
  // width the list leaves it even once you have finished choosing. Hidden, the
  // answer takes the whole column and the list comes back on a hover (ListPeek).
  const [listHidden, setListHidden] = useState(
    () => localStorage.getItem(LIST_HIDDEN_KEY) === "1",
  );
  const [recall, setRecall] = useState(() => localStorage.getItem(RECALL_KEY) === "1");
  useEffect(() => {
    localStorage.setItem(RECALL_KEY, recall ? "1" : "0");
  }, [recall]);

  const select = useCallback(
    (id: string) => {
      setSelectedId(id);
      setDetailOnly(true);
      // Merge: `Library` writes ?view= with a bare object, so anything written
      // here has to preserve what is already in the query or the view switch
      // and the search would wipe each other.
      setParams(
        (prev: URLSearchParams) => {
          const next = new URLSearchParams(prev);
          next.set("id", id);
          return next;
        },
        { replace: true },
      );
    },
    [setParams],
  );

  /**
   * With the list hidden, the answer is the only thing on the page, so it gets
   * the whole page: the shell's 84rem measure is what leaves a 250px gutter on
   * a wide monitor next to a column that is already the sole content.
   *
   * A root class rather than a prop, exactly like `focus-mode` above it —
   * `<main>` lives in the shell and knows nothing about which view is mounted,
   * and threading a layout flag through the router to reach it would be a
   * bigger change than the rule it carries.
   */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("reading-wide", listHidden);
    return () => root.classList.remove("reading-wide");
  }, [listHidden]);

  useEffect(() => {
    localStorage.setItem(LIST_HIDDEN_KEY, listHidden ? "1" : "0");
  }, [listHidden]);

  const showList = useCallback(() => setListHidden(false), []);
  const hideList = useCallback(() => setListHidden(true), []);

  // The row drives the list's own state — which one is highlighted, and what the
  // arrow keys step through. It exists only if that question is on a page that
  // has been fetched.
  const selectedRow = useMemo(
    () => rows.find((q) => q.id === selectedId) ?? null,
    [rows, selectedId],
  );
  /**
   * The detail follows the URL, NOT the loaded rows.
   *
   * Falling back to `rows[0]` when the id is not in the list was survivable
   * while the client held every matching row; with real paging it is a silent
   * lie — a shared link to question 900 would open question 1 and say nothing.
   * The id is asked for directly, and the list highlights it if and when its
   * page arrives.
   */
  const { question: selected } = useQuestion(selectedId ?? rows[0]?.id ?? null);

  /**
   * Picking a question while deep in the previous answer: the new one's heading
   * is above the viewport, and the first thing you would see of it is its
   * fourth paragraph. Bring its top under the app bar. Skipped when the top is
   * already on screen (the first pick from the top of the page), so the page
   * does not twitch on every click.
   *
   * Keyed on the LOADED question, not on the click: between the two the pane
   * is briefly short, the document shrinks and the scroll position clamps, and
   * a scroll taken then lands 28px short once the answer is in.
   */
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = detailRef.current;
    if (!el || !selected) return;
    const barH =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--app-bar-h")) || 0;
    if (el.getBoundingClientRect().top < barH) scrollToElement(el, "start");
  }, [selected?.id]);

  /**
   * One step through the loaded rows. Shared by the arrow keys, j/k, and the
   * rating row's "advance after grading" — three callers, one definition of
   * what "next" means, so they cannot drift.
   */
  const step = useCallback(
    (dir: 1 | -1) => {
      const i = rows.findIndex((q) => q.id === selectedRow?.id);
      if (i === -1) return;
      const next = rows[i + dir];
      if (next) select(next.id);
    },
    [rows, selectedRow, select],
  );

  // Arrow keys walk the list, so the whole surface is reachable without a mouse
  // and without tabbing through 48 rows to reach the 49th. j/k are the same
  // keys for a hand that lives on the home row — the most frequent action in a
  // drilling session should be the cheapest one.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const dir =
        e.key === "ArrowDown" || e.key === "j" ? 1 : e.key === "ArrowUp" || e.key === "k" ? -1 : 0;
      if (!dir || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      if (
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)
      )
        return;
      if (document.querySelector("[role='dialog']")) return;
      e.preventDefault();
      step(dir);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  if (loading) return <CardSkeletonGrid count={6} />;
  if (error)
    return (
      // Port 8787, not 8000 — vite.config.ts proxies /api there and the
      // extension's host_permissions is pinned to it.
      <Empty
        title="The question bank is not answering."
        hint="Start the backend, then reload: ./dev.sh — or uvicorn main:app --port 8787"
        action={
          <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
            Reload
          </Button>
        }
      />
    );

  function clearFilters() {
    setQuery("");
    setTopic(null);
    setDiff(null);
  }

  // The rows themselves, so the in-grid column and the hover peek render the
  // same list rather than two that drift apart. Only ever one is mounted, so
  // the sentinel ref still has exactly one owner.
  const listPane = (
    <>
      <ul className="flex flex-col gap-0.5">
        {rows.map((q) => (
          <QuestionRow
            key={q.id}
            q={q}
            selected={q.id === selectedId}
            onSelect={() => select(q.id)}
          />
        ))}
      </ul>
      {/* The sentinel is also the counter, so the thing that says how far you
          are is the thing that fetches the rest. It only exists while there is
          more, which is what stops the observer firing at the end of the list. */}
      {hasMore ? (
        <div
          ref={sentinel}
          className="py-6 text-center text-micro text-overlay0"
          aria-live="polite"
        >
          <span className="tabular-nums">{rows.length}</span> of{" "}
          <span className="tabular-nums">{total.toLocaleString()}</span>
          {paging ? " — loading more" : " — keep scrolling"}
        </div>
      ) : (
        rows.length > 0 &&
        total > PAGE && (
          <div className="py-6 text-center text-micro text-overlay0">
            all <span className="tabular-nums">{total.toLocaleString()}</span> loaded
          </div>
        )
      )}
    </>
  );

  return (
    <>
      {dueCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="primary">
            <Link to="/study?mode=recall">
              Review {dueCount} due card{dueCount !== 1 ? "s" : ""}
            </Link>
          </Button>
          <span className="text-small text-overlay1">
            Reviews come first; new material fills what is left.
          </span>
        </div>
      )}

      <FilterBand
        query={query}
        onQuery={setQuery}
        topic={topic}
        onTopic={setTopic}
        topics={topics}
        diff={diff}
        onDiff={setDiff}
        recall={recall}
        onRecall={setRecall}
        listAway={listHidden}
        onShowList={showList}
        onHideList={hideList}
      />

      <DeepStudyLinks
        links={meta?.links ?? []}
        total={meta?.link_count ?? 0}
        label={topic ?? (query.trim() ? "these results" : "everything")}
      />

      {rows.length === 0 ? (
        <Empty
          title="No question matches those filters."
          action={
            <Button variant="secondary" size="sm" onClick={clearFilters}>
              Clear filters
            </Button>
          }
        />
      ) : (
        // Two panes above lg, one below it. The grid's second track is
        // minmax(0,1fr) so the detail takes every pixel the list does not — the
        // point of the layout is that nothing on this screen is empty. Hidden,
        // the list's track goes entirely rather than collapsing to zero: a
        // zero-width track still owns the gap beside it, and with both tracks
        // declared the answer, as the only child, lands in the FIRST one: a
        // 330px strip of text with 949px of empty page beside it.
        <div
          className={`relative lg:grid lg:gap-6 ${
            listHidden
              ? "lg:grid-cols-[minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(15rem,20rem)_minmax(0,1fr)]"
          }`}
        >
          {/* The list scrolls inside itself and parks under the app bar, so
              reading a long answer never scrolls the list away from you. Its
              offset is --app-bar-h, the measured value the bar publishes;
              a constant here and the two would overlap by exactly one notch. */}
          {!listHidden && (
            <div
              style={UNDER_APP_BAR}
              // `overscroll-contain`: reaching the end of the list must not hand
              // the rest of the wheel gesture to the page. Without it, scrolling
              // the questions carries on into the document and takes the answer
              // you were reading off the top — you scrolled one pane and lost
              // the other. It is the whole point of a pane that scrolls itself.
              className={`lg:sticky lg:h-[calc(100vh-var(--app-bar-h,0px)-2rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-1 ${
                detailOnly ? "hidden lg:block" : ""
              }`}
            >
              {listPane}
            </div>
          )}

          {listHidden && (
            <ListPeek count={rows.length} onKeepOpen={showList}>
              {listPane}
            </ListPeek>
          )}

          <div
            ref={detailRef}
            style={{ scrollMarginTop: "calc(var(--app-bar-h, 0px) + 1rem)" }}
            className={detailOnly ? "" : "hidden lg:block"}
          >
            {selected ? (
              <QuestionDetail
                key={selected.id}
                q={selected}
                recall={recall}
                onBack={() => setDetailOnly(false)}
                onSelect={select}
                onNext={() => step(1)}
              />
            ) : (
              <p className="text-small text-overlay1">Pick a question to read it.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
