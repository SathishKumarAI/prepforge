---
qid: ing_eb3eae1805__faang__local
question: 'Explain: Interviewer — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:46:58-05:00'
sources: []
---

**Clarify**  
We’re building a *live comment system* (e.g., for live streams or events). The key requirements: real‑time delivery, scalability to millions of concurrent users, high write throughput, order preservation per stream, and low latency. I’d confirm: max comments/sec per channel, retention period, read/write ratio, allowed moderation actions, and whether we need global ordering across channels.

**Approach**  
1. **Data model & storage** – sharded key‑value store keyed by `(stream_id, timestamp)`; append‑only logs for durability.  
2. **Write path** – producer writes to a write queue (Kafka/Redis Streams) → worker persists to storage and publishes to a fan‑out channel.  
3. **Read path** – clients subscribe to the stream’s fan‑out via WebSocket or long‑poll; server fetches latest N comments from cache (e.g., Redis LRU list).  
4. **Ordering & dedup** – assign monotonically increasing IDs per stream; use a sequencer service for global ordering if needed.  
5. **Scalability** – horizontal scaling of workers, sharding by hash(stream_id), and CDN edge caching for read traffic.

**Depth**  
- *Write latency*: <50 ms (Kafka → worker → DB).  
- *Read latency*: <200 ms (WebSocket push + cache hit).  
- *Throughput*: 10k writes/sec per shard; autoscale with load.  
- *Consistency*: eventual consistency for cross‑region reads; strong ordering within a stream.

**Edge Cases**  
- Burst traffic: backpressure via Kafka partitions and token buckets.  
- Out‑of‑order messages: sequence numbers resolve ordering.  
- Moderation deletions: publish tombstone events to subscribers, purge from cache after TTL.

**Optimize & Communicate**  
We can reduce storage cost by compaction (keep only last N comments per stream) and use a CDN for static replay. Explain trade‑offs: stronger consistency vs latency; single‑point sequencer risk vs distributed ID generators. Conclude with monitoring metrics (write queue depth, read latency, error rates) and a brief rollout plan (canary on low‑traffic streams).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
