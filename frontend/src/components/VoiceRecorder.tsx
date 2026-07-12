import { useEffect, useRef, useState } from "react";

// Records a voice note: live transcript via Web Speech API + audio blob via
// MediaRecorder. Degrades gracefully when either is unavailable or denied.
export function VoiceRecorder({
  onSave,
  onCancel,
}: {
  onSave: (transcript: string, blob: Blob | null) => void;
  onCancel: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "recording" | "denied" | "stopped">("idle");
  const [transcript, setTranscript] = useState("");
  const [supported] = useState(
    () => typeof (window as any).webkitSpeechRecognition !== "undefined" || typeof (window as any).SpeechRecognition !== "undefined"
  );
  const recRef = useRef<any>(null);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  function cleanup() {
    try { recRef.current?.stop(); } catch { /* noop */ }
    try { mediaRef.current?.state !== "inactive" && mediaRef.current?.stop(); } catch { /* noop */ }
    streamRef.current?.getTracks().forEach((t) => t.stop());
  }
  useEffect(() => cleanup, []); // stop everything on unmount

  async function start() {
    setTranscript("");
    chunksRef.current = [];
    // audio capture (optional — transcript still works without a saved blob)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new MediaRecorder(stream);
      mr.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      mr.start();
      mediaRef.current = mr;
    } catch {
      setStatus("denied");
      return; // mic denied → text fallback only
    }
    // live transcription (optional)
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SR) {
      const rec = new SR();
      rec.continuous = true;
      rec.interimResults = true;
      rec.onresult = (e: any) => {
        let text = "";
        for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
        setTranscript(text);
      };
      rec.onerror = () => { /* keep audio going */ };
      try { rec.start(); recRef.current = rec; } catch { /* already started */ }
    }
    setStatus("recording");
  }

  function stop() {
    cleanup();
    setStatus("stopped");
  }

  function save() {
    const blob = chunksRef.current.length ? new Blob(chunksRef.current, { type: "audio/webm" }) : null;
    onSave(transcript.trim(), blob);
  }

  return (
    <div className="glass rounded-2xl p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <div className="font-display text-lg font-medium text-text">Voice note</div>
        <button onClick={onCancel} className="text-overlay1 hover:text-text">✕</button>
      </div>

      {status === "denied" && (
        <div className="mb-3 rounded-lg border border-peach/30 bg-peach/10 px-3 py-2 text-sm text-peach">
          Microphone blocked. You can still type the note below.
        </div>
      )}
      {!supported && status !== "denied" && (
        <div className="mb-3 font-mono text-xs text-overlay0">
          Live transcription isn't supported in this browser — audio will still be recorded.
        </div>
      )}

      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder={status === "recording" ? "Listening…" : "Transcript / note text…"}
        className="input min-h-[7rem] resize-none font-mono"
      />

      <div className="mt-4 flex items-center gap-2">
        {status !== "recording" ? (
          <button onClick={start} className="flex items-center gap-2 rounded-xl border border-red/40 bg-red/10 px-4 py-2 text-sm text-red hover:bg-red/20">
            ● Record
          </button>
        ) : (
          <button onClick={stop} className="flex items-center gap-2 rounded-xl border border-white/10 bg-surface0 px-4 py-2 text-sm text-text">
            ■ Stop
          </button>
        )}
        <button
          onClick={save}
          disabled={!transcript.trim() && !chunksRef.current.length}
          className="ml-auto rounded-xl bg-gradient-to-r from-mauve to-blue px-4 py-2 text-sm font-semibold text-crust disabled:opacity-40"
        >
          Save note
        </button>
      </div>
    </div>
  );
}
