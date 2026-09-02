/**
 * One file that holds everything this app knows about you, and the rules for
 * reading one back.
 *
 * Everything personal here is browser-local: SM-2 state, bookmarks, per-question
 * notes, sticky notes, voice-clip audio, settings. That is the whole point of the
 * product — and it means clearing site data, switching browsers, or a profile
 * that never syncs takes months of scheduling with it and leaves no trace that
 * anything was lost. A backup is the only exit.
 *
 * Owns: the file shape, validating a file someone hands us, and how two copies
 * of the same history combine.
 * Does NOT own: reading or writing storage, blobs, downloads. That is
 * `components/BackupControls.tsx` — this file stays pure so it can be run
 * outside a browser, which is what `scripts/test-backup.mjs` does.
 *
 * Every import here is `import type`, deliberately. A value import would make
 * this module unloadable in plain Node (Vite resolves extensionless specifiers,
 * Node does not), and the check would go with it.
 */
import type { Note } from "./notes";
import type { UserCard } from "./userCards";
import type { Settings } from "./settings";
import type { Progress, QuizResult } from "./storage";
import type { SrsCard } from "./srs";

/**
 * Bump only when an older file can no longer be read as-is. A reader refuses a
 * version it does not know rather than importing half of it: a partial restore
 * of scheduling data is worse than none, because it looks like it worked.
 */
// 2 (2026-09-02): cards written from a highlight. Additive, and the version
//                 still moved: a build that does not know about them would
//                 restore a file, report success, and drop every card you wrote.
export const BACKUP_VERSION = 2;

export interface BackupFile {
  app: "prepforge";
  version: number;
  /** ISO timestamp, for the human reading the filename a year from now. */
  exported: string;
  progress: Progress;
  notes: Note[];
  settings: Partial<Settings>;
  /** Cards written from a highlight — the only cards not in the served bank. */
  cards: UserCard[];
  /** Voice-note audio: the note's `audioId` → a `data:` URL of the clip. */
  audio: Record<string, string>;
}

export type ParseResult =
  | { ok: true; file: BackupFile; dropped: number }
  | { ok: false; error: string };

export interface Counts {
  scheduled: number;
  bookmarks: number;
  notes: number;
  quizzes: number;
  cards: number;
  clips: number;
}

// ---- reading a file we did not write ----

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/**
 * A card is only usable if every field the scheduler does arithmetic on is a
 * number. One `"2.5"` in `ef` and `interval * ef` becomes string concatenation,
 * which SM-2 would then round into a due date centuries out — silently, on one
 * card, with no error anywhere. Cheaper to drop the row.
 */
function readCard(v: unknown): SrsCard | null {
  if (!isObj(v)) return null;
  const { ef, interval, reps, lapses, due, stage, seen } = v;
  if (![ef, interval, reps, lapses].every((n) => typeof n === "number" && Number.isFinite(n))) {
    return null;
  }
  if (typeof due !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(due)) return null;
  return {
    ef: ef as number,
    interval: interval as number,
    reps: reps as number,
    lapses: lapses as number,
    due,
    stage:
      stage === "new" || stage === "learning" || stage === "review" || stage === "mastered"
        ? stage
        : "learning",
    seen: seen !== false,
  };
}

function readStringMap(v: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!isObj(v)) return out;
  for (const [k, val] of Object.entries(v)) if (typeof val === "string") out[k] = val;
  return out;
}

function readStrings(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

function readQuizzes(v: unknown): QuizResult[] {
  if (!Array.isArray(v)) return [];
  return v.filter(
    (r): r is QuizResult =>
      isObj(r) &&
      typeof r.date === "string" &&
      typeof r.topic === "string" &&
      typeof r.total === "number" &&
      typeof r.correct === "number" &&
      r.total > 0,
  );
}

function readNotes(v: unknown): Note[] {
  if (!Array.isArray(v)) return [];
  const out: Note[] = [];
  for (const n of v) {
    if (!isObj(n) || typeof n.id !== "string") continue;
    out.push({
      ...(n as unknown as Note),
      title: typeof n.title === "string" ? n.title : "",
      body: typeof n.body === "string" ? n.body : "",
      tags: readStrings(n.tags),
      kind: n.kind === "voice" || n.kind === "note" ? n.kind : "sticky",
      created: typeof n.created === "string" ? n.created : "",
      updated: typeof n.updated === "string" ? n.updated : "",
    });
  }
  return out;
}

/**
 * A card with no question is not recall, and a card with no answer is nothing at
 * all — either way it would sit in the deck as a blank you cannot rate.
 */
function readCards(v: unknown): UserCard[] {
  if (!Array.isArray(v)) return [];
  const out: UserCard[] = [];
  for (const c of v) {
    if (!isObj(c)) continue;
    const { id, question, answer } = c;
    if (typeof id !== "string" || typeof question !== "string" || typeof answer !== "string") {
      continue;
    }
    if (!question.trim() || !answer.trim()) continue;
    out.push({
      id,
      question,
      answer,
      source:
        isObj(c.source) && typeof c.source.title === "string"
          ? {
              title: c.source.title,
              href: typeof c.source.href === "string" ? c.source.href : undefined,
            }
          : undefined,
      created: typeof c.created === "string" ? c.created : "",
    });
  }
  return out;
}

/** Only `data:` URLs. An `http(s)` src in a restored note would be a request to
 *  someone else's server on a page that otherwise never phones home. */
function readAudio(v: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, val] of Object.entries(readStringMap(v))) {
    if (val.startsWith("data:")) out[k] = val;
  }
  return out;
}

/**
 * Parses a file chosen by a human from a file picker, so it is untrusted input:
 * it can be truncated, it can be someone else's export, it can be a JSON file
 * that has nothing to do with this app. Never throws — the caller renders the
 * message.
 *
 * `dropped` counts SRS rows that failed validation, so the UI can say so instead
 * of quietly restoring 900 of 1,000 cards.
 */
export function parseBackup(text: string): ParseResult {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: "That file is not JSON." };
  }
  if (!isObj(raw)) return { ok: false, error: "That file is not a PrepForge backup." };
  if (raw.app !== "prepforge") {
    return { ok: false, error: "That file is JSON, but it is not a PrepForge backup." };
  }
  const version = typeof raw.version === "number" ? raw.version : 0;
  if (version > BACKUP_VERSION) {
    return {
      ok: false,
      error: `That backup is version ${version}; this build reads up to ${BACKUP_VERSION}. Update PrepForge first — importing half of it would be worse.`,
    };
  }

  const p = isObj(raw.progress) ? raw.progress : {};
  const srcSrs = isObj(p.srs) ? p.srs : {};
  const srs: Record<string, SrsCard> = {};
  let dropped = 0;
  for (const [id, card] of Object.entries(srcSrs)) {
    const parsed = readCard(card);
    if (parsed) srs[id] = parsed;
    else dropped++;
  }

  const flashSrc = readStringMap(p.flash);
  const flash: Progress["flash"] = {};
  for (const [id, state] of Object.entries(flashSrc)) {
    if (state === "new" || state === "learning" || state === "known") flash[id] = state;
  }

  return {
    ok: true,
    dropped,
    file: {
      app: "prepforge",
      version,
      exported: typeof raw.exported === "string" ? raw.exported : "",
      progress: {
        flash,
        srs,
        bookmarks: readStrings(p.bookmarks),
        notes: readStringMap(p.notes),
        custom: readStringMap(p.custom),
        quizzes: readQuizzes(p.quizzes),
        studyDays: readStrings(p.studyDays),
        recent: readStrings(p.recent),
      },
      notes: readNotes(raw.notes),
      settings: isObj(raw.settings) ? (raw.settings as Partial<Settings>) : {},
      cards: readCards(raw.cards),
      audio: readAudio(raw.audio),
    },
  };
}

// ---- combining two histories ----

/**
 * Union, and **what is already in this browser wins every collision**.
 *
 * Restore-after-a-wipe is the case that matters and there the local side is
 * empty, so the rule never bites. The case where it does bite — importing a
 * backup on a machine that has its own history — is the one where guessing is
 * dangerous: nothing in an SM-2 card records when it was last reviewed, so
 * "newer" cannot be computed, only invented. Losing an import is recoverable
 * (import again, or replace); overwriting eight weeks of local scheduling with a
 * stale file is not.
 */
export function mergeProgress(local: Progress, incoming: Progress): Progress {
  const quizKey = (r: QuizResult) => `${r.date}|${r.topic}|${r.correct}/${r.total}`;
  const seenQuiz = new Set(local.quizzes.map(quizKey));
  return {
    flash: { ...incoming.flash, ...local.flash },
    srs: { ...incoming.srs, ...local.srs },
    notes: { ...incoming.notes, ...local.notes },
    custom: { ...incoming.custom, ...local.custom },
    bookmarks: [...new Set([...local.bookmarks, ...incoming.bookmarks])],
    studyDays: [...new Set([...local.studyDays, ...incoming.studyDays])].sort(),
    // Order by date so the Progress trend reads chronologically after a merge,
    // rather than "everything local, then everything imported".
    quizzes: [...local.quizzes, ...incoming.quizzes.filter((r) => !seenQuiz.has(quizKey(r)))].sort(
      (a, b) => a.date.localeCompare(b.date),
    ),
    // `recent` is a UI shortcut, not history. The local one is what you were
    // actually just doing, so an import does not get to rewrite it.
    recent: local.recent,
  };
}

/** Same rule: a note id already here keeps the copy that is here. */
export function mergeNotes(local: Note[], incoming: Note[]): Note[] {
  const have = new Set(local.map((n) => n.id));
  return [...local, ...incoming.filter((n) => !have.has(n.id))];
}

/**
 * And again for cards. Ids carry the second they were made, so two browsers
 * almost never collide — but when they do, the same rule applies: this browser's
 * copy is the one you have been rating, and its SM-2 row is keyed by that id.
 */
export function mergeCards(local: UserCard[], incoming: UserCard[]): UserCard[] {
  const have = new Set(local.map((c) => c.id));
  return [...local, ...incoming.filter((c) => !have.has(c.id))];
}

export function countsOf(
  file: Pick<BackupFile, "progress" | "notes" | "audio"> & { cards?: UserCard[] },
): Counts {
  return {
    scheduled: Object.keys(file.progress.srs).length,
    bookmarks: file.progress.bookmarks.length,
    notes: file.notes.length,
    quizzes: file.progress.quizzes.length,
    cards: file.cards?.length ?? 0,
    clips: Object.keys(file.audio).length,
  };
}

/** `prepforge-backup-2026-09-02.json` — sorts chronologically in a folder. */
export function backupFilename(exported: string): string {
  const day = /^\d{4}-\d{2}-\d{2}/.exec(exported)?.[0] ?? "export";
  return `prepforge-backup-${day}.json`;
}
