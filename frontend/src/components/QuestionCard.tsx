import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  BookmarkCheck,
  ChevronDown,
  ChevronRight,
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
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
      // An open card stays in its column. Spanning both was there to feed the
      // related-questions rail; without the rail it only bought a card twice as
      // wide as the 68ch answer inside it — the width showed up as a gutter,
      // not as content.
      className="panel scroll-mt-24 transition-colors duration-100 hover:border-surface1"
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

/**
 * What a related link shows on hover: enough to judge it, not enough to read
 * instead of opening it. The answer is already in memory via `questionMap`, so
 * this costs no request.
 */
function RelatedPreview({ q }: { q: Question }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <TopicBadge topic={q.topic} />
        <DifficultyBadge difficulty={q.difficulty} />
      </div>
      <p className="font-display text-small font-medium leading-snug text-text">{q.question}</p>
      {q.answer ? (
        <p className="line-clamp-4 text-small leading-relaxed text-subtext0">{stripMd(q.answer)}</p>
      ) : (
        <p className="text-micro text-overlay0">No inline answer — open it to read the source.</p>
      )}
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

/**
 * Related questions as plain links, not a rail: the sidebar cost a fixed 15rem
 * of every expanded card to show six titles you mostly do not follow.
 *
 * Folded behind a disclosure for the same reason — six full titles open by
 * default is a second answer's worth of height under every answer. Collapsed it
 * costs one line; the count tells you whether opening it is worth anything.
 *
 * Each one is a real anchor to the library searched for that question, so
 * middle-click and "open in new tab" behave. When the card is already on this
 * page the click is intercepted and scrolls to it instead — no navigation for
 * something two screens down.
 *
 * Hover or keyboard-focus previews the answer, so deciding whether one is worth
 * reading costs neither a navigation nor a scroll away from what you are on.
 */
function RelatedLinks({
  related,
  onJump,
}: {
  related?: { id: string; score: number }[];
  onJump: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const map = questionMap();
  const items = (related ?? []).map((r) => ({ id: r.id, q: map.get(r.id) })).filter((x) => x.q);
  if (items.length === 0) return null;
  return (
    <details
      className="mt-4"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="flex cursor-pointer list-none items-center gap-2 text-micro text-overlay1 marker:content-none hover:text-subtext0 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
        />
        <span className="font-semibold uppercase tracking-[0.14em]">Related</span>
        <span className="tabular-nums">{items.length}</span>
      </summary>
      {/* One provider for the whole list: the skip-delay window is shared, so
          moving along the list previews instantly after the first one opens,
          instead of charging 300ms per link. */}
      <TooltipProvider delayDuration={300} skipDelayDuration={400}>
        <ul className="mt-1.5 flex flex-col gap-0.5">
          {items.map(({ id, q }) => (
            <li key={id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={`/library?q=${encodeURIComponent(q!.question)}`}
                    onClick={(e) => {
                      if (!document.getElementById(`q-${id}`)) return; // let the link navigate
                      e.preventDefault();
                      onJump(id);
                    }}
                    // Quieter than a prose link on purpose: six of these per card in
                    // full accent read as an alarm, not as a list you may follow.
                    className="flex items-center gap-2 rounded-lg px-2 py-1 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
                  >
                    <span className="truncate">{q!.question}</span>
                    <span className="shrink-0 text-micro text-overlay0">{q!.topic}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" align="start">
                  <RelatedPreview q={q!} />
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </details>
  );
}
