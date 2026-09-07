---
qid: ing_7ce22b5e31__faang__local
question: 'Explain: Now what that could mean that could — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 521
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:24-05:00'
sources: []
---

**Clarify**  
We’re asked how a “Google‑Maps–style” system would be designed for real‑time navigation and routing. I’d confirm:  
• Scale (hundreds of millions users, billions of trips/day)  
• Latency goal (< 200 ms for route look‑up)  
• Data freshness (traffic, incidents)  
• Key features (turn‑by‑turn, multimodal, personalization).  

**Approach**  
1. **Data ingestion** – real‑time traffic & map updates via edge workers and batch imports.  
2. **Core graph service** – store road network as a directed weighted graph; use adjacency lists in memory with LSM‑trees on disk.  
3. **Routing engine** – A* or Dijkstra with heuristics (Euclidean distance, speed limits). Pre‑compute *contraction hierarchies* to shrink query time.  
4. **Caching & sharding** – route caches per region; consistent hashing of graph partitions across a cluster of routing nodes.  
5. **Traffic layer** – overlay dynamic weights from live streams; use a separate service that pushes updates to routing nodes via Pub/Sub.  

**Depth**  
- *Graph storage*: 32‑bit node IDs, edge structs (dest, length, speed, traffic factor).  
- *Routing complexity*: O(log N) with contraction hierarchies vs. O(E+V).  
- *Latency*: 1–2 ms per hop in memory; total < 100 ms after caching.  
- *Fault tolerance*: replicas, leader‑election for routing nodes; graceful degradation if traffic data delayed.  

**Edge Cases**  
• Road closures or detours → re‑compute route on the fly.  
• Network partitions between traffic and routing services – fall back to last known weights.  
• Scale spikes (holidays) – auto‑scale shards, use CDN for static map tiles.  

**Optimize & Communicate**  
I’d propose first a *pilot* with 1M users, measure latency, then gradually roll out contraction hierarchies cluster‑wide. I’d explain trade‑offs: heavier preprocessing for speed vs. storage cost; caching reduces load but adds staleness risk. This structured plan demonstrates clear problem framing, technical depth, and pragmatic scalability—key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
