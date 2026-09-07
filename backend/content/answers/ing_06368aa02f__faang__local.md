---
qid: ing_06368aa02f__faang__local
question: 'Explain: Real-Time Presence Platform Data Storage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 503
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design of a *Real‑Time Presence Platform* (e.g., chat app showing “online/typing” status). We need to store, update, and query presence data with low latency and high throughput. Key assumptions: millions of users, updates every few seconds, read‑heavy traffic, eventual consistency acceptable, and we’ll use a cloud‑native stack.

**Approach**  
1. **Model** – One row per user containing `user_id`, `status` (online/idle/offline), `last_updated_ts`.  
2. **Storage layer** – Use an in‑memory store (Redis) for hot reads/writes; back it with a durable KV store (Cassandra or DynamoDB) for persistence and replay.  
3. **Update path** – Client emits “status” events → API gateway → Redis `SETEX` to expire after inactivity, also publish to Kafka topic for durability.  
4. **Read path** – Directly read from Redis; fallback to KV store if key miss.  
5. **Scaling** – Partition Redis by hash of user_id; use cluster mode; replica for failover.  

**Depth**  
- *Latency*: < 10 ms reads via Redis, writes async to Kafka.  
- *Throughput*: Redis can handle >1M ops/s per node; partitioning scales linearly.  
- *Consistency*: Eventual—Redis gives strong consistency within a shard; Kafka guarantees order of updates per user.  
- *Durability*: Kafka + KV store ensures no data loss on failure.

**Edge Cases**  
- Network partitions: Redis replicas handle failover, but stale status may appear until expiration.  
- High churn (many logins/logouts): Ensure `SETEX` resets TTL to avoid stale entries.  
- Scaling limits: Monitor hot shards; rebalance if skewed.

**Optimize & Communicate**  
We could add a Bloom filter cache for offline users to skip Redis lookups, reducing load. For real‑time analytics, stream the Kafka topic into a streaming engine (Kafka Streams) to compute global online counts. In interviews I’d emphasize trade‑offs: in‑memory speed vs. persistence; partitioning complexity vs. linear scalability. This structured plan demonstrates clear problem framing, a practical solution path, and awareness of performance nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
