import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { TopicBadge } from "../components/Badge";
import { Empty, Loader } from "../components/States";
import { addResource, fetchResources, refreshResources } from "../lib/api";
import type { Resource } from "../lib/types";

export function Resources() {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [kind, setKind] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [addUrl, setAddUrl] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchResources()
      .then((d) => setItems(d.resources))
      .catch(() => setMsg("Backend not reachable"))
      .finally(() => setLoading(false));
  }, []);

  async function refresh() {
    setRefreshing(true);
    setMsg(null);
    try {
      const r = await refreshResources();
      const d = await fetchResources();
      setItems(d.resources);
      setMsg(`Pulled ${r.count} resources`);
    } catch {
      setMsg("Refresh failed — is the backend running?");
    } finally {
      setRefreshing(false);
    }
  }

  async function add() {
    const url = addUrl.trim();
    if (!url) return;
    setAdding(true);
    setMsg(null);
    try {
      const r = await addResource(url);
      if (r.error) {
        setMsg(r.message ?? "Could not add that URL.");
      } else {
        const d = await fetchResources();
        setItems(d.resources);
        setAddUrl("");
        setMsg("Added.");
      }
    } catch {
      setMsg("Add failed — is the backend running?");
    } finally {
      setAdding(false);
    }
  }

  const filtered = useMemo(
    () => (kind ? items.filter((i) => i.kind === kind) : items),
    [items, kind]
  );

  return (
    <div>
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-text">Resource feed</h1>
          <p className="mt-1 max-w-lg text-sm text-subtext0">
            Live-aggregated from YouTube, blog RSS, and scraped articles. Configure sources in{" "}
            <code className="rounded bg-crust px-1.5 py-0.5 font-mono text-xs text-peach">
              backend/config/sources.yaml
            </code>
            .
          </p>
        </div>
        <button
          onClick={refresh}
          disabled={refreshing}
          className="flex items-center gap-2 rounded-xl border border-mauve/40 bg-mauve/10 px-4 py-2.5 text-sm font-medium text-text transition-colors hover:bg-mauve/20 disabled:opacity-50"
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={refreshing ? "animate-spin" : ""}
          >
            <path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {refreshing ? "Pulling…" : "Refresh"}
        </button>
      </header>

      {msg && <div className="mb-4 font-mono text-xs text-teal">{msg}</div>}

      {/* manual add by URL — paste a YouTube link or article */}
      <div className="mb-5 flex gap-2">
        <input
          value={addUrl}
          onChange={(e) => setAddUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Paste a YouTube or article URL to save…"
          className="input flex-1 font-mono"
        />
        <button
          onClick={add}
          disabled={adding || !addUrl.trim()}
          className="rounded-xl border border-teal/40 bg-teal/10 px-4 py-2.5 text-sm font-medium text-teal hover:bg-teal/20 disabled:opacity-40"
        >
          {adding ? "Adding…" : "+ Add"}
        </button>
      </div>

      <div className="mb-6 flex gap-2">
        <Pill active={!kind} onClick={() => setKind(null)} label="All" />
        <Pill active={kind === "video"} onClick={() => setKind("video")} label="Videos" />
        <Pill active={kind === "article"} onClick={() => setKind("article")} label="Articles" />
      </div>

      {loading ? (
        <Loader label="Loading feed" />
      ) : filtered.length === 0 ? (
        <Empty title="No resources yet" hint="Hit Refresh to aggregate from your configured sources." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((r, i) => (
            <ResourceCard key={r.id} r={r} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

function ResourceCard({ r, index }: { r: Resource; index: number }) {
  return (
    <motion.a
      href={r.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      className="glass group flex flex-col overflow-hidden rounded-2xl shadow-card transition-transform hover:-translate-y-0.5"
    >
      {r.thumbnail ? (
        <div className="relative aspect-video overflow-hidden bg-crust">
          <img src={r.thumbnail} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-md bg-crust/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-red backdrop-blur">
            ▶ video
          </span>
        </div>
      ) : (
        <div className="flex aspect-[3/1] items-center justify-center bg-gradient-to-br from-surface0/60 to-mantle">
          <span className="font-mono text-[10px] uppercase tracking-widest text-overlay0">
            {r.kind === "video" ? "▶ video" : "◆ article"}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <TopicBadge topic={r.topic} />
        </div>
        <h3 className="mb-1.5 font-display text-base font-medium leading-snug text-text group-hover:text-mauve">
          {r.title}
        </h3>
        {r.summary && <p className="line-clamp-3 text-sm text-subtext0">{r.summary}</p>}
        <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-overlay0">
          <span className="text-subtext0">{r.source}</span>
          {r.published && <span>· {r.published.slice(0, 10)}</span>}
        </div>
      </div>
    </motion.a>
  );
}

function Pill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`pill transition-all ${
        active ? "border-mauve/40 bg-mauve/10 text-text" : "text-subtext0 hover:text-subtext1"
      }`}
    >
      {label}
    </button>
  );
}
