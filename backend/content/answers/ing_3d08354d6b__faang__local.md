---
qid: ing_3d08354d6b__faang__local
question: 'Explain: The last point we would like to — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 523
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:42-05:00'
sources: []
---

**Clarify**

> “Design a location‑based service similar to Yelp/Google Places.”  
Assumptions:  
1. Users search for businesses by keyword & proximity; results ranked by relevance, rating, distance.  
2. We support CRUD for business listings (name, address, categories, photos).  
3. Scale: millions of users, tens of millions of venues, real‑time queries.  
4. Latency target < 200 ms, availability > 99.9%.

**Approach**

1. **Data model** – store venues in a spatial index (R‑tree/Geohash) + relational attributes (rating, category).  
2. **API layer** – REST/GraphQL endpoints: `search`, `add`, `update`, `delete`.  
3. **Caching** – LRU cache for hot queries; CDN edge caches for static assets.  
4. **Search ranking** – combine cosine similarity of query vs. business description, user‑review score, distance (Haversine).  
5. **Scalability** – sharded databases by geohash prefix; read replicas; stateless microservices behind load balancer.

**Depth**

- *Geospatial queries*: Use PostGIS or ElasticSearch’s geo_point + geo_distance query for efficient range search.  
- *Ranking algorithm*: `score = α·rating + β·(1/distance) + γ·tf‑idf(query, description)`; tune α,β,γ via A/B testing.  
- *Consistency*: Use eventual consistency for writes; optimistic locking on updates.  
- *Complexity*: Query O(log N + k log k) where N is venues in region, k results returned.

**Edge Cases**

- No results → suggest nearby categories or relax distance.  
- Duplicate listings → merge via fuzzy matching (Levenshtein).  
- Offline users: serve cached nearest POIs.  
- Spam reviews: flag & audit.

**Optimize & Communicate**

1. **Indexing**: Composite index on `(geohash, category)` to prune search space.  
2. **Batch writes**: Bulk ingest from partners reduces load.  
3. **Observability**: Distributed tracing (Jaeger) + metrics (Prometheus).  

Explain each trade‑off (latency vs consistency, sharding granularity vs complexity) and how it meets FAANG expectations for scalability, reliability, and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
