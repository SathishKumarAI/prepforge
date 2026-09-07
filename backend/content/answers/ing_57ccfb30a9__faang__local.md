---
qid: ing_57ccfb30a9__faang__local
question: 'Explain: Let''s say there are these two roads — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 508
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:51-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *road‑network service* similar to the “Google Maps” backend: store cities, roads, and support fast shortest‑path queries between any two points.  
Assumptions:  
1. Static topology (roads change rarely).  
2. Queries are read‑heavy; writes (add/modify roads) are infrequent.  
3. Latency target < 50 ms for 95 % of lookups.

**Approach**  
1. **Graph representation** – vertices = intersections, edges = road segments with weights (distance/time).  
2. **Storage** – use a distributed graph database or sharded adjacency list in a key‑value store.  
3. **Indexing** – build a *geohash* prefix tree for spatial locality; pre‑compute *hub labels* (Thorup–Zwick) to answer queries in O(1) label lookups + small Dijkstra on the remainder.  
4. **Routing engine** – run bidirectional A* with a cheap heuristic (Euclidean distance). Cache popular routes.

**Depth**  
- **Complexity:**  
  *Pre‑computation*: \(O(n \log n)\) for hub labeling; *query*: \(O(1)\) label intersection + \(O(|E'|)\) on the remaining subgraph.  
- **Fault tolerance:** Replicate adjacency lists; use consistent hashing to rebalance shards.  
- **Updates:** Incremental recompute only affected hubs when a road changes.

**Edge Cases**  
- Disconnected components → return “no route”.  
- Dynamic traffic → overlay time‑dependent weights, fall back to static graph if data missing.  
- Very long routes (across continents) – ensure label size remains bounded.

**Optimize & Communicate**  
Explain trade‑offs: hub labels give sub‑ms queries but require ~10× memory; A* is lighter but slower for rare edges. For 95 % of traffic, use pre‑computed labels; for edge cases fall back to on‑the‑fly search. Highlight that this design scales horizontally (sharding by geohash) and satisfies the latency SLA while keeping update costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
