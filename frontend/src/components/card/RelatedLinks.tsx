import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { DifficultyBadge, TopicBadge } from "../Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { fetchQuestion } from "../../lib/api";
import { stripMd } from "../../lib/stripMd";
import type { Question } from "../../lib/types";

/**
 * The related-questions disclosure under an expanded card, with a hover
 * preview per link. Owns the preview cache: one fetch per id, shared while it
 * is in flight, kept afterwards.
 */
/**
 * One question, fetched the first time something hovers it and kept afterwards.
 *
 * This used to read from `questionMap()` — the whole 38 MB bank, held in memory
 * by whichever page had last fetched it. Nothing fetches it any more, so the
 * preview needs its own source: one ~1.4 kB request, made only for the link the
 * pointer is actually over, and never repeated for the same id.
 */
const previewCache = new Map<string, Question>();
/**
 * The request on the wire for an id, shared by everyone who asks while it is.
 *
 * `previewCache.has(id)` alone is NOT a guard — the same trap as `useQuestions`
 * before #38. Every caller that starts before the first response lands sees an
 * empty cache and opens its own copy. Measured here without this: one hover
 * fired four identical `GET /questions/{qid}` requests, because React's strict
 * mode double-invokes the effect and the tooltip's open state settles twice.
 */
const previewInflight = new Map<string, Promise<Question>>();

function loadPreview(id: string): Promise<Question> {
  const hit = previewCache.get(id);
  if (hit) return Promise.resolve(hit);
  let p = previewInflight.get(id);
  if (!p) {
    p = fetchQuestion(id)
      .then((full) => {
        previewCache.set(id, full);
        return full;
      })
      .finally(() => previewInflight.delete(id));
    previewInflight.set(id, p);
  }
  return p;
}

function usePreview(id: string, open: boolean): Question | null {
  const [q, setQ] = useState<Question | null>(() => previewCache.get(id) ?? null);
  useEffect(() => {
    if (!open || previewCache.has(id)) return;
    let alive = true;
    loadPreview(id)
      .then((full) => {
        if (alive) setQ(full);
      })
      .catch(() => {
        /* the tooltip falls back to the fields the link already had */
      });
    return () => {
      alive = false;
    };
  }, [id, open]);
  return q ?? previewCache.get(id) ?? null;
}

/**
 * What a related link shows on hover: enough to judge it, not enough to read
 * instead of opening it.
 *
 * The title, topic and difficulty come from the link itself — `GET
 * /questions/{qid}` expands `related` with those four index fields — so the
 * tooltip is never empty while the answer is on its way.
 */
function RelatedPreview({ id, title, topic, difficulty, open }: RelatedEntry & { open: boolean }) {
  const full = usePreview(id, open);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <TopicBadge topic={topic} />
        {difficulty && <DifficultyBadge difficulty={difficulty as Question["difficulty"]} />}
      </div>
      <p className="font-display text-small font-medium leading-snug text-text">{title}</p>
      {full ? (
        full.answer ? (
          <p className="line-clamp-4 text-small leading-relaxed text-subtext0">
            {stripMd(full.answer)}
          </p>
        ) : (
          <p className="text-micro text-overlay0">No inline answer — open it to read the source.</p>
        )
      ) : (
        // Two dim lines the height of the text that replaces them, so the
        // tooltip does not jump when the answer lands.
        <div className="flex flex-col gap-1.5" aria-hidden="true">
          <div className="h-3 w-full rounded bg-surface0" />
          <div className="h-3 w-2/3 rounded bg-surface0" />
        </div>
      )}
    </div>
  );
}

interface RelatedEntry {
  id: string;
  title: string;
  topic: string;
  difficulty?: string;
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
export function RelatedLinks({
  related,
  onJump,
}: {
  related?: Question["related"];
  onJump: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  /**
   * Read straight off the link. `GET /questions/{qid}` adds the four index
   * fields to every `related` entry precisely so this list can render without
   * the bank behind it — and this component used to ignore that and look the id
   * up in `questionMap()` instead. Once nothing fetched the whole bank the map
   * was always empty, `items` was always empty, and the Related section stopped
   * appearing on every card in the app with no error anywhere.
   */
  const items: RelatedEntry[] = (related ?? [])
    .filter((r) => r.question)
    .map((r) => ({ id: r.id, title: r.question!, topic: r.topic ?? "", difficulty: r.difficulty }));
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
        <ul className="mt-1.5 flex flex-col">
          {items.map((item) => (
            <li key={item.id}>
              <RelatedLink item={item} onJump={onJump} />
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </details>
  );
}

/**
 * Its own component because the preview fetch has to be keyed on THIS link's
 * open state — a hook cannot live inside the `items.map` callback, and hoisting
 * one `open` for the whole list would fetch all six on the first hover.
 */
function RelatedLink({ item, onJump }: { item: RelatedEntry; onJump: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger asChild>
        <Link
          to={`/library?q=${encodeURIComponent(item.title)}`}
          onClick={(e) => {
            if (!document.getElementById(`q-${item.id}`)) return; // let the link navigate
            e.preventDefault();
            onJump(item.id);
          }}
          // Quieter than a prose link on purpose: six of these per card in
          // full accent read as an alarm, not as a list you may follow.
          // And one step below the answer's size for the same reason the
          // detail pane is — see the note there.
          className="flex items-center gap-2 rounded-md px-2 py-0.5 text-micro text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
        >
          <span className="truncate">{item.title}</span>
          <span className="shrink-0 text-micro text-overlay0">{item.topic}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" align="start">
        <RelatedPreview {...item} open={open} />
      </TooltipContent>
    </Tooltip>
  );
}
