---
qid: ing_9a05b3d519__faang__local
question: 'Explain: But the idea is this number(10 KMs) — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 529
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:42:50-05:00'
sources: []
---

**Clarify**  
You want a system that, given two geographic coordinates (lat/long), returns the shortest driving or walking distance—roughly “10 KM” for a sample query.  
Assumptions to confirm:  
* Is it straight‑line (“as‑the‑crow‑flies”) or road‑network distance?  
* What accuracy is required (±100 m)?  
* Expected traffic volume (tps) and latency target (≤ 200 ms).  

**Approach**  
1. **Data ingestion** – ingest OpenStreetMap or proprietary road graph into a distributed graph store (e.g., Neo4j, JanusGraph, or custom PostGIS + pgRouting).  
2. **Pre‑processing** – build a hierarchical spatial index (R‑tree) and compute an edge‑weight graph with distance attributes.  
3. **Query handling** – expose a REST/GRPC endpoint that receives two points, snaps them to nearest nodes, then runs Dijkstra/A* on the subgraph. Cache recent queries in Redis.  

**Depth**  
- Graph size: ~10⁷ edges → 1–2 GB of adjacency data; store in memory‑optimized format (CSR).  
- Latency: A* with heuristic (Haversine) reduces expansions to ~O(√N); typical query < 50 ms.  
- Scaling: sharding by geographic tiles; each shard holds its own subgraph and a boundary overlay for cross‑tile paths. Replicate shards for high availability.  

**Edge Cases**  
* Points outside the map → return error or nearest valid node.  
* Multi‑modal routes (bike, public transit) require separate weight functions.  
* Network partitions: fall back to cached distances; mark stale data in health checks.  

**Optimize & Communicate**  
- Pre‑compute “landmark” shortest paths (ALT algorithm) to speed up queries further.  
- Use incremental updates (delta ingestion) to keep the graph fresh without full rebuilds.  
- Benchmark with synthetic workloads; expose metrics (latency percentiles, cache hit ratio).  

This design balances correctness, latency, and scalability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
