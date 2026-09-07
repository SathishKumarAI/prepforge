---
qid: ing_0a785ccb7c__faang__local
question: 'Explain: Let’s discuss what database to use to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 460
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:08:30-05:00'
sources: []
---

**Clarify**  
We need a backend that stores places, reviews, and user‑generated data, supports fast geospatial queries, high write throughput, and horizontal scalability. Key assumptions:  
- Millions of users, millions of venues.  
- Read‑heavy with occasional writes (new reviews, check‑ins).  
- Need 1–2 ms latency for “nearby” queries.  

**Approach**  
1. **Data model** – split into *Places* (id, name, coords, metadata) and *Reviews* (place_id, user_id, rating, text).  
2. **Storage tiering** – use a hybrid: a write‑optimized log for reviews + a read‑optimized store for places.  
3. **Geospatial indexing** – employ an R‑tree or geohash prefix tree to bucket points into tiles.  

**Depth**  
- *Places* live in a sharded document store (e.g., MongoDB) with a 2D/GeoJSON index; each shard holds ~1 M places, indexed by latitude/longitude.  
- *Reviews* go to a write‑heavy log (Kafka → HBase/Bigtable), partitioned by place_id so aggregation is local.  
- For “top‑rated” queries we maintain per‑tile cached aggregates in Redis or Memcached, updated asynchronously via stream processing (Flink).  
Complexity: O(log n) for point lookups; O(k) to return k nearest neighbors.  

**Edge cases**  
- Sparse regions → pad tiles with empty buckets.  
- Rapid review bursts → back‑pressure on Kafka.  
- Geo‑boundary splits across shards → use consistent hashing of geohash prefixes.  

**Optimize & communicate**  
Explain that the read tier prioritizes latency (indexed DB + cache), while writes are batched and eventually reflected in aggregates, giving eventual consistency acceptable for a LBS. Highlight trade‑offs: stronger consistency would hurt write throughput; our design balances them for typical user expectations. This structured reasoning shows clear problem framing, technical depth, and awareness of edge cases—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
