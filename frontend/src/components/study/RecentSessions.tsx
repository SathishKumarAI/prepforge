import { Band } from "../page/PageLayout";
import { useProgress } from "../../hooks/useProgress";

/** The review zone: what has been recorded, not what is possible. */
export function RecentSessions() {
  const { progress } = useProgress();
  const sessions = [...progress.quizzes].reverse().slice(0, 6);
  return (
    <Band label="Recent quizzes" hint={`${progress.quizzes.length} recorded`}>
      {sessions.length === 0 ? (
        <p className="text-small text-overlay1">
          Scored sessions show up here. Recall and drill are not scored — they move due dates
          instead.
        </p>
      ) : (
        <ul className="flex flex-col">
          {sessions.map((q, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-4 border-b border-surface0 py-2 last:border-0"
            >
              <span className="truncate text-small text-subtext0">{q.topic}</span>
              <span className="shrink-0 text-small tabular-nums text-overlay1">
                {q.correct}/{q.total}
              </span>
              <span className="shrink-0 text-micro tabular-nums text-overlay0">
                {q.date.slice(0, 10)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Band>
  );
}
