import { Button } from "../ui/button";
import type { Outcome } from "../page/Spine";

/**
 * What a finished session came to, in one sentence, and the two ways out.
 * Reads the outcomes only — it does not know what a session is.
 */
export function SessionSummary({
  outcomes,
  total,
  onAgain,
  onSetup,
}: {
  outcomes: Outcome[];
  total: number;
  onAgain: () => void;
  onSetup: () => void;
}) {
  const missed = outcomes.filter((o) => o === "again").length;
  return (
    <div className="max-w-prose">
      <h2 className="text-h2 font-medium text-text">
        {total - missed} of {total} came back.
      </h2>
      <p className="mt-2 text-small text-subtext0">
        {missed === 0
          ? "Nothing missed. Those intervals just got longer — the next session will be shorter."
          : `The ${missed} you missed are scheduled to come round again soon. That is the point of missing them here rather than in an interview.`}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button variant="primary" onClick={onAgain}>
          Study again
        </Button>
        <Button variant="ghost" onClick={onSetup}>
          Change the session
        </Button>
      </div>
    </div>
  );
}
