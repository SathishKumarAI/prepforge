---
qid: ing_5b9564fad5__fp__local
question: 'Explain: It will also store all the — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 364
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:18:48-05:00'
sources: []
---

In a large‑scale routing service such as Google Maps, **every possible path between two points must be queryable in milliseconds**.  
The fundamental problem is *how to answer “shortest route from A to B” fast enough when the graph contains millions of nodes and billions of edges*.  
If we precompute every pair’s optimal path, the storage explodes combinatorially; if we compute on demand, latency blows up.  
The elegant solution is **to store a compact representation of the entire road network once**—a weighted directed graph—and then *augment* it with a small amount of *pre‑computed auxiliary data* that turns a linear‑time Dijkstra search into a handful of lookups.

This augmentation exploits two deep principles:

1. **Hierarchical abstraction (speedup)** – by contracting high‑degree, low‑importance nodes and adding “shortcuts” between the remaining hubs, we preserve shortest‑path distances while reducing search depth.
2. **Metric embedding (contraction hierarchies / hub labels)** – each node is tagged with a minimal set of *hubs* that any optimal path must visit; querying then becomes a meet‑in‑the‑middle intersection over tiny hub lists.

A non‑obvious insight: the *storage cost* is dominated by these hub lists, not by the raw road graph.  
Because each node participates in only O(log N) hubs on average, the total memory scales linearly with the number of nodes—allowing a single machine to hold the entire world’s map and answer queries in sub‑millisecond time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
