import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { questionMap } from "../hooks/useQuestions";
import type { Question, VaultSource } from "../lib/types";
import { ACCENT_BORDER, topicColor } from "../lib/topics";
import { DifficultyBadge, TopicBadge } from "./Badge";
import { DeepAnswer } from "./DeepAnswer";
import { Markdown } from "./Markdown";
import { SourceDoc } from "./SourceDoc";

export function QuestionCard({ q, index = 0 }: { q: Question; index?: number }) {
  const [open, setOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [altOpen, setAltOpen] = useState(false);
  const [openSource, setOpenSource] = useState<VaultSource | null>(null);
  const { progress, toggleBookmark, setNote } = useProgress();
  const bookmarked = progress.bookmarks.includes(q.id);
  const note = progress.notes[q.id] ?? "";
  const accent = topicColor(q.topic);

  function jumpTo(id: string) {
    document.getElementById(`q-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <motion.article
      id={`q-${q.id}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      className={`glass group scroll-mt-24 rounded-2xl border-l-2 ${ACCENT_BORDER[accent]} shadow-card ${open ? "xl:col-span-2" : ""}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="pf-card flex w-full items-start gap-4 px-5 py-4 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <TopicBadge topic={q.topic} />
            <DifficultyBadge difficulty={q.difficulty} />
            {q.from_vault && (
              <span className="pill border-peach/40 text-peach">
                ⛁ vault{(q.sources?.length ?? 0) > 1 ? ` · ${q.sources!.length} sources` : ""}
              </span>
            )}
          </div>
          <h3 className="font-display text-h3 font-medium text-text">
            {q.question}
          </h3>
          {!open && (
            <>
              {q.answer && (
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-overlay1">{stripMd(q.answer)}</p>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] text-overlay0">
                {q.tags.slice(0, 4).map((t) => (
                  <span key={t}>#{t}</span>
                ))}
                {q.related && q.related.length > 0 && <span className="text-lavender">◈ {q.related.length} related</span>}
                {q.sources && q.sources.length > 0 && <span className="text-peach">⛁ {q.sources.length} source{q.sources.length > 1 ? "s" : ""}</span>}
              </div>
            </>
          )}
        </div>
        <span
          className={`mt-1 shrink-0 text-overlay1 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.05] px-5 py-4 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-6">
              <div className="min-w-0">
              {q.answer ? (
                <CollapsibleAnswer md={q.answer} />
              ) : q.from_vault ? (
                <p className="text-sm text-overlay0">
                  No inline answer was extracted — open the source document below, or generate one.
                </p>
              ) : null}

              {/* supplementary answers from other vault documents (not duplicates) */}
              {q.alt_answers && q.alt_answers.length > 0 && (
                <div className="mt-3">
                  <button onClick={() => setAltOpen((o) => !o)} className="pill border-teal/40 text-teal">
                    + {q.alt_answers.length} supplementary answer{q.alt_answers.length > 1 ? "s" : ""}
                  </button>
                  <AnimatePresence>
                    {altOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <div className="mt-3 space-y-3">
                          {q.alt_answers.map((a, i) => (
                            <div key={i} className="rounded-xl border border-white/[0.05] bg-crust/40 p-3">
                              <Markdown>{a.answer}</Markdown>
                              <button onClick={() => setOpenSource(a.source)} className="mt-2 font-mono text-[11px] text-peach hover:underline">
                                ⛁ {a.source.title}
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* source documents this question came from — click to read */}
              {q.sources && q.sources.length > 0 && (
                <div className="mt-4">
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-overlay0">From your vault</div>
                  <div className="flex flex-wrap gap-1.5">
                    {q.sources.map((s) => (
                      <button key={s.path} onClick={() => setOpenSource(s)} className="pill border-peach/30 text-peach hover:bg-peach/10">
                        ⛁ {s.title.length > 36 ? s.title.slice(0, 34) + "…" : s.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <DeepAnswer question={q.question} topic={q.topic} qid={q.id} />

              {q.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {q.tags.map((t) => (
                    <span key={t} className="rounded-md bg-crust px-2 py-0.5 font-mono text-[11px] text-overlay1">
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(q.id)}
                  className={`pill transition-colors ${
                    bookmarked ? "border-yellow/40 text-yellow" : "text-subtext0 hover:text-subtext1"
                  }`}
                >
                  {bookmarked ? "★ Saved" : "☆ Save"}
                </button>
                <button
                  onClick={() => setNoteOpen((n) => !n)}
                  className={`pill transition-colors ${
                    note ? "border-teal/40 text-teal" : "text-subtext0 hover:text-subtext1"
                  }`}
                >
                  ✎ {note ? "Edit note" : "Add note"}
                </button>
              </div>

              <AnimatePresence>
                {noteOpen && (
                  <motion.textarea
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 90 }}
                    exit={{ opacity: 0, height: 0 }}
                    value={note}
                    onChange={(e) => setNote(q.id, e.target.value)}
                    placeholder="Your notes on this question…"
                    className="mt-3 w-full resize-none rounded-xl border border-white/[0.07] bg-crust/60 px-3 py-2 font-mono text-sm text-subtext1 outline-none placeholder:text-overlay0 focus:border-mauve/40"
                  />
                )}
              </AnimatePresence>
              </div>

              {/* right rail — related questions (zero-token memory index) */}
              <RelatedRail related={q.related} onJump={jumpTo} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SourceDoc source={openSource} onClose={() => setOpenSource(null)} />
    </motion.article>
  );
}

// Long vault answers get clamped with a "show more" reveal + a reading-time hint,
// so a card doesn't blow out to a wall of text before you decide to read it.
function CollapsibleAnswer({ md }: { md: string }) {
  const long = md.length > 900;
  const [expanded, setExpanded] = useState(!long);
  const mins = Math.max(1, Math.round(md.split(/\s+/).length / 200));
  if (!long) return <Markdown>{md}</Markdown>;
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-overlay0">~{mins} min read</div>
      <div className={expanded ? "" : "relative max-h-72 overflow-hidden"}>
        <Markdown>{md}</Markdown>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-mantle to-transparent" />
        )}
      </div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 font-mono text-[11px] text-mauve transition-colors hover:text-lavender"
      >
        {expanded ? "Show less ▲" : "Show more ▼"}
      </button>
    </div>
  );
}

// strip markdown syntax for a clean one-line preview
function stripMd(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*`>_~]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

function RelatedRail({ related, onJump }: { related?: { id: string; score: number }[]; onJump: (id: string) => void }) {
  const map = questionMap();
  const items = (related ?? []).map((r) => ({ id: r.id, q: map.get(r.id) })).filter((x) => x.q);
  if (items.length === 0) return null;
  return (
    <aside className="mt-6 lg:mt-0">
      <div className="rounded-2xl border border-white/[0.05] bg-crust/40 p-3 lg:sticky lg:top-24">
        <div className="mb-2 font-mono text-[11px] uppercase tracking-widest text-lavender">
          Related questions
        </div>
        <div className="flex flex-col gap-1">
          {items.map(({ id, q }) => (
            <button
              key={id}
              onClick={() => onJump(id)}
              title="Jump to this question"
              className="group/rel rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-surface0/50"
            >
              <span className="line-clamp-2 text-xs text-subtext1 group-hover/rel:text-lavender">{q!.question}</span>
              <span className="mt-0.5 block font-mono text-[10px] text-overlay0">{q!.topic}</span>
            </button>
          ))}
        </div>
        <div className="mt-2 border-t border-white/[0.05] pt-2 font-mono text-[10px] text-overlay0">
          linked by shared concepts — recall one, remember the rest
        </div>
      </div>
    </aside>
  );
}
