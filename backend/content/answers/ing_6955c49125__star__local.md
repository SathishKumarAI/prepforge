---
qid: ing_6955c49125__star__local
question: How to update the distributed counter? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:47-05:00'
sources: []
---

**Situation** – At my last job we had a global analytics platform that aggregated click‑through counts for millions of ad creatives. The counters were stored in a sharded Redis cluster, but during peak traffic the write latency spiked to 250 ms and we hit consistency warnings because our naive “read‑modify‑write” pattern caused race conditions across nodes.

**Task** – I was tasked with redesigning the counter update flow so that writes stayed under 50 ms, remained eventually consistent, and could scale to 10k TPS without a single point of failure.

**Action** – I introduced an **append‑only log** using Kafka as a write buffer. Each increment event was produced to a topic partition tied to the counter’s shard key. A lightweight consumer group then batched events (≤ 500 per second) and performed atomic increments on Redis via Lua scripts, ensuring no lost updates. To keep read latency low, I maintained a read‑through cache in Memcached that refreshed every 2 seconds from Redis. For fault tolerance, the Kafka cluster ran with triple replication, and we used a secondary Redis replica for failover.

**Result** – Write latency dropped to 30 ms on average, while throughput grew from 3k TPS to 12k TPS. The system stayed within our SLA of < 1% staleness after 5 seconds. I learned that decoupling writes with an event log and batching operations can dramatically improve both performance and reliability in distributed counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
