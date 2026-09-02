import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/sonner";
import { allClips, putClip } from "../lib/audio";
import {
  BACKUP_VERSION,
  backupFilename,
  countsOf,
  mergeNotes,
  mergeProgress,
  parseBackup,
  type BackupFile,
} from "../lib/backup";
import { loadNotes, saveNotes } from "../lib/notes";
import { loadSettings, saveSettings } from "../lib/settings";
import { loadProgress, saveProgress } from "../lib/storage";

/**
 * The only way personal state gets out of this browser, and back in.
 *
 * Owns: reading and writing the four stores a backup covers (progress, notes,
 * settings, voice clips), the download, and the file picker.
 * Does NOT own: the file shape or the merge rule — `lib/backup.ts`, which is
 * pure and has the check behind it.
 *
 * A restore ends in a reload, on purpose. `useProgress` keeps the progress
 * object in module scope and hands the same reference to every screen; writing
 * localStorage underneath it would leave a running app rendering the state it
 * had at load while the disk said something else. Reloading is one line and
 * cannot be half-right.
 */
export function BackupControls() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<{ file: BackupFile; dropped: number } | null>(null);
  const [busy, setBusy] = useState(false);

  async function exportAll() {
    setBusy(true);
    try {
      const clips = await allClips();
      const audio: Record<string, string> = {};
      for (const [id, blob] of Object.entries(clips)) audio[id] = await toDataUrl(blob);
      const payload = {
        app: "prepforge" as const,
        version: BACKUP_VERSION,
        exported: new Date().toISOString(),
        progress: loadProgress(),
        notes: loadNotes(),
        settings: loadSettings(),
        audio,
      };
      const json = JSON.stringify(payload, null, 2);
      download(json, backupFilename(payload.exported));
      const c = countsOf(payload);
      toast.success(`Backup saved — ${fmtSize(json.length)}`, {
        description: `${c.scheduled} scheduled cards, ${c.notes} notes, ${c.clips} voice clips.`,
      });
    } catch {
      toast.error("Could not read local storage to build the backup.");
    } finally {
      setBusy(false);
    }
  }

  async function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    // Cleared immediately, so choosing the same file twice still fires a change.
    e.target.value = "";
    if (!f) return;
    const result = parseBackup(await f.text());
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    setPending({ file: result.file, dropped: result.dropped });
  }

  async function apply(mode: "merge" | "replace") {
    if (!pending) return;
    setBusy(true);
    const { file } = pending;
    try {
      if (mode === "replace") {
        saveProgress(file.progress);
        saveNotes(file.notes);
      } else {
        saveProgress(mergeProgress(loadProgress(), file.progress));
        saveNotes(mergeNotes(loadNotes(), file.notes));
      }
      // Settings always merge over the defaults rather than replacing the
      // object: a backup written by an older build has no `density` field, and
      // a wholesale write would leave the app with an undefined one.
      saveSettings({ ...loadSettings(), ...file.settings });
      for (const [id, url] of Object.entries(file.audio)) {
        await putClip(id, await (await fetch(url)).blob());
      }
      // Not a toast: the reload would eat it before it is read.
      location.reload();
    } catch {
      setBusy(false);
      toast.error("Restore failed part-way. Nothing was deleted — try again.");
    }
  }

  const counts = pending ? countsOf(pending.file) : null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={exportAll} disabled={busy}>
          <Download aria-hidden />
          Download backup
        </Button>
        <Button size="sm" variant="outline" onClick={() => fileInput.current?.click()} disabled={busy}>
          <Upload aria-hidden />
          Restore from file
        </Button>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={pick}
          aria-label="Choose a PrepForge backup file"
        />
      </div>

      <p className="max-w-prose text-small text-overlay1">
        Everything personal lives in this browser: scheduling, bookmarks, notes and voice clips.
        Clearing site data takes all of it, and nothing else has a copy.
      </p>

      {pending && counts && (
        <div className="rounded-lg border border-surface1 bg-mantle p-3">
          <p className="text-small text-subtext0">
            {pending.file.exported ? `Backup from ${pending.file.exported.slice(0, 10)}: ` : "Backup: "}
            {plural(counts.scheduled, "scheduled card")}, {plural(counts.notes, "note")},{" "}
            {plural(counts.quizzes, "quiz session")}, {plural(counts.clips, "voice clip")}.
          </p>
          {pending.dropped > 0 && (
            <p className="mt-1 text-small text-yellow">
              {pending.dropped} card{pending.dropped === 1 ? "" : "s"} in that file had unreadable
              scheduling data and will be skipped.
            </p>
          )}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {/* Not `primary`: the dialog already spends its one accent on Done,
                and two accent fills on screen means neither is the answer. */}
            <Button size="sm" onClick={() => apply("merge")} disabled={busy}>
              Merge into this browser
            </Button>
            <Button size="sm" variant="danger" onClick={() => apply("replace")} disabled={busy}>
              Replace everything
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setPending(null)} disabled={busy}>
              Cancel
            </Button>
          </div>
          <p className="mt-2 text-micro text-overlay0">
            Merge keeps what this browser already knows on any card both copies have. Replace throws
            this browser's history away and cannot be undone.
          </p>
        </div>
      )}
    </div>
  );
}

function toDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function download(text: string, filename: string) {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/** "1 note", "2 notes" — the summary is four counts in a row, and "1 notes"
 *  four times reads as a placeholder rather than a number about your data. */
function plural(n: number, word: string): string {
  return `${n.toLocaleString()} ${word}${n === 1 ? "" : "s"}`;
}

function fmtSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} kB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
