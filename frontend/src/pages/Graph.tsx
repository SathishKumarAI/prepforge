import { useMemo, useState } from "react";
import { Chip } from "@/components/ui/chip";
import { Empty, Loader } from "../components/States";
import { Page } from "../components/page/PageLayout";
import { Orient, Fact } from "../components/page/Orient";
import { useNotes } from "../hooks/useNotes";
import { useQuestions } from "../hooks/useQuestions";
import { useThemeColors } from "../hooks/useThemeColors";
import { layout, learningGraph, notesGraph, type GNode } from "../lib/graph";
import { ACCENT_HEX } from "../lib/topics";

const W = 1000;
const H = 680;
const MAX_NODES = 240; // keep the force layout fast + readable (Obsidian-like clusters)

type Mode = "notes" | "learning";

export function Graph() {
  const { notes } = useNotes();
  const { questions, loading } = useQuestions();
  const theme = useThemeColors();
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
    <Page
      title="Graph"
      orient={
        <Orient>
          <Fact label="nodes" value={graph.nodes.length || null} emphasis={graph.nodes.length > 0} />
          <Fact label="links" value={graph.edges.length || null} />
          <Fact label={mode === "notes" ? "notes" : "questions"} value={total || null} />
        </Orient>
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-1.5">
        <Chip active={mode === "notes"} onClick={() => switchMode("notes")} label="Notes" />
        <Chip active={mode === "learning"} onClick={() => switchMode("learning")} label="Learning" />
        {topicOptions.length > 1 && (
          <>
            <span className="mx-1 h-4 w-px bg-surface0" />
            <select
              value={topicFilter ?? ""}
              onChange={(e) => {
                setTopicFilter(e.target.value || null);
                setSelected(null);
              }}
              aria-label="Filter by topic"
              className="input h-8 w-auto py-0 text-micro"
            >
              <option value="">All topics</option>
              {topicOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <p className="mb-5 max-w-prose text-small text-overlay1">
        {mode === "notes"
          ? "Your notes, linked by their #tags and [[wikilinks]]. Click a node to isolate what it touches."
          : "Questions sequenced by topic and prerequisite, easier to harder. Click a node to isolate what it touches."}
      </p>

      {graph.nodes.length === 0 ? (
        <Empty
          title={
            mode === "notes"
              ? "Nothing to graph yet. Notes connect once they share a #tag or a [[link]]."
              : "No questions loaded."
          }
        />
      ) : (
        <div className="panel overflow-hidden">
          {/* Colours come from the live theme, not literals. This SVG shipped
              with four hardcoded Catppuccin Mocha hexes, which were wrong in
              the other four themes and are wrong in the current default. */}
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-[68vh] w-full"
            role="img"
            aria-label={`${mode === "notes" ? "Note" : "Question"} graph: ${graph.nodes.length} nodes, ${graph.edges.length} links. The list below the graph carries the same content.`}
            onClick={() => setSelected(null)}
          >
            {/* edges */}
            {graph.edges.map((e, i) => {
              const a = positions[e.a], b = positions[e.b];
              if (!a || !b) return null;
              const active = focus ? neighbors.has(e.a) && neighbors.has(e.b) : false;
              return (
                <line
                  key={i}
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={active ? theme.mauve : theme.surface1}
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
                    fill={ACCENT_HEX[n.color] ?? theme.mauve}
                    stroke={selected === n.id ? theme.text : theme.base}
                    strokeWidth={selected === n.id ? 2 : 1}
                  />
                  {showLabel && (
                    <text
                      x={size(n) + 4}
                      y={4}
                      fontSize={n.kind === "topic" ? 13 : 11}
                      fill={theme.subtext0}
                      fontFamily="Public Sans, system-ui, sans-serif"
                    >
                      {n.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-surface0 px-4 py-2 text-micro text-overlay1">
            <span>
              {capped ? (
                <>
                  Showing the first <span className="tabular-nums">{MAX_NODES}</span> of{" "}
                  <span className="tabular-nums">{total}</span> — filter by topic to see the rest.
                </>
              ) : (
                <>Click a node to isolate it.</>
              )}
            </span>
            {selected && nodeById.get(selected) && (
              <span className="text-subtext0">
                {nodeById.get(selected)!.label} ·{" "}
                <span className="tabular-nums">{neighbors.size - 1}</span> connection
                {neighbors.size - 1 !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      )}

      {/* The graph is a picture; this is the same content as text. Without it
          the whole feature is unavailable to a screen reader, and it doubles
          as a way to find a node by name rather than by hunting the canvas. */}
      {graph.nodes.length > 0 && (
        <details className="mt-4 border-t border-surface0 pt-3">
          <summary className="cursor-pointer text-small text-overlay1 hover:text-subtext0">
            List all {graph.nodes.length} nodes
          </summary>
          <ul className="mt-2 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {graph.nodes.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => setSelected(n.id === selected ? null : n.id)}
                  className={`w-full truncate rounded px-1.5 py-1 text-left text-small transition-colors duration-100 hover:bg-surface0 ${
                    selected === n.id ? "text-text" : "text-subtext0"
                  }`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}
    </Page>
  );
}

