---
qid: ing_a70927d3f5__faang__local
question: 'Explain: Now the thing with segments is whether — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 600
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:57-05:00'
sources: []
---

**Clarify**

> *“Explain the segment‑based approach in Google Maps’ system design.”*  
I’ll assume you’re asking how the platform models roads as segments (edges), stores them, and answers queries such as routing or traffic updates. I’d confirm: are we focusing on real‑time traffic, offline maps, or just graph construction?

**Approach**

1. **Graph abstraction** – vertices = intersections, edges = road segments with attributes (length, speed limit, geometry).  
2. **Storage tiering** – in‑memory cache for hot segments + persistent storage (spatial index, sharded key–value store) for the rest.  
3. **Routing engine** – Dijkstra/A* on the graph, optionally using contraction hierarchies or hub labels for speed.  
4. **Traffic & updates** – ingest live telemetry → update edge weights; propagate to routing in near real‑time.  
5. **Scalability** – sharding by geographic tiles, replication, and a CDN for map tiles.

**Depth**

*Graph model*: Each segment is an object with `segment_id`, `start_vertex`, `end_vertex`, `length_m`, `speed_limit_kmh`, `geometry` (polyline), `is_one_way`.  
*Storage*: Use Bigtable/Spanner shards keyed by tile + segment ID. A GiST index on geometry supports fast spatial queries.  
*Routing*: Pre‑compute contraction hierarchies per region; at query time run bidirectional Dijkstra over the reduced graph. Complexity ≈ O(log n) for typical routes.  
*Traffic updates*: Ingest from vehicle GPS → compute delta weight (e.g., delay). Update a separate “traffic table” that overrides base weights during routing. Use a Pub/Sub stream to push changes to edge caches.

**Edge Cases**

- **Road closures**: mark segment as `closed` and trigger re‑routing; ensure cache invalidation.  
- **High‑density urban nodes**: many vertices → use hierarchical abstraction (macro‑nodes).  
- **Sparse rural areas**: fewer segments, but longer routes; pre‑fetch neighboring tiles to avoid cache misses.

**Optimize & Communicate**

Improvements:  
- *Delta updates* instead of full weight refreshes.  
- *Edge batching* for bulk traffic ingestion.  
- *Adaptive caching*: keep hot segments in Redis with LRU eviction.  

When explaining, I’d narrate the data flow from ingest → storage → routing → response, highlighting how each layer satisfies latency (≤ 100 ms), throughput (> 10⁵ requests/s), and consistency (eventual for traffic). This demonstrates structured problem solving, clear communication, and depth—key to a FAANG signal score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
