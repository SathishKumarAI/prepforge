---
qid: ing_a882f871c6__faang__local
question: 'Explain: Let’s summarize what we know so far — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 527
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:33-05:00'
sources: []
---

**Clarify**

> *What do we need?*  
> Build a scalable “location‑based service” that lets users search for nearby businesses (restaurants, shops, etc.) by city or coordinates, view details, and receive real‑time ratings.  
> *Assumptions:* user volume ≈ 10 M/day, up to 1 k queries per second per user, data set ≈ 5 M places, each place has lat/long, name, category, rating, photos.

**Approach**

1. **Data model & storage** – use a geo‑indexed datastore (e.g., Bigtable + Geo‑Index) for fast range queries; keep a cache layer (Redis/Memcached).  
2. **API gateway** – expose REST/GraphQL endpoints: `/search`, `/place/:id`.  
3. **Search service** – receives query, translates to bounding box, fetches candidate IDs from geo‑index, then filters by category/rating in memory or via a secondary filter index.  
4. **Ranking & personalization** – score candidates using distance + weighted rating; optionally use user profile features.  
5. **Background jobs** – ingest new places, update ratings, recompute popularity scores.

**Depth**

*Geo‑indexing:* store each place’s geohash (precision 7–8). For a radius query, generate all covering geohashes and perform point‑in‑circle checks on returned candidates.  
*Caching:* hot queries cached for ~5 s; per‑user cache for recent searches.  
*Scalability:* horizontal scaling of search workers; use consistent hashing to route requests.  
*Complexity:* lookup O(log N) + filtering O(k); overall latency < 200 ms under load.

**Edge Cases**

- Sparse regions → many empty geohashes; fallback to broader radius.  
- High traffic spikes → auto‑scale via cloud autoscaler, keep warm instances.  
- Data inconsistency between cache and store → use TTL + write‑through strategy.

**Optimize & Communicate**

Explain trade‑offs: tighter geohash precision reduces false positives but increases index size; caching improves latency at cost of staleness. Present a simple diagram of components, emphasize monitoring (latency dashboards), and describe how to iterate on ranking with A/B tests. This showcases structured thinking, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
