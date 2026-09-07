---
qid: ing_0c04c41181__faang__local
question: 'Explain: Addressing the Limitations — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 503
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:59-05:00'
sources: []
---

**Clarify**  
We’re building a public‑facing URL shortener (e.g., bit.ly). The key requirements are:  
* Scalability – millions of requests per day.  
* Durability – no loss of mappings.  
* Low latency – < 50 ms redirect.  
* High availability – 99.9% uptime.  
Assumptions: unlimited write traffic, read‑heavy redirects, optional analytics.

**Approach**  
1. **API layer** (REST + gRPC) → load balancer → stateless workers.  
2. **Short ID generation** – base‑62 counter or hash + collision resolution.  
3. **Storage tiering**:  
   * Hot keys in a distributed key‑value store (Cassandra/Redis).  
   * Cold keys in object storage (S3) with TTL cache.  
4. **Redirection path** → lookup, increment click counter, redirect.  
5. **Analytics** – async event pipeline to Kafka → stream processor → analytics DB.

**Depth**  
*Short ID*: 64‑bit counter → encode to 8‑char base‑62 (≈ 1.2B per day).  
*Storage*: Cassandra provides linear scalability; replication factor 3 ensures durability.  
*Cache*: Redis Cluster for hot URLs, TTL = 24 h.  
*Latency*: < 20 ms for cache hit; < 50 ms for DB lookup.  
*Consistency*: eventual consistency acceptable for click counts.

**Edge Cases**  
*Collision on hash‑based IDs → linear probing.*  
*Hot spot counter updates – use atomic counters in Redis or Cassandra lightweight transactions.*  
*Service outage → fallback to CDN edge cache with 404 page.*

**Optimize & Communicate**  
- Add a Bloom filter to quickly reject non‑existent keys before DB hit.  
- Use read replicas for analytics queries, write‑through caching for new URLs.  
- Monitor latency percentiles; auto‑scale workers based on request rate.  

By layering stateless API, fast in‑memory cache, and a distributed KV store with asynchronous analytics, we meet scalability, durability, and low‑latency goals while keeping the system simple enough for rapid iteration—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
