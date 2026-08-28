import { ACCENT_DOT, difficultyColor, topicColor } from "../lib/topics";

/**
 * Topic keeps a 6px dot and nothing else. The label itself is neutral.
 *
 * The dot is a data encoding — it tells a mixed deck apart at a glance — but
 * tinting the label, the border and a 2px left edge as well meant a list of
 * twenty questions rendered in nine hues, and the accent stopped meaning
 * "this is the action".
 */
export function TopicBadge({ topic }: { topic: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-micro text-subtext0">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${ACCENT_DOT[topicColor(topic)]}`} />
      {topic}
    </span>
  );
}

/**
 * Difficulty is an ordered scale, so it reads as weight rather than as three
 * unrelated colours: harder is heavier. No box — it sits inline in a meta row.
 */
const DIFFICULTY_WEIGHT: Record<string, string> = {
  easy: "text-overlay1",
  medium: "text-subtext0",
  hard: "text-subtext1 font-medium",
};

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span className={`text-micro capitalize ${DIFFICULTY_WEIGHT[difficulty] ?? "text-overlay1"}`}>
      {difficulty}
    </span>
  );
}

export { difficultyColor };
