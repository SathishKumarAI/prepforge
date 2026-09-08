import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  FileText,
  Library,
  PencilLine,
} from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { scrollToElement } from "../lib/scroll";
import { stripMd } from "../lib/stripMd";
import type { Question, VaultSource } from "../lib/types";
import { DifficultyBadge, TopicBadge } from "./Badge";
import { CollapsibleAnswer } from "./card/CollapsibleAnswer";
import { MoreToRead } from "./card/MoreToRead";
import { RelatedLinks } from "./card/RelatedLinks";
import { DeepAnswer } from "./DeepAnswer";
import { Markdown } from "./Markdown";
import { SourceDoc } from "./SourceDoc";
import { Button } from "./ui/button";

/**
 * A question in a list: collapsed it is a scannable row, expanded it is the
 * answer plus everything hanging off it.
 *
 * The whole row is one <button aria-expanded>, so a keyboard user gets the
 * state announced rather than inferring it from a rotating glyph. No entrance
 * animation and no index-staggered delay: a deck of 48 cards rippling in on
 * every filter change is choreography, not feedback.
 *
 * Hover opens it, click pins it. Two states rather than one, because a card
 * that closed the instant the pointer left would take the answer away while you
 * were still reading it: the pin is what makes opening on hover survivable. The
 * delays are the other half — 350ms before opening so sweeping across the deck
 * does not open six cards, 200ms before closing so crossing a gap on the way to
 * the card does not shut it.
 *
 * Cost, accepted knowingly: an opening card pushes the cards below it in its
 * column down. The hovered card's own top does not move, so what you are aiming
 * at stays put, but the deck under it does shift.
 *
 * Owns: the row, hover/pin, and the expanded body's order. Does NOT own the
 * clamped answer (card/CollapsibleAnswer), the related list and its hover
 * previews (card/RelatedLinks), or the reading list (card/MoreToRead).
 */
export function QuestionCard({ q }: { q: Question; index?: number }) {
  // `pinned` is a click; `peeked` is a hover. Either one opens the card.
  const [pinned, setPinned] = useState(false);
  const [peeked, setPeeked] = useState(false);
  const open = pinned || peeked;
  const peekTimer = useRef<number>();
  const [noteOpen, setNoteOpen] = useState(false);
  const [altOpen, setAltOpen] = useState(false);
  const [openSource, setOpenSource] = useState<VaultSource | null>(null);
  const { progress, toggleBookmark, setNote } = useProgress();
  const bookmarked = progress.bookmarks.includes(q.id);
  const note = progress.notes[q.id] ?? "";

  // Only where hovering is a real gesture. A touch device fires mouseenter from
  // a tap, so without this the tap would open the card by hover and then the
  // click would immediately pin it — one tap, two state changes.
  const canHover = window.matchMedia("(hover: hover)").matches;

  function peek(on: boolean, delay: number) {
    window.clearTimeout(peekTimer.current);
    if (!canHover) return;
    peekTimer.current = window.setTimeout(() => setPeeked(on), delay);
  }
  useEffect(() => () => window.clearTimeout(peekTimer.current), []);

  function jumpTo(id: string) {
    scrollToElement(document.getElementById(`q-${id}`), "center");
  }

  return (
    <article
      id={`q-${q.id}`}
      // An open card stays in its column. Spanning both was there to feed the
      // related-questions rail; without the rail it only bought a card twice as
      // wide as the 68ch answer inside it — the width showed up as a gutter,
      // not as content.
      className="panel scroll-mt-24 transition-colors duration-100 hover:border-surface1"
      onMouseEnter={() => peek(true, 350)}
      onMouseLeave={() => peek(false, 200)}
    >
      <button
        onClick={() => {
          // Clicking an open card closes it for good — clearing the hover too,
          // or it would spring back open under the pointer that just shut it.
          window.clearTimeout(peekTimer.current);
          if (open) {
            setPinned(false);
            setPeeked(false);
          } else {
            setPinned(true);
          }
        }}
        aria-expanded={open}
        className="pf-card flex w-full items-start gap-4 rounded-xl px-4 py-3.5 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
            <TopicBadge topic={q.topic} />
            <DifficultyBadge difficulty={q.difficulty} />
            {q.origin && (
              <span className="inline-flex items-center gap-1 text-micro text-overlay0">
                <OriginIcon kind={q.origin.kind} />
                {q.origin.label}
              </span>
            )}
          </div>

          <h3 className="font-display text-h3 font-medium leading-snug text-text">{q.question}</h3>

          {!open && (
            <>
              {q.answer && (
                <p className="mt-1.5 line-clamp-2 text-small leading-relaxed text-overlay1">
                  {stripMd(q.answer)}
                </p>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-micro text-overlay0">
                {q.tags.slice(0, 4).map((t) => (
                  <span key={t}>#{t}</span>
                ))}
                {q.related && q.related.length > 0 && (
                  <span className="tabular-nums">{q.related.length} related</span>
                )}
                {q.sources && q.sources.length > 0 && (
                  <span className="tabular-nums">
                    {q.sources.length} source{q.sources.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
        <ChevronDown
          aria-hidden="true"
          className={`mt-0.5 size-4 shrink-0 text-overlay0 transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-surface0 px-4 py-4">
              <div className="min-w-0">
                {q.answer ? (
                  <CollapsibleAnswer md={q.answer} />
                ) : q.from_vault ? (
                  <p className="text-small text-overlay1">
                    No inline answer was extracted. Open the source document below, or generate one.
                  </p>
                ) : null}

                {/* The seven lenses and the related questions come straight after
                    the answer: they are the two things you reach for once you
                    have read it. Sources, further reading and tags are reference
                    material and sit below them. */}
                <DeepAnswer question={q.question} topic={q.topic} qid={q.id} />

                <RelatedLinks related={q.related} onJump={jumpTo} />

                {q.alt_answers && q.alt_answers.length > 0 && (
                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAltOpen((o) => !o)}
                      aria-expanded={altOpen}
                    >
                      {altOpen ? "Hide" : "Show"} {q.alt_answers.length} other answer
                      {q.alt_answers.length > 1 ? "s" : ""}
                    </Button>
                    {altOpen && (
                      <div className="mt-3 space-y-3">
                        {q.alt_answers.map((a, i) => (
                          <div key={i} className="rounded-lg border border-surface0 bg-crust p-3">
                            <Markdown>{a.answer}</Markdown>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2"
                              onClick={() => setOpenSource(a.source)}
                            >
                              <Library aria-hidden="true" />
                              {a.source.title}
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {q.sources && q.sources.length > 0 && (
                  <div className="mt-5">
                    <h4 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
                      {q.sources.some((s) => s.kind === "library")
                        ? "Read the full document"
                        : "From your vault"}
                    </h4>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {q.sources.map((s) => (
                        <Button
                          key={s.path}
                          variant="outline"
                          size="sm"
                          onClick={() => setOpenSource(s)}
                        >
                          <FileText aria-hidden="true" />
                          {s.title.length > 36 ? s.title.slice(0, 34) + "…" : s.title}
                        </Button>
                      ))}
                      {q.truncated && (
                        <span className="text-micro text-overlay0">
                          answer trimmed — the rest is in the source
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <MoreToRead links={q.links} reading={q.reading} />

                {q.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {q.tags.map((t) => (
                      <span key={t} className="pill text-overlay1">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBookmark(q.id)}
                    aria-pressed={bookmarked}
                    className={bookmarked ? "text-text" : undefined}
                  >
                    {bookmarked ? (
                      <BookmarkCheck aria-hidden="true" />
                    ) : (
                      <Bookmark aria-hidden="true" />
                    )}
                    {bookmarked ? "Saved" : "Save"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setNoteOpen((n) => !n)}
                    aria-expanded={noteOpen}
                    className={note ? "text-text" : undefined}
                  >
                    <PencilLine aria-hidden="true" />
                    {note ? "Edit note" : "Add note"}
                  </Button>
                </div>

                {noteOpen && (
                  <textarea
                    value={note}
                    onChange={(e) => setNote(q.id, e.target.value)}
                    placeholder="What tripped you up here?"
                    className="input mt-3 min-h-[5.5rem] resize-y"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SourceDoc source={openSource} onClose={() => setOpenSource(null)} />
    </article>
  );
}

function OriginIcon({ kind }: { kind: string }) {
  const Icon = kind === "library" ? Library : kind === "vault" ? FileText : Bookmark;
  return <Icon aria-hidden="true" className="size-3" />;
}
