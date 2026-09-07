---
qid: ing_9071f87226__faang__local
question: 'Explain: All good so far but we have — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 449
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:12-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design for a scalable, real‑time mapping service (e.g., Google Maps). Confirm scope: map rendering, routing, traffic, offline mode, data freshness, latency (< 200 ms), and multi‑tenant usage. Assume millions of concurrent users worldwide.

**Approach**  
1. **Front‑end** – tile‑based map viewer with vector tiles, progressive loading.  
2. **Backend services** –  
   * *Tile service* (Geo‑index + cache).  
   * *Routing engine* (graph database, shortest‑path algorithms).  
   * *Traffic & ETA* (streaming analytics, real‑time updates).  
3. **Data layer** – spatial databases (PostGIS/Bigtable), change‑feeds for map edits.  
4. **Caching** – CDN edge caches for tiles; in‑app LRU cache for recent queries.  
5. **Observability & scaling** – autoscaling, circuit breakers, request tracing.

**Depth**  
- Tiles stored in a quadtree partitioned into S3 buckets; each tile version hashed to detect changes.  
- Routing uses a compressed road graph (spatial index + adjacency lists) served from a distributed key‑value store. Dijkstra or Contraction Hierarchies for sub‑second path queries.  
- Traffic computed via stream processing (Kafka → Flink) feeding a real‑time in‑memory store (Redis).  

**Edge Cases**  
- Offline mode: ship pre‑downloaded tiles, fallback to low‑res static images.  
- Edge regions with sparse data: replicate minimal tile set locally.  
- Data churn: handle version conflicts via vector timestamps.

**Optimize & Communicate**  
Explain trade‑offs: higher cache hit rates reduce compute but increase storage; richer vector tiles improve UX at cost of bandwidth. Conclude by stressing continuous monitoring and iterative feature rollouts to keep latency within SLA while scaling globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
