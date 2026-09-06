---
qid: ing_ed798a7975__think__local
question: 'Explain: FAANG System Design Interview: Design A Location Based Service
  (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 658
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:42:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify core requirement: “location‑based service” → users search for nearby places, get rankings, reviews, maps, etc.  
- Decide on scope: focus on *search* + *ranking* (ignore UI).  
- Assume millions of places, billions of queries per day; low latency (<200 ms).

**2️⃣ Adopt a design‑framework mental model**  
- **Requirements → Functional / Non‑functional**  
- **High‑level components** → data ingestion, storage, indexing, query engine, ranking, cache, API gateway.  
- **Scalability & fault tolerance** → horizontal scaling, replication, eventual consistency where possible.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to decide | Why |
|------|----------------|-----|
| 1 | Data model (place: id, name, lat/long, category, reviews) | Enables efficient queries. |
| 2 | Storage choice – Geo‑spatial DB (PostGIS, Google Spanner + geo‑index) or NoSQL with geohash sharding | Trade‑off between relational integrity vs. scale. |
| 3 | Indexing strategy – use geohashes to bucket places; maintain sorted lists by relevance | Fast prefix search for “near me”. |
| 4 | Query flow – client → API gateway → routing service → geo‑query node (shard) → ranking engine | Keeps latency low, isolates responsibilities. |
| 5 | Ranking algorithm – distance, rating, recency, personalization, business rules | Provide best results; can be ML‑based later. |
| 6 | Caching layers – in‑memory (Redis), CDN for static assets | Reduce DB load. |
| 7 | Data ingestion pipeline – batch + streaming to update places/reviews | Keeps data fresh. |
| 8 | Monitoring / metrics – latency, error rates, cache hit ratios | Detect bottlenecks early. |

**4️⃣ Common pitfalls to avoid**  
- **Over‑optimizing for a single metric** (e.g., only distance) → poor user experience.  
- **Ignoring eventual consistency** in writes can lead to stale results.  
- **Choosing a monolithic DB** when sharding is required → scalability limits.  
- **Underestimating cold start latency** for new shards or cache warming.

**5️⃣ Sanity‑check & verbalize**  
- Walk through a sample query: user at lat/long → API receives request → routing picks nearest shard via geohash → shard returns top‑k by distance, passes to ranking engine → final list returned.  
- Verify latency budget: network (≤50 ms) + DB lookup (≤30 ms) + ranking (≤20 ms).  
- Ask “What if a shard fails?” – confirm replication & failover logic.  

By following this structured approach—clarify, model, reason step‑by‑step, watch for traps, and validate—you can confidently design a scalable location‑based service akin to Yelp or Google Places.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
