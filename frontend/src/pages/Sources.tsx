import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SourceDoc } from "../components/SourceDoc";
import { Empty, Loader } from "../components/States";
import { addGithubSource, fetchSources, quizFromResource, type LibraryCollection } from "../lib/api";
import { reloadQuestions } from "../hooks/useQuestions";
import { toast } from "../components/ui/sonner";
import type { VaultSource } from "../lib/types";

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

export function Sources() {
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
    <div>
      <SourceDoc source={reading} onClose={() => setReading(null)} />

      <header className="mb-6">
        <h1 className="font-display text-h1 font-semibold text-text">Sources</h1>
        <p className="mt-1 max-w-xl text-sm text-subtext0">
          Everything you study from. Add a GitHub repo of Markdown — or any article URL — and it
          becomes flashcards and quizzes, offline, with no API key.
        </p>
        {data && (
          <div className="mt-3 flex gap-5 font-mono text-[11px] text-overlay0">
            <span><b className="text-mauve">{data.collections.length}</b> collections</span>
            <span><b className="text-teal">{data.docs}</b> documents</span>
            <span><b className="text-peach">{data.cards.toLocaleString()}</b> cards</span>
          </div>
        )}
      </header>

      <div className="mb-2 flex gap-2">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="github.com/owner/repo  —  or any article URL…"
          className="input flex-1 font-mono"
        />
        <button
          onClick={() => add()}
          disabled={busy || !url.trim()}
          className="rounded-xl border border-mauve/40 bg-mauve/10 px-4 py-2.5 text-sm font-medium text-mauve transition-colors hover:bg-mauve/20 disabled:opacity-40"
        >
          {busy ? "Working…" : "+ Add source"}
        </button>
      </div>
      <p className="mb-6 font-mono text-[11px] text-overlay0">
        Repos are cloned shallow into <code className="text-subtext0">content/library/</code> and stay on your machine.
      </p>

      {unused.length > 0 && (
        <div className="mb-7">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-overlay0">Suggested</div>
          <div className="flex flex-wrap gap-2">
            {unused.map((s) => (
              <button
                key={s}
                onClick={() => add(s)}
                disabled={busy}
                className="rounded-full border border-white/10 bg-surface0/40 px-3 py-1.5 font-mono text-[11px] text-subtext0 transition-colors hover:border-mauve/40 hover:text-text disabled:opacity-40"
              >
                + {s.replace("https://github.com/", "")}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <Loader label="Reading your library" />
      ) : !data?.collections.length ? (
        <Empty title="Nothing in your library yet" hint="Paste a GitHub repo of Markdown above — the suggestions are a good start." />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {data.collections.map((c, i) => (
            <CollectionCard key={c.name} c={c} index={i} onOpenDoc={(path, title) => setReading({ path, title, kind: "library" })} />
          ))}
        </div>
      )}
    </div>
  );
}

const KIND_LABEL: Record<LibraryCollection["kind"], string> = {
  repo: "git repo",
  folder: "folder",
  captured: "captured",
};

function CollectionCard({
  c,
  index,
  onOpenDoc,
}: {
  c: LibraryCollection;
  index: number;
  onOpenDoc: (path: string, title: string) => void;
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const shown = open ? c.files : c.files.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="glass flex flex-col rounded-2xl p-5 shadow-card"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-medium text-text">{c.name}</h3>
          <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-overlay0">
            <span className="rounded bg-surface0/60 px-1.5 py-0.5 text-subtext0">{KIND_LABEL[c.kind]}</span>
            <span>{c.docs} docs</span>
            <span>· {c.cards.toLocaleString()} cards</span>
          </div>
        </div>
        {c.url && (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            title="Open the repository"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-crust/80 text-subtext0 transition-colors hover:text-text"
          >
            ↗
          </a>
        )}
      </div>

      <ul className="mb-3 flex flex-col gap-0.5">
        {shown.map((f) => (
          <li key={f}>
            <button
              onClick={() => onOpenDoc(f, f.split("/").pop() ?? f)}
              className="w-full truncate rounded-lg px-2 py-1 text-left font-mono text-[11px] text-subtext0 transition-colors hover:bg-surface0/60 hover:text-text"
              title={f}
            >
              {f.replace(`${c.name}/`, "")}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-3 font-mono text-[11px]">
        {c.files.length > 5 && (
          <button onClick={() => setOpen((v) => !v)} className="text-sapphire hover:underline">
            {open ? "show less" : `+ ${c.files.length - 5} more`}
          </button>
        )}
        <button
          onClick={() => navigate("/quiz")}
          className="ml-auto text-mauve hover:underline"
          title="Pick this collection's docs under “Quiz from a specific source”"
        >
          quiz these →
        </button>
      </div>
    </motion.div>
  );
}
