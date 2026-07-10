import { ACCENT_DOT, ACCENT_TEXT, difficultyColor, topicColor } from "../lib/topics";

export function TopicBadge({ topic }: { topic: string }) {
  const c = topicColor(topic);
  return (
    <span className={`pill ${ACCENT_TEXT[c]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOT[c]}`} />
      {topic}
    </span>
  );
}

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const c = difficultyColor(difficulty);
  return (
    <span className={`pill ${ACCENT_TEXT[c]} uppercase`}>
      {difficulty}
    </span>
  );
}
