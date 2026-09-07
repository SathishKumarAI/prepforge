---
qid: ing_33a11e7f10__faang__local
question: 'Explain: This is a very different approach with — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 533
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:44:46-05:00'
sources: []
---

**Clarify**

> *Design a scalable location‑based service (LBS) like Yelp/Google Places.*  
> Assume we need: real‑time place search, user reviews, rating aggregation, and recommendation.  
> Constraints: millions of users, tens of millions of places, high query rate (~10⁶ QPS), 1 s latency.

**Approach**

1. **Data model** – Place entity (id, name, address, geo‑point, tags, avg_rating). User reviews with timestamps.  
2. **Storage** – Primary DB: distributed NoSQL (Cassandra/Spanner) for write‑heavy review data; secondary index store (Elasticsearch) for geospatial search and full‑text queries.  
3. **Geospatial indexing** – Use Geo‑Hash or S2 cells to partition the world into tiles, stored in Elasticsearch shards.  
4. **Caching** – In‑memory tier (Redis) per region for hot places & aggregated ratings.  
5. **API layer** – Stateless microservices behind a load balancer; each request routes to nearest data center via latency‑aware routing.  
6. **Recommendation engine** – Offline batch job (Spark) that builds user–place affinity graph, updated nightly, served by a vector store (FAISS).

**Depth**

- Query path: client → edge router → LBS API → ES shard lookup → Cassandra read for reviews → Redis cache hit → response.  
- Write path: review submission → write to Cassandra + Kafka → async index update in ES; rating aggregate recomputed nightly.  
- Consistency: eventual consistency acceptable for ratings; use read‑your‑own‑write via session tokens.

**Edge Cases**

- Places with no reviews → fallback to proximity only.  
- High traffic spikes → auto‑scale shards, hot spot detection.  
- Geo‑hash collision near poles → use S2 for uniform cell size.

**Optimize & Communicate**

- **Sharding strategy**: align ES shards with geographic tiles to reduce cross‑node traffic.  
- **Batching writes**: accumulate review updates in Kafka before indexing to amortize cost.  
- **Latency budget**: 1 s split into 200 ms routing, 400 ms DB lookup, 300 ms cache hit, 100 ms serialization.  
- Explain trade‑offs (write latency vs. read performance) and how monitoring (latency histograms, error rates) drives iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
