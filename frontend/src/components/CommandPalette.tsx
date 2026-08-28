import Fuse from "fuse.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { useQuestions } from "../hooks/useQuestions";
import { DifficultyBadge, TopicBadge } from "./Badge";

/**
 * Ctrl/Cmd+K: one box that reaches the whole app from anywhere.
 *
 * The bank is 8,330 questions and the only way to search it was the box inside
 * Library's questions view — so finding a question meant first navigating to
 * the place where searching is possible. This is that box, minus the
 * navigation, plus the five destinations.
 *
 * Owns: the overlay, its query, and what a result does. Does NOT own the
 * question data (useQuestions' shared cache) or Library's own filters — picking
 * a question here hands Library the id in the URL and Library does the rest.
 */

interface Command {
  id: string;
  label: string;
  hint: string;
  to: string;
}

const COMMANDS: Command[] = [
  { id: "today", label: "Today", hint: "what to do right now", to: "/" },
  { id: "recall", label: "Study — recall", hint: "the cards that are due", to: "/study?mode=recall" },
  { id: "drill", label: "Study — drill", hint: "a pass that does not move due dates", to: "/study?mode=drill" },
  { id: "quiz", label: "Study — quiz", hint: "multiple choice, scored", to: "/study?mode=quiz" },
  { id: "library", label: "Library — questions", hint: "the whole bank", to: "/library?view=questions" },
  { id: "saved", label: "Library — saved", hint: "what you bookmarked", to: "/library?view=saved" },
  { id: "collections", label: "Library — collections", hint: "sources and documents", to: "/library?view=collections" },
  { id: "feed", label: "Library — feed", hint: "articles and videos", to: "/library?view=feed" },
  { id: "reader", label: "Reader", hint: "open a document or a URL", to: "/reader" },
  { id: "notes", label: "Notes", hint: "your notes", to: "/notes" },
  { id: "graph", label: "Notes — graph", hint: "how the notes connect", to: "/notes?view=graph" },
  { id: "progress", label: "Progress", hint: "what you have recorded", to: "/progress" },
];

/** Results shown before you type, and the cap once you do. Twelve is what fits
 *  without the list becoming a page of its own. */
const LIMIT = 12;

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const { questions } = useQuestions();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  // Titles only, and only when the palette is open. Library's own search reads
  // answers and tags too, which is right there and wrong here: this is a jump
  // box, and an 8,330-answer index built on every app start is not free.
  const fuse = useMemo(
    () => (open ? new Fuse(questions, { keys: ["question", "topic"], threshold: 0.35, ignoreLocation: true }) : null),
    [open, questions],
  );

  const commandHits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COMMANDS.slice(0, 6);
    return COMMANDS.filter((c) => (c.label + " " + c.hint).toLowerCase().includes(q));
  }, [query]);

  const questionHits = useMemo(() => {
    const q = query.trim();
    if (!q || !fuse) return [];
    return fuse.search(q, { limit: LIMIT }).map((r) => r.item);
  }, [fuse, query]);

  const rows = useMemo(
    () => [
      ...commandHits.map((c) => ({ kind: "command" as const, key: c.id, cmd: c })),
      ...questionHits.map((q) => ({ kind: "question" as const, key: q.id, q })),
    ],
    [commandHits, questionHits],
  );

  useEffect(() => setActive(0), [query]);

  // Keep the highlighted row on screen — with 18 rows the arrow keys otherwise
  // walk the selection out of view and the list looks frozen.
  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function go(index: number) {
    const row = rows[index];
    if (!row) return;
    onClose();
    if (row.kind === "command") navigate(row.cmd.to);
    // Library reads ?id= and opens that question in the detail pane; ?q= puts
    // the same words in its own box, so the list around the answer is the list
    // you were looking for rather than all 8,330.
    else navigate(`/library?view=questions&id=${encodeURIComponent(row.q.id)}&q=${encodeURIComponent(query.trim())}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, rows.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(active);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      {/* `[&>button]:hidden` drops the dialog's own close ×: in a palette it
          lands inside the search field's corner, and Esc, the scrim and the
          footer hint already close this. Every palette worth copying — Spotlight,
          VS Code, Linear — has no close button either. */}
      <DialogContent className="top-[12%] max-w-xl translate-y-0 gap-0 p-0 [&>button]:hidden">
        <DialogTitle className="sr-only">Search and jump</DialogTitle>

        <div className="relative border-b border-surface0">
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-overlay0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Search questions, or jump to a page"
            aria-controls="command-palette-results"
            placeholder="Search questions, or jump to a page"
            // pr-12 keeps the caret and the typed query clear of the dialog's
            // close button, which sits in that corner and was overlapping the
            // field's right edge.
            className="w-full bg-transparent py-3.5 pl-11 pr-12 text-small text-text outline-none placeholder:text-overlay0"
          />
        </div>

        <ul
          id="command-palette-results"
          ref={listRef}
          role="listbox"
          aria-label="Results"
          className="max-h-[60vh] overflow-y-auto p-1.5"
        >
          {rows.length === 0 && (
            <li className="px-3 py-6 text-center text-small text-overlay1">
              Nothing matches “{query.trim()}”.
            </li>
          )}
          {rows.map((row, i) => (
            <li key={`${row.kind}-${row.key}`}>
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                data-active={i === active}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(i)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors duration-100 ${
                  i === active ? "bg-surface0 text-text" : "text-subtext0"
                }`}
              >
                {row.kind === "command" ? (
                  <>
                    <ArrowRight aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
                    <span className="min-w-0 flex-1 truncate text-small">{row.cmd.label}</span>
                    <span className="shrink-0 text-micro text-overlay0">{row.cmd.hint}</span>
                  </>
                ) : (
                  <>
                    <span className="min-w-0 flex-1 truncate text-small">{row.q.question}</span>
                    <span className="flex shrink-0 items-center gap-1.5">
                      <TopicBadge topic={row.q.topic} />
                      <DifficultyBadge difficulty={row.q.difficulty} />
                    </span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 border-t border-surface0 px-4 py-2 text-micro text-overlay0">
          <span>↑↓ move</span>
          <span>↵ open</span>
          <span>esc close</span>
          {query.trim() && questionHits.length > 0 && (
            <span className="ml-auto tabular-nums">
              {questionHits.length} of {questions.length.toLocaleString()} questions
            </span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
