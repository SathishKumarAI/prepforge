---
qid: ing_ca4dbef6d2__faang__local
question: 'Explain: What does that really mean? Let’s go — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 559
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:13-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *location‑based service* (e.g., Yelp/Google Places).  
Key assumptions: users query POIs near them, data is read‑heavy, writes are incremental (add/edit venues), we need low latency and high throughput.

**Approach**  
1. **Data model** – store each venue with `id, name, lat/lng, categories, rating`.  
2. **Geospatial indexing** – use a *spatial index* such as an R‑tree or geohash grid to partition space.  
3. **Storage** – distributed key/value store (Cassandra/Bigtable) for raw rows; cache hot data in Redis/Memcached.  
4. **Query flow** – client sends `lat/lng, radius`. Service converts query to a set of geohash cells, pulls candidate venues, filters by distance, then sorts by relevance (rating + recency).  
5. **Scalability** – shard by geohash; each node handles its own cells. Use consistent hashing for failover.

**Depth**  
- *Geohash* provides a fixed‑size key: `lat/long → 12‑char string`. Nearby points share prefixes, enabling range queries (`prefix = 'dr5ru'`).  
- Distance filtering uses Haversine formula; pre‑filter with bounding box to reduce expensive calculations.  
- Complexity: Query latency O(log N) for index lookup + O(k log k) for sorting `k` candidates. Write is O(1).  
- Consistency: eventual consistency on writes, strong read‑through cache.

**Edge Cases**  
- Edge of Earth (near ±180° longitude): geohash wraps; handle by querying neighboring cells.  
- High density zones (downtown) → many candidates → apply *k‑NN* algorithm or pre‑compute popularity buckets.  
- Offline users: serve cached results or last known position.

**Optimize & Communicate**  
- Use a *hybrid index*: geohash + quad‑tree for finer granularity in dense areas.  
- Cache top‑ranked POIs per cell to reduce DB hits.  
- Monitor latency; auto‑scale shards based on request rate.  
- Explain trade‑offs: R‑trees give exact spatial queries but are harder to distribute; geohashes scale better but may return extra points needing filtering.

This plan balances **latency**, **throughput**, and **scalability**—the core concerns in a FAANG location‑based service design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
