/**
 * The session spine — this app's signature visual, and the only thing in a
 * study session allowed to carry the accent.
 *
 * One segment per card in the session, in order. The current card is a taller
 * accent segment; cards already answered are filled by how well they went;
 * cards still ahead are hairlines. It encodes sequence AND outcome in one 12px
 * strip, which is why it replaces the gradient progress bar, the "3 / 12"
 * counter, the running score, and the session-summary screen — each of which
 * showed strictly less.
 *
 * Owns: the strip and its accessible summary.
 * Does NOT own: session state, ratings, or what a rating means (lib/srs).
 */

/** How a finished card went. Ordered worst → best; the fill weight follows. */
export type Outcome = "again" | "hard" | "good" | "easy";

/**
 * Weight, not a rainbow: better recall reads as a stronger mark, so a whole
 * session scans as one texture. `again` is the single exception — a hue,
 * because the cards you failed are the ones you need to find again, and that
 * is data rather than decoration.
 */
const FILL: Record<Outcome, string> = {
  again: "bg-red",
  hard: "bg-overlay1",
  good: "bg-subtext0",
  easy: "bg-text",
};

const LABEL: Record<Outcome, string> = {
  again: "missed",
  hard: "hard",
  good: "good",
  easy: "easy",
};

/**
 * Above this many cards the individual segments fall below a pixel or two and
 * the strip reads as mush, so it degrades to a proportional bar carrying the
 * same information. Chosen from the narrowest real column (~620px) at a 3px
 * minimum segment plus its gap.
 */
const SEGMENT_MAX = 48;

export function Spine({
  total,
  position,
  outcomes,
  className = "",
}: {
  /** Cards in this session. */
  total: number;
  /** Zero-based index of the card on screen. */
  position: number;
  /** Outcome per answered card, in order. Length may trail `position`. */
  outcomes: Outcome[];
  className?: string;
}) {
  if (total <= 0) return null;

  const done = outcomes.length;
  const missed = outcomes.filter((o) => o === "again").length;
  const summary =
    done === 0
      ? `Card ${Math.min(position + 1, total)} of ${total}. None answered yet.`
      : `Card ${Math.min(position + 1, total)} of ${total}. ${done} answered, ${missed} missed.`;

  return (
    <div className={className}>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
        aria-valuetext={summary}
        className="flex h-3 items-end gap-px"
      >
        {total <= SEGMENT_MAX ? (
          Array.from({ length: total }, (_, i) => {
            const outcome = outcomes[i];
            const current = i === position;
            return (
              <span
                key={i}
                aria-hidden="true"
                title={outcome ? LABEL[outcome] : current ? "on this card" : "ahead"}
                className={`flex-1 rounded-sm transition-[height,background-color] duration-150 ${
                  current
                    ? "h-3 bg-mauve"
                    : outcome
                      ? `h-1.5 ${FILL[outcome]}`
                      : "h-1.5 bg-surface0"
                }`}
              />
            );
          })
        ) : (
          <ProportionalSpine total={total} position={position} outcomes={outcomes} />
        )}
      </div>

      <p className="mt-2 text-micro text-overlay1">
        <span className="tabular-nums text-subtext0">
          {Math.min(position + 1, total)}
        </span>
        <span className="text-overlay0"> / </span>
        <span className="tabular-nums">{total}</span>
        {done > 0 && (
          <>
            {" · "}
            <span className="tabular-nums">{done - missed}</span> recalled
            {missed > 0 && (
              <>
                {", "}
                <span className="tabular-nums text-red">{missed}</span> missed
              </>
            )}
          </>
        )}
      </p>
    </div>
  );
}

/** Long sessions: the same encoding, aggregated so it stays legible. */
function ProportionalSpine({
  total,
  position,
  outcomes,
}: {
  total: number;
  position: number;
  outcomes: Outcome[];
}) {
  const counts = outcomes.reduce<Record<Outcome, number>>(
    (acc, o) => ({ ...acc, [o]: acc[o] + 1 }),
    { again: 0, hard: 0, good: 0, easy: 0 },
  );
  const order: Outcome[] = ["easy", "good", "hard", "again"];
  const at = Math.min(100, Math.max(0, (position / total) * 100));
  return (
    <span aria-hidden="true" className="relative flex h-3 flex-1 items-end">
      <span className="flex h-1.5 w-full overflow-hidden rounded-sm bg-surface0">
        {order.map((o) =>
          counts[o] > 0 ? (
            <span key={o} className={FILL[o]} style={{ width: `${(counts[o] / total) * 100}%` }} />
          ) : null,
        )}
      </span>
      <span
        className="absolute bottom-0 h-3 w-0.5 rounded-sm bg-mauve"
        style={{ left: `${at}%` }}
      />
    </span>
  );
}
