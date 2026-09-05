---
qid: ing_3d08354d6b__fp__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 507
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:04-05:00'
sources: []
---

**Designing a scalable Location‑Based Service**

*Fundamental problem*:  
Users query “restaurants near me” and expect < 200 ms latency, while the system must ingest millions of check‑ins per day and support thousands of concurrent users worldwide. The core challenge is **spatial proximity search** over a dynamic dataset that changes constantly.

1. **Data model & indexing** – Store each venue as a point (lat/long) with attributes. Use a *geohash* or *S2 cell* to map continuous space into a discrete grid. Build an inverted index: `cell_id → list of venues`. This turns a radius query into a small set of cell lookups plus a Haversine distance filter, reducing the search space from millions to dozens.

2. **Write path** – Incoming check‑ins are appended to a write‑ahead log (Kafka). A background worker updates the geohash index in a key‑value store (Cassandra/Redis) and triggers a cache invalidation for affected cells. The log guarantees durability while keeping writes fast.

3. **Read path** –  
   *Cache* the top‑K venues per cell in Redis for hot locations; fall back to the persistent index if miss.  
   *Pagination* is achieved by maintaining a sorted list of distances per cell, enabling “next page” cursors that are stable even as new check‑ins arrive.

4. **Consistency** – Use *eventual consistency* for the cache (writes go to log first). Users see slightly stale data only if they query an extremely fast hotspot; this trade‑off is acceptable for most LBS use‑cases.

5. **Scalability** – Partition the geohash space across shards; each shard runs its own index, write worker, and cache instance. Horizontal scaling is linear because geographic regions are independent.

**Non‑obvious insight**  
A common pitfall is to treat the radius query as a single “point” lookup. In fact, any fixed radius covers multiple geohash cells; failing to include *border* cells results in missing venues right at the edge. The trick is to precompute a small set of neighboring cells for each query radius—this adds negligible overhead but guarantees correctness without resorting to full‑scan or expensive clustering algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
