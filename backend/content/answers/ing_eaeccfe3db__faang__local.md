---
qid: ing_eaeccfe3db__faang__local
question: 'Explain: Database Storage — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 533
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:55-05:00'
sources: []
---

**Clarify**  
*Goal:* design a scalable backend for an Instagram‑style photo feed.  
Assumptions: millions of users, 10⁹+ images, read‑heavy (feed), write‑light (posts), low latency (<200 ms). We need persistence, fast reads, and eventual consistency.

---

**Approach**  

1. **Data model** – User table, Post table, Follow table, Like/Comment tables.  
2. **Storage layer** – NoSQL for high write throughput:  
   *Posts* → Cassandra (wide‑row per user).  
   *Feed cache* → Redis (LRU lists).  
3. **Feed generation** – Pull vs push trade‑off; use “push” by materializing feeds in Redis when a post is created, or “pull” with lazy loading for cold users.  
4. **Serving layer** – Microservice per user feed, load‑balanced behind CDN.  

---

**Depth**

- **Post ingestion**: write to Cassandra (`user_id|timestamp → post_meta`), push post ID to followers’ Redis lists (size capped). Complexity O(1) per follower.  
- **Feed fetch**: read from Redis list (O(log N)), fallback to Cassandra if cache miss. Latency <100 ms.  
- **Storage sizing**: 10⁹ posts × 200 B ≈ 200 GB; Cassandra nodes with replication factor 3 → ~600 GB raw.  
- **Consistency**: eventual, acceptable for feeds. Use read‑repair on Cassandra.

---

**Edge Cases**

| Case | Issue | Test |
|------|-------|------|
| Sudden spike (10× traffic) | Cache overflow | Simulate burst of follows |
| User deletes account | Orphaned posts | Verify cascade delete |
| Cold user with no cache | Latency >200 ms | Measure feed fetch time |

---

**Optimize & Communicate**

- **Sharding**: hash on `user_id` for Cassandra to balance load.  
- **Backpressure**: rate‑limit follow updates; batch pushes nightly for inactive users.  
- **Observability**: metrics per service, alert on cache hit ratio < 80 %.  

Explain that this design balances write scalability with read latency, uses proven distributed stores, and can be iterated (e.g., switch to Kafka + async workers) if write load grows further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
