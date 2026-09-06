---
qid: ing_8fb6836943__fp__local
question: 'Explain: If it''s a one-way, if it''s a — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 433
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:52-05:00'
sources: []
---

**Why “one‑way” matters in a map service**

When you build a navigation engine, the fundamental problem is *shortest path* on a directed graph: nodes are intersections, edges are road segments, and each edge has a cost (distance, travel time, etc.). In reality most streets are two‑way; only a minority are one‑way. Treating a street as undirected when it isn’t would allow the algorithm to find routes that violate traffic rules, giving users impossible directions.

*Why must we encode directionality?*  
A directed edge represents an asymmetry in feasibility: you can traverse from A→B but not B→A. This turns the graph into a *directed acyclic or cyclic* structure whose shortest‑path algorithms (Dijkstra, A*, etc.) rely on the assumption that edges are unidirectional. If we ignored direction, the adjacency list would double count routes, inflating search space and producing invalid paths.

**Deeper insight:**  
Directionality is a *constraint* that reduces the feasible set of paths. From an optimization viewpoint, it turns the problem into a *constrained shortest path*, which can be solved efficiently by standard algorithms because the constraint is local (edge‑based). However, this locality means we can precompute and cache reverse edges only when needed—saving memory for millions of roads.

**Non‑obvious point:**  
A one‑way street also implies that the *graph’s degree* changes asymmetrically. When estimating load or building routing indices, you must account for this imbalance; otherwise your performance models (e.g., bucketed edge lists) will over‑allocate for two‑way roads and under‑allocate for one‑ways, hurting cache locality.

In short: a one‑way road is not just a detail—it’s the core constraint that shapes the graph structure, the algorithmic guarantees, and the system’s resource model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
