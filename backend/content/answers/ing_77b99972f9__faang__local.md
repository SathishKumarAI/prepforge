---
qid: ing_77b99972f9__faang__local
question: 'Explain: 5.6 Like a Post — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 532
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:22:18-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the “like” feature on Instagram: users click a heart, the UI updates instantly, counts stay consistent, and we must support millions of concurrent likes per second.  
Assumptions:  
- One‑to‑one mapping of *post → like count*; each user can like once.  
- Strong consistency for the like counter is desirable but eventual consistency may be acceptable.  
- We need to expose a REST/GraphQL endpoint `POST /posts/{id}/likes`.  

**2️⃣ Approach**  
1. **API Layer** – stateless microservice exposing the like endpoint.  
2. **Cache layer (Redis)** – store per‑post counters for fast reads and write‑through updates.  
3. **Write‑back to DB** – batch writes to a relational or NoSQL table (`likes` collection).  
4. **Duplicate guard** – use a Bloom filter + per‑user hash set in Redis to reject duplicate likes quickly.  

**3️⃣ Depth**  
- *Read:* `GET /posts/{id}` reads counter from Redis (O(1)).  
- *Write:* On like, increment Redis key atomically (`INCR`). Push `(postId,userId)` into a Kafka queue for async persistence.  
- *Duplicate check:* Before `INCR`, query a Redis set `likes:{postId}`; if member exists → reject. Otherwise add and proceed.  
- *Complexity:* O(1) per operation in cache; write‑back is amortized.  
- *Trade‑offs:* Cache staleness (max 1‑second lag); Bloom filter false positives may block rare real likes but keep load low.  

**4️⃣ Edge Cases**  
- **High churn:** millions of likes on a viral post → Redis key size grows; use sharding or split counter per time bucket.  
- **User deletion:** clean up user entries from the set to avoid memory bloat.  
- **Network partitions:** Kafka ensures durability; eventual consistency is acceptable for UI.  

**5️⃣ Optimize & Communicate**  
To scale further, shard counters by post hash and use a distributed lock only when merging shards. We’ll monitor hit‑rate on Redis and backpressure signals from Kafka to throttle traffic. In interviews, I’d emphasize the balance between latency (instant UI), consistency (accurate counts), and throughput (millions of likes/sec).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
