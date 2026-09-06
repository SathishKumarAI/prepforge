---
qid: ing_8348ddb7bf__fp__local
question: 'Explain: With that let''s get started. A bit — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 457
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:25-05:00'
sources: []
---

**Designing a scalable “Google‑Maps” style service**

*Problem*: Users request routes, live traffic, and place data from billions of devices with sub‑second latency. The system must serve read‑heavy traffic (map tiles, POIs) while ingesting real‑time updates (traffic, user edits).  

1. **Data partitioning**  
   *Spatial hashing* (geohash or quad‑trees) turns a 2‑D query into a key range; each shard stores all tiles for its region. This keeps hot spots bounded and lets us replicate shards that see heavy traffic.  

2. **Cache hierarchy**  
   - **Edge CDN**: static map tiles, geocoded POI thumbnails.  
   - **In‑memory KV (Redis/Memcached)**: shortest‑path pre‑computed for popular routes; TTL is set by traffic volatility.  
   - **Batch graph cache**: a compressed road network graph per region, updated nightly from the master graph.

3. **Routing engine**  
   Dijkstra/A* on the shard’s graph gives exact paths. For low latency we use *hierarchical routing*: first compute coarse‑grained path (major roads) then refine locally. The underlying principle is that shortest‑path cost is a metric; hierarchical abstractions preserve optimality with fewer edges.

4. **Real‑time updates**  
   Traffic sensors push Δ‑updates to a Kafka stream; downstream services recompute edge weights and invalidate relevant cache keys. This decouples ingestion from query latency.

5. **Consistency & availability**  
   *Eventual consistency* for POI edits is acceptable; we use CRDTs so concurrent edits converge deterministically. For routing, we guarantee *read‑your‑write* by routing traffic to the latest shard copy via a global metadata service.

**Non‑obvious insight**: Treating the road network as a *metric space* lets us pre‑compute multi‑resolution abstractions that reduce both storage and computation without sacrificing optimality—a principle often overlooked in naïve sharding designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
