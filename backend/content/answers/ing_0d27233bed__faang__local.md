---
qid: ing_0d27233bed__faang__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 528
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:33-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *real‑time presence* service that lets a user see whether another user is online, and optionally how long they’ve been active or the last seen timestamp.  
Assumptions:  
- Millions of concurrent users; high read/write throughput.  
- Presence updates are short‑lived (seconds).  
- Low latency (<50 ms) for reads.  
- Need eventual consistency across regions.

**Approach**  
1. **Data model** – `user_id → presence_state` stored in a key‑value store (Redis or DynamoDB).  
2. **Write path** – client emits “online”/“offline” events to an event bus (Kafka).  
3. **Processing** – consumer updates cache & persists to DB; also pushes change to interested parties via WebSocket or push service.  
4. **Read path** – query the cache first; fallback to DB if miss.  
5. **TTL / cleanup** – set TTL on cache key to auto‑expire stale “online” flags.

**Depth**  
- *Write*: O(1) cache write + async DB persistence.  
- *Read*: O(1) from cache, O(log N) if hitting DB.  
- Use a Pub/Sub (Redis Streams or SNS/SQS) for real‑time notifications to followers.  
- Partition by user_id hash to scale horizontally; replicate across regions.  
- For “last seen”, store timestamp in the same record; update only on offline events.

**Edge Cases**  
- **Client crash**: use heartbeat/ping; if no ping within 30 s, mark offline.  
- **Network partitions**: read‑your‑write consistency via local cache; eventual sync when connectivity returns.  
- **Scalability spikes**: bursty online/offline bursts – buffer events in Kafka and batch writes to DB.

**Optimize & Communicate**  
- Introduce a *presence broker* that aggregates heartbeats, reducing per‑user write churn.  
- Cache eviction strategy (LRU) keeps hot users resident.  
- Explain trade‑offs: strong consistency vs latency; using TTL trades stale reads for auto‑cleanup.  
- Show how to monitor metrics: cache hit rate, event lag, offline detection accuracy.  

This design satisfies low‑latency reads, high write throughput, and graceful degradation in distributed environments—key criteria for a production‑grade presence platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
