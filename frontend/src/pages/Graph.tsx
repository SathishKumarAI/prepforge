import { useMemo, useState } from "react";
import { Chip } from "@/components/ui/chip";
import { Empty, Loader } from "../components/States";
import { useNotes } from "../hooks/useNotes";
import { useQuestions } from "../hooks/useQuestions";
import { layout, learningGraph, notesGraph, type GNode } from "../lib/graph";
import { ACCENT_HEX } from "../lib/topics";

const W = 1000;
const H = 680;
const MAX_NODES = 240; // keep the force layout fast + readable (Obsidian-like clusters)

type Mode = "notes" | "learning";

export function Graph() {
  const { notes } = useNotes();
  const { questions, loading } = useQuestions();
  const [mode, setMode] = useState<Mode>(notes.length ? "notes" : "learning");
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  function switchMode(m: Mode) {
    setMode(m);
    setSelected(null);
    setTopicFilter(null);
  }

  const topicOptions = useMemo(() => {
    const src =
      mode === "notes"
        ? (notes.map((n) => n.topic).filter(Boolean) as string[])
        : questions.map((q) => q.topic);
    return Array.from(new Set(src)).sort();
  }, [mode, notes, questions]);

  const { graph, capped, total } = useMemo(() => {
    if (mode === "notes") {
      const ns = topicFilter ? notes.filter((n) => n.topic === topicFilter) : notes;
      return { graph: notesGraph(ns), capped: false, total: ns.length };
    }
    let qs = topicFilter ? questions.filter((q) => q.topic === topicFilter) : questions;
    const t = qs.length;
    const cap = qs.length > MAX_NODES;
    if (cap) qs = qs.slice(0, MAX_NODES);
    return { graph: learningGraph(qs), capped: cap, total: t };
  }, [mode, notes, questions, topicFilter]);
  const { positions } = useMemo(() => layout(graph, W, H), [graph]);

  if (loading) return <Loader label="Building graph" />;

  const nodeById = new Map(graph.nodes.map((n) => [n.id, n]));
  // neighbor set for highlight
  const focus = selected ?? hover;
  const neighbors = new Set<string>();
  if (focus) {
    neighbors.add(focus);
    for (const e of graph.edges) {
      if (e.a === focus) neighbors.add(e.b);
      if (e.b === focus) neighbors.add(e.a);
    }
  }

  const size = (n: GNode) => (n.kind === "topic" ? 11 : n.kind === "question" ? 6 : 7);

  return (
    <div>
      <header className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-h1 font-semibold text-text">Graph</h1>
          <p className="mt-1 text-sm text-subtext0">
            {mode === "notes"
              ? "Your notes linked by tags & [[wikilinks]]."
              : "Questions sequenced by topic & prerequisite (easier → harder)."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Chip active={mode === "notes"} onClick={() => switchMode("notes")} label="Notes" />
          <Chip active={mode === "learning"} onClick={() => switchMode("learning")} label="Learning" />
          {topicOptions.length > 1 && (
            <select
              value={topicFilter ?? ""}
              onChange={(e) => { setTopicFilter(e.target.value || null); setSelected(null); }}
              className="input w-auto py-1.5 text-xs"
            >
              <option value="">All topics</option>
              {topicOptions.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          )}
        </div>
      </header>

      {graph.nodes.length === 0 ? (
        <Empty
          title={mode === "notes" ? "No notes to graph yet" : "No questions loaded"}
          hint={mode === "notes" ? "Add notes with tags or [[links]] to see them connect." : undefined}
        />
      ) : (
        <div className="glass overflow-hidden rounded-2xl shadow-card">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-[68vh] w-full" onClick={() => setSelected(null)}>
            {/* edges */}
            {graph.edges.map((e, i) => {
              const a = positions[e.a], b = positions[e.b];
              if (!a || !b) return null;
              const active = focus ? neighbors.has(e.a) && neighbors.has(e.b) : false;
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={active ? "#cba6f7" : "#45475a"}
                  strokeWidth={active ? 1.4 : 0.6}
                  strokeOpacity={focus && !active ? 0.15 : 0.5}
                />
              );
            })}
            {/* nodes */}
            {graph.nodes.map((n) => {
              const p = positions[n.id];
              if (!p) return null;
              const dim = focus && !neighbors.has(n.id);
              const showLabel = n.kind === "topic" || focus === n.id || (focus && neighbors.has(n.id));
              return (
                <g
                  key={n.id}
                  transform={`translate(${p.x},${p.y})`}
                  className="cursor-pointer"
                  opacity={dim ? 0.25 : 1}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                  onClick={(ev) => { ev.stopPropagation(); setSelected(n.id === selected ? null : n.id); }}
                >
                  <circle
                    r={size(n)}
                    fill={ACCENT_HEX[n.color] ?? "#cba6f7"}
                    stroke={selected === n.id ? "#fff" : "#11111b"}
                    strokeWidth={selected === n.id ? 2 : 1}
                  />
                  {showLabel && (
                    <text
                      x={size(n) + 4}
                      y={4}
                      fontSize={n.kind === "topic" ? 13 : 11}
                      fill="#cdd6f4"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {n.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-2 font-mono text-[11px] text-overlay0">
            <span>
              {graph.nodes.length} nodes · {graph.edges.length} links
              {capped && <span className="text-peach"> · showing first {MAX_NODES} of {total} — filter by topic to focus</span>}
            </span>
            {selected && nodeById.get(selected) && (
              <span className="text-subtext1">
                {nodeById.get(selected)!.label} · {neighbors.size - 1} connection{neighbors.size - 1 !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

