---
qid: ing_dca539c5ad__faang__local
question: 'Explain: Fan-Out — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 482
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:26-05:00'
sources: []
---

**Clarify**  
You’re asking about designing a *fan‑out* pattern using *Publish/Subscribe (Pub/Sub)* for large‑scale systems—e.g., a notification service that pushes updates to many subscribers.  
Assumptions:  
1) High write throughput from publishers, moderate read latency for subscribers.  
2) Subscribers can be mobile/web clients, microservices, or downstream pipelines.  
3) Durability and at‑least‑once delivery are required.

**Approach**  
1. **Topic abstraction** – logical namespaces (e.g., “order‑created”).  
2. **Broker layer** – a distributed log (Kafka, Pulsar) for durability and ordering.  
3. **Partitioning** – shard by key to parallelize writes; each partition has its own offset.  
4. **Subscription model** – pull vs push; use push for low‑latency mobile clients via websockets or serverless functions.  
5. **Back‑pressure & retries** – per‑partition consumer groups, exponential backoff.

**Depth**  
- *Write path*: publisher → broker → partition log (O(1) append).  
- *Read path*: consumer group reads from its offset; can scale horizontally.  
- *Complexity*: O(log N) for metadata lookups; throughput bounded by disk IO and network.  
- *Durability*: replication factor ≥ 3, leader‑follower sync.  
- *Ordering*: preserved within a partition; cross‑partition ordering not guaranteed.

**Edge Cases**  
- **Burst traffic**: partitions must be hot‑swapped or auto‑scaling.  
- **Subscriber failure**: duplicate delivery risk → idempotent processing.  
- **Schema evolution**: use schema registry, backward compatibility.  

**Optimize & Communicate**  
- Add *compaction* for topics with key‑based updates to reduce storage.  
- Use *exactly‑once semantics* via transactional APIs if needed.  
- Present the design as a pipeline diagram and walk through failure scenarios, showing how retries, dead‑letter queues, and monitoring keep the system healthy. This showcases structured reasoning, technical depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
