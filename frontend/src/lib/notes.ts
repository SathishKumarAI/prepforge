// Unified note model. Every sticky, voice memo, or typed note is a Note — and a
// future graph node. Stored in localStorage; audio blobs live in IndexedDB.
import { load, save } from "./storage";

export type NoteKind = "sticky" | "voice" | "note";

export interface Note {
  id: string;
  kind: NoteKind;
  title: string;
  body: string; // markdown; may contain [[wikilinks]]
  tags: string[];
  topic?: string;
  questionId?: string; // link to a question in the bank
  color?: string; // catppuccin accent name (sticky)
  x?: number; // sticky board position
  y?: number;
  audioId?: string; // IndexedDB key for a voice recording
  created: string; // ISO
  updated: string; // ISO
}

const WIKILINK = /\[\[([^\]]+)\]\]/g;

export function loadNotes(): Note[] {
  const raw = load<Note[]>("notes", []);
  return Array.isArray(raw) ? raw : [];
}

export function saveNotes(notes: Note[]): void {
  save("notes", notes);
}

let counter = 0;
// id without Math.random/Date.now dependency edge cases — monotonic per session,
// seeded by existing note count so ids stay unique across reloads.
export function nextNoteId(existing: Note[]): string {
  const base = existing.length + counter++;
  return `n${base}_${nowIso().replace(/[^0-9]/g, "").slice(-8)}`;
}

export function nowIso(): string {
  return new Date().toISOString();
}

// Parse [[Title]] references out of a note body.
export function wikilinks(body: string): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  WIKILINK.lastIndex = 0;
  while ((m = WIKILINK.exec(body)) !== null) {
    const name = m[1].trim();
    if (name) out.push(name);
  }
  return out;
}
