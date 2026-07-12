import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VoiceRecorder } from "../components/VoiceRecorder";
import { Empty } from "../components/States";
import { useNotes } from "../hooks/useNotes";
import { deleteClip, getClip, putClip } from "../lib/audio";
import type { Note } from "../lib/notes";
import { ACCENT_BORDER, ACCENT_DOT } from "../lib/topics";

const COLORS = ["yellow", "green", "sky", "mauve", "peach", "teal", "pink"];

export function Notes() {
  const { notes, create, update, remove } = useNotes();
  const [recording, setRecording] = useState(false);

  function addNote() {
    create({ kind: "note", color: "yellow" });
  }

  async function saveVoice(transcript: string, blob: Blob | null) {
    let audioId: string | undefined;
    if (blob) {
      audioId = `clip_${notes.length}_${transcript.length}`;
      try { await putClip(audioId, blob); } catch { audioId = undefined; }
    }
    create({ kind: "voice", color: "sky", body: transcript, audioId });
    setRecording(false);
  }

  async function del(n: Note) {
    if (n.audioId) await deleteClip(n.audioId);
    remove(n.id);
  }

  return (
    <div>
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text">Notes</h1>
          <p className="mt-1 text-sm text-subtext0">
            Sticky notes &amp; voice memos. Use <code className="rounded bg-crust px-1 font-mono text-xs text-peach">[[Title]]</code> to link notes and <code className="rounded bg-crust px-1 font-mono text-xs text-peach">#tags</code> — they wire up the Graph.
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={addNote} className="rounded-xl border border-yellow/40 bg-yellow/10 px-4 py-2 text-sm font-medium text-yellow hover:bg-yellow/20">
            + Note
          </button>
          <button onClick={() => setRecording((r) => !r)} className="rounded-xl border border-sky/40 bg-sky/10 px-4 py-2 text-sm font-medium text-sky hover:bg-sky/20">
            ● Voice
          </button>
        </div>
      </header>

      <AnimatePresence>
        {recording && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mb-6 overflow-hidden">
            <VoiceRecorder onSave={saveVoice} onCancel={() => setRecording(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {notes.length === 0 && !recording ? (
        <Empty title="No notes yet" hint="Add a sticky note or record a voice memo to start building your graph." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => (
            <NoteCard key={n.id} note={n} onChange={(p) => update(n.id, p)} onDelete={() => del(n)} />
          ))}
        </div>
      )}
    </div>
  );
}

function NoteCard({ note, onChange, onDelete }: { note: Note; onChange: (p: Partial<Note>) => void; onDelete: () => void }) {
  const accent = note.color ?? "yellow";
  const [playing, setPlaying] = useState(false);

  async function play() {
    if (!note.audioId) return;
    const blob = await getClip(note.audioId);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    setPlaying(true);
    audio.onended = () => { setPlaying(false); URL.revokeObjectURL(url); };
    audio.play().catch(() => setPlaying(false));
  }

  function onBlur() {
    // auto-delete a note left completely empty (sticky behavior)
    if (!note.title.trim() && !note.body.trim() && !note.audioId) onDelete();
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`glass flex flex-col rounded-2xl border-l-2 ${ACCENT_BORDER[accent]} p-4 shadow-card`}
    >
      <div className="mb-2 flex items-center gap-1.5">
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => onChange({ color: c })}
            aria-label={c}
            className={`h-3.5 w-3.5 rounded-full ${ACCENT_DOT[c]} ${c === accent ? "ring-2 ring-white/50" : ""}`}
          />
        ))}
        {note.kind === "voice" && (
          <button onClick={play} className="ml-1 text-sky" title="Play recording">
            {playing ? "▶…" : "▶"}
          </button>
        )}
        <button onClick={onDelete} className="ml-auto text-overlay1 hover:text-red" title="Delete">✕</button>
      </div>

      <input
        value={note.title}
        onChange={(e) => onChange({ title: e.target.value })}
        onBlur={onBlur}
        placeholder="Title"
        className="mb-1 w-full bg-transparent font-display text-base font-medium text-text outline-none placeholder:text-overlay0"
      />
      <textarea
        value={note.body}
        onChange={(e) => onChange({ body: e.target.value })}
        onBlur={onBlur}
        placeholder="Write… use [[links]] and #tags"
        className="min-h-[5rem] w-full resize-none bg-transparent font-mono text-sm text-subtext1 outline-none placeholder:text-overlay0"
      />
      <input
        value={note.tags.join(", ")}
        onChange={(e) => onChange({ tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
        placeholder="tags, comma, separated"
        className="mt-2 w-full bg-transparent font-mono text-[11px] text-overlay1 outline-none placeholder:text-overlay0"
      />
    </motion.div>
  );
}
