import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Page, Band } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Loader } from "../components/States";
import { Button } from "../components/ui/button";
import { useNotes } from "../hooks/useNotes";
import { useProgress } from "../hooks/useProgress";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { suggestActions } from "../lib/nextAction";
import { dayKey, isDue } from "../lib/srs";

/**
 * Slot table
 *   route    /            (the app opens here)
 *   job      answer "what should I do right now" and start it in one click
 *   orient   due now, never seen, day streak
 *   act      the single top-ranked action, as the page's only primary button
 *   review   the runners-up, and the last fortnight of study days
 *   accent   the primary button and today's cell in the strip
 *
 * This page earns its place only because it sees signals Study cannot — a
 * bookmark pile nobody revisits, a streak about to lapse. If it were just a
 * due-count it would be a second door into Study's setup screen, and it should
 * be deleted rather than kept.
 */
export function Today() {
  // Ids, not answers. This page counts questions and ranks an action; it never
  // renders one. Reading the 17 MB bank to print four numbers is what kept the
  // app's first screen on skeletons for seconds.
  const { rows: questions, loading } = useQuestionIndex(true);
  const { progress } = useProgress();
  const { notes } = useNotes();

  const { suggestions, due, unseen } = useMemo(() => {
    const suggestions = suggestActions(questions, progress);
    return {
      suggestions,
      due: questions.filter((q) => {
        const c = progress.srs[q.id];
        return c && c.seen && isDue(c);
      }).length,
      unseen: questions.filter((q) => !progress.srs[q.id]?.seen).length,
    };
  }, [questions, progress]);

  if (loading) return <Loader label="Working out what is due" />;

  const [primary, ...rest] = suggestions;

  return (
    <Page
      title="Today"
      // The review zone goes beside the act zone once the CONTAINER is wide
      // enough. Stacked, "also worth doing" and the study strip sat below the
      // fold on a 1440px screen with empty space to their right.
      aside
      orient={
        <Orient>
          <Fact label="due now" value={due || null} emphasis={due > 0} />
          <Fact label="never seen" value={unseen || null} />
          <Fact label="days studied" value={progress.studyDays.length || null} />
          <Fact label="notes" value={notes.length || null} />
        </Orient>
      }
      review={
        <>
          {rest.length > 0 && (
            <Band label="Also worth doing">
              <ul className="flex flex-col">
                {rest.map((s) => (
                  <li
                    key={s.id}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-surface0 py-2.5 last:border-0"
                  >
                    <Link
                      to={s.to}
                      className="text-small text-subtext0 underline-offset-2 hover:text-text hover:underline"
                    >
                      {s.cta}
                    </Link>
                    <span className="text-micro text-overlay1">{s.detail}</span>
                  </li>
                ))}
              </ul>
            </Band>
          )}

          <Band label="Study days" hint="the last fortnight">
            <StudyStrip days={progress.studyDays} />
          </Band>
        </>
      }
    >
      <div className="max-w-prose">
        <p className="mb-4 text-h3 text-subtext1">{primary.detail}</p>
        <Button asChild variant="primary" size="lg">
          <Link to={primary.to}>{primary.cta}</Link>
        </Button>
      </div>
    </Page>
  );
}

/**
 * Fourteen days, as a table rather than a row of coloured squares: colour alone
 * never conveys data, so every cell carries its date and whether it was studied
 * as text. Cells are not individual tab stops — fourteen of them between the
 * heading and the next control would be a focus trap by another name, and
 * screen readers reach them through table navigation instead.
 */
function StudyStrip({ days }: { days: string[] }) {
  const set = new Set(days);
  const today = new Date();
  const cells = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (13 - i));
    const key = dayKey(d);
    return { key, studied: set.has(key), isToday: i === 13 };
  });

  // Fourteen fixed cells are wider than a phone, so the strip scrolls inside
  // its own container rather than pushing the page sideways.
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse">
        <caption className="sr-only">Days studied over the last fortnight</caption>
        <thead className="sr-only">
          <tr>
            {cells.map((c) => (
              <th key={c.key} scope="col">
                {c.key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {cells.map((c) => (
              <td key={c.key} className="p-0 pr-1">
                <span
                  className={`block size-5 rounded-sm border ${
                    c.isToday ? "border-mauve" : "border-transparent"
                  } ${c.studied ? "bg-subtext0" : "bg-surface0"}`}
                >
                  <span className="sr-only">
                    {c.key}: {c.studied ? "studied" : "not studied"}
                  </span>
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
