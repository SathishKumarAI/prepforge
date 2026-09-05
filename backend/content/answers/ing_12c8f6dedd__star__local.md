---
qid: ing_12c8f6dedd__star__local
question: 'Explain: Sharding & Partitioning — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 360
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:01-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time push notification platform that had to serve 12 million active users with less than 150 ms latency for every message burst. Our single PostgreSQL instance started throttling during peak hour, and the queue depth grew beyond our Redis workers’ capacity.

**Task**  
I was tasked with redesigning the backend so it could scale horizontally, keep per‑user delivery guarantees, and reduce write amplification on the database without breaking the existing API contract.

**Action**  
I introduced a two‑layer sharding strategy. First, I partitioned users by geographic region using consistent hashing to spread load across three PostgreSQL clusters; each cluster held only 4 million users. Second, within each cluster I used table partitioning on the `notification_id` timestamp to create daily partitions, which allowed vacuum and index maintenance without locking the whole table. For message routing I built a lightweight Kafka topic per region, letting consumers pick up events in real time. I also added a Redis cache for “last seen” flags so we could skip duplicate pushes, reducing write traffic by 30 %.

**Result**  
The new design cut average delivery latency from 260 ms to 110 ms during peak load and increased throughput from 1.2 M notifications/hour to 3.8 M. We also eliminated the queue back‑pressure spikes, keeping SLA compliance above 99.9%. This project taught me that combining geographic sharding with time‑based table partitioning can dramatically improve both performance and maintainability in high‑volume notification systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
