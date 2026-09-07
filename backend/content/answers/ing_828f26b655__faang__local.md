---
qid: ing_828f26b655__faang__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 513
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:34-05:00'
sources: []
---

**Clarify**  
We’re asked to design the **GET `/users/{user_id}/presence`** endpoint for a messaging app like WhatsApp. The goal is to return whether a user is online, last seen, or typing. I’ll assume:  
* `user_id` is globally unique; we need high‑throughput reads (≈10k req/s).  
* Latency < 50 ms.  
* We must handle 100M active users and support eventual consistency for presence updates.

**Approach**  
1. **Data model** – Store a lightweight *presence record* per user: `{user_id, status, last_seen_ts, typing_ts}`.  
2. **Storage** – Use an in‑memory cache (Redis) for hot data + a write‑through to a durable store (Cassandra).  
3. **Update flow** – Client emits `online`, `offline`, or `typing` events via WebSocket/Push; we write to Redis, then asynchronously to Cassandra.  
4. **Read flow** – On GET, read from Redis; if miss, fallback to Cassandra and populate cache.

**Depth**  
*Redis*: 256 MiB per node, sharded by hash of `user_id`. Eviction policy LRU ensures hot users stay cached.  
*Cassandra*: Partition key = `user_id`; use a single column family for presence. Write latency ≈ 5 ms.  
API: Implement rate limiting (e.g., token bucket) to protect cache. Use HTTP/2 keep‑alive for low overhead.  

**Edge Cases**  
* **Cache miss / stale data** – fallback to Cassandra, but may return a few seconds old status.  
* **Clock skew** – store timestamps in UTC; normalize on read.  
* **High churn** – users rapidly going online/offline can cause cache thrashing; mitigate with write‑back throttling.

**Optimize & Communicate**  
Future improvements:  
* Use *vector clocks* to merge concurrent presence updates.  
* Introduce a Bloom filter per shard to avoid unnecessary Cassandra reads for inactive users.  
* Add metrics (cache hit ratio, latency percentiles) and alerting.  

I’d narrate this as: “We keep presence in memory for speed, persist it for durability, and ensure the API stays sub‑50 ms by sharding and caching.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
