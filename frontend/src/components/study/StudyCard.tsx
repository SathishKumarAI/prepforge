import { Markdown } from "../Markdown";
import { DifficultyBadge, TopicBadge } from "../Badge";
import { Button } from "../ui/button";
import { Kbd } from "../Kbd";
import { MODES, type StudyMode } from "../../lib/studyModes";
import { previewInterval, type SrsCard, type Rating } from "../../lib/srs";
import type { Question } from "../../lib/types";

/**
 * The card you are actually working on, for every study mode.
 *
 * All three modes share one shell — same measure, same position on screen, same
 * place for the controls — so switching mode does not relearn the page. What
 * differs comes from the mode registry, never from a conditional written here
 * about a mode literal.
 *
 * Owns: the question surface and its controls.
 * Does NOT own: the queue, scheduling, or what a grade means.
 */
export function StudyCard({
  mode,
  question,
  card,
  revealed,
  picked,
  onReveal,
  onRate,
  onPick,
  onNext,
  isLast,
}: {
  mode: StudyMode;
  question: Question;
  card: SrsCard;
  revealed: boolean;
  /** Quiz only: the chosen choice index, or -1 for a timeout. */
  picked: number | null;
  onReveal: () => void;
  onRate: (r: Rating) => void;
  onPick: (i: number) => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const spec = MODES[mode];
  const answered = picked !== null;

  return (
    // Reading tier: capped measure at every width. A question set across a
    // 1050px column is a question you scan rather than read, and this is the
    // one thing on the page you are meant to think about.
    <article className="panel max-w-[46rem] p-5 sm:p-7">
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
        <TopicBadge topic={question.topic} />
        <DifficultyBadge difficulty={question.difficulty} />
        <span className="ml-auto text-micro text-overlay1">{spec.heading}</span>
      </div>

      {/* Fraunces lives here and nowhere else in the chrome: the question is the
          content, everything around it is furniture. */}
      <h2 className="font-display text-h2 font-medium leading-snug text-text">
        {mode === "quiz" ? (question.quiz?.prompt ?? question.question) : question.question}
      </h2>

      {mode === "quiz" ? (
        <QuizChoices question={question} picked={picked} onPick={onPick} />
      ) : revealed ? (
        <>
          <div className="prose-answer mt-5 border-t border-surface0 pt-5">
            <Markdown>{question.answer}</Markdown>
          </div>
          <RatingRow spec={spec} card={card} onRate={onRate} />
        </>
      ) : (
        <div className="mt-6 border-t border-surface0 pt-5">
          <p className="mb-3 text-small text-overlay1">
            Answer it out loud before you look. Retrieving it is what moves it.
          </p>
          <Button variant="primary" onClick={onReveal}>
            Reveal answer
            <Kbd>Space</Kbd>
          </Button>
        </div>
      )}

      {mode === "quiz" && answered && (
        <div className="mt-5 border-t border-surface0 pt-5">
          <Button variant="primary" onClick={onNext}>
            {isLast ? "See results" : "Next question"}
            <Kbd>Enter</Kbd>
          </Button>
        </div>
      )}
    </article>
  );
}

function RatingRow({
  spec,
  card,
  onRate,
}: {
  spec: (typeof MODES)[StudyMode];
  card: SrsCard;
  onRate: (r: Rating) => void;
}) {
  return (
    <div className="mt-6 border-t border-surface0 pt-5">
      <p className="mb-2.5 text-small text-overlay1">How well did that come back?</p>
      <div className="flex flex-wrap gap-2">
        {spec.ratings.map((r, i) => (
          <Button
            key={r.key}
            variant="outline"
            onClick={() => onRate(r.key)}
            className="flex-1 justify-center"
          >
            {r.label}
            {/* Only the scheduling mode can honestly promise a next interval. */}
            {spec.grades === "srs" && (
              <span className="tabular-nums text-micro text-overlay0">
                {previewInterval(card, r.key)}
              </span>
            )}
            <Kbd>{String(i + 1)}</Kbd>
          </Button>
        ))}
      </div>
    </div>
  );
}

function QuizChoices({
  question,
  picked,
  onPick,
}: {
  question: Question;
  picked: number | null;
  onPick: (i: number) => void;
}) {
  const quiz = question.quiz;
  if (!quiz) return null;
  const answered = picked !== null;

  return (
    <div className="mt-5 flex flex-col gap-2">
      {quiz.choices.map((choice, i) => {
        const correct = i === quiz.correctIndex;
        const chosen = i === picked;
        // Result state is a status colour on a border, not a filled block:
        // a wrong answer should be legible, not alarming.
        let tone = "border-surface0 hover:border-surface2 hover:bg-surface0/50 text-subtext1";
        if (answered && correct) tone = "border-green bg-green/5 text-text";
        else if (answered && chosen) tone = "border-red bg-red/5 text-text";
        else if (answered) tone = "border-surface0 text-overlay1";

        return (
          <button
            key={i}
            onClick={() => onPick(i)}
            disabled={answered}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-small transition-colors duration-100 disabled:cursor-default disabled:opacity-100 ${tone}`}
          >
            <span className="grid size-6 shrink-0 place-items-center rounded border border-surface1 font-mono text-micro text-overlay1">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="flex-1">{choice}</span>
            {answered && correct && <span className="text-micro text-green">correct</span>}
            {answered && chosen && !correct && <span className="text-micro text-red">yours</span>}
          </button>
        );
      })}
      {picked === -1 && (
        <p className="text-small text-overlay1">Time ran out — counted as a miss.</p>
      )}
    </div>
  );
}
