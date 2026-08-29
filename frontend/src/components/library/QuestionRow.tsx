import { Bookmark, FileText, Library } from "lucide-react";
import { ACCENT_DOT, topicColor } from "../../lib/topics";
import type { QuestionRowLite } from "../../lib/types";

/**
 * One line in the question list. Owns being scannable and nothing else — no
 * answer, no expansion, no actions: the detail pane holds all of that.
 *
 * Deliberately one line of question text. A row that wraps to three makes the
 * list a second reading surface competing with the one on the right, and the
 * whole point of the layout is that there is exactly one place to read.
 */
export function QuestionRow({
  q,
  selected,
  onSelect,
  onPeek,
}: {
  /** An index row, never a whole question — the answer is not in this list. */
  q: QuestionRowLite;
  selected: boolean;
  onSelect: () => void;
  /** Hover with intent. `null` cancels a pending peek. */
  onPeek: (on: boolean) => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        onMouseEnter={() => onPeek(true)}
        onMouseLeave={() => onPeek(false)}
        aria-current={selected ? "true" : undefined}
        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-100 ${
          selected ? "bg-surface0 text-text" : "text-subtext0 hover:bg-surface0/60 hover:text-text"
        }`}
      >
        <span
          aria-hidden="true"
          // ACCENT_DOT is keyed by COLOUR, not by topic — `topicColor` is the
          // translation, and skipping it silently greys out every row.
          className={`size-1.5 shrink-0 rounded-full ${ACCENT_DOT[topicColor(q.topic)]}`}
        />
        <span className="min-w-0 flex-1 truncate text-small leading-snug">{q.question}</span>
        {q.origin && <OriginIcon kind={q.origin.kind} />}

        <span
          className={`shrink-0 text-micro tabular-nums ${
            selected ? "text-subtext0" : "text-overlay0"
          }`}
        >
          {q.difficulty.slice(0, 1).toUpperCase()}
        </span>
      </button>
    </li>
  );
}

function OriginIcon({ kind }: { kind: string }) {
  const Icon = kind === "library" ? Library : kind === "vault" ? FileText : Bookmark;
  return <Icon aria-hidden="true" className="size-3 shrink-0 text-overlay0" />;
}
