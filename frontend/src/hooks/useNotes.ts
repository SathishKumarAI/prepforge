import { useCallback, useEffect, useState } from "react";
import { loadNotes, nextNoteId, nowIso, saveNotes, type Note, type NoteKind } from "../lib/notes";

let shared: Note[] = loadNotes();
const listeners = new Set<(n: Note[]) => void>();

function set(next: Note[]) {
  shared = next;
  saveNotes(next);
  listeners.forEach((l) => l(next));
}

export function useNotes() {
  const [notes, setLocal] = useState<Note[]>(shared);

  useEffect(() => {
    const l = (n: Note[]) => setLocal(n);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const create = useCallback((partial: Partial<Note> & { kind: NoteKind }): Note => {
    const now = nowIso();
    const note: Note = {
      id: nextNoteId(shared),
      kind: partial.kind,
      title: partial.title ?? "",
      body: partial.body ?? "",
      tags: partial.tags ?? [],
      topic: partial.topic,
      questionId: partial.questionId,
      color: partial.color,
      x: partial.x,
      y: partial.y,
      audioId: partial.audioId,
      created: now,
      updated: now,
    };
    set([...shared, note]);
    return note;
  }, []);

  const update = useCallback((id: string, patch: Partial<Note>) => {
    set(shared.map((n) => (n.id === id ? { ...n, ...patch, updated: nowIso() } : n)));
  }, []);

  const remove = useCallback((id: string) => {
    set(shared.filter((n) => n.id !== id));
  }, []);

  return { notes, create, update, remove };
}
