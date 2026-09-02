import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ExternalLink, FileUp } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { Page } from "../components/page/PageLayout";
import { ReadingPane } from "../components/ReadingPane";
import { Button } from "../components/ui/button";
import { fetchPdfText, readResource, uploadResource, type ReadResult } from "../lib/api";

// Read-only viewer for local files (PDF native + markdown/text) AND web pages,
// in one page. Nothing is editable — just read. Local PDFs render in the browser's
// native viewer (no upload needed to view); "Add to resources" extracts text into
// the pipeline for revision + the graph.
type Src = "local" | "web";

export function Reader() {
  const [src, setSrc] = useState<Src>("local");

  return (
    <Page title="Reader">
      {/* A reading-tier page: single column at every width, deliberate gutters. */}
      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Chip active={src === "local"} onClick={() => setSrc("local")} label="Local file" />
        <Chip active={src === "web"} onClick={() => setSrc("web")} label="Web page" />
      </div>
      <p className="mb-5 max-w-prose text-small text-overlay1">
        Read a PDF, Markdown file or article here, without leaving the app. Nothing is edited —
        adding it to your library is a separate, explicit step.
      </p>

      {src === "local" ? <LocalReader /> : <WebReader />}
    </Page>
  );
}

/**
 * How a PDF is shown. Two modes, because they answer different questions:
 *
 * - `original` is the browser's own viewer — the real layout, the figures, the
 *   page numbers. It is a plugin document, so the app cannot see inside it: a
 *   passage selected there reaches nothing, and highlight-to-card, the contents
 *   list and search all stop at the iframe boundary.
 * - `text` is the same extraction the library ingest runs, rendered as the app's
 *   own Markdown — which means it is `data-cardable`, so a selection becomes a
 *   card exactly as it does in an answer or an article.
 *
 * Text is the default, because the reason to open a PDF *in here* rather than in
 * a PDF reader is to take something out of it.
 */
type PdfView = "text" | "original";

function LocalReader() {
  const [file, setFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [pdfView, setPdfView] = useState<PdfView>("text");
  const [extracting, setExtracting] = useState(false);
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
      setPdfView("text");
      // Extracted once per file and kept: switching between the two views is a
      // toggle, not a round trip, and the bytes never leave this machine anyway.
      setExtracting(true);
      try {
        const got = await fetchPdfText(f);
        if (got.markdown) setText(got.markdown);
        else {
          // A scanned PDF has no text layer. Say so and fall back to the
          // viewer, rather than showing an empty page that reads as a bug.
          toast.message(got.message ?? "No text layer in that PDF.");
          setPdfView("original");
        }
      } catch {
        toast.error("Could not extract the text — is the backend running?");
        setPdfView("original");
      } finally {
        setExtracting(false);
      }
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
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Button asChild variant="primary">
          <label className="cursor-pointer">
            <FileUp aria-hidden="true" />
            Choose a file
            <input
              type="file"
              accept=".pdf,.md,.markdown,.txt"
              className="sr-only"
              onChange={(e) => pick(e.target.files?.[0] ?? null)}
            />
          </label>
        </Button>
        {file && (
          <>
            <span className="min-w-0 truncate text-small text-subtext0">{file.name}</span>
            <Button variant="secondary" onClick={extract} disabled={busy}>
              {busy ? "Adding" : "Add to library"}
            </Button>
          </>
        )}
      </div>

      {!file && (
        <div className="rounded-lg border border-dashed border-surface0 px-4 py-10">
          <p className="max-w-prose text-small text-overlay1">
            Nothing open. Choose a PDF, Markdown or text file and it renders here — reading it
            does not add it to your library.
          </p>
        </div>
      )}

      {pdfUrl && (
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <Chip
            active={pdfView === "text"}
            onClick={() => setPdfView("text")}
            label={extracting ? "Text — extracting…" : "Text"}
          />
          <Chip active={pdfView === "original"} onClick={() => setPdfView("original")} label="Original" />
          <span className="text-micro text-overlay1">
            {pdfView === "text"
              ? "Select a passage and press c to make a card."
              : "The browser's viewer — the app cannot read a selection in here."}
          </span>
        </div>
      )}

      {pdfUrl && pdfView === "original" && (
        <iframe
          title={file?.name}
          src={pdfUrl}
          className="h-[74vh] w-full rounded-lg border border-surface0 bg-crust"
        />
      )}

      {pdfUrl && pdfView === "text" && text === null && (
        <div className="rounded-lg border border-dashed border-surface0 px-4 py-10">
          <p className="max-w-prose text-small text-overlay1">
            {extracting ? "Reading the text out of that PDF…" : "No text came back — try Original."}
          </p>
        </div>
      )}

      {text !== null && (!pdfUrl || pdfView === "text") && (
        <div className="panel reading-lg p-5 sm:p-7">
          <ReadingPane
            md={text}
            storageKey={`local:${file?.name ?? "doc"}`}
            sourceTitle={file?.name}
          />
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
      <div className="mb-4 flex flex-wrap items-end gap-2">
        <label className="field">
          <span className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            Article or video URL
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
            placeholder="https://example.com/post"
            className="input h-9"
          />
        </label>
        <Button variant="primary" onClick={load} disabled={loading || !url.trim()}>
          {loading ? "Loading" : "Read it"}
        </Button>
      </div>

      {!data && !loading && (
        <div className="rounded-lg border border-dashed border-surface0 px-4 py-10">
          <p className="text-small text-overlay1">
            Paste a link and it is fetched, stripped of navigation and ads, and rendered here.
          </p>
        </div>
      )}

      {data && (
        <div className="panel reading-lg p-5 sm:p-7">
          {data.error ? (
            <p className="text-small text-subtext0">
              {data.message ??
                "That page could not be read. It may need JavaScript, or be behind a login."}
            </p>
          ) : (
            <>
              <div className="mb-4 flex items-start justify-between gap-3 border-b border-surface0 pb-3">
                <h2 className="font-display text-h2 font-medium text-text">{data.title}</h2>
                <Button asChild variant="ghost" size="sm" className="shrink-0">
                  <a href={url} target="_blank" rel="noreferrer">
                    <ExternalLink aria-hidden="true" />
                    Open original
                  </a>
                </Button>
              </div>
              <ReadingPane
                md={data.markdown ?? ""}
                storageKey={`web:${url}`}
                maxHeight="68vh"
                sourceTitle={data.title ?? url}
                sourceHref={url}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
