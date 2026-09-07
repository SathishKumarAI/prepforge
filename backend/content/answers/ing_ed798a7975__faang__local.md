---
qid: ing_ed798a7975__faang__local
question: 'Explain: FAANG System Design Interview: Design A Location Based Service
  (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 494
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:52:42-05:00'
sources: []
---

**Clarify**  
We need a scalable service that returns points‑of‑interest (POIs) near a user’s GPS coordinates (e.g., restaurants, gas stations). Key assumptions: *lat/long inputs;* *user queries are read‑heavy, writes less frequent;* *data is geo‑distributed and must support real‑time updates.*

**Approach**  
1. **Data model:** POI → {id, name, lat, lon, category, rating}.  
2. **Storage:** Shard by geohash (grid cells) in a distributed key‑value store (e.g., DynamoDB/Bigtable).  
3. **Indexing:** Maintain a secondary index on categories and ratings for filtering.  
4. **Query path:**  
   * Compute user’s geohash and neighboring cells (k ≈ 8 for 1 km radius).  
   * Parallel fetch POIs from those shards.  
   * Filter by distance (Haversine) and category, then rank by rating or relevance.  
5. **Caching:** Use a CDN‑style cache (e.g., CloudFront + Redis) keyed on geohash+radius to serve frequent queries.

**Depth**  
- **Read latency:** O(k log N_cell) where N_cell is POIs per cell; k ≈ 8 cells keeps it <10 ms.  
- **Write path:** Append/modify in the appropriate shard; eventual consistency acceptable for user‑visible updates.  
- **Scalability:** Adding new regions means adding shards; sharding by geohash automatically balances load.

**Edge Cases**  
- Users near cell borders: ensure enough neighboring cells are queried.  
- Sparse areas: fallback to broader radius or global index.  
- Rapid POI churn (e.g., temporary pop‑ups): propagate updates via message queues to avoid stale cache.

**Optimize & Communicate**  
Future improvements: vector embeddings for semantic search, machine‑learning ranking models, and adaptive geohash granularity based on density. I would explain that we trade off a bit of extra read traffic (fetching neighboring cells) for simple, fault‑tolerant design, keeping the system horizontally scalable and low‑cost while meeting strict latency requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
