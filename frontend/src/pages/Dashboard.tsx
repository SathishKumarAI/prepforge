import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Page, Band } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Loader } from "../components/States";
import { Button } from "../components/ui/button";
import { useProgress } from "../hooks/useProgress";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { useThemeColors } from "../hooks/useThemeColors";
import { dayKey, today } from "../lib/srs";

/**
 * Slot table
 *   route    /dashboard   (nav label: Progress)
 *   job      show where recall is weak, then send you to fix it
 *   orient   streak, cards known, average quiz score
 *   act      study the weakest topic — the whole point of looking at this page
 *   review   per-topic recall (the signature visual) and the quiz trend
 *   accent   the primary button and the single weakest topic's bar
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
  const theme = useThemeColors();

  const stats = useMemo(() => {
    const known = Object.values(progress.flash).filter((s) => s === "known").length;
    const seen = Object.values(progress.srs).filter((c) => c.seen).length;
    // One pass, not two filters per topic: at 18,000 questions the old shape ran
    // ~80 full scans of the bank to fill 40 rows.
    const byTopic = new Map<string, { total: number; done: number }>();
    for (const q of questions) {
      if (!q.topic) continue;
      const row = byTopic.get(q.topic) ?? { total: 0, done: 0 };
      row.total++;
      if (progress.flash[q.id] === "known" || progress.srs[q.id]?.stage === "mastered") row.done++;
      byTopic.set(q.topic, row);
    }
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
    return { known, seen, mastery, quizSeries, avgQuiz, streak: computeStreak(progress.studyDays) };
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

          <Band label="Quiz scores" hint={`${progress.quizzes.length} scored sessions`}>
            <QuizTrend series={stats.quizSeries} theme={theme} />
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

/** Renders its own axes at zero data — a chart that vanishes until it has
 *  numbers is invisible to exactly the people who have not started. */
function QuizTrend({
  series,
  theme,
}: {
  series: { name: string; score: number }[];
  theme: Record<string, string>;
}) {
  const empty = series.length === 0;
  const data = empty ? [{ name: "", score: 0 }] : series;
  return (
    <div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="quizfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={theme.mauve} stopOpacity={0.28} />
              <stop offset="100%" stopColor={theme.mauve} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.surface0} vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: theme.overlay0, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 100]}
            unit="%"
            tick={{ fill: theme.overlay0, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          {!empty && (
            <Tooltip
              formatter={(v: number) => [`${v}%`, "Score"]}
              contentStyle={{
                background: theme.mantle,
                border: `1px solid ${theme.surface1}`,
                borderRadius: 8,
                color: theme.text,
                fontSize: 12,
              }}
            />
          )}
          {!empty && (
            <Area
              type="monotone"
              dataKey="score"
              stroke={theme.mauve}
              strokeWidth={2}
              fill="url(#quizfill)"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
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
