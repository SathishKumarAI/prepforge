import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Page, Band } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Loader } from "../components/States";
import { Button } from "../components/ui/button";
import { useNotes } from "../hooks/useNotes";
import { useProgress } from "../hooks/useProgress";
import { useUserCards } from "../hooks/useUserCards";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { suggestActions } from "../lib/nextAction";
import { dayKey, dueForecast, FORECAST_DAYS, isDue, type ForecastDay } from "../lib/srs";

/**
 * Slot table
 *   route    /            (the app opens here)
 *   job      answer "what should I do right now" and start it in one click
 *   orient   due now, never seen, day streak
 *   act      the single top-ranked action, as the page's only primary button
 *   review   the runners-up, the last fortnight of study days, and the next
 *            fortnight of cards falling due — the past and the future of the
 *            same habit, read the same way
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
  const { cards: ownCards } = useUserCards();

  const { suggestions, due, unseen, forecast } = useMemo(() => {
    const suggestions = suggestActions(questions, progress, ownCards);
    // One pass for all three, and the due dates the forecast needs come out of
    // it — a card the bank no longer carries must not be counted, which is the
    // reason this walks `questions` rather than `progress.srs`.
    let due = 0;
    let unseen = 0;
    const dueDates: string[] = [];
    for (const q of questions) {
      const card = progress.srs[q.id];
      if (!card?.seen) {
        unseen++;
        continue;
      }
      dueDates.push(card.due);
      if (isDue(card)) due++;
    }
    // Cards you wrote are scheduled by the same SM-2 state, so they belong in
    // the forecast and the due count exactly as the bank's do.
    for (const c of ownCards) {
      const card = progress.srs[c.id];
      if (!card?.seen) {
        unseen++;
        continue;
      }
      dueDates.push(card.due);
      if (isDue(card)) due++;
    }
    return { suggestions, due, unseen, forecast: dueForecast(dueDates) };
  }, [questions, progress, ownCards]);

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

          <Band label="Coming up" hint="cards falling due, the next fortnight">
            <Forecast days={forecast} />
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

const BAR_MAX_PX = 44;

/** "Tue 9" — the weekday is what makes a spike plannable; the year is noise. */
function shortDay(key: string): string {
  const d = new Date(key + "T00:00:00");
  return `${d.toLocaleDateString(undefined, { weekday: "short" })} ${d.getDate()}`;
}

/**
 * The fortnight ahead, so a pile-up is visible a week before it lands rather
 * than on the morning it does. SM-2 sets due dates one rating at a time, and a
 * session of "easy" ratings quietly stacks forty cards onto one future day.
 *
 * Same shape as `StudyStrip` above and for the same reasons: a table, every
 * cell carrying its date and count as text, cells not individually focusable.
 * The bars are HTML boxes, not an SVG — fourteen heights need no geometry, and
 * the chart this page already avoided is still avoided.
 */
function Forecast({ days }: { days: ForecastDay[] }) {
  const peak = days.reduce((m, d) => Math.max(m, d.count), 0);
  const total = days.reduce((sum, d) => sum + d.count, 0);

  if (total === 0) {
    return (
      <p className="text-small text-overlay1">
        Nothing is scheduled in the next {FORECAST_DAYS} days. Cards appear here as you rate them —
        that is what spaced repetition is planning.
      </p>
    );
  }

  const heaviest = days.reduce((a, b) => (b.count > a.count ? b : a));

  return (
    <div>
      <div>
        <table className="w-full table-fixed border-collapse">
          <caption className="sr-only">Cards falling due on each of the next {FORECAST_DAYS} days</caption>
          <thead className="sr-only">
            <tr>
              {days.map((d) => (
                <th key={d.key} scope="col">
                  {d.key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {days.map((d) => (
                <td key={d.key} className="p-0 pr-1 align-bottom">
                  {/* A day with nothing due still gets a hairline, so the strip
                      reads as fourteen days rather than as five bars. */}
                  <span
                    className={`block rounded-sm ${d.today ? "bg-mauve" : "bg-subtext0"}`}
                    style={{
                      height: d.count
                        ? Math.max(3, Math.round((d.count / peak) * BAR_MAX_PX))
                        : 1,
                    }}
                  >
                    <span className="sr-only">
                      {d.key}: {d.count} card{d.count === 1 ? "" : "s"}
                      {d.today ? " due now, including anything overdue" : " due"}
                    </span>
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-micro text-overlay1">
        <span className="tabular-nums text-subtext0">{days[0].count.toLocaleString()}</span> now
        {" · heaviest "}
        {shortDay(heaviest.key)} at{" "}
        <span className="tabular-nums text-subtext0">{heaviest.count.toLocaleString()}</span>
        {" · "}
        <span className="tabular-nums">{total.toLocaleString()}</span> in the fortnight
      </p>
    </div>
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

  // Fourteen cells share the column (`table-fixed`), so the strip is as wide as
  // wherever it is put -- a 19rem aside or a phone -- instead of 336px with a
  // scrollbar under it.
  return (
    <div>
      <table className="w-full table-fixed border-collapse">
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
                  className={`block h-5 rounded-sm border ${
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
