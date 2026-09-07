---
qid: ing_5ef2954ac5__faang__local
question: 'Explain: Geohash works great most of the time — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 529
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:24:48-05:00'
sources: []
---

**Clarify**  
We’re asked to design a location‑based service (e.g., Yelp/Google Places). The interviewer hints that *geohash* is useful “most of the time.” I’ll confirm: we need efficient spatial indexing for millions of POIs, sub‑second query latency, support for radius searches and nearest‑neighbor queries, and scalability across shards.

**Approach**  
1. **Geohash as a primary key** – encode lat/long into a string (base32).  
2. **Sharding by geohash prefix** – each shard owns all POIs whose hash starts with the same N‑bit prefix.  
3. **Secondary index** – store additional attributes (rating, category) in the same shard for quick filtering.  
4. **Range queries** – to find all points within a radius R, compute the minimal set of geohash prefixes that cover the circle; query each corresponding shard.  
5. **Cache layer** – hot POIs and recent queries cached in Redis or Memcached.

**Depth**  
- *Encoding*: 52‑bit precision ≈ 0.1 m at equator, enough for street‑level granularity.  
- *Sharding*: choosing prefix length balances load (more bits → more shards) vs query cost (fewer prefixes).  
- *Complexity*: Query time ≈ O(k + log N) where k = number of candidate geohashes; each shard lookup is O(log M) for M POIs.  
- *Trade‑offs*: Geohash preserves locality but has non‑uniform cell sizes; for high‑density cities we may need finer granularity or a quadtree fallback.

**Edge Cases**  
- Near poles: geohash cells become skinny—fallback to spherical cap indexing.  
- Query radius larger than cell size: generate many prefixes → heavy load; use hierarchical caching or approximate methods.  
- Data skew: certain city centers get overloaded shards—apply dynamic re‑sharding or hot‑spot replication.

**Optimize & Communicate**  
Explain that geohash gives O(1) lookup per shard and simple range queries, making it “great most of the time.” For edge cases, we layer a quadtree or R‑tree on top. Highlight monitoring metrics (latency, shard size) to trigger autoscaling. Conclude by stressing how this design balances simplicity, scalability, and performance—key FAANG criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
