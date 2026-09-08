import { useEffect, useState } from "react";
import { Pause, Play, Square, Timer } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { useFocusTimer, LENGTHS, clock, hoursLabel, type Length, type Summary } from "../../hooks/useFocusTimer";
import { useProgress } from "../../hooks/useProgress";

/**
 * The timer's chrome, in the nav: idle it is Start plus a length; running it
 * is the countdown with pause and stop. Also the two dialogs the timer needs —
 * the one that asks on arrival, and the summary when a run ends.
 *
 * The arrival prompt is modal and asked once per browser session (the flag
 * is in sessionStorage): the user wants to be asked every time they come to
 * learn, and wants the question to stay until it is answered — Start or Not
 * now, nothing else closes it. A Radix dialog also disables every page hotkey
 * while open, which here is the point.
 *
 * Owns: the controls and the dialogs. Does NOT own the clock or the counts —
 * hooks/useFocusTimer, and this is its ONE caller that passes `progress`.
 */
const ASKED = "pf-timer-asked";

export function FocusTimer() {
  const { progress } = useProgress();
  const t = useFocusTimer(progress);
  const [asking, setAsking] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);

  // Ask on arrival, unless a countdown is already running or this session
  // already answered.
  useEffect(() => {
    let asked = false;
    try {
      asked = sessionStorage.getItem(ASKED) === "1";
    } catch {
      /* private mode: ask */
    }
    if (!asked && !t.run) setAsking(true);
    // once, on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function answer(start: boolean) {
    try {
      sessionStorage.setItem(ASKED, "1");
    } catch {
      /* ignore */
    }
    setAsking(false);
    if (start) t.start(t.lengthMin);
  }

  // A countdown that ran out shows its summary wherever you are.
  useEffect(() => {
    if (t.completed) {
      setSummary(t.completed);
      t.clearCompleted();
    }
  }, [t.completed, t]);

  const run = t.run;

  return (
    <>
      <SidebarMenuItem>
        {run ? (
          <div className="flex items-center gap-1 rounded-md px-2 py-1">
            <Timer aria-hidden="true" className="size-4 shrink-0 text-overlay1" />
            <span
              className="tabular-nums text-small text-text group-data-[collapsible=icon]:hidden"
              title={`${run.lengthMin} min countdown · ${hoursLabel(t.todayMs)} today`}
            >
              {clock(t.remaining)}
            </span>
            <span className="ml-auto flex items-center group-data-[collapsible=icon]:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={run.pausedAt ? t.resume : t.pause}
                aria-label={run.pausedAt ? "Resume timer" : "Pause timer"}
                title={run.pausedAt ? "Resume" : "Pause — you are not learning right now"}
              >
                {run.pausedAt ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                onClick={() => setSummary(t.stop())}
                aria-label="Stop timer"
                title="Stop and see the summary"
              >
                <Square aria-hidden="true" />
              </Button>
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <SidebarMenuButton
              onClick={() => t.start(t.lengthMin)}
              tooltip={`Start a ${t.lengthMin} min timer`}
              className="flex-1"
            >
              <Play />
              <span>Start timer</span>
            </SidebarMenuButton>
            <LengthSelect
              value={t.lengthMin}
              onChange={t.setLength}
              className="group-data-[collapsible=icon]:hidden"
            />
          </div>
        )}
      </SidebarMenuItem>

      <Dialog open={asking}>
        {/* Start or Not now, nothing else: no X, no Escape, no click outside. */}
        <DialogContent
          className="max-w-sm [&>button[aria-label=Close]]:hidden"
          onEscapeKeyDown={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Run your timer?</DialogTitle>
          </DialogHeader>
          <p className="text-small text-subtext0">
            You are here to learn. The timer counts the minutes toward today
            {t.todayMs > 0 && (
              <>
                {" "}
                — <span className="tabular-nums text-text">{hoursLabel(t.todayMs)}</span> so far
              </>
            )}
            . Pause it when you step away.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-end gap-2">
            <Button variant="ghost" onClick={() => answer(false)}>
              Not now
            </Button>
            <LengthSelect value={t.lengthMin} onChange={t.setLength} />
            <Button variant="primary" onClick={() => answer(true)}>
              <Play aria-hidden="true" />
              Start
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={summary !== null} onOpenChange={(o) => !o && setSummary(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{summary?.completed ? "Time's up" : "Timer stopped"}</DialogTitle>
          </DialogHeader>
          {summary && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
              <Stat label="this run" value={clock(summary.elapsedMs)} />
              <Stat label="today" value={hoursLabel(t.todayMs)} />
              <Stat label="questions opened" value={summary.opened} />
              <Stat label="rated" value={summary.rated} />
            </dl>
          )}
          <div className="mt-2 flex justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setSummary(null);
                t.start(t.lengthMin);
              }}
            >
              Another {t.lengthMin} min
            </Button>
            <Button variant="primary" onClick={() => setSummary(null)}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

/** One select, the width of "25 min": the lengths are a scale, not six choices. */
function LengthSelect({
  value,
  onChange,
  className = "",
}: {
  value: Length;
  onChange: (v: Length) => void;
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value) as Length)}
      aria-label="Timer length"
      className={`input h-8 w-auto px-2 py-0 text-micro ${className}`}
    >
      {LENGTHS.map((m) => (
        <option key={m} value={m}>
          {m} min
        </option>
      ))}
    </select>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <dd className="text-h2 font-semibold tabular-nums text-text">{value}</dd>
      <dt className="text-micro text-overlay1">{label}</dt>
    </div>
  );
}
