import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ExternalLink,
  FileText,
  Library,
  PencilLine,
} from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { questionMap } from "../hooks/useQuestions";
import type { DeepLink, Question, VaultSource } from "../lib/types";
import { DifficultyBadge, TopicBadge } from "./Badge";
import { DeepAnswer } from "./DeepAnswer";
import { Markdown } from "./Markdown";
import { SourceDoc } from "./SourceDoc";
import { Button } from "./ui/button";
import { scrollToElement } from "../lib/scroll";

/**
 * A question in a list: collapsed it is a scannable row, expanded it is the
 * answer plus everything hanging off it.
 *
 * The whole row is one <button aria-expanded>, so a keyboard user gets the
 * state announced rather than inferring it from a rotating glyph. No entrance
 * animation and no index-staggered delay: a deck of 48 cards rippling in on
 * every filter change is choreography, not feedback.
 */
export function QuestionCard({ q }: { q: Question; index?: number }) {
  const [open, setOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [altOpen, setAltOpen] = useState(false);
  const [openSource, setOpenSource] = useState<VaultSource | null>(null);
  const { progress, toggleBookmark, setNote } = useProgress();
  const bookmarked = progress.bookmarks.includes(q.id);
  const note = progress.notes[q.id] ?? "";

  function jumpTo(id: string) {
    scrollToElement(document.getElementById(`q-${id}`), "center");
  }

  return (
    <article
      id={`q-${q.id}`}
      className={`panel scroll-mt-24 transition-colors duration-100 hover:border-surface1 ${
        open ? "xl:col-span-2" : ""
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
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
            <div className="border-t border-surface0 px-4 py-4 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-8">
              <div className="min-w-0">
                {q.answer ? (
                  <CollapsibleAnswer md={q.answer} />
                ) : q.from_vault ? (
                  <p className="text-small text-overlay1">
                    No inline answer was extracted. Open the source document below, or generate one.
                  </p>
                ) : null}

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

                <DeepAnswer question={q.question} topic={q.topic} qid={q.id} />

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

              <RelatedRail related={q.related} onJump={jumpTo} />
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

/**
 * Long vault answers clamp with a reveal and a reading-time hint, so a card
 * does not blow out to a wall of text before you decide to read it.
 */
function CollapsibleAnswer({ md }: { md: string }) {
  const long = md.length > 900;
  const [expanded, setExpanded] = useState(!long);
  const mins = Math.max(1, Math.round(md.split(/\s+/).length / 200));
  if (!long) return <Markdown>{md}</Markdown>;
  return (
    <div>
      <div className="mb-2 text-micro text-overlay0">{mins} min read</div>
      <div className={expanded ? "" : "relative max-h-72 overflow-hidden"}>
        <Markdown>{md}</Markdown>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-mantle to-transparent" />
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="mt-2"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
}

/** Strip markdown syntax for a clean one-line preview. */
function stripMd(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*`>_~]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

/**
 * Reading for this question: links its own source cites first, then anything
 * the index could offer it. Borrowed links carry `via`, so a suggestion never
 * passes itself off as something the author of this card actually cited.
 */
function MoreToRead({ links, reading }: { links?: DeepLink[]; reading?: DeepLink[] }) {
  const seen = new Set<string>();
  const items: DeepLink[] = [];
  for (const l of [...(links ?? []), ...(reading ?? [])]) {
    if (!seen.has(l.url)) {
      seen.add(l.url);
      items.push(l);
    }
  }
  if (items.length === 0) return null;

  return (
    <div className="mt-5">
      <h4 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
        More to read
      </h4>
      <ul className="flex flex-col gap-0.5">
        {items.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
            >
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
              <span className="truncate">{l.title}</span>
              {l.via && <span className="shrink-0 text-micro text-overlay0">related</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedRail({
  related,
  onJump,
}: {
  related?: { id: string; score: number }[];
  onJump: (id: string) => void;
}) {
  const map = questionMap();
  const items = (related ?? []).map((r) => ({ id: r.id, q: map.get(r.id) })).filter((x) => x.q);
  if (items.length === 0) return null;
  return (
    <aside className="mt-8 lg:mt-0">
      <h4 className="mb-2 border-b border-surface0 pb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
        Related questions
      </h4>
      <div className="flex flex-col gap-0.5">
        {items.map(({ id, q }) => (
          <button
            key={id}
            onClick={() => onJump(id)}
            className="rounded-lg px-2 py-1.5 text-left transition-colors duration-100 hover:bg-surface0"
          >
            <span className="line-clamp-2 text-small text-subtext0">{q!.question}</span>
            <span className="mt-0.5 block text-micro text-overlay0">{q!.topic}</span>
          </button>
        ))}
      </div>
      <p className="mt-2 text-micro text-overlay0">
        Linked by shared concepts — recall one, remember the rest.
      </p>
    </aside>
  );
}
