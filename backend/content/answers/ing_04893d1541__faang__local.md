---
qid: ing_04893d1541__faang__local
question: 'Explain: Now we can run a Dijkstra on — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 567
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain how Dijkstra’s algorithm could be used inside a large‑scale navigation service like Google Maps, and what practical adaptations are needed.  
Assumptions: we have a road network graph (nodes=intersections, edges=road segments), real‑time traffic data, multiple concurrent users, and we need fast, accurate routing.

**Approach**  
1. Build a global weighted graph from OpenStreetMap/Google data.  
2. Store the graph in an edge list or adjacency list, indexed by node ID.  
3. For each request: run Dijkstra (or A*) from source to destination using current edge weights that incorporate traffic delays.  
4. Cache recent shortest paths and pre‑compute hub labels for popular routes.

**Depth**  
- **Graph storage:** Use a compressed sparse row (CSR) format or disk‑backed key–value store for millions of nodes; keep adjacency lists in memory for hot edges.  
- **Edge weights:** Base weight = Euclidean distance / speed limit, then add latency from live traffic feeds. Update weights asynchronously via a streaming pipeline.  
- **Algorithm choice:** Classic Dijkstra with binary heap → O((V+E) log V). For maps, A* with straight‑line heuristic reduces nodes explored. Pre‑computed *hub labels* (2‑hop labeling) can answer queries in ~10 microseconds for static parts of the graph.  
- **Concurrency:** Use thread‑local priority queues; partition the graph into regions to avoid contention.  
- **Complexity trade‑offs:** Dijkstra is deterministic but slower than A*, yet guarantees optimality when all weights are non‑negative.

**Edge Cases**  
- Negative edge weights (e.g., toll discounts) → use Johnson’s algorithm or disallow.  
- Disconnected subgraphs (bridge failures).  
- Sudden traffic spikes causing weight updates; need to roll back if stale data used.  
- Very large queries (inter‑city routes) may trigger multi‑stage routing: high‑level road network + detailed local graph.

**Optimize & Communicate**  
Explain that in production we blend algorithms: use *contraction hierarchies* for static edges, *incremental updates* for dynamic traffic, and *memoization* for repeated queries. Highlight that the key is to keep the search space tiny (via A*/heuristics) while ensuring correctness (non‑negative weights). Conclude by noting performance metrics—average query latency < 50 ms, 99th percentile < 200 ms—and how monitoring would trigger re‑balancing of graph partitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
