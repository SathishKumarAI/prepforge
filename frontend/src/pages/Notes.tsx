import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mic, Play, Plus, Trash2 } from "lucide-react";
import { GraphView } from "../components/notes/GraphView";
import { VoiceRecorder } from "../components/VoiceRecorder";
import { Page } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { Empty } from "../components/States";
import { Button } from "../components/ui/button";
import { Segmented, SegmentedPanel } from "../components/ui/segmented";
import { useNotes } from "../hooks/useNotes";
import { deleteClip, getClip, putClip } from "../lib/audio";
import type { Note } from "../lib/notes";

/**
 * Slot table
 *   route    /notes
 *   job      capture a thought now, and link it to the others
 *   orient   notes, voice memos, linked
 *   act      write one — the new-note button and the recorder
 *   review   the notes themselves
 *   accent   the primary "New note" button only
 *
 * The seven-swatch colour picker on every card is gone. It coloured a 2px
 * border and nothing read it — not search, not the graph, not any filter — so
 * it was seven decisions per note that changed nothing.
 */

export function Notes() {
  const [params, setParams] = useSearchParams();
  // The graph is a VIEW of these notes, not a separate destination — it renders
  // the same objects, laid out by their links instead of in a grid. Making it a
  // peer nav entry implied it held different content.
  const asGraph = params.get("view") === "graph";
  const { notes, create, update, remove } = useNotes();
  const [recording, setRecording] = useState(false);

  const voice = notes.filter((n) => n.kind === "voice").length;
  const linked = notes.filter((n) => /\[\[[^\]]+\]\]/.test(n.body) || n.tags.length > 0).length;

  async function saveVoice(transcript: string, blob: Blob | null) {
    let audioId: string | undefined;
    if (blob) {
      audioId = `clip_${notes.length}_${transcript.length}`;
      try {
        await putClip(audioId, blob);
      } catch {
        audioId = undefined;
      }
    }
    create({ kind: "voice", body: transcript, audioId });
    setRecording(false);
  }

  async function del(n: Note) {
    if (n.audioId) await deleteClip(n.audioId);
    remove(n.id);
  }

  return (
    <Page
      title="Notes"
      orient={
        <Orient>
          <Fact label="notes" value={notes.length || null} emphasis={notes.length > 0} />
          <Fact label="voice memos" value={voice || null} />
          <Fact label="linked or tagged" value={linked || null} />
        </Orient>
      }
    >
      <Segmented
        label="Notes view"
        value={asGraph ? "graph" : "list"}
        options={[
          { value: "list", label: "Notes" },
          { value: "graph", label: "Graph" },
        ]}
        onChange={(v) => setParams(v === "graph" ? { view: "graph" } : {}, { replace: true })}
        idPrefix="notes-view"
        panelId="notes-view-panel"
        className="mb-5"
      />

      <SegmentedPanel
        id="notes-view-panel"
        labelledBy={`notes-view-tab-${asGraph ? "graph" : "list"}`}
      >
      {asGraph && <GraphView />}

      <div className={`mb-2 flex flex-wrap items-center gap-2 ${asGraph ? "hidden" : ""}`}>
        <Button variant="primary" onClick={() => create({ kind: "note" })}>
          <Plus aria-hidden="true" />
          New note
        </Button>
        <Button variant="secondary" onClick={() => setRecording((r) => !r)} aria-expanded={recording}>
          <Mic aria-hidden="true" />
          {recording ? "Cancel recording" : "Record a memo"}
        </Button>
      </div>
      <p className={`mb-6 max-w-prose text-small text-overlay1 ${asGraph ? "hidden" : ""}`}>
        Write <code className="rounded border border-surface0 bg-crust px-1 font-mono text-micro">[[Title]]</code>{" "}
        to link one note to another, and{" "}
        <code className="rounded border border-surface0 bg-crust px-1 font-mono text-micro">#tags</code>{" "}
        to group them. Both show up in the graph.
      </p>

      {recording && (
        <div className="mb-6">
          <VoiceRecorder onSave={saveVoice} onCancel={() => setRecording(false)} />
        </div>
      )}

      {asGraph ? null : notes.length === 0 && !recording ? (
        <Empty title="No notes yet. The first one is usually the thing you just got wrong." />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((n) => (
            <NoteCard key={n.id} note={n} onChange={(p) => update(n.id, p)} onDelete={() => del(n)} />
          ))}
        </div>
      )}
      </SegmentedPanel>
    </Page>
  );
}

function NoteCard({
  note,
  onChange,
  onDelete,
}: {
  note: Note;
  onChange: (p: Partial<Note>) => void;
  onDelete: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  async function play() {
    if (!note.audioId) return;
    const blob = await getClip(note.audioId);
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    setPlaying(true);
    audio.onended = () => {
      setPlaying(false);
      URL.revokeObjectURL(url);
    };
    audio.play().catch(() => setPlaying(false));
  }

  /** A note left completely empty deletes itself — sticky-note behaviour. */
  function onBlur() {
    if (!note.title.trim() && !note.body.trim() && !note.audioId) onDelete();
  }

  return (
    <article className="panel flex flex-col p-3.5">
      <input
        value={note.title}
        onChange={(e) => onChange({ title: e.target.value })}
        onBlur={onBlur}
        placeholder="Title"
        aria-label="Note title"
        className="w-full bg-transparent text-small font-medium text-text outline-none placeholder:text-overlay0"
      />
      <textarea
        value={note.body}
        onChange={(e) => onChange({ body: e.target.value })}
        onBlur={onBlur}
        placeholder="Use [[links]] and #tags"
        aria-label="Note body"
        className="mt-1.5 min-h-[6rem] w-full resize-y bg-transparent text-small text-subtext0 outline-none placeholder:text-overlay0"
      />
      <input
        value={note.tags.join(", ")}
        onChange={(e) =>
          onChange({ tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })
        }
        placeholder="tags, comma separated"
        aria-label="Note tags"
        className="mt-2 w-full border-t border-surface0 bg-transparent pt-2 text-micro text-overlay1 outline-none placeholder:text-overlay0"
      />
      <div className="mt-1.5 flex items-center gap-1">
        {note.kind === "voice" && (
          <Button variant="ghost" size="sm" onClick={play} aria-label="Play recording">
            <Play aria-hidden="true" />
            {playing ? "Playing" : "Play"}
          </Button>
        )}
        <Button
          variant="danger"
          size="sm"
          className="ml-auto"
          onClick={onDelete}
          aria-label="Delete note"
        >
          <Trash2 aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
