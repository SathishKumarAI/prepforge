---
qid: ing_5b0b26ec84__faang__local
question: 'Explain: High-Level Design — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 470
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:05-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re building a URL‑shortening service (like bit.ly). Given a long URL, return a short token; later that token redirects to the original. Assumptions: high traffic (~10M requests/day), minimal latency (<200 ms), eventual consistency is acceptable, and we can use key‑value stores, caches, and CDN.

**2️⃣ Approach**  
1. **API layer** – REST/GRPC endpoints for `create(shorten)` and `resolve(token)`.  
2. **ID generation** – Base62 encode an auto‑incrementing counter (or UUID → hash).  
3. **Storage** – Primary DB: distributed key‑value store (Cassandra, DynamoDB) mapping token→URL. Secondary: cache (Redis/Elasticache) for hot lookups.  
4. **Routing** – Use a CDN or edge caching to serve redirects instantly; the edge checks local cache first, falls back to origin if miss.  
5. **Analytics** – Optional side‑table per token for click counts.

**3️⃣ Depth**  
- *Create*: atomically increment counter → encode → store in DB + write-through cache. Complexity: O(1).  
- *Resolve*: cache lookup (O(1)); on miss, DB read, populate cache. Latency ~10 ms.  
- *Scalability*: sharding by token hash; replication ensures high availability.  
- *Fault tolerance*: cache eviction policies; fallback to DB if CDN down.

**4️⃣ Edge Cases**  
- Counter wrap‑around → use 64‑bit counter or UUID fallback.  
- Duplicate URLs: optional deduplication via hashing before insert.  
- Invalid tokens → return 404 with rate limiting to mitigate abuse.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: using a global counter simplifies uniqueness but can be a bottleneck; sharded counters or random hash reduce contention at cost of occasional collisions. Emphasize monitoring (latency, cache hit ratio) and gradual rollout (feature flags). Conclude with a diagram sketch if in an interview setting to visualize layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
