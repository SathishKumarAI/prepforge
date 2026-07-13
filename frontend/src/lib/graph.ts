// Derive graphs from notes (Obsidian-style) and from questions (prerequisite
// learning graph), plus a compact deterministic force layout. No external deps.
import type { Note } from "./notes";
import type { Question } from "./types";
import { wikilinks } from "./notes";
import { topicColor } from "./topics";

export type GNodeKind = "note" | "topic" | "question";
export interface GNode {
  id: string;
  label: string;
  kind: GNodeKind;
  color: string; // catppuccin accent name
  ref?: string; // original note/question id
}
export interface GEdge {
  a: string;
  b: string;
  kind: "tag" | "link" | "topic" | "prereq";
}
export interface Graph {
  nodes: GNode[];
  edges: GEdge[];
}

function edgeKey(a: string, b: string): string {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

/** Notes graph: notes linked by shared tags, [[wikilinks]], and topic membership. */
export function notesGraph(notes: Note[]): Graph {
  const nodes: GNode[] = [];
  const edges: GEdge[] = [];
  const seenEdge = new Set<string>();
  const byTitle = new Map<string, string>(); // lowercased title -> node id
  const topicNodes = new Set<string>();

  function addEdge(a: string, b: string, kind: GEdge["kind"]) {
    if (a === b) return;
    const k = edgeKey(a, b);
    if (seenEdge.has(k)) return;
    seenEdge.add(k);
    edges.push({ a, b, kind });
  }

  for (const n of notes) {
    nodes.push({
      id: n.id,
      label: n.title || n.body.slice(0, 24) || "untitled",
      kind: "note",
      color: n.color ?? (n.kind === "voice" ? "sky" : "yellow"),
      ref: n.id,
    });
    if (n.title) byTitle.set(n.title.toLowerCase(), n.id);
  }

  // topic membership
  for (const n of notes) {
    if (!n.topic) continue;
    const tid = `topic:${n.topic}`;
    if (!topicNodes.has(tid)) {
      topicNodes.add(tid);
      nodes.push({ id: tid, label: n.topic, kind: "topic", color: topicColor(n.topic) });
    }
    addEdge(n.id, tid, "topic");
  }

  // shared tags (via tag -> notes map, avoids O(n^2) over all pairs blindly)
  const byTag = new Map<string, string[]>();
  for (const n of notes) for (const t of n.tags) {
    const arr = byTag.get(t) ?? [];
    arr.push(n.id);
    byTag.set(t, arr);
  }
  for (const ids of byTag.values()) {
    for (let i = 0; i < ids.length; i++)
      for (let j = i + 1; j < ids.length; j++) addEdge(ids[i], ids[j], "tag");
  }

  // wikilinks
  for (const n of notes) {
    for (const name of wikilinks(n.body)) {
      const target = byTitle.get(name.toLowerCase());
      if (target) addEdge(n.id, target, "link");
    }
  }

  return { nodes, edges };
}

const DIFF_RANK: Record<string, number> = { easy: 0, medium: 1, hard: 2 };

/** Learning graph: questions linked topic→topic and by prerequisite (easier→harder
 *  within a topic when they share a tag). Approximates study order. */
export function learningGraph(questions: Question[]): Graph {
  const nodes: GNode[] = [];
  const edges: GEdge[] = [];
  const seenEdge = new Set<string>();
  const topicNodes = new Set<string>();

  function addEdge(a: string, b: string, kind: GEdge["kind"]) {
    if (a === b) return;
    const k = edgeKey(a, b);
    if (seenEdge.has(k)) return;
    seenEdge.add(k);
    edges.push({ a, b, kind });
  }

  for (const q of questions) {
    nodes.push({
      id: q.id,
      label: q.question.length > 40 ? q.question.slice(0, 38) + "…" : q.question,
      kind: "question",
      color: topicColor(q.topic),
      ref: q.id,
    });
    const tid = `topic:${q.topic}`;
    if (!topicNodes.has(tid)) {
      topicNodes.add(tid);
      nodes.push({ id: tid, label: q.topic, kind: "topic", color: topicColor(q.topic) });
    }
    addEdge(q.id, tid, "topic");
  }

  // prerequisite edges: within a topic, an easier question sharing a tag with a
  // harder one points to it. Cap fan-out per node to keep the graph readable.
  const byTopic = new Map<string, Question[]>();
  for (const q of questions) {
    const arr = byTopic.get(q.topic) ?? [];
    arr.push(q);
    byTopic.set(q.topic, arr);
  }
  for (const group of byTopic.values()) {
    for (const a of group) {
      let added = 0;
      for (const b of group) {
        if (added >= 2) break;
        if (a.id === b.id) continue;
        if (DIFF_RANK[a.difficulty] < DIFF_RANK[b.difficulty] && a.tags.some((t) => b.tags.includes(t))) {
          addEdge(a.id, b.id, "prereq");
          added++;
        }
      }
    }
  }

  return { nodes, edges };
}

export interface Positioned {
  positions: Record<string, { x: number; y: number }>;
}

/** Deterministic force-directed layout. Returns node positions in [0,w]×[0,h].
 *  Iterations auto-scale down for large graphs so the O(n²) step never freezes. */
export function layout(graph: Graph, w: number, h: number, iterations?: number): Positioned {
  const { nodes, edges } = graph;
  const pos: Record<string, { x: number; y: number }> = {};
  const n = nodes.length;
  const iters = iterations ?? Math.max(60, Math.min(260, Math.round(50000 / Math.max(1, n))));
  if (n === 0) return { positions: pos };
  if (n === 1) {
    pos[nodes[0].id] = { x: w / 2, y: h / 2 };
    return { positions: pos };
  }

  const cx = w / 2, cy = h / 2;
  const R = Math.min(w, h) * 0.35;
  // deterministic seed on a circle (no Math.random)
  nodes.forEach((node, i) => {
    const ang = (i / n) * Math.PI * 2;
    pos[node.id] = { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  });

  const k = Math.sqrt((w * h) / n) * 0.6; // ideal edge length
  const idx = new Map(nodes.map((node, i) => [node.id, i]));
  const disp = nodes.map(() => ({ x: 0, y: 0 }));

  for (let it = 0; it < iters; it++) {
    for (let i = 0; i < n; i++) disp[i].x = disp[i].y = 0;
    // repulsion
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        let dx = pos[nodes[i].id].x - pos[nodes[j].id].x;
        let dy = pos[nodes[i].id].y - pos[nodes[j].id].y;
        let dist = Math.hypot(dx, dy) || 0.01; // epsilon avoids divide-by-zero
        const force = (k * k) / dist;
        dx /= dist; dy /= dist;
        disp[i].x += dx * force; disp[i].y += dy * force;
        disp[j].x -= dx * force; disp[j].y -= dy * force;
      }
    }
    // attraction along edges
    for (const e of edges) {
      const ia = idx.get(e.a), ib = idx.get(e.b);
      if (ia === undefined || ib === undefined) continue;
      let dx = pos[e.a].x - pos[e.b].x;
      let dy = pos[e.a].y - pos[e.b].y;
      const dist = Math.hypot(dx, dy) || 0.01;
      const force = (dist * dist) / k;
      dx /= dist; dy /= dist;
      disp[ia].x -= dx * force; disp[ia].y -= dy * force;
      disp[ib].x += dx * force; disp[ib].y += dy * force;
    }
    // integrate with cooling; clamp step and keep inside bounds
    const temp = 8 * (1 - it / iters);
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(disp[i].x, disp[i].y) || 0.01;
      const step = Math.min(d, temp);
      const p = pos[nodes[i].id];
      p.x += (disp[i].x / d) * step;
      p.y += (disp[i].y / d) * step;
      // pull gently to center + clamp to canvas
      p.x += (cx - p.x) * 0.008;
      p.y += (cy - p.y) * 0.008;
      p.x = Math.max(20, Math.min(w - 20, p.x));
      p.y = Math.max(20, Math.min(h - 20, p.y));
    }
  }
  return { positions: pos };
}
