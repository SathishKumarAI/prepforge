---
qid: ing_ea4b55382d__eli5__local
question: 'Explain: Graph (8 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 446
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:24-05:00'
sources: []
---

Imagine you’re a city planner who can only walk through streets (edges) but never sees the full map on paper. The **graph** is that city: intersections are **nodes**, roads are **edges**. In the “Blind 75” set, each problem asks you to find the best route or hidden pattern without looking at the entire layout—just like a GPS that only updates as you drive.

1. **Shortest path (Dijkstra)** – Find the quickest way from your home to the bakery by checking each street’s travel time, always picking the next fastest unvisited intersection.
2. **All‑pairs shortest paths (Floyd–Warshall)** – Pretend you have a magic notebook that records the best distance between every pair of intersections after exploring all routes once.
3. **Topological sort** – Think of building a set of Lego blocks where some pieces must be placed before others; you line them up so each block’s prerequisites come first.
4. **Cycle detection (DFS)** – While walking, if you ever reach an intersection already on your current path, you’ve looped—this tells you there’s a cycle.
5. **Strongly connected components** – Imagine groups of neighborhoods where you can travel both ways between any two streets; these clusters are the SCCs.
6. **Minimum spanning tree (Kruskal / Prim)** – You want to connect all intersections with the least total road length, like laying out new roads that use the fewest bricks.
7. **Bipartite checking** – Picture coloring houses red or blue so no two adjacent houses share a color; if you can do it, the graph is bipartite.
8. **Path counting / DP on DAGs** – Count how many distinct routes lead from the town square to the castle by adding up ways from each predecessor.

Each challenge teaches a different “walking strategy” for navigating unseen networks—exactly what interviewers look for in a solid graph‑solver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
