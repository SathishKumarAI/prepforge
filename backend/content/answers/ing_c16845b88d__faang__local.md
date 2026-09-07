---
qid: ing_c16845b88d__faang__local
question: 'Explain: Queue vs Pub/Sub — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 509
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:47-05:00'
sources: []
---

**Clarify**  
You’re asking how a traditional queue (FIFO) differs from a publish‑subscribe (pub/sub) system and when you’d pick one over the other. I’ll assume we’re talking about messaging at scale—durability, ordering guarantees, latency, and fan‑out semantics.

**Approach**  
1. Map out core properties of each pattern.  
2. Highlight typical use cases & failure modes.  
3. Compare trade‑offs (throughput, consistency, scaling).  
4. Suggest when to choose one over the other.

**Depth**  

| Feature | Queue | Pub/Sub |
|---------|-------|--------|
| **Delivery semantics** | Point‑to‑point; each message consumed by a single worker. | Broadcast; each subscriber gets its own copy (at‑least‑once or exactly‑once). |
| **Ordering** | Strict FIFO per queue (can be relaxed with sharding). | No global order; ordering is per‑subscription if supported. |
| **Scalability** | Horizontal scaling via consumer groups, but throughput limited by partition count. | Massive fan‑out; each subscriber can scale independently; topic partitions drive parallelism. |
| **Durability** | Persisted until acked; brokers like RabbitMQ/Redis. | Persisted per subscription; topics in Kafka or GCP Pub/Sub. |
| **Use cases** | Task queues, job pipelines where ordering matters (e.g., payment processing). | Event sourcing, real‑time dashboards, log aggregation. |

**Edge Cases**  
- *Exactly‑once* semantics are hard for both; pub/sub often needs idempotence at consumer side.  
- Heavy fan‑out with many slow subscribers can back‑pressure the publisher in some implementations (e.g., GCP Pub/Sub).  
- Queue consumers may starve if one worker is slow—requires careful load balancing.

**Optimize & Communicate**  
If you need a single consumer path and strict ordering, go queue. If multiple independent consumers must react to the same event stream without coordinating, pub/sub wins. In hybrid architectures, a “fan‑out” pattern (e.g., Kafka topic → multiple consumer groups) gives you both worlds. I’d explain this trade‑off diagrammatically to the interviewers and note that real‑world systems often layer both patterns for reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
