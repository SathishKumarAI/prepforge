---
qid: ing_cde2254c49__think__local
question: 'Explain: This is pretty standard for an API — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 536
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:33:30-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm the interview context (FAANG system‑design style).  
- Define “Location‑Based Service” scope: user queries → nearby POIs, ratings, reviews, real‑time updates.  
- Decide on key constraints: scale (billions of users), latency (<200 ms), consistency vs availability trade‑offs.

**2️⃣ Adopt a layered mental model**  
1. **User layer** – mobile/web client & API gateway.  
2. **Application services** – search, recommendation, analytics.  
3. **Data stores** – spatial index (R‑tree/Geohash), relational DB for POIs, NoSQL for reviews, cache layer.  
4. **Infrastructure** – load balancers, autoscaling, CDN, monitoring.

**3️⃣ Step‑by‑step reasoning**  
- *Request flow*: Client → API gateway → routing to nearest shard (based on geohash).  
- *Spatial query*: Use a pre‑computed geohash grid or an R‑tree index in a distributed datastore (e.g., ElasticSearch, PostGIS).  
- *Ranking*: Combine distance, popularity score, user preferences; use a scoring function.  
- *Caching*: Hot spots cached in Redis/Memcached; edge CDN for static assets.  
- *Data consistency*: Eventual consistency for reviews, strong consistency for POI metadata.  
- *Scalability*: Partition by region; use sharding and replication.  
- *Failure handling*: Circuit breakers, graceful degradation (show fewer results).  
- *Monitoring & ops*: Latency dashboards, error rates, automated alerts.

**4️⃣ Common traps to avoid**  
- Ignoring the curse of dimensionality in spatial indexing → use geohash or quad‑trees.  
- Over‑optimizing for latency at the expense of consistency → balance CAP trade‑offs.  
- Forgetting real‑time updates (e.g., new reviews) → design a write path that propagates to cache and search index asynchronously.

**5️⃣ Sanity‑check & verbalize**  
- Re‑walk the request flow mentally, verifying each component’s role.  
- Ask: “Does this handle 10 k QPS per region?” “What happens if a shard dies?”  
- Communicate clearly: start with high‑level diagram, then drill into spatial index choice, caching strategy, and failure modes.  

This structured approach ensures you cover all critical facets while staying concise in the interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
