import { useMemo } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Loader } from "../components/States";
import { SectionDivider } from "../components/SectionDivider";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { useThemeColors } from "../hooks/useThemeColors";
import { topicColor } from "../lib/topics";

function computeStreak(days: string[]): number {
  const set = new Set(days);
  let streak = 0;
  const d = new Date();
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (set.has(key)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (streak === 0 && key === new Date().toISOString().slice(0, 10)) {
      d.setDate(d.getDate() - 1); // allow today not-yet-studied
    } else break;
  }
  return streak;
}

export function Dashboard() {
  const { questions, topics, loading } = useQuestions();
  const { progress } = useProgress();
  const CAT = useThemeColors();
  // single source of truth: topic → accent token (lib/topics), resolved to the
  // live theme hex. No per-page color map to drift out of sync.
  const topicHex = (t: string): string =>
    (CAT as Record<string, string>)[topicColor(t)] ?? CAT.mauve;
  const tipStyle = {
    background: CAT.mantle,
    border: `1px solid ${CAT.surface1}`,
    borderRadius: 12,
    color: CAT.text,
    fontSize: 12,
    fontFamily: "JetBrains Mono, monospace",
  };

  const stats = useMemo(() => {
    const known = Object.values(progress.flash).filter((s) => s === "known").length;
    const learning = Object.values(progress.flash).filter((s) => s === "learning").length;
    const mastery = topics.map((t) => {
      const total = questions.filter((q) => q.topic === t).length;
      const done = questions.filter(
        (q) => q.topic === t && progress.flash[q.id] === "known"
      ).length;
      return { topic: t, total, done, pct: total ? Math.round((done / total) * 100) : 0 };
    });
    const quizSeries = progress.quizzes.map((r, i) => ({
      name: `#${i + 1}`,
      score: Math.round((r.correct / r.total) * 100),
    }));
    const avgQuiz = progress.quizzes.length
      ? Math.round(
          progress.quizzes.reduce((a, r) => a + r.correct / r.total, 0) / progress.quizzes.length * 100
        )
      : 0;
    return {
      known,
      learning,
      streak: computeStreak(progress.studyDays),
      mastery,
      quizSeries,
      avgQuiz,
      bookmarks: progress.bookmarks.length,
    };
  }, [questions, topics, progress]);

  if (loading) return <Loader label="Crunching stats" />;

  return (
    <div>
      <h1 className="mb-6 font-display text-h1 font-semibold text-text">Dashboard</h1>

      <SectionDivider label="Overview" hint="your study at a glance" className="mb-3" />
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Day streak" value={stats.streak} unit="🔥" tone="peach" />
        <Stat label="Cards known" value={stats.known} tone="green" />
        <Stat label="Learning" value={stats.learning} tone="teal" />
        <Stat label="Avg quiz" value={stats.avgQuiz} unit="%" tone="mauve" />
        <Stat label="Bookmarked" value={stats.bookmarks} tone="yellow" />
        <Stat label="Question bank" value={questions.length} tone="blue" />
      </div>

      <SectionDivider label="Trends" hint="mastery & quiz history" className="mb-3" />
      <div className="grid gap-4 lg:grid-cols-2">
        {/* mastery */}
        <Panel title="Mastery by topic" subtitle="Flashcards marked “known”">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={stats.mastery} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CAT.surface0} vertical={false} />
              <XAxis dataKey="topic" tick={{ fill: CAT.overlay0, fontSize: 10 }} tickFormatter={(t: string) => t.split(" ")[0]} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: CAT.overlay0, fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: "rgba(255,255,255,0.03)" }} contentStyle={tipStyle} />
              <Bar dataKey="done" radius={[6, 6, 0, 0]}>
                {stats.mastery.map((m) => (
                  <Cell key={m.topic} fill={topicHex(m.topic)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Panel>

        {/* quiz history */}
        <Panel title="Quiz history" subtitle={`${progress.quizzes.length} sessions`}>
          {stats.quizSeries.length === 0 ? (
            <div className="grid h-[220px] place-items-center font-mono text-xs text-overlay0">
              No quizzes yet — take one to see your trend.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={stats.quizSeries} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={CAT.mauve} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={CAT.mauve} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={CAT.surface0} vertical={false} />
                <XAxis dataKey="name" tick={{ fill: CAT.overlay0, fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: CAT.overlay0, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tipStyle} />
                <Area type="monotone" dataKey="score" stroke={CAT.mauve} strokeWidth={2} fill="url(#g)" />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </Panel>
      </div>

      {/* mastery detail bars */}
      <SectionDivider label="Detail" hint="per-topic completion" className="mb-3 mt-6" />
      <Panel title="Progress detail" subtitle="Per-topic completion">
        <div className="grid gap-x-8 gap-y-4 py-2 sm:grid-cols-2">
          {stats.mastery.map((m) => (
            <div key={m.topic}>
              <div className="mb-1.5 flex justify-between text-sm">
                <span className="text-subtext1">{m.topic}</span>
                <span className="font-mono text-xs text-overlay1">
                  {m.done}/{m.total} · {m.pct}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface0">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${m.pct}%`, background: topicHex(m.topic) }}
                />
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}


function Stat({ label, value, unit, tone }: { label: string; value: number; unit?: string; tone: string }) {
  const toneText: Record<string, string> = {
    peach: "text-peach", green: "text-green", mauve: "text-mauve", yellow: "text-yellow",
    teal: "text-teal", blue: "text-blue",
  };
  return (
    <div className="glass rounded-2xl p-4 shadow-card">
      <div className="font-mono text-[10px] uppercase tracking-widest text-overlay0">{label}</div>
      <div className={`mt-1 font-display text-h1 font-bold tabular-nums ${toneText[tone]}`}>
        {value}
        {unit && <span className="ml-0.5 text-lg">{unit}</span>}
      </div>
    </div>
  );
}

function Panel({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`glass rounded-2xl p-5 shadow-card ${className}`}>
      <div className="mb-4">
        <h2 className="font-display text-h3 font-medium text-text">{title}</h2>
        {subtitle && <div className="font-mono text-[11px] text-overlay0">{subtitle}</div>}
      </div>
      {children}
    </section>
  );
}
