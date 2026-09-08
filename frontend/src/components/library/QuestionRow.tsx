import type { PointerEvent } from "react";
import { ACCENT_DOT, topicColor } from "../../lib/topics";
import type { QuestionRowLite } from "../../lib/types";

/**
 * One line in the question list. Owns being scannable and nothing else — no
 * answer, no expansion, no actions: the detail pane holds all of that.
 *
 * Two lines of question text, then a cut. One line cut off at 20rem showed
 * "What is the difference between Artifici…" for most rows — a list you
 * cannot read is not a list you can choose from. Three or more would make the
 * list a second reading surface competing with the one on the right.
 *
 * Two marks were removed for the same reason, and both were per-row copies of
 * something that is not a per-row decision:
 *
 * - The difficulty letter. Difficulty is a FILTER — there are Easy / Medium /
 *   Hard chips above this list — and nobody chooses between two questions
 *   because one of them is an "M". Sixty single letters down the right edge is
 *   a column of noise beside the column you are actually reading.
 * - The origin icon. Provenance matters when you are reading a card, and the
 *   detail header prints it in words ("Recall bank", "ai-system-design-
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
  onMove,
  onLeave,
}: {
  /** An index row, never a whole question — the answer is not in this list. */
  q: QuestionRowLite;
  selected: boolean;
  onSelect: () => void;
  /** A real pointer move over the row — hover intent lives in the view. */
  onMove: (e: PointerEvent<HTMLButtonElement>) => void;
  onLeave: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        aria-current={selected ? "true" : undefined}
        // Hover is a full-strength fill, one step up the surface ladder from
        // the selected row, so the eye finds the row under the pointer at a
        // glance — the 60% wash it had before read as nothing on a light theme.
        className={`flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-100 ${
          selected
            ? "bg-surface0 font-medium text-text"
            : "text-subtext0 hover:bg-surface1 hover:text-text"
        }`}
      >
        <span
          aria-hidden="true"
          // ACCENT_DOT is keyed by COLOUR, not by topic — `topicColor` is the
          // translation, and skipping it silently greys out every row.
          className={`mt-[0.45rem] size-1.5 shrink-0 rounded-full ${ACCENT_DOT[topicColor(q.topic)]}`}
        />
        <span className="line-clamp-2 min-w-0 flex-1 text-small leading-snug">{q.question}</span>
      </button>
    </li>
  );
}

