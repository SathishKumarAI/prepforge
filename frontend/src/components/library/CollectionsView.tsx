import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Plus } from "lucide-react";
import { SourceDoc } from "../SourceDoc";
import { Empty, Loader } from "../States";
import { Button } from "../ui/button";
import { addGithubSource, fetchSources, quizFromResource, type LibraryCollection } from "../../lib/api";
import { reloadQuestions } from "../../hooks/useQuestions";
import { toast } from "../ui/sonner";
import type { VaultSource } from "../../lib/types";

// Everything you have pulled in to study from: cloned repos, captured pages, uploads.
// One box adds more — a repo URL is cloned, any other URL is read into the library.
// Both end up as cards through the same zero-token ingest.

const GIT_HOSTS = ["github.com", "gitlab.com", "codeberg.org", "bitbucket.org"];

/** A repo URL is host + /owner/repo; anything else is treated as a page to read. */
function isRepoUrl(raw: string): boolean {
  const url = raw.trim().replace(/^https?:\/\//, "");
  const [host, ...path] = url.split("/").filter(Boolean);
  return GIT_HOSTS.includes(host?.toLowerCase() ?? "") && path.length >= 2;
}

const SUGGESTED = [
  "https://github.com/ByteByteGoHq/system-design-101",
  "https://github.com/Anshul619/HLD-System-Designs",
  "https://github.com/ombharatiya/AI-Engineer-Interview-Questions",
];

export function CollectionsView() {
  const [data, setData] = useState<{ collections: LibraryCollection[]; docs: number; cards: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [reading, setReading] = useState<VaultSource | null>(null);

  async function load() {
    try {
      setData(await fetchSources());
    } catch {
      toast.error("Backend not reachable — start it on port 8787.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { load(); }, []);

  async function add(raw?: string) {
    const value = (raw ?? url).trim();
    if (!value || busy) return;
    setBusy(true);
    const repo = isRepoUrl(value);
    const t = toast.loading(repo ? "Cloning and ingesting…" : "Reading the page into your library…");
    try {
      if (repo) {
        const r = await addGithubSource(value);
        if (r.error) {
          toast.error(r.message ?? "Could not add that repo.", { id: t });
          return;
        }
        toast.success(
          r.existing ? r.message! : `Added ${r.name} · ${r.docs} docs → ${r.cards} cards`,
          { id: t, description: r.existing ? "Nothing re-cloned." : "Ready to study and quiz." }
        );
      } else {
        // any other URL: the same path a resource takes — fetch, save, ingest
        const r = await quizFromResource(value);
        if (r.error) {
          toast.error(r.message ?? "Could not read that page.", { id: t });
          return;
        }
        toast.success(`Added “${r.title ?? value}”`, { id: t, description: `${r.synth_quizzes ?? 0} questions ready.` });
      }
      setUrl("");
      await Promise.all([load(), reloadQuestions()]);
    } catch {
      toast.error("Failed — is the backend running?", { id: t });
    } finally {
      setBusy(false);
    }
  }

  const unused = useMemo(
    () => SUGGESTED.filter((s) => !data?.collections.some((c) => s.toLowerCase().endsWith(c.name.toLowerCase()))),
    [data]
  );

  return (
    <>
      <SourceDoc source={reading} onClose={() => setReading(null)} />

      <div className="mb-2 flex flex-wrap items-end gap-2">
        <label className="field">
          <span className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            Repository or article URL
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="github.com/owner/repo"
            className="input h-9"
          />
        </label>
        <Button variant="primary" onClick={() => add()} disabled={busy || !url.trim()}>
          <Plus aria-hidden="true" />
          {busy ? "Adding" : "Add source"}
        </Button>
      </div>
      <p className="mb-6 max-w-prose text-small text-overlay1">
        A repository of Markdown is cloned shallow into{" "}
        <code className="rounded border border-surface0 bg-crust px-1 font-mono text-micro">
          content/library/
        </code>{" "}
        and stays on your machine. Any other URL is fetched as an article. Both become cards and
        quizzes offline, with no API key.
      </p>

      {unused.length > 0 && (
        <div className="mb-7">
          <h2 className="mb-2 text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            Suggested
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {unused.map((s) => (
              <Button key={s} variant="outline" size="sm" onClick={() => add(s)} disabled={busy}>
                <Plus aria-hidden="true" />
                {s.replace("https://github.com/", "")}
              </Button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <Loader label="Reading your library" />
      ) : !data?.collections.length ? (
        <Empty title="Your library is empty. Paste a repository of Markdown above — the suggestions are a good start." />
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          {data.collections.map((c) => (
            <CollectionCard
              key={c.name}
              c={c}
              onOpenDoc={(path, title) => setReading({ path, title, kind: "library" })}
            />
          ))}
        </div>
      )}
    </>
  );
}

const KIND_LABEL: Record<LibraryCollection["kind"], string> = {
  repo: "git repo",
  folder: "folder",
  captured: "captured",
};

function CollectionCard({
  c,
  onOpenDoc,
}: {
  c: LibraryCollection;
  onOpenDoc: (path: string, title: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const shown = open ? c.files : c.files.slice(0, 5);

  // A genuine raised card: a collection is a thing with its own actions and its
  // own state, which is exactly what a card is for.
  return (
    <article className="panel flex flex-col p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-small font-medium text-text">{c.name}</h3>
          <p className="mt-0.5 text-micro text-overlay1">
            {KIND_LABEL[c.kind]} · <span className="tabular-nums">{c.docs}</span> docs ·{" "}
            <span className="tabular-nums">{c.cards.toLocaleString()}</span> cards
          </p>
        </div>
        {c.url && (
          <Button asChild variant="ghost" size="icon" className="shrink-0">
            <a href={c.url} target="_blank" rel="noreferrer" aria-label={`Open ${c.name} on the web`}>
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        )}
      </div>

      <ul className="mb-2 flex flex-col gap-px">
        {shown.map((f) => (
          <li key={f}>
            <button
              onClick={() => onOpenDoc(f, f.split("/").pop() ?? f)}
              className="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left text-micro text-subtext0 transition-colors duration-100 hover:bg-surface0 hover:text-text"
              title={f}
            >
              <FileText aria-hidden="true" className="size-3 shrink-0 text-overlay0" />
              <span className="truncate">{f.replace(`${c.name}/`, "")}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-1 border-t border-surface0 pt-2">
        {c.files.length > 5 && (
          <Button variant="ghost" size="sm" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? "Show fewer" : `Show all ${c.files.length}`}
          </Button>
        )}
        <Button asChild variant="ghost" size="sm" className="ml-auto">
          <Link to="/study?mode=quiz">Quiz on this</Link>
        </Button>
      </div>
    </article>
  );
}
