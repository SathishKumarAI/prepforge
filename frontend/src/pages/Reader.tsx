import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Chip } from "@/components/ui/chip";
import { ReadingPane } from "../components/ReadingPane";
import { readResource, uploadResource, type ReadResult } from "../lib/api";

// Read-only viewer for local files (PDF native + markdown/text) AND web pages,
// in one page. Nothing is editable — just read. Local PDFs render in the browser's
// native viewer (no upload needed to view); "Add to resources" extracts text into
// the pipeline for revision + the graph.
type Src = "local" | "web";

export function Reader() {
  const [src, setSrc] = useState<Src>("local");

  return (
    <div>
      <header className="mb-6">
        <h1 className="font-display text-h1 font-semibold text-text">Reader</h1>
        <p className="mt-1 text-sm text-subtext0">
          Read PDFs &amp; Markdown from your machine or the web — right here, read-only.
        </p>
      </header>

      <div className="mb-6 flex gap-2">
        <Chip active={src === "local"} onClick={() => setSrc("local")} label="Local file" />
        <Chip active={src === "web"} onClick={() => setSrc("web")} label="Web URL" />
      </div>

      {src === "local" ? <LocalReader /> : <WebReader />}
    </div>
  );
}

function LocalReader() {
  const [file, setFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // revoke object URLs to avoid leaks
  useEffect(() => () => { if (pdfUrl) URL.revokeObjectURL(pdfUrl); }, [pdfUrl]);

  async function pick(f: File | null) {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
    setText(null);
    setFile(f);
    if (!f) return;
    const ext = f.name.split(".").pop()?.toLowerCase();
    if (ext === "pdf") {
      setPdfUrl(URL.createObjectURL(f));
    } else if (ext === "md" || ext === "markdown" || ext === "txt") {
      try { setText(await f.text()); } catch { toast.error("Couldn't read the file."); }
    } else {
      toast.error("Only PDF, .md, or .txt files.");
    }
  }

  async function extract() {
    if (!file) return;
    setBusy(true);
    try {
      const r: ReadResult = await uploadResource(file);
      if (r.error) toast.error(r.message ?? "Extract failed.");
      else toast.success(`Saved to ${r.saved}`, { description: "Now in Resources & the pipeline." });
    } catch {
      toast.error("Upload failed — is the backend running?");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="cursor-pointer rounded-xl border border-mauve/40 bg-mauve/10 px-4 py-2.5 text-sm font-medium text-mauve hover:bg-mauve/20">
          Choose PDF / Markdown…
          <input
            type="file"
            accept=".pdf,.md,.markdown,.txt"
            className="hidden"
            onChange={(e) => pick(e.target.files?.[0] ?? null)}
          />
        </label>
        {file && (
          <>
            <span className="min-w-0 truncate font-mono text-xs text-subtext0">{file.name}</span>
            <button
              onClick={extract}
              disabled={busy}
              className="rounded-xl border border-teal/40 bg-teal/10 px-3.5 py-2 text-sm font-medium text-teal hover:bg-teal/20 disabled:opacity-40"
            >
              {busy ? "Extracting…" : "＋ Add to resources"}
            </button>
          </>
        )}
      </div>

      {!file && (
        <div className="glass grid place-items-center rounded-2xl py-24 text-center text-subtext0 shadow-card">
          <div>
            <div className="font-display text-xl text-subtext1">No file open</div>
            <div className="mt-1 text-sm">Pick a PDF or Markdown file to read it here.</div>
          </div>
        </div>
      )}

      {pdfUrl && (
        <iframe title={file?.name} src={pdfUrl} className="h-[74vh] w-full rounded-2xl border border-white/[0.06] bg-crust" />
      )}

      {text !== null && (
        <div className="glass rounded-2xl p-6 shadow-card">
          <ReadingPane md={text} storageKey={`local:${file?.name ?? "doc"}`} />
        </div>
      )}
    </div>
  );
}

function WebReader() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<ReadResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    const u = url.trim();
    if (!u) return;
    setLoading(true);
    setData(null);
    try {
      const r = await readResource(u);
      setData(r);
      if (!r.error && r.saved) toast.success(`Saved to ${r.saved}`);
    } catch {
      setData({ error: "network", message: "Couldn't load that URL." });
      toast.error("Couldn't load that URL.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && load()}
          placeholder="Paste an article or YouTube URL…"
          className="input flex-1 font-mono"
        />
        <button onClick={load} disabled={loading || !url.trim()} className="rounded-xl border border-mauve/40 bg-mauve/10 px-4 py-2.5 text-sm font-medium text-mauve hover:bg-mauve/20 disabled:opacity-40">
          {loading ? "Loading…" : "Read"}
        </button>
      </div>

      {!data && !loading && (
        <div className="glass grid place-items-center rounded-2xl py-24 text-center text-subtext0 shadow-card">
          Paste a link to read it cleaned up, right here.
        </div>
      )}

      {data && (
        <div className="glass rounded-2xl p-6 shadow-card">
          {data.error ? (
            <div className="text-sm text-subtext0">{data.message ?? "Couldn't extract content."}</div>
          ) : (
            <>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h2 className="font-display text-h2 font-semibold text-text">{data.title}</h2>
                <a href={url} target="_blank" rel="noreferrer" className="pill shrink-0 text-subtext0 hover:text-text">↗ New tab</a>
              </div>
              <ReadingPane md={data.markdown ?? ""} storageKey={`web:${url}`} maxHeight="68vh" />
            </>
          )}
        </div>
      )}
    </div>
  );
}
