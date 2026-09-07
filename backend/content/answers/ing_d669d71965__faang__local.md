---
qid: ing_d669d71965__faang__local
question: 'Explain: Step 3: Fetching User Preferences — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 463
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:53-05:00'
sources: []
---

**Clarify**  
We’re building a *Notification Service* that fetches user‑specific preferences (topics, channels, quiet hours) before delivering alerts. The service must be low‑latency, highly available, and handle millions of users. I’ll assume we have a user profile store (e.g., DynamoDB/Spanner), a message queue for incoming events, and an API gateway exposing the service.

**Approach**  
1. **Cache layer** – Store recent preferences in Redis/MemoryStore to serve 99% of read traffic with <5 ms latency.  
2. **Cold‑path fetch** – On cache miss, read from the primary store (DB), populate cache, and return data.  
3. **Background refresh** – Use a worker that listens to preference update events (Kafka/Pub/Sub) and updates both DB and cache in sync.  
4. **Batching** – For bulk notifications, pre‑fetch preferences in batches using parallel DB reads or materialized views.

**Depth**  
- Cache key: `user:{id}:prefs`.  
- TTL = 24 h + evict on update (write‑through).  
- Consistency: eventual for cache; strong read‑your‑writes via write‑through.  
- Complexity: O(1) cache lookup, O(log n) DB query.  
- Fault tolerance: fallback to DB if Redis down, with exponential backoff.

**Edge Cases**  
- Stale prefs after update → handled by immediate cache invalidation on event.  
- New users with no prefs → default config from a “global” table.  
- Cache stampede during popular user spikes → use mutex or single‑flight pattern.

**Optimize & Communicate**  
We can reduce DB load further by denormalizing preferences into a read‑optimized NoSQL collection per partition key (user id). For monitoring, expose cache hit/miss ratios and latency SLAs. In conversation, I’d highlight trade‑offs: caching adds complexity but drastically cuts latency; eventual consistency is acceptable for notifications. This design meets FAANG expectations of scalability, reliability, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
