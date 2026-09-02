import { ACCENT_DOT, topicColor } from "../../lib/topics";
import type { QuestionRowLite } from "../../lib/types";

/**
 * One line in the question list. Owns being scannable and nothing else — no
 * answer, no expansion, no actions: the detail pane holds all of that.
 *
 * Deliberately one line of question text. A row that wraps to three makes the
 * list a second reading surface competing with the one on the right, and the
 * whole point of the layout is that there is exactly one place to read.
 *
 * Two marks were removed for the same reason, and both were per-row copies of
 * something that is not a per-row decision:
 *
 * - The difficulty letter. Difficulty is a FILTER — there are Easy / Medium /
 *   Hard chips above this list — and nobody chooses between two questions
 *   because one of them is an "M". Sixty single letters down the right edge is
 *   a column of noise beside the column you are actually reading.
 * - The origin icon. Provenance matters when you are reading a card, and the
 *   detail header prints it in words ("PrepForge bank", "ai-system-design-
 *   guide"). Sixty mostly-identical glyphs here said nothing that one line
 *   over there says better.
 *
 * What is left is the topic dot and the question. Both earn their place: the
 * dot is the only thing that groups a scan of sixty rows, and the question is
 * the thing you are choosing between.
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
      </button>
    </li>
  );
}

