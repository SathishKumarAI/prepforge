import { useEffect, useState } from "react";
import { Square, Timer } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import type { LibrarySession } from "../../hooks/useLibrarySession";

/**
 * The Library's session control, in the page header beside the counts: a Start
 * button, then a running clock with the review count and an End button, then a
 * summary of what the session added up to.
 *
 * The summary is the point. A timer alone says "you used the app for a while";
 * reviewed / rated / saved / time turns that into a result you can write down.
 *
 * Owns: the clock tick and the summary dialog. Does NOT own what gets counted —
 * hooks/useLibrarySession derives that from the progress store.
 */
export function SessionTimer({
  session,
  onStart,
  onEnd,
}: {
  session: LibrarySession | null;
  onStart: () => void;
  /** Returns the finished session so the summary can show it. */
  onEnd: () => LibrarySession | null;
}) {
  const [now, setNow] = useState(Date.now());
  const [summary, setSummary] = useState<(LibrarySession & { endedAt: number }) | null>(null);

  // One tick a second while running; nothing at all otherwise.
  useEffect(() => {
    if (!session) return;
    setNow(Date.now());
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [session]);

  function end() {
    const done = onEnd();
    if (done) setSummary({ ...done, endedAt: Date.now() });
  }

  return (
    <>
      {session ? (
        // Glass, like the other floating controls: this is chrome that sits
        // over the page while you work, not something you read.
        <div className="glass flex items-center gap-2 rounded-full border border-surface0 py-1 pl-3 pr-1 text-small">
          <Timer aria-hidden="true" className="size-3.5 text-overlay1" />
          <span className="tabular-nums text-text" aria-live="off">
            {clock(now - session.startedAt)}
          </span>
          <span className="text-micro text-overlay1">
            <span className="tabular-nums">{session.opened.length}</span> reviewed
          </span>
          <Button variant="ghost" size="sm" onClick={end} className="h-7 rounded-full px-2">
            <Square aria-hidden="true" />
            End
          </Button>
        </div>
      ) : (
        <Button variant="ghost" size="sm" onClick={onStart} title="Time a study session and get a summary at the end">
          <Timer aria-hidden="true" />
          Start session
        </Button>
      )}

      <Dialog open={summary !== null} onOpenChange={(o) => !o && setSummary(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Session summary</DialogTitle>
          </DialogHeader>
          {summary && (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
              <Stat label="time" value={clock(summary.endedAt - summary.startedAt)} />
              <Stat label="questions reviewed" value={summary.opened.length} />
              <Stat label="rated" value={summary.rated} />
              <Stat label="saved" value={summary.saved} />
            </dl>
          )}
          <div className="mt-2 flex justify-end">
            <Button variant="primary" onClick={() => setSummary(null)}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
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

/** mm:ss, or h:mm:ss once it matters. */
function clock(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
