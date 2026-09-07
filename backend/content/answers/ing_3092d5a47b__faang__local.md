---
qid: ing_3092d5a47b__faang__local
question: 'Explain: What do we know so far? There — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 572
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:37:20-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *location‑based service* like Yelp/Google Places that returns nearby points of interest (POIs), handles user queries, and supports ratings/reviews. Key assumptions: millions of users, billions of POI records, real‑time latency < 200 ms, high write throughput for reviews, geographic queries over a global scale, and eventual consistency for ranking.

**Approach**  
1. **Data model** – store POIs in a geospatial table (lat/long + attributes).  
2. **Indexing** – use a spatial index such as an R‑tree or geohash grid to accelerate “find all POIs within radius R”.  
3. **Sharding** – partition data by geographic tiles; each shard serves a bounded region, reducing query scope.  
4. **Caching** – cache hot queries (e.g., popular restaurants) in Redis/Memcached with TTLs.  
5. **Write path** – ingest reviews into a write‑optimized log (Kafka), update aggregate scores asynchronously in the POI table.  
6. **Search & ranking** – compute relevance as weighted sum of distance, rating, recency; use a vector index for semantic search if needed.  
7. **API layer** – expose REST/GraphQL endpoints with pagination and filtering.

**Depth**  
- *Geohash*: 12‑char precision ≈ 5 m; split into buckets for sharding.  
- *Query complexity*: O(log N + k) where N is POIs in shard, k is results returned.  
- *Write latency*: async update keeps write throughput high; eventual consistency acceptable for ratings.  
- *Scalability*: add shards as region grows; use CDN for static assets.

**Edge Cases**  
- Users near tile boundaries → query adjacent tiles.  
- POIs with missing coordinates → fallback to nearest populated tile.  
- High‑traffic “hot spots” → hot‑spot detection triggers cache warm‑ups and replica scaling.  
- Data consistency: stale rating during read → show “loading” placeholder or merge with latest write.

**Optimize & Communicate**  
We can improve by adopting *geospatial bloom filters* to prune empty tiles, using *vector embeddings* for better relevance scoring, and applying *rate limiting* per user/IP. In a real interview I’d diagram the architecture, justify each trade‑off (latency vs consistency), and explain how monitoring would detect hot spots or cache misses, closing with an estimate of cost: e.g., 10 k shards × $0.03/hr ≈ $7.2/day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
