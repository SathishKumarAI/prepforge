import { useEffect, useRef } from "react";
import { EyeOff, PanelLeftClose, PanelLeftOpen, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Chip } from "../ui/chip";
import { ACCENT_DOT, topicColor } from "../../lib/topics";

const DIFFS = ["easy", "medium", "hard"];

/**
 * The band above the question list: search, topic and difficulty chips,
 * Clear filters, the Recall switch and the Hide/Show list toggle.
 *
 * Owns: the controls and the "/" key that focuses the search box. Does NOT own
 * any of the state it shows — every value comes in and every change goes out,
 * so the band cannot disagree with the list under it.
 *
 * It scrolls with the page. It used to be sticky and slide away on a downward
 * scroll, and the answer ran under a glass band that came and went with every
 * change of direction; the list beside it is the thing that stays, and "/"
 * brings the search box back into view from anywhere.
 *
 * In focus mode they go entirely. Focus mode's whole promise is that the
 * screen holds the thing you are reading and nothing else — it already takes
 * the app bar and the nav, and leaving a search box and eleven topic chips
 * pinned above the answer breaks that promise on the one page where most
 * reading happens. `focus-mode` is set on an ancestor by Layout, so this reads
 * it rather than being told.
 */
export function FilterBand({
  query,
  onQuery,
  topic,
  onTopic,
  topics,
  diff,
  onDiff,
  recall,
  onRecall,
  listAway,
  onShowList,
  onHideList,
}: {
  query: string;
  onQuery: (q: string) => void;
  topic: string | null;
  onTopic: (t: string | null) => void;
  /** Every topic the current match contains, from the server. */
  topics: string[];
  diff: string | null;
  onDiff: (d: string | null) => void;
  recall: boolean;
  onRecall: (on: boolean) => void;
  /** Whether the list pane is hidden (the Hide list button; nothing else hides it). */
  listAway: boolean;
  onShowList: () => void;
  onHideList: () => void;
}) {
  const searchRef = useRef<HTMLInputElement>(null);

  // press "/" anywhere (outside a text field) to jump to search
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = document.activeElement;
      const typing =
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (typing) return;
      e.preventDefault();
      searchRef.current?.focus();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeFilters = Boolean(topic || diff || query.trim());

  return (
    // Two rows, deliberately: search and topics, then difficulty and the two
    // switches. The search box used to sit on a line of its own above one row
    // of every chip, and with the tabs and header above that the list started
    // 440px down a 788px viewport. One row of everything wrapped mid-group at
    // 1440px (Easy on one line, Medium and Hard on the next).
    <div className="mb-4 flex flex-col gap-1.5 [.focus-mode_&]:hidden">
      <div className="flex flex-wrap items-center gap-1.5">
        <div className="relative w-full lg:mr-2 lg:w-64">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-overlay0"
          />
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            aria-label="Search questions"
            placeholder="Search questions, answers, tags"
            className="input h-10 pl-9 pr-16"
          />
          {query ? (
            <button
              onClick={() => onQuery("")}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-overlay0 hover:text-text"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-surface1 bg-crust px-1.5 py-0.5 font-mono text-micro text-overlay0">
              /
            </kbd>
          )}
        </div>

        <Chip active={!topic} onClick={() => onTopic(null)} label="All topics" />
        {topics.map((t) => (
          <Chip
            key={t}
            active={topic === t}
            onClick={() => onTopic(topic === t ? null : t)}
            className="capitalize"
            label={
              <>
                <span className={`size-1.5 shrink-0 rounded-full ${ACCENT_DOT[topicColor(t)]}`} />
                {t}
              </>
            }
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {DIFFS.map((d) => (
          <Chip
            key={d}
            active={diff === d}
            onClick={() => onDiff(diff === d ? null : d)}
            label={d}
            className="capitalize"
          />
        ))}
        {activeFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onQuery("");
              onTopic(null);
              onDiff(null);
            }}
          >
            Clear filters
          </Button>
        )}
        {/* The study switch for this list. Pressed state is a fill, not a
            hue: a second accent on the filter row would make the one accent
            mean less. */}
        <Button
          variant={recall ? "secondary" : "ghost"}
          size="sm"
          className="ml-auto"
          onClick={() => onRecall(!recall)}
          aria-pressed={recall}
          title="Recall mode — each answer stays hidden until you press Space, then you rate yourself"
        >
          <EyeOff aria-hidden="true" />
          Recall
        </Button>
        {/* lg-only: below it the panes never share the screen, so `detailOnly`
            already owns this and a second control would contradict it. */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden lg:inline-flex"
          onClick={listAway ? onShowList : onHideList}
          aria-pressed={listAway}
          title={
            listAway
              ? "Show the question list"
              : "Hide the question list — hover the left edge to peek at it"
          }
        >
          {listAway ? <PanelLeftOpen aria-hidden="true" /> : <PanelLeftClose aria-hidden="true" />}
          {listAway ? "Show list" : "Hide list"}
        </Button>
      </div>
    </div>
  );
}
