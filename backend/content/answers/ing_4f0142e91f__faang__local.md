---
qid: ing_4f0142e91f__faang__local
question: 'Explain: Sharding — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 563
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:27-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a sharded backend for Instagram‑style photo storage and feed serving. Key points: *high write volume* (photo uploads), *low latency reads* (user feeds, profile pages), *global scale*, *fault tolerance*, *data locality*. Assumptions: 1 billion users, 10⁹ photos/day, <200 ms read latency, 99.9% uptime.

**2️⃣ Approach**  
- **Data model**: `User(id)`, `Photo(id, owner_id, timestamp, metadata)`.  
- **Sharding key**: `user_id` for user‑centric queries; secondary hash on `photo_id` for global analytics.  
- **Storage layers**:  
  - *Object store* (S3/Blob) for raw images.  
  - *Metadata DB* (Cassandra/Spanner) sharded by `user_id`.  
- **Feed generation**: *pull‑based* on user’s follow graph stored in a distributed graph service; background workers pre‑cache recent posts into Redis per user.  
- **API layer**: stateless microservices behind a CDN, with request routing based on `user_id` hash.

**3️⃣ Depth**  
- **Sharding**: consistent hashing + virtual nodes to rebalance when adding shards.  
- **Replication**: 3‑node quorum for writes; read replicas per shard.  
- **Consistency**: tunable (eventual for feeds, strong for profile metadata).  
- **Failover**: automatic replica promotion, cross‑region standby.  
Complexity: O(log N) lookup in hash ring; write latency ≈ 2 ms + network hop.

**4️⃣ Edge Cases**  
- *Hot users*: cache tier per hot user to avoid shard contention.  
- *Large media*: chunked uploads with resumable sessions.  
- *Shard split/merge*: online re‑hash without downtime.  
Test: simulate 10× traffic, verify latency <200 ms, and 99.9% availability.

**5️⃣ Optimize & Communicate**  
- Introduce **prefix sharding** for `photo_id` to balance analytics load.  
- Use **write‑through caching** for popular feeds.  
- Explain trade‑offs: stronger consistency → higher latency; eventual consistency → fresher data.  
Narration: “We shard by user to localize reads/writes, replicate across regions for resilience, and pre‑cache feeds to meet SLAs while keeping the system horizontally scalable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
