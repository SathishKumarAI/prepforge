import Fuse from "fuse.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { Empty, Loader } from "../components/States";
import { useQuestions } from "../hooks/useQuestions";
import { ACCENT_DOT, topicColor } from "../lib/topics";

const DIFFS = ["easy", "medium", "hard"];

export function Browse() {
  const { questions, topics, loading, error } = useQuestions();
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

  if (loading) return <Loader label="Loading question bank" />;
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

      {/* search */}
      <div className="relative mb-5">
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
      <div className="mb-6 flex flex-wrap items-center gap-2">
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

      <div className="mb-4 font-mono text-xs text-overlay0">
        {filtered.length} question{filtered.length !== 1 ? "s" : ""}
      </div>

      {filtered.length === 0 ? (
        <Empty title="No matches" hint="Try a different search or clear the filters." />
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ count }: { count: number }) {
  return (
    <header className="mb-8">
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-overlay0">
        {count} curated questions
      </div>
      <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl">
        Forge your <span className="italic text-mauve">interview</span> answers.
      </h1>
      <p className="mt-3 max-w-lg text-subtext0">
        A local-first prep deck for AI, Machine Learning, Data Science, and Analytics roles. Browse,
        drill flashcards, quiz yourself, and pull live resources from the web.
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
