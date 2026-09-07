---
qid: ing_9c2c6c5d4f__faang__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 498
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:47:08-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *location‑based service* like Yelp or Google Places—i.e., a system that lets users query nearby points of interest (POIs), submit reviews, and retrieve results quickly.  
Assumptions to confirm:  
- Scale: millions of POIs, tens of millions of users, thousands of requests/sec.  
- Latency target: < 200 ms for 95% of queries.  
- Features: geospatial search, filtering (price, rating), user reviews, real‑time updates.

**Approach**  
1. **API layer** – REST/GraphQL endpoints with request routing.  
2. **Data store** – sharded relational DB for POI metadata; a distributed geohash‑indexed key‑value store for fast spatial lookups.  
3. **Search engine** – ElasticSearch or Solr with geo‑distance queries, faceted filters, and ranking.  
4. **Caching** – CDN + in‑memory cache (Redis) for hot queries.  
5. **Review service** – append‑only log (Kafka) feeding into a NoSQL store; eventual consistency for aggregates.

**Depth**  
- *Geospatial index*: encode latitude/longitude into 10‑bit geohash → key prefix for range scans.  
- *Sharding*: by region hash to keep locality.  
- *Ranking algorithm*: weighted combination of recency, rating, distance, and business popularity; updated via background jobs.  
- Complexity: read O(log N) on index + O(1) cache hit; write latency dominated by Kafka replication.

**Edge Cases**  
- Sparse regions → fallback to broader radius queries.  
- Rapid user churn → stale cache entries must be invalidated promptly.  
- Data consistency during POI updates (e.g., address change) → use optimistic locking.

**Optimize & Communicate**  
- Use *geo‑hash* + *inverted index* for sub‑second lookups; consider *spatial partitioning trees* (R‑tree) if precision matters.  
- Explain trade‑offs: relational DB guarantees ACID for reviews vs. NoSQL’s write throughput.  
- Communicate that this architecture balances latency, scalability, and feature richness—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
