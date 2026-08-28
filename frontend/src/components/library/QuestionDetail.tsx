import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Bookmark, BookmarkCheck, ExternalLink, FileText, PencilLine } from "lucide-react";
import { DifficultyBadge, TopicBadge } from "../Badge";
import { DeepAnswer, LENS_TABS, type Mode } from "../DeepAnswer";
import { Markdown } from "../Markdown";
import { SourceDoc } from "../SourceDoc";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useProgress } from "../../hooks/useProgress";
import { useProviders } from "../../hooks/useProviders";
import { questionMap } from "../../hooks/useQuestions";
import { fetchCachedModes } from "../../lib/api";
import type { Question, VaultSource } from "../../lib/types";

/**
 * The reading half of the Library: one question, everything about it.
 *
 * Owns the tab row. `answer` is the bank's own answer and costs nothing; every
 * other tab is a generated lens that `DeepAnswer` fetches when selected. Putting
 * them in ONE row is the point of the layout — as separate surfaces the lenses
 * were a button inside a card, below the fold of that card, and nobody found
 * them.
 *
 * Does NOT own: which question is selected, or the list. Those are the pane on
 * the left.
 */
export function QuestionDetail({
  q,
  onBack,
  onSelect,
}: {
  q: Question;
  /** Only rendered below lg, where the detail replaces the list. */
  onBack?: () => void;
  onSelect: (id: string) => void;
}) {
  const [tab, setTab] = useState<"answer" | Mode>("answer");
  const tabTimer = useRef<number>();
  const canHover = window.matchMedia("(hover: hover)").matches;
  const [noteOpen, setNoteOpen] = useState(false);
  const [openSource, setOpenSource] = useState<VaultSource | null>(null);
  const { progress, toggleBookmark, setNote } = useProgress();
  const { local_model: localModel, free_modes: freeModes, loaded: providersKnown } = useProviders();
  // Which lenses this question already has on disk. Asked per question, because
  // that is what it depends on; the answer is four fields of JSON.
  const [cachedModes, setCachedModes] = useState<string[]>([]);
  useEffect(() => {
    let live = true;
    setCachedModes([]);
    fetchCachedModes(q.id)
      .then((r) => live && setCachedModes(r.cached_modes))
      .catch(() => {
        /* unknown stays unknown: the row then marks by provider alone */
      });
    return () => {
      live = false;
    };
  }, [q.id]);
  // The bank's own answer and your own content are files, not generations. Every
  // other lens is free only while LM Studio is serving one — `deep` never is,
  // because web search is the whole point of it and that runs on Claude.
  const isFree = (v: "answer" | Mode) =>
    v === "answer" || v === "custom" || freeModes.includes(v) || cachedModes.includes(v);
  // Until the probe answers, a generated lens is neither free nor known to bill.
  // Hover stays closed (the safe half of the unknown) but the row says nothing:
  // for the first second of every page load the honest answer is silence, and
  // "LM Studio is off" printed on a machine where it is running is just wrong.
  const isBilled = (v: "answer" | Mode) => providersKnown && !isFree(v);
  const bookmarked = progress.bookmarks.includes(q.id);
  const note = progress.notes[q.id] ?? "";
  const map = questionMap();
  const related = (q.related ?? []).map((r) => map.get(r.id)).filter(Boolean) as Question[];

  // A new question starts on its own answer. Keeping the lens tab across a
  // selection change would fire a generation for a question you only glanced at.
  useEffect(() => {
    setTab("answer");
    setNoteOpen(false);
  }, [q.id]);

  // Selecting a lens generates it, hover or press alike. So hover reaches only
  // the lenses that are free at this moment: with LM Studio running that is six
  // of the eight tabs and the row behaves exactly as it did, and with it off a
  // pointer crossing the row cannot spend anything. The billed lenses still
  // generate — they need a press, which is a decision rather than a path.
  //
  // 400ms, longer than the list's 250ms: a tab is a much smaller target than a
  // row, and landing on the wrong lens is more disruptive than landing on the
  // wrong question.
  function peekTab(v: "answer" | Mode) {
    window.clearTimeout(tabTimer.current);
    if (!canHover || !isFree(v)) return;
    tabTimer.current = window.setTimeout(() => setTab(v), 400);
  }
  function pickTab(v: "answer" | Mode) {
    window.clearTimeout(tabTimer.current);
    setTab(v);
  }
  useEffect(() => () => window.clearTimeout(tabTimer.current), []);

  return (
    // The 68ch measure comes off in here. In a pane whose whole job is to hold
    // the answer, that cap IS the empty space the layout was changed to remove —
    // a deliberate trade of line length for using the width.
    <article className="min-w-0 [&_.prose-answer]:max-w-none">
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack} className="mb-3 lg:hidden">
          <ArrowLeft aria-hidden="true" />
          All questions
        </Button>
      )}

      <header className="mb-4">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <TopicBadge topic={q.topic} />
          <DifficultyBadge difficulty={q.difficulty} />
          {q.origin && <span className="text-micro text-overlay0">{q.origin.label}</span>}
        </div>
        <h2 className="font-display text-h2 font-medium leading-snug text-text">{q.question}</h2>
      </header>

      {/* One row, two kinds of thing — free and generated — because that is the
          order you use them in, not because they share an implementation. */}
      <Tabs value={tab} onValueChange={(v) => pickTab(v as "answer" | Mode)} className="mb-1.5">
        <TabsList className="flex-wrap" onMouseLeave={() => window.clearTimeout(tabTimer.current)}>
          <TabsTrigger value="answer" onMouseEnter={() => peekTab("answer")}>
            Answer
          </TabsTrigger>
          {LENS_TABS.map((t) => (
            <TabsTrigger
              key={t.mode}
              value={t.mode}
              onMouseEnter={() => peekTab(t.mode)}
              title={isBilled(t.mode) ? "Billed to Claude — press to generate" : undefined}
            >
              {t.label}
              {/* The marker is what makes the two kinds of tab tell themselves
                  apart before you commit to one. Text, not colour: a hue would
                  be a second accent, and it would say nothing to a screen
                  reader. */}
              {isBilled(t.mode) && (
                <span className="text-overlay0">
                  <span aria-hidden="true">$</span>
                  <span className="sr-only">, billed</span>
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* One line, under the row it explains, because the answer to "did that
          hover just cost me money" is worthless anywhere else on the page. */}
      <p className="mb-4 min-h-[1.1rem] text-micro text-overlay1">
        {!providersKnown ? null : localModel ? (
          <>
            Local model · <span className="font-mono">{localModel}</span> — {freeModes.length} lens
            {freeModes.length === 1 ? "" : "es"} generate free on hover.
          </>
        ) : (
          <>LM Studio is off — every lens bills Claude, so they generate on a press, not a hover.</>
        )}
      </p>

      {tab === "answer" ? (
        q.answer ? (
          <Markdown>{q.answer}</Markdown>
        ) : (
          <p className="text-small text-overlay1">
            No inline answer was extracted. Open the source below, or pick a lens to generate one.
          </p>
        )
      ) : (
        <DeepAnswer question={q.question} topic={q.topic} qid={q.id} controlled={tab} />
      )}

      {q.sources && q.sources.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            {q.sources.some((s) => s.kind === "library") ? "Read the full document" : "From your vault"}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {q.sources.map((s) => (
              <Button key={s.path} variant="outline" size="sm" onClick={() => setOpenSource(s)}>
                <FileText aria-hidden="true" />
                {s.title.length > 44 ? s.title.slice(0, 42) + "…" : s.title}
              </Button>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            Related questions
          </h3>
          {/* Selecting, not navigating: the whole value of two panes is that a
              related question swaps the pane you are reading and leaves the list
              you were working through exactly where it was. */}
          <ul className="flex flex-col gap-0.5">
            {related.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => onSelect(r.id)}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
                >
                  <span className="min-w-0 flex-1 truncate">{r.question}</span>
                  <span className="shrink-0 text-micro text-overlay0">{r.topic}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {q.links && q.links.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            More to read
          </h3>
          <ul className="flex flex-col gap-0.5">
            {q.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg px-2 py-1 text-small text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
                >
                  <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-overlay0" />
                  <span className="truncate">{l.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {q.tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {q.tags.map((t) => (
            <span key={t} className="pill text-overlay1">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-1 border-t border-surface0 pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleBookmark(q.id)}
          aria-pressed={bookmarked}
          className={bookmarked ? "text-text" : undefined}
        >
          {bookmarked ? <BookmarkCheck aria-hidden="true" /> : <Bookmark aria-hidden="true" />}
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

      <SourceDoc source={openSource} onClose={() => setOpenSource(null)} />
    </article>
  );
}
