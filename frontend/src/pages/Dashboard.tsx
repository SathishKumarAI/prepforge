import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Page, Band } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Loader } from "../components/States";
import { Button } from "../components/ui/button";
import { useProgress } from "../hooks/useProgress";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { dayKey, isLeech, LEECH_LAPSES, today } from "../lib/srs";

/**
 * Slot table
 *   route    /dashboard   (nav label: Progress)
 *   job      show where recall is weak, then send you to fix it
 *   orient   streak, cards known, average quiz score
 *   act      study the weakest topic — the whole point of looking at this page —
 *            and, when there are any, drill the cards that keep slipping
 *   review   per-topic recall (the signature visual), the cards forgotten three
 *            or more times, and the quiz trend
 *   accent   the primary button and the single weakest topic's bar. The leech
 *            button is deliberately NOT accented: two accents on one screen is
 *            two answers to "what do I do now"
 *   moved    nothing. The six coloured stat tiles and the duplicate
 *            "Progress detail" band were deleted, not relocated: the tiles are
 *            the orient bar now, and the band restated the chart above it
 *
 * The old page had nine raised cards and six stat tiles in six hues, which is
 * one insight and five distractions competing for the same glance.
 */

function computeStreak(days: string[]): number {
  const set = new Set(days);
  let streak = 0;
  const d = new Date();
  const todayKey = today();
  for (;;) {
    const key = dayKey(d);
    if (set.has(key)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (streak === 0 && key === todayKey) {
      d.setDate(d.getDate() - 1); // today not studied yet does not break a streak
    } else break;
  }
  return streak;
}

export function Dashboard() {
  // The index, not the bank. Every number on this page is a count of question
  // IDs grouped by topic, and the id and the topic are two of the four fields
  // the index carries — the answers, sources and related lists that make up the
  // other 35 MB never appear on this screen in any form. 38.6 MB -> 2.9 MB.
  const { rows: questions, loading } = useQuestionIndex(true);
  const { progress } = useProgress();

  const stats = useMemo(() => {
    const known = Object.values(progress.flash).filter((s) => s === "known").length;
    const seen = Object.values(progress.srs).filter((c) => c.seen).length;
    // One pass, not two filters per topic: at 18,000 questions the old shape ran
    // ~80 full scans of the bank to fill 40 rows.
    const byTopic = new Map<string, { total: number; done: number }>();
    // Same pass collects the leeches. Walking 18,284 rows a second time to find
    // the six worst would be the two-filters-per-topic mistake again.
    const leeches: { id: string; question: string; topic: string; lapses: number }[] = [];
    for (const q of questions) {
      const card = progress.srs[q.id];
      if (isLeech(card)) {
        leeches.push({ id: q.id, question: q.question, topic: q.topic, lapses: card!.lapses });
      }
      if (!q.topic) continue;
      const row = byTopic.get(q.topic) ?? { total: 0, done: 0 };
      row.total++;
      if (progress.flash[q.id] === "known" || card?.stage === "mastered") row.done++;
      byTopic.set(q.topic, row);
    }
    // Worst first, and the id breaks ties so the list does not reshuffle between
    // renders for cards that have failed the same number of times.
    leeches.sort((a, b) => b.lapses - a.lapses || a.id.localeCompare(b.id));
    const mastery = [...byTopic.entries()]
      .map(([topic, { total, done }]) => ({
        topic,
        total,
        done,
        pct: total ? Math.round((done / total) * 100) : 0,
      }))
      .sort((a, b) => a.pct - b.pct || a.topic.localeCompare(b.topic)); // weakest first: that is the actionable end
    const quizSeries = progress.quizzes.map((r, i) => ({
      name: `#${i + 1}`,
      score: Math.round((r.correct / r.total) * 100),
    }));
    const avgQuiz = progress.quizzes.length
      ? Math.round(
          (progress.quizzes.reduce((a, r) => a + r.correct / r.total, 0) /
            progress.quizzes.length) *
            100,
        )
      : null;
    return {
      known,
      seen,
      mastery,
      quizSeries,
      avgQuiz,
      leeches,
      streak: computeStreak(progress.studyDays),
    };
  }, [questions, progress]);

  if (loading) return <Loader label="Reading your progress" />;

  const weakest = stats.mastery[0];

  return (
    <Page
      title="Progress"
      orient={
        <Orient>
          <Fact
            // Not pluralised, and the ternary that pretended to was identical on
            // both branches. "day streak" is a compound — "5 day streak" is the
            // correct English, so there is nothing here to vary.
            label="day streak"
            value={stats.streak || null}
            emphasis={stats.streak > 0}
          />
          <Fact label="cards known" value={stats.known || null} />
          <Fact label="seen at least once" value={stats.seen || null} />
          <Fact label="average quiz" value={stats.avgQuiz === null ? null : `${stats.avgQuiz}%`} />
        </Orient>
      }
      review={
        <>
          <Band
            label="Recall by topic"
            hint={
              weakest
                ? `weakest first — ${weakest.topic} is at ${weakest.pct}%`
                : "no topics loaded"
            }
          >
            <MasteryTable rows={stats.mastery} />
          </Band>

          <Band
            label="Keeps slipping"
            hint={
              stats.leeches.length
                ? `forgotten ${LEECH_LAPSES}+ times`
                : `nothing forgotten ${LEECH_LAPSES} times`
            }
          >
            <Leeches rows={stats.leeches} />
          </Band>

          <Band label="Quiz scores" hint={`${progress.quizzes.length} scored sessions`}>
            <QuizTrend series={stats.quizSeries} />
          </Band>
        </>
      }
    >
      {weakest ? (
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="primary">
            <Link to={`/study?mode=recall&topic=${encodeURIComponent(weakest.topic)}`}>
              Study {weakest.topic}
            </Link>
          </Button>
          {/* Secondary, not a second accent: the weakest topic is still the
              bigger lever. This is the "and these six are actively wasting your
              reviews" button beside it. */}
          {stats.leeches.length > 0 && (
            <Button asChild>
              <Link to="/study?mode=drill&pool=leeches">
                Drill the {stats.leeches.length} that keep slipping
              </Link>
            </Button>
          )}
          <span className="max-w-prose text-small text-overlay1">
            Your weakest topic:{" "}
            <span className="tabular-nums text-subtext0">{weakest.done.toLocaleString()}</span> of{" "}
            <span className="tabular-nums text-subtext0">{weakest.total.toLocaleString()}</span>{" "}
            cards are sticking.
          </span>
        </div>
      ) : (
        <p className="text-small text-overlay1">
          Nothing studied yet. A first session is what fills this page.
        </p>
      )}
    </Page>
  );
}

/**
 * The signature visual. A table, not a chart: colour alone never conveys data,
 * every cell carries its real value, and a screen reader gets row and column
 * headers instead of an unlabelled SVG. The bar is a background on the cell,
 * so it reads at a glance without becoming the only way to read it.
 */
function MasteryTable({ rows }: { rows: { topic: string; total: number; done: number; pct: number }[] }) {
  if (rows.length === 0) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-9 rounded border border-dashed border-surface0" />
        ))}
        <p className="mt-1 text-small text-overlay1">
          Topics appear here once the question bank loads.
        </p>
      </div>
    );
  }
  return (
    <table className="w-full border-collapse text-small">
      <caption className="sr-only">Cards recalled reliably, by topic, weakest first</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Topic</th>
          <th scope="col">Recalled</th>
          <th scope="col">Share</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((m, i) => (
          <tr key={m.topic} className="border-b border-surface0 last:border-0">
            <th scope="row" className="w-[38%] py-2 pr-3 text-left font-normal text-subtext0">
              {m.topic}
            </th>
            <td className="py-2 pr-3">
              <div
                className="h-2 rounded-sm bg-surface0"
                // The weakest row is the one the act zone points at, so it is
                // the single place the accent is spent in this table.
                title={`${m.done} of ${m.total}`}
              >
                <div
                  className={`h-full rounded-sm ${i === 0 ? "bg-mauve" : "bg-subtext0"}`}
                  style={{ width: `${Math.max(m.pct, m.done > 0 ? 2 : 0)}%` }}
                />
              </div>
            </td>
            <td className="w-28 py-2 text-right tabular-nums text-overlay1">
              {m.done.toLocaleString()}/{m.total.toLocaleString()}
              <span className="ml-2 text-subtext0">{m.pct}%</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** How many of the worst are worth naming. Past this it stops being a list of
 *  problems and becomes a second deck, which is what a leech list is meant to
 *  prevent. The count in the act zone is the whole number. */
const LEECHES_SHOWN = 6;

/**
 * The cards SM-2 cannot fix. A failure shortens the interval, so a card you
 * never hold comes back sooner and fails again — it quietly takes over a
 * session. This is the only screen that reads `lapses`.
 *
 * Each row links into the Library rather than starting a session, because the
 * useful action on a leech is usually to READ it again, or decide the card is
 * badly written, not to be tested on it a seventh time.
 */
function Leeches({
  rows,
}: {
  rows: { id: string; question: string; topic: string; lapses: number }[];
}) {
  // Collapsed by default so the band stays a summary, but "and 14 more" with no
  // way to reach the 14 is a dead end — the whole point of the list is that you
  // can act on what is in it.
  const [all, setAll] = useState(false);

  if (rows.length === 0) {
    return (
      <p className="text-small text-overlay1">
        Nothing has been forgotten {LEECH_LAPSES} times. Cards that keep coming back wrong show up
        here, where they can be rewritten or split instead of re-read.
      </p>
    );
  }
  return (
    <>
      <ul className="flex flex-col">
        {(all ? rows : rows.slice(0, LEECHES_SHOWN)).map((r) => (
          <li key={r.id} className="border-b border-surface0 last:border-0">
            <Link
              to={`/library?id=${encodeURIComponent(r.id)}`}
              className="flex items-baseline justify-between gap-4 py-2 hover:text-text"
            >
              <span className="truncate text-small text-subtext0">{r.question}</span>
              <span className="shrink-0 text-micro tabular-nums text-overlay1">
                forgotten {r.lapses}×
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {rows.length > LEECHES_SHOWN && (
        <button
          type="button"
          onClick={() => setAll((v) => !v)}
          aria-expanded={all}
          className="mt-2 text-micro text-overlay1 underline-offset-2 hover:text-subtext0 hover:underline"
        >
          {all ? "Show fewer" : `Show all ${rows.length}`}
        </button>
      )}
    </>
  );
}

// Chart geometry. `preserveAspectRatio="none"` is what makes the SVG stretch to
// its container without measuring anything in JavaScript, so these units are
// arbitrary — only their ratios reach the screen. It is also why NO text lives
// inside the SVG: a non-uniform scale stretches glyphs, so the axis labels are
// HTML positioned around it and stay the size the rest of the page is.
const CH_W = 600;
const CH_H = 100;
const GRID = [100, 75, 50, 25, 0];

/**
 * Renders its own axes at zero data — a chart that vanishes until it has
 * numbers is invisible to exactly the people who have not started.
 *
 * Hand-drawn SVG rather than a charting library. This is one area chart with a
 * fixed 0-100 domain and no interaction beyond a hover readout, and recharts
 * was 397.88 kB of the 415 kB Progress chunk to draw it — 96% of the route's
 * JavaScript for its only chart. It also forced `useThemeColors`, which exists
 * solely because recharts needs concrete colour strings where CSS variables
 * would do; the marks below are Tailwind classes, so the theme switch reaches
 * them the same way it reaches every other element on the page.
 */
function QuizTrend({ series }: { series: { name: string; score: number }[] }) {
  const empty = series.length === 0;
  // A single session sits mid-canvas rather than pinned to the left edge, which
  // is where `i / (n - 1)` puts it and where it reads as a truncated chart.
  const x = (i: number) => (series.length < 2 ? CH_W / 2 : (i / (series.length - 1)) * CH_W);
  const y = (score: number) => (1 - score / 100) * CH_H;

  const points = series.map((p, i) => ({ ...p, x: x(i), y: y(p.score) }));
  const line = points.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join("");
  const area = points.length
    ? `${line}L${points[points.length - 1].x.toFixed(1)},${CH_H}L${points[0].x.toFixed(1)},${CH_H}Z`
    : "";

  return (
    <div>
      <div className="flex gap-2">
        {/* The y axis, in HTML. Same type scale as the rest of the page. */}
        <div className="flex h-[180px] w-9 shrink-0 flex-col justify-between py-px text-right text-micro tabular-nums text-overlay0">
          {GRID.map((g) => (
            <span key={g}>{g}%</span>
          ))}
        </div>
        <svg
          viewBox={`0 0 ${CH_W} ${CH_H}`}
          preserveAspectRatio="none"
          // The accent lives on the root, not on the <g> below. A gradient stop's
          // `currentColor` resolves against the GRADIENT element, not against
          // whatever references it — so with the class on the <g> the line came
          // out mauve and its fill came out the default text colour.
          className="h-[180px] min-w-0 flex-1 text-mauve"
          role="img"
          aria-label={
            empty
              ? "Quiz score trend, no sessions yet"
              : `Quiz score trend over ${series.length} sessions, from ${series[0].score}% to ${series[series.length - 1].score}%`
          }
        >
          <defs>
            {/* currentColor, so the fill follows the text colour of the <g>
                below it and needs no JavaScript to know which theme is on. */}
            <linearGradient id="quizfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity={0.28} />
              <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>

          {GRID.map((g) => (
            <line
              key={g}
              x1={0}
              x2={CH_W}
              y1={y(g)}
              y2={y(g)}
              className="stroke-surface0"
              strokeDasharray="3 3"
              // Without this the dashes and the stroke stretch with the canvas,
              // which is the tell that a chart was scaled rather than drawn.
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {!empty && (
            <g>
              <path d={area} fill="url(#quizfill)" />
              <path
                d={line}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {points.map((p, i) => (
                // The mark carries the readout. A <title> is the browser's own
                // tooltip: no library, no state, no positioning maths, and a
                // screen reader reads it as the element's name. A vertical rule
                // rather than a dot because a circle in a stretched viewBox is
                // an ellipse, and how wide it is would depend on the window.
                <line
                  key={i}
                  x1={p.x}
                  x2={p.x}
                  y1={p.y - 4}
                  y2={p.y + 4}
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                >
                  <title>{`${p.name}: ${p.score}%`}</title>
                </line>
              ))}
            </g>
          )}
        </svg>
      </div>
      {/* The x axis. Only the ends are labelled: session numbers in between are
          a ruler, not information, and past a dozen they collide. */}
      {!empty && (
        <div className="ml-11 flex justify-between text-micro tabular-nums text-overlay0">
          <span>{points[0].name}</span>
          {points.length > 1 && <span>{points[points.length - 1].name}</span>}
        </div>
      )}
      {empty && (
        <p className="text-small text-overlay1">
          No scored sessions yet.{" "}
          <Link to="/study?mode=quiz" className="text-mauve underline underline-offset-2">
            Take a quiz
          </Link>{" "}
          and the trend starts here.
        </p>
      )}
    </div>
  );
}
