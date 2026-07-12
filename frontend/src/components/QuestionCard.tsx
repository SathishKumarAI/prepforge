import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      className={`glass group rounded-2xl border-l-2 ${ACCENT_BORDER[accent]} shadow-card`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-4 px-5 py-4 text-left"
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
          <h3 className="font-display text-lg font-medium leading-snug text-text">
            {q.question}
          </h3>
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
            <div className="border-t border-white/[0.05] px-5 py-4">
              {q.answer ? (
                <Markdown>{q.answer}</Markdown>
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
          </motion.div>
        )}
      </AnimatePresence>

      <SourceDoc source={openSource} onClose={() => setOpenSource(null)} />
    </motion.article>
  );
}
