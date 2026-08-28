import Fuse from "fuse.js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, ExternalLink, Search, X } from "lucide-react";
import { QuestionDetail } from "./QuestionDetail";
import { QuestionRow } from "./QuestionRow";
import { CardSkeletonGrid, Empty } from "../States";
import { StickyChrome } from "../page/StickyChrome";
import { Button } from "../ui/button";
import { Chip } from "../ui/chip";
import { useProgress } from "../../hooks/useProgress";
import { useQuestions } from "../../hooks/useQuestions";
import { isDue } from "../../lib/srs";
import { ACCENT_DOT, topicColor } from "../../lib/topics";
import type { Question } from "../../lib/types";

const DIFFS = ["easy", "medium", "hard"];

export function QuestionsView() {
  const { questions, topics, loading, error } = useQuestions();
  const { progress } = useProgress();
  const dueCount = useMemo(
    () => questions.filter((q) => { const c = progress.srs[q.id]; return c && c.seen && isDue(c); }).length,
    [questions, progress.srs]
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
  const searchRef = useRef<HTMLInputElement>(null);

  // press "/" anywhere (outside a text field) to jump to search
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const typing = el instanceof HTMLElement && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (typing) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const fuse = useMemo(
    () =>
      new Fuse(questions, {
        keys: ["question", "answer", "tags", "topic"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [questions]
  );

  const filtered = useMemo(() => {
    let list = query.trim() ? fuse.search(query).map((r) => r.item) : questions;
    if (topic) list = list.filter((q) => q.topic === topic);
    if (diff) list = list.filter((q) => q.difficulty === diff);
    return list;
  }, [questions, fuse, query, topic, diff]);

  // Windowed rendering — the bank is 1700+ cards, each expandable/animated, so we
  // render a growing slice and extend it as a sentinel scrolls into view. Keeps the
  // DOM small and scrolling smooth without mounting everything at once.
  const PAGE = 48;
  const [visible, setVisible] = useState(PAGE);
  const sentinel = useRef<HTMLDivElement>(null);
  useEffect(() => setVisible(PAGE), [query, topic, diff]); // reset window when the filter changes

  // ---- selection ---------------------------------------------------------
  // Which question the detail pane is showing. In the URL so a refresh, a back
  // button and a shared link all land on the same question.
  const [selectedId, setSelectedId] = useState<string | null>(params.get("id"));
  // Below lg the panes cannot share the screen, so the detail replaces the list
  // and this says which one you are looking at.
  const [detailOnly, setDetailOnly] = useState(false);
  const peekTimer = useRef<number>();
  // Hover selects on a real pointer only. On touch, mouseenter fires from the
  // tap that is already selecting, so honouring it would do the work twice.
  const canHover = window.matchMedia("(hover: hover)").matches;

  const select = useCallback(
    (id: string) => {
      window.clearTimeout(peekTimer.current);
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

  // Hover with intent. 250ms is long enough that crossing the list on the way
  // to the scrollbar does not load six questions, short enough to feel direct.
  function peek(on: boolean, id: string) {
    window.clearTimeout(peekTimer.current);
    if (!canHover || !on) return;
    peekTimer.current = window.setTimeout(() => setSelectedId(id), 250);
  }
  useEffect(() => () => window.clearTimeout(peekTimer.current), []);
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && setVisible((v) => v + PAGE),
      { rootMargin: "800px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length]);
  const shown = filtered.slice(0, visible);
  const selected = useMemo(
    () => filtered.find((q) => q.id === selectedId) ?? filtered[0] ?? null,
    [filtered, selectedId],
  );

  // Arrow keys walk the list, so the whole surface is reachable without a mouse
  // and without tabbing through 48 rows to reach the 49th.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const el = document.activeElement;
      if (el instanceof HTMLElement && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      const i = shown.findIndex((q) => q.id === selected?.id);
      if (i === -1) return;
      const next = shown[i + (e.key === "ArrowDown" ? 1 : -1)];
      if (!next) return;
      e.preventDefault();
      select(next.id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shown, selected, select]);

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

  const activeFilters = Boolean(topic || diff || query.trim());

  return (
    <>
      {dueCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="primary">
            <Link to="/learn">
              Review {dueCount} due card{dueCount !== 1 ? "s" : ""}
            </Link>
          </Button>
          <span className="text-small text-overlay1">
            Reviews come first; new material fills what is left.
          </span>
        </div>
      )}

      {/* Search and filters slide away while you read the deck and come back
          the moment you scroll up. They are wanted for two seconds and pinned
          for the whole session otherwise. */}
      <StickyChrome className="mb-5 py-2">
        <div className="relative mb-2.5 max-w-xl">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-overlay0"
          />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search questions"
            placeholder="Search questions, answers, tags"
            className="input h-10 pl-9 pr-16"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-overlay0 hover:text-text"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-surface1 bg-crust px-1.5 py-0.5 font-mono text-micro text-overlay0">
              /
            </kbd>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <Chip active={!topic} onClick={() => setTopic(null)} label="All topics" />
          {topics.map((t) => (
            <Chip
              key={t}
              active={topic === t}
              onClick={() => setTopic(topic === t ? null : t)}
              className="capitalize"
              label={
                <>
                  <span className={`size-1.5 shrink-0 rounded-full ${ACCENT_DOT[topicColor(t)]}`} />
                  {t}
                </>
              }
            />
          ))}
          <span className="mx-1 h-4 w-px bg-surface0" />
          {DIFFS.map((d) => (
            <Chip
              key={d}
              active={diff === d}
              onClick={() => setDiff(diff === d ? null : d)}
              label={d}
              className="capitalize"
            />
          ))}
          {activeFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setQuery("");
                setTopic(null);
                setDiff(null);
              }}
            >
              Clear filters
            </Button>
          )}
        </div>
      </StickyChrome>

      <DeepStudyLinks
        questions={filtered}
        label={topic ?? (query.trim() ? "these results" : "everything")}
      />

      {filtered.length === 0 ? (
        <Empty
          title="No question matches those filters."
          action={
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setQuery("");
                setTopic(null);
                setDiff(null);
              }}
            >
              Clear filters
            </Button>
          }
        />
      ) : (
        // Two panes above lg, one below it. The grid's second track is
        // minmax(0,1fr) so the detail takes every pixel the list does not — the
        // point of the layout is that nothing on this screen is empty.
        <div className="lg:grid lg:grid-cols-[minmax(15rem,20rem)_minmax(0,1fr)] lg:gap-6">
          {/* The list scrolls inside itself and parks under the app bar, so
              reading a long answer never scrolls the list away from you. Its
              offset is --app-bar-h, the same measured value StickyChrome uses;
              a constant here and the two would overlap by exactly one notch. */}
          <div
            style={{ top: "calc(var(--app-bar-h, 0px) + 0.5rem)" }}
            className={`lg:sticky lg:h-[calc(100vh-var(--app-bar-h,0px)-2rem)] lg:overflow-y-auto lg:pr-1 ${
              detailOnly ? "hidden lg:block" : ""
            }`}
          >
            <ul className="flex flex-col gap-0.5">
              {shown.map((q) => (
                <QuestionRow
                  key={q.id}
                  q={q}
                  selected={q.id === selectedId}
                  onSelect={() => select(q.id)}
                  onPeek={(on) => peek(on, q.id)}
                />
              ))}
            </ul>
            {visible < filtered.length && (
              <div ref={sentinel} className="py-6 text-center text-micro text-overlay0">
                <span className="tabular-nums">{shown.length}</span> of{" "}
                <span className="tabular-nums">{filtered.length}</span> — keep scrolling
              </div>
            )}
          </div>

          <div className={detailOnly ? "" : "hidden lg:block"}>
            {selected ? (
              <QuestionDetail
                key={selected.id}
                q={selected}
                onBack={() => setDetailOnly(false)}
                onSelect={select}
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

// Every "go deeper" link the current filter's questions carry, deduped and ranked by
// how many questions cite it — the reading list for whatever you are looking at.
function DeepStudyLinks({ questions, label }: { questions: Question[]; label: string }) {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => {
    const seen = new Map<string, { title: string; url: string; count: number }>();
    for (const q of questions) {
      // own links + authored citations; borrowed ones (`via`) are already counted
      // under the question they came from, so counting them again would inflate
      const cited = [...(q.links ?? []), ...(q.reading ?? []).filter((l) => !l.via)];
      for (const l of cited) {
        const hit = seen.get(l.url);
        if (hit) hit.count += 1;
        else seen.set(l.url, { ...l, count: 1 });
      }
    }
    return [...seen.values()].sort((a, b) => b.count - a.count || a.title.localeCompare(b.title));
  }, [questions]);

  if (links.length === 0) return null;
  const shown = open ? links.slice(0, 200) : links.slice(0, 6);

  // A quiet disclosure, not a titled card: this is a side door off the deck.
  // Giving it card chrome gave six links the same weight as the deck itself.
  return (
    <details
      className="mb-5 border-b border-surface0 pb-3"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 text-micro text-overlay1 marker:content-none hover:text-subtext0 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
        />
        <span className="font-semibold uppercase tracking-[0.14em]">Go deeper</span>
        <span>
          <span className="tabular-nums">{links.length}</span> link
          {links.length !== 1 ? "s" : ""} the sources cite for {label}
        </span>
      </summary>
      <ul className="mt-2 flex flex-col gap-0.5">
        {shown.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
            >
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
              <span className="truncate">{l.title}</span>
              {l.count > 1 && (
                <span className="shrink-0 tabular-nums text-micro text-overlay0">
                  cited {l.count}×
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
