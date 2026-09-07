---
qid: ing_115b6770f5__faang__local
question: 'Explain: Non-Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 556
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:13-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a *live comment* system that supports real‑time posting, ordering, and retrieval for millions of concurrent users on a streaming platform.  
Assumptions to confirm:  

- Max concurrent streams ≈ 10M, each with up to 100k comments per hour.  
- Latency requirement: ≤ 200 ms for post/receive.  
- Comments are immutable once posted; no edit/delete.  
- Ordering by timestamp (wall‑clock) is acceptable; eventual consistency across shards is fine.

**2️⃣ Approach**  

1. **Front‑end → API Gateway** – thin layer, rate‑limit per user.  
2. **Write Path** – publish to a *Kafka* topic per stream, then store in an append‑only log (e.g., Cassandra/Scylla) keyed by `stream_id + timestamp`.  
3. **Read Path** – consumers poll the topic or query the log for recent N comments; cache hot streams in Redis/LRU.  
4. **Ordering & Pagination** – use token‑based cursors (`last_timestamp`) to fetch next page.  
5. **Scalability** – partition Kafka by stream hash; each consumer group processes a subset of streams.  
6. **Durability** – replicate logs across 3 nodes; enable CDC for backup.

**3️⃣ Depth**  

- *Write latency*: ~30 ms (Kafka → log write).  
- *Read latency*: < 100 ms via Redis cache; fallback to log read ≤ 200 ms.  
- *Throughput*: Kafka can handle > 1M msgs/s per broker; Cassandra writes ~10k ops/sec/node.  
- *Trade‑offs*: append‑only design simplifies consistency but requires compaction for long‑term storage.

**4️⃣ Edge Cases**  

- **Burst traffic** (e.g., live event): auto‑scale Kafka brokers and add more consumer shards.  
- **Clock skew**: use NTP or logical clocks to avoid ordering issues.  
- **Partial failures**: retry on transient DB errors; fall back to read‑only replicas.

**5️⃣ Optimize & Communicate**  

- Introduce *pre‑aggregation* (e.g., daily comment counts) for analytics.  
- Use *topic compaction* to purge old comments after retention period.  
- Document API contracts, latency SLAs, and failure modes in a shared spec.  

This design balances low latency, high throughput, and fault tolerance—key for a production‑grade live comment system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
