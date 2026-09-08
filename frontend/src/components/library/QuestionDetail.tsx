import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  FileText,
  PencilLine,
  Square,
  Volume2,
} from "lucide-react";
import { Kbd } from "../Kbd";
import { useHotkeys } from "../../hooks/useHotkeys";
import { useHoverIntent } from "../../hooks/useHoverIntent";
import { useSpeech } from "../../hooks/useSpeech";
import { previewInterval, type Rating } from "../../lib/srs";
import { DifficultyBadge, TopicBadge } from "../Badge";
import { DeepAnswer, LENS_TABS, type Mode } from "../DeepAnswer";
import { Markdown } from "../Markdown";
import { SourceDoc } from "../SourceDoc";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useProgress } from "../../hooks/useProgress";
import { useProviders } from "../../hooks/useProviders";
import type { Question, VaultSource } from "../../lib/types";

/**
 * The self-rating, in the reader's words rather than SM-2's. Three, not four:
 * "easy" exists in Study for a card you have met before, and here you are
 * usually meeting it for the first time. Keys 1–3 match the order.
 */
const RATINGS: { key: Rating; label: string }[] = [
  { key: "good", label: "Got it" },
  { key: "hard", label: "Shaky" },
  { key: "again", label: "Missed it" },
];

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
  recall = false,
  onBack,
  onSelect,
  onNext,
}: {
  q: Question;
  /** Recall mode: the answer stays hidden until revealed, and a rating advances. */
  recall?: boolean;
  /** Only rendered below lg, where the detail replaces the list. */
  onBack?: () => void;
  onSelect: (id: string) => void;
  /** Move to the next question — after a rating in recall mode. */
  onNext?: () => void;
}) {
  const [tab, setTab] = useState<"answer" | Mode>("answer");
  const articleRef = useRef<HTMLElement>(null);
  const [noteOpen, setNoteOpen] = useState(false);
  const [openSource, setOpenSource] = useState<VaultSource | null>(null);
  const { progress, toggleBookmark, setNote, markRecent, getCard, rateCard } = useProgress();
  // Reading a question here is what "recent" means; the palette offers these
  // before you have typed. Hovering the list does not count — that is a glance.
  useEffect(() => markRecent(q.id), [q.id, markRecent]);
  const { local_model: localModel, free_modes: freeModes, loaded: providersKnown } = useProviders();
  // Which lenses this question already has on disk. Part of the question
  // payload, not a second request: fetched separately it landed ~100 ms after
  // the question, and the $ markers flashed on every question change.
  const cachedModes = q.cached_modes ?? [];
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
  // `GET /questions/{qid}` expands each related entry with its title and topic,
  // so this no longer resolves ids against a full bank held in memory — that
  // lookup was one of the two reasons Library carried all 39.7 MB.
  const related = (q.related ?? []).filter((r) => r.question);

  // A new question starts on its own answer. Keeping the lens tab across a
  // selection change would fire a generation for a question you only glanced at.
  useEffect(() => {
    setTab("answer");
    setNoteOpen(false);
  }, [q.id]);

  /**
   * Recall: guess, then check. The answer — every lens, not only the bank's —
   * sits behind one reveal; the rating row appears once you have seen it and
   * not before, because rating an answer you have not tried to recall is
   * reading with extra steps. Reset per question and per mode switch.
   */
  const [revealed, setRevealed] = useState(!recall);
  // What you rated and the interval it earned, captured at the moment of
  // rating: `card` below is live, and after rateCard it already IS the next
  // card, so previewing from it would print the step after the one you took.
  const [rated, setRated] = useState<{ key: Rating; next: string } | null>(null);
  useEffect(() => {
    setRevealed(!recall);
    setRated(null);
  }, [q.id, recall]);
  const card = getCard(q.id);

  /**
   * Read aloud: the question, then whatever answer is ON SCREEN — the rendered
   * text of the current lens, so a generated lens reads as itself and a
   * hidden answer (recall mode) reads as the question alone, which is the
   * hands-free version of "say it to yourself first". A new question stops
   * the voice: the hook's cleanup runs on unmount, and `key={q.id}` above
   * remounts this component per question.
   */
  const { supported: canSpeak, speaking, speak, stop } = useSpeech();
  function readAloud() {
    if (speaking) return stop();
    const body = articleRef.current?.querySelector(".prose-answer")?.textContent ?? "";
    speak(`${q.question} ${body}`);
  }

  function rate(r: Rating) {
    setRated({ key: r, next: previewInterval(card, r) });
    rateCard(q.id, r);
    // Grading is the last thing you do with a card in recall mode, so it moves
    // on. Outside recall you may still be reading; the row just records it.
    if (recall) onNext?.();
  }
  // Bound only while they mean something: a mapped key is preventDefault'ed,
  // so Space bound while the answer is showing would stop the page scrolling.
  useHotkeys({
    ...(!revealed ? { " ": () => setRevealed(true) } : {}),
    ...(revealed && !rated
      ? { "1": () => rate("good"), "2": () => rate("hard"), "3": () => rate("again") }
      : {}),
  });

  // A FREE lens opens on a 400 ms hover from a pointer that moved
  // (hooks/useHoverIntent); a billed one needs a press, because a press is a
  // decision and a path is not. Movement is the gate: the plain `mouseenter`
  // version switched the lens when the page reflowed under a resting pointer
  // (Hide list widened the column and ELI5 landed under the mouse). 400 ms,
  // longer than the list's 250: a tab is a smaller target than a row, and
  // landing on the wrong lens is more disruptive than the wrong question.
  const lensHover = useHoverIntent<Mode | "answer">((v) => {
    if (isFree(v)) setTab(v);
  }, 400);

  return (
    /* 100ch, not the 68ch measure and not uncapped.
     *
     * 68ch was written for a pane sharing the screen with a list; with the list
     * away it left a third of the page empty. Uncapped went too far the other
     * way — at 1,438px an answer runs about 180 characters a line, and the eye
     * loses the start of the next one on every return sweep, which is the exact
     * failure a measure exists to prevent.
     *
     * The PAGE stays full width: the header, the lens tabs and the related list
     * all use it. Only the running prose is capped, and it is left-aligned
     * rather than centred so its left edge stays flush with the question above
     * it — a centred column under a full-width heading reads as a mistake.
     */
    <article ref={articleRef} className="min-w-0 [&_.prose-answer]:max-w-[100ch]">
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack} className="mb-3 lg:hidden">
          <ArrowLeft aria-hidden="true" />
          All questions
        </Button>
      )}

      {/* The question stays put while its answer scrolls.
          Measured before this existed: on a long answer, scrolling to read it
          put the heading at -421px — off screen entirely — so half way down an
          answer there was nothing on the page saying what it was answering.
          Flush with the top of the viewport. */}
      <header
        // Fully opaque, not bg-base/95. Content scrolls UNDER a sticky header,
        // so the header has to occlude it — at 95% the next line of the answer
        // ghosted through and sat bisected across the boundary, which reads as a
        // rendering fault rather than as a header. The hairline then makes the
        // edge deliberate: it says the text continues below, rather than looking
        // like the answer was cut off.
        // The 1rem below the hairline is padding, not margin: as margin it was
        // a transparent band the tab row and the model line scrolled through
        // in fragments before disappearing under the box.
        className="sticky top-0 z-10 -mx-1 bg-base px-1 pb-4 pt-2"
      >
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <TopicBadge topic={q.topic} />
          <DifficultyBadge difficulty={q.difficulty} />
          {q.origin && <span className="text-micro text-overlay0">{q.origin.label}</span>}
          {/* Top right, level with the metadata rather than below the answer.
              Icon-only: two words repeated on every question is a label you stop
              reading after the third card, and the pair is always in the same
              corner, which is what you actually navigate by.

              One provider for both, so moving between them does not charge the
              open delay twice. Radix opens a tooltip on keyboard FOCUS as well
              as hover — but never on tap, which is why each button carries its
              own aria-label rather than relying on the tooltip to name it. */}
          <TooltipProvider delayDuration={250} skipDelayDuration={400}>
            <div className="ml-auto flex items-center gap-0.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(q.id)}
                    aria-pressed={bookmarked}
                    aria-label={bookmarked ? "Saved — remove bookmark" : "Save this question"}
                    className={bookmarked ? "text-text" : undefined}
                  >
                    {bookmarked ? (
                      <BookmarkCheck aria-hidden="true" />
                    ) : (
                      <Bookmark aria-hidden="true" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="px-2 py-1 text-micro text-subtext0">
                  {bookmarked ? "Saved" : "Save"}
                </TooltipContent>
              </Tooltip>
              {canSpeak && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={readAloud}
                      aria-pressed={speaking}
                      aria-label={speaking ? "Stop reading" : "Read the question and answer aloud"}
                      className={speaking ? "text-text" : undefined}
                    >
                      {speaking ? <Square aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="px-2 py-1 text-micro text-subtext0">
                    {speaking ? "Stop" : "Read aloud"}
                  </TooltipContent>
                </Tooltip>
              )}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setNoteOpen((n) => !n)}
                    aria-expanded={noteOpen}
                    aria-label={note ? "Edit your note" : "Add a note"}
                    className={note ? "text-text" : undefined}
                  >
                    <PencilLine aria-hidden="true" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="px-2 py-1 text-micro text-subtext0">
                  {note ? "Edit note" : "Add note"}
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
        <h2 className="font-display text-h2 font-medium leading-snug text-text">{q.question}</h2>
        <div aria-hidden="true" className="mt-2.5 border-b border-surface0" />
      </header>

      {/* One row, two kinds of thing — free and generated — because that is the
          order you use them in, not because they share an implementation. */}
      <Tabs
        value={tab}
        onValueChange={(v) => {
          lensHover.cancel();
          setTab(v as "answer" | Mode);
        }}
        className="mb-1.5"
      >
        <TabsList className="flex-wrap" onPointerLeave={lensHover.cancel}>
          <TabsTrigger value="answer" onPointerMove={(e) => lensHover.move("answer", e)}>
            Answer
          </TabsTrigger>
          {LENS_TABS.map((t) => (
            <TabsTrigger
              key={t.mode}
              value={t.mode}
              onPointerMove={(e) => lensHover.move(t.mode, e)}
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

      {/* One line, under the row it explains, because the answer to "will that
          press cost me money" is worthless anywhere else on the page. */}
      <p className="mb-4 min-h-[1.1rem] max-w-prose text-micro text-overlay1">
        {!providersKnown ? null : localModel ? (
          <>
            Local model · <span className="font-mono">{localModel}</span> — {freeModes.length} lens
            {freeModes.length === 1 ? "" : "es"} generate free.
          </>
        ) : (
          <>LM Studio is off — every lens bills Claude; the $ tabs say which.</>
        )}
      </p>

      {!revealed ? (
        // The whole answer surface, replaced — not blurred. A blurred answer
        // leaks its length and shape, which is a hint you did not earn.
        <div className="panel flex flex-col items-start gap-3 p-5">
          <p className="text-small text-subtext0">
            Say the answer to yourself first. Then check.
          </p>
          <Button variant="secondary" onClick={() => setRevealed(true)}>
            Reveal answer
            <Kbd>Space</Kbd>
          </Button>
        </div>
      ) : tab === "answer" ? (
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

      {/* The mechanic the name promises: what you just read becomes a card the
          scheduler knows about. Same three-step shape as Study's rating row,
          fewer words. Once rated, the row says so rather than inviting a
          second grade — one reading, one grade — and offers the next question,
          so read → grade → next is a loop you can see, not one you have to
          know j for. In recall mode a grade already moves on, and the row
          says so before you press. */}
      {revealed && (
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-surface0 pt-4">
          {rated ? (
            <>
              <p className="text-small text-overlay1">
                Rated <span className="text-text">{RATINGS.find((r) => r.key === rated.key)?.label}</span>{" "}
                — back in {rated.next}.
              </p>
              {onNext && (
                <Button variant="ghost" size="sm" className="ml-auto" onClick={onNext}>
                  Next question
                  <Kbd>j</Kbd>
                </Button>
              )}
            </>
          ) : (
            <>
              <span className="mr-1 text-small text-overlay1">How did that go?</span>
              {RATINGS.map((r, i) => (
                <Button key={r.key} variant="outline" size="sm" onClick={() => rate(r.key)}>
                  {r.label}
                  <span className="tabular-nums text-micro text-overlay0">
                    {previewInterval(card, r.key)}
                  </span>
                  <Kbd>{String(i + 1)}</Kbd>
                </Button>
              ))}
              {recall && (
                <span className="text-micro text-overlay0">grading moves to the next question</span>
              )}
            </>
          )}
        </div>
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
              you were working through exactly where it was.

              Set one step BELOW the answer, not level with it. At `small` these
              six rows are the same size as the prose above them, so a question
              with a short answer ends up with its suggestions as the tallest
              thing on screen — content weight for something that is a place to
              go next. `micro` is the step the scale already has for that. */}
          <ul className="flex flex-col">
            {related.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => onSelect(r.id)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-0.5 text-left text-micro text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
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
