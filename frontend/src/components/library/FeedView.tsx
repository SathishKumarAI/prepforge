import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ExternalLink, Plus, RotateCw } from "lucide-react";
import { Chip } from "@/components/ui/chip";
import { ArticleReader } from "../ArticleReader";
import { TopicBadge } from "../Badge";
import { Empty, Loader } from "../States";
import { Button } from "../ui/button";
import { addFeed, addResource, fetchResources, ingestLibrary, ingestVault, quizFromResource, refreshResources } from "../../lib/api";
import { reloadQuestions } from "../../hooks/useQuestions";
import { toast } from "../ui/sonner";
import type { Resource } from "../../lib/types";

/**
 * `onCounts` exists so the Library shell can put real numbers in the orient bar
 * without fetching the feed a second time. The alternative was a bar showing an
 * em dash on a view that has the data three lines away.
 */
export function FeedView({ onCounts }: { onCounts?: (c: { total: number; videos: number }) => void }) {
  const [items, setItems] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [kind, setKind] = useState<string | null>(null);
  const [addUrl, setAddUrl] = useState("");
  const [adding, setAdding] = useState(false);
  const [reading, setReading] = useState<Resource | null>(null);
  const [showFeed, setShowFeed] = useState(false);
  const [feedUrl, setFeedUrl] = useState("");
  const [vaultBusy, setVaultBusy] = useState(false);
  const [genMode, setGenMode] = useState<"deterministic" | "ollama" | "claude">("deterministic");
  const [genBusy, setGenBusy] = useState(false);

  useEffect(() => {
    fetchResources()
      .then((d) => setItems(d.resources))
      .catch(() => toast.error("Backend not reachable — start it on port 8787."))
      .finally(() => setLoading(false));
  }, []);

  async function refresh() {
    setRefreshing(true);
    try {
      const r = await refreshResources();
      const d = await fetchResources();
      setItems(d.resources);
      toast.success(`Pulled ${r.count} resources`);
    } catch {
      toast.error("Refresh failed — is the backend running?");
    } finally {
      setRefreshing(false);
    }
  }

  async function add() {
    const url = addUrl.trim();
    if (!url) return;
    setAdding(true);
    try {
      const r = await addResource(url);
      if (r.error) {
        toast.error(r.message ?? "That URL could not be saved.");
      } else {
        const d = await fetchResources();
        setItems(d.resources);
        setAddUrl("");
        toast.success("Saved to your resources.");
      }
    } catch {
      toast.error("Save failed — is the backend running?");
    } finally {
      setAdding(false);
    }
  }

  async function saveFeed() {
    const url = feedUrl.trim();
    if (!url) return;
    try {
      const r = await addFeed(url);
      if (r.error) {
        toast.error(r.message ?? "That does not look like a feed URL.");
      } else {
        toast.success(r.message ?? "Subscribed. New posts arrive on the next refresh.");
        setFeedUrl("");
      }
    } catch {
      toast.error("Subscribe failed — is the backend running?");
    }
  }

  async function runVault() {
    setVaultBusy(true);
    const t = toast.loading("Scanning your vault — PDF extraction takes about a minute.");
    try {
      const r = await ingestVault();
      if (r.error) {
        toast.error(r.message ?? "Vault ingest failed.", { id: t });
      } else {
        toast.success(
          `Ingested ${r.questions} questions from ${r.files_scanned} documents.`,
          { id: t, description: "Reload to study them.", duration: 6000 },
        );
      }
    } catch {
      toast.error("Vault ingest failed — is the backend running?", { id: t });
    } finally {
      setVaultBusy(false);
    }
  }

  async function generateQA() {
    setGenBusy(true);
    try {
      const r = await ingestLibrary(genMode);
      if (r.error) toast.error(r.error);
      else
        toast.success(
          `Generated ${r.cards} cards from ${r.files} saved docs (${r.mode}${r.model_cards ? `, ${r.model_cards} by model` : ""}). Reload to study.`,
          { duration: 6000 }
        );
    } catch {
      toast.error("Generation failed — is the backend running?");
    } finally {
      setGenBusy(false);
    }
  }

  const filtered = useMemo(
    () => (kind ? items.filter((i) => i.kind === kind) : items),
    [items, kind]
  );

  const videos = items.filter((i) => i.kind === "video").length;

  // Report upward whenever the list changes, not just on first load — refresh
  // and add both mutate it.
  useEffect(() => {
    onCounts?.({ total: items.length, videos });
  }, [items.length, videos, onCounts]);

  return (
    <>
      <div className="mb-4 flex justify-end">
        <Button variant="ghost" size="sm" onClick={refresh} disabled={refreshing}>
          <RotateCw aria-hidden="true" className={refreshing ? "animate-spin" : ""} />
          {refreshing ? "Pulling" : "Refresh"}
        </Button>
      </div>
      <ArticleReader resource={reading} onClose={() => setReading(null)} />

      <div className="mb-2 flex flex-wrap items-end gap-2">
        <label className="field">
          <span className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
            Save a video or article
          </span>
          <input
            value={addUrl}
            onChange={(e) => setAddUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="https://youtube.com/watch?v=..."
            className="input h-9"
          />
        </label>
        <Button variant="primary" onClick={add} disabled={adding || !addUrl.trim()}>
          <Plus aria-hidden="true" />
          {adding ? "Saving" : "Save"}
        </Button>
      </div>
      <p className="mb-6 max-w-prose text-small text-overlay1">
        Refresh pulls whatever the feeds in{" "}
        <code className="rounded border border-surface0 bg-crust px-1 font-mono text-micro">
          backend/config/sources.yaml
        </code>{" "}
        have published since last time.
      </p>

      {/* One disclosure for the bulk operations. These were four stacked
          blocks, each with its own differently-tinted button, so nothing on
          the page looked more important than anything else. */}
      <details
        className="mb-6 border-y border-surface0 py-2"
        open={showFeed}
        onToggle={(e) => setShowFeed((e.currentTarget as HTMLDetailsElement).open)}
      >
        <summary className="flex cursor-pointer list-none items-center gap-2 text-small text-overlay1 hover:text-subtext0 [&::-webkit-details-marker]:hidden">
          <ChevronRight
            aria-hidden="true"
            className={`size-3.5 transition-transform duration-150 ${showFeed ? "rotate-90" : ""}`}
          />
          Subscribe to a feed, or build cards in bulk
        </summary>

        <div className="mt-4 flex flex-col gap-5">
          <div>
            <div className="flex flex-wrap items-end gap-2">
              <label className="field">
                <span className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
                  RSS or Substack feed
                </span>
                <input
                  value={feedUrl}
                  onChange={(e) => setFeedUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveFeed()}
                  placeholder="yourpub.substack.com"
                  className="input h-9"
                />
              </label>
              <Button variant="secondary" onClick={saveFeed} disabled={!feedUrl.trim()}>
                Subscribe
              </Button>
            </div>
            <p className="mt-1.5 max-w-prose text-micro text-overlay1">
              Free posts and previews arrive on the next refresh. Paywalled full text needs your
              own login and will not be fetched.
            </p>
          </div>

          <div>
            <Button variant="secondary" onClick={runVault} disabled={vaultBusy}>
              {vaultBusy ? "Scanning your vault" : "Ingest Obsidian vault"}
            </Button>
            <p className="mt-1.5 max-w-prose text-micro text-overlay1">
              Scans the interview notes and PDFs listed in{" "}
              <code className="rounded border border-surface0 bg-crust px-1 font-mono">
                config/vault.yaml
              </code>{" "}
              into deduplicated questions with source links. PDF extraction can take about a
              minute.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-end gap-2">
              <label className="field">
                <span className="mb-1.5 block text-micro font-semibold uppercase tracking-[0.14em] text-overlay1">
                  Card generator
                </span>
                <select
                  value={genMode}
                  onChange={(e) => setGenMode(e.target.value as typeof genMode)}
                  className="input h-9"
                >
                  <option value="deterministic">Offline (no model)</option>
                  <option value="ollama">Local model via Ollama</option>
                  <option value="claude">Claude (needs an API key)</option>
                </select>
              </label>
              <Button variant="secondary" onClick={generateQA} disabled={genBusy}>
                {genBusy ? "Generating" : "Generate cards"}
              </Button>
            </div>
            <p className="mt-1.5 max-w-prose text-micro text-overlay1">
              Turns everything already saved in your library into study cards.
            </p>
          </div>
        </div>
      </details>

      <div className="mb-5 flex flex-wrap items-center gap-1.5">
        <Chip active={!kind} onClick={() => setKind(null)} label="All" count={items.length} />
        <Chip
          active={kind === "video"}
          onClick={() => setKind("video")}
          label="Videos"
          count={videos}
        />
        <Chip
          active={kind === "article"}
          onClick={() => setKind("article")}
          label="Articles"
          count={items.length - videos}
        />
      </div>

      {loading ? (
        <Loader label="Loading feed" />
      ) : filtered.length === 0 ? (
        <Empty
          title="Nothing saved yet. Refresh pulls from your configured feeds, or paste a URL above."
          action={
            <Button variant="secondary" size="sm" onClick={refresh} disabled={refreshing}>
              Refresh now
            </Button>
          }
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} r={r} onOpen={() => setReading(r)} />
          ))}
        </div>
      )}
    </>
  );
}

function ResourceCard({ r, onOpen }: { r: Resource; onOpen: () => void }) {
  const navigate = useNavigate();
  const [quizzing, setQuizzing] = useState(false);

  async function makeQuiz(e: React.MouseEvent) {
    e.stopPropagation();
    if (quizzing || !r.url) return;
    setQuizzing(true);
    const t = toast.loading(`Building a quiz from “${r.title}”…`);
    try {
      const res = await quizFromResource(r.url, r.topic);
      if (res.error) {
        toast.error(res.message ?? "Couldn't build a quiz from this resource.", { id: t });
        return;
      }
      await reloadQuestions();
      toast.success(`Quiz ready · ${res.synth_quizzes ?? 0} questions`, {
        id: t,
        description: "Opening the quiz, scoped to this resource.",
      });
      navigate("/quiz");
    } catch {
      toast.error("Failed — is the backend running?", { id: t });
    } finally {
      setQuizzing(false);
    }
  }

  return (
    <article className="panel group flex flex-col overflow-hidden transition-colors duration-100 hover:border-surface1">
      {/* The thumbnail is the button, so the card is not a giant click target
          that swallows the links inside it. */}
      <button onClick={onOpen} className="block text-left">
        {r.thumbnail ? (
          <div className="aspect-video overflow-hidden bg-crust">
            <img src={r.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex aspect-[4/1] items-center justify-center border-b border-surface0 bg-crust">
            <span className="text-micro uppercase tracking-[0.14em] text-overlay0">{r.kind}</span>
          </div>
        )}
      </button>

      <div className="flex flex-1 flex-col p-3.5">
        <TopicBadge topic={r.topic} />
        <h3 className="mb-1.5 mt-1.5 text-small font-medium leading-snug text-text">
          <button onClick={onOpen} className="text-left hover:underline">
            {r.title}
          </button>
        </h3>
        {r.summary && <p className="line-clamp-2 text-micro text-overlay1">{r.summary}</p>}

        <div className="mt-2 flex items-center gap-2 text-micro text-overlay0">
          <span className="truncate">{r.source}</span>
          {r.published && <span className="shrink-0 tabular-nums">{r.published.slice(0, 10)}</span>}
        </div>

        <div className="mt-2.5 flex items-center gap-1 border-t border-surface0 pt-2">
          <Button variant="ghost" size="sm" onClick={makeQuiz} disabled={quizzing}>
            {quizzing ? "Building" : "Make a quiz"}
          </Button>
          <Button asChild variant="ghost" size="icon" className="ml-auto">
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open "${r.title}" in a new tab`}
            >
              <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

