import Fuse from "fuse.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QuestionCard } from "../components/QuestionCard";
import { CardSkeletonGrid, Empty } from "../components/States";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { isDue } from "../lib/srs";
import { ACCENT_DOT, topicColor } from "../lib/topics";

const DIFFS = ["easy", "medium", "hard"];

export function Browse() {
  const { questions, topics, loading, error } = useQuestions();
  const { progress } = useProgress();
  const dueCount = useMemo(
    () => questions.filter((q) => { const c = progress.srs[q.id]; return c && c.seen && isDue(c); }).length,
    [questions, progress.srs]
  );
  const [topic, setTopic] = useState<string | null>(null);
  const [diff, setDiff] = useState<string | null>(null);
  const [query, setQuery] = useState("");
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

  if (loading)
    return (
      <div>
        <div className="mb-6 h-9 w-72 animate-pulse rounded-lg bg-surface0/60" />
        <CardSkeletonGrid count={6} />
      </div>
    );
  if (error)
    return (
      <Empty
        title="Backend not reachable"
        hint="Start the API: cd backend && uvicorn main:app --reload --port 8000"
      />
    );

  return (
    <div>
      <Header count={questions.length} />

      {/* next best action — guide the user, reduce decision load */}
      {dueCount > 0 && (
        <Link
          to="/learn"
          className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-mauve/30 bg-gradient-to-r from-mauve/10 to-blue/10 px-4 py-3 transition-colors hover:from-mauve/20 hover:to-blue/20"
        >
          <span className="text-sm text-subtext1">
            <span className="font-semibold text-text">{dueCount}</span> card{dueCount !== 1 ? "s" : ""} due for review — keep your streak going.
          </span>
          <span className="shrink-0 rounded-lg bg-gradient-to-r from-mauve to-blue px-3 py-1.5 text-xs font-semibold text-crust">
            Start review →
          </span>
        </Link>
      )}

      {/* sticky search + filters — stays reachable while scrolling a long deck */}
      <div className="sticky top-2 z-10 mb-6 rounded-2xl border border-white/[0.06] bg-base/85 p-3 backdrop-blur-xl sm:p-4">
      {/* search */}
      <div className="relative mb-3">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-overlay0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3-3" strokeLinecap="round" />
          </svg>
        </span>
        <input
          ref={searchRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions, answers, tags…"
          className="glass w-full rounded-xl py-3.5 pl-11 pr-12 font-mono text-sm text-text outline-none placeholder:text-overlay0 focus:border-mauve/40"
        />
        <kbd className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded border border-white/10 bg-crust px-1.5 py-0.5 font-mono text-[11px] text-overlay0">
          /
        </kbd>
      </div>

      {/* filters */}
      <div className="flex flex-wrap items-center gap-2">
        <FilterChip active={!topic} onClick={() => setTopic(null)} label="All topics" />
        {topics.map((t) => (
          <FilterChip
            key={t}
            active={topic === t}
            onClick={() => setTopic(topic === t ? null : t)}
            label={t}
            dot={ACCENT_DOT[topicColor(t)]}
          />
        ))}
        <span className="mx-1 h-4 w-px bg-white/10" />
        {DIFFS.map((d) => (
          <FilterChip
            key={d}
            active={diff === d}
            onClick={() => setDiff(diff === d ? null : d)}
            label={d}
          />
        ))}
      </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-xs text-overlay0">
        <span>{filtered.length} question{filtered.length !== 1 ? "s" : ""}</span>
        {(topic || diff || query.trim()) && (
          <>
            <span className="text-overlay0/60">·</span>
            {query.trim() && <ActiveChip label={`“${query.trim()}”`} onClear={() => setQuery("")} />}
            {topic && <ActiveChip label={topic} onClear={() => setTopic(null)} />}
            {diff && <ActiveChip label={diff} onClear={() => setDiff(null)} />}
            <button
              onClick={() => { setQuery(""); setTopic(null); setDiff(null); }}
              className="text-subtext0 underline decoration-dotted underline-offset-2 hover:text-red"
            >
              clear all
            </button>
          </>
        )}
      </div>

      {filtered.length === 0 ? (
        <Empty title="No matches" hint="Try a different search or clear the filters." />
      ) : (
        <div className="pf-deck grid grid-cols-1 items-start gap-3 xl:grid-cols-2">
          {filtered.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function ActiveChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button
      onClick={onClear}
      className="inline-flex items-center gap-1 rounded-full border border-mauve/30 bg-mauve/10 px-2 py-0.5 capitalize text-subtext1 transition-colors hover:border-red/40 hover:text-red"
      title="Remove this filter"
    >
      {label}
      <span className="text-[13px] leading-none">×</span>
    </button>
  );
}

function Header({ count }: { count: number }) {
  return (
    <header className="mb-6">
      <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-overlay0">
        {count} curated questions
      </div>
      <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-text sm:text-4xl">
        Forge your <span className="italic text-mauve">interview</span> answers.
      </h1>
      <p className="mt-2 max-w-xl text-sm text-subtext0">
        Local-first prep for AI, ML, Data Science &amp; Analytics — browse, drill, quiz, and pull live resources.
      </p>
    </header>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  dot,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  dot?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`pill capitalize transition-all ${
        active
          ? "border-mauve/40 bg-mauve/10 text-text"
          : "text-subtext0 hover:border-white/20 hover:text-subtext1"
      }`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />}
      {label}
    </button>
  );
}
