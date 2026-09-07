---
qid: ing_8d4ba08a7f__faang__local
question: 'Explain: Let’s take a quick look at each — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 538
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:12:37-05:00'
sources: []
---

**Clarify**  
We need a scalable *Location‑Based Service* that returns nearby places (restaurants, shops…) given a user’s GPS coordinates and optional filters (category, rating). Assume millions of users, billions of place records, real‑time queries with <200 ms latency. We’ll ask: Do we support write traffic (adding reviews, new places)? How often do places change? What geographical coverage (global vs regional)?

**Approach**  
1. **Data model & storage** – Use a distributed NoSQL DB (Cassandra/Spanner) for raw place data; index by location with geohash or S2 cells.  
2. **Geospatial indexing** – Pre‑compute cell buckets and store in a key‑value store (Redis/Memcached) to serve nearest‑neighbor lookups quickly.  
3. **Query pipeline** – Client → API Gateway → Routing Layer → Geocode Service → Cell lookup → Retrieve candidate IDs → Filter & sort locally.  
4. **Caching & CDNs** – Cache hot cells at edge servers; use CDN for static assets.  
5. **Scalability** – Partition by geohash prefix; use consistent hashing; auto‑scale API tier.

**Depth**  
- *Geohash*: 7‑char (~1 km) gives good granularity. Store mapping `cell_id → place_ids`.  
- *Search*: Expand to neighboring cells until enough results are found.  
- *Latency*: Cell lookup O(1); DB read per candidate (≤10). Total <200 ms with sharding and in‑memory cache.  
- *Consistency*: eventual consistency acceptable for listings; use CDC pipelines to sync updates.

**Edge Cases**  
- Sparse cells (e.g., rural areas) → fallback to larger cell size or global search.  
- Places on cell boundaries → ensure duplicate handling.  
- High write bursts (new restaurants) → buffer writes, batch commit to DB.  
- API abuse → rate limiting and authentication.

**Optimize & Communicate**  
We can further reduce latency by pre‑aggregating popular queries into materialized views. For cost, we’d use spot instances for read replicas in low‑traffic regions. I’d explain trade‑offs: tighter geohash = more cells (storage) but lower false positives; larger cells = fewer reads but higher filtering cost. This structured plan shows clear reasoning, scalability considerations, and readiness to iterate based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
