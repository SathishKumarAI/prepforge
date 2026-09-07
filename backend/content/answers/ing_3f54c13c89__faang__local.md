---
qid: ing_3f54c13c89__faang__local
question: 'Explain: Heartbeat — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 486
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:11:03-05:00'
sources: []
---

**Clarify**  
We need a real‑time “heartbeat” service that tracks whether users (or devices) are online and delivers presence updates to clients with low latency. Assume: *millions of concurrent users*, *high write/read throughput*, *eventual consistency* acceptable for stale presence, and *fault tolerance* across regions.

**Approach**  
1. **Event ingestion** – Clients push heartbeats via a lightweight API (REST/WS).  
2. **In‑memory store** – Use Redis or Memcached as the primary source of truth; key = userID, value = timestamp + status. TTL ≈ 30 s ensures stale entries expire automatically.  
3. **Distributed cache layer** – Partition keys across shards to scale horizontally.  
4. **Message bus** – Publish heartbeat events to Kafka for downstream services (e.g., analytics).  
5. **Presence query API** – Read from the in‑memory store; fallback to a durable DB if needed.  
6. **Failure handling** – Replicate Redis clusters, use leader election; on node failure, another replica takes over without losing recent heartbeats.

**Depth**  
- *Write latency*: <10 ms (single round‑trip to cache).  
- *Read latency*: ~5 ms from cache.  
- *Throughput*: 1M writes/sec → shard ≈ 10K ops/s per node.  
- *Durability*: Kafka retains events for audit; Redis persistence optional.

**Edge Cases**  
- **Network partitions**: Clients may send heartbeats to stale nodes; use versioned timestamps to resolve conflicts.  
- **Clock skew**: Normalize times server‑side or include monotonic counter.  
- **Burst traffic**: Throttle per‑user rate limiting to prevent overload.

**Optimize & Communicate**  
Start with a single‑region Redis cluster, monitor latency/eviction rates. Scale shards as needed; add a CDN‑like cache for read‑heavy clients. Explain trade‑offs (cache vs DB consistency) and show how we meet SLAs by combining in‑memory speed with Kafka durability. This narrative demonstrates clear problem framing, scalable design, complexity analysis, and robustness—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
