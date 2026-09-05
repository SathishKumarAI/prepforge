---
qid: ing_6f8040c5c2__star__local
question: 'Explain: Non-Functional Requirements — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:57-05:00'
sources: []
---

**Situation:**  
I was leading the redesign of our real‑time analytics platform for a mobile gaming company. The existing single‑node counter service couldn’t handle the 3 M events per second spike during new releases and was hitting latency SLA failures (95th percentile > 200 ms).

**Task:**  
Build a distributed counter system that guarantees linearizable counts, supports horizontal scaling, keeps write latency under 50 ms, and tolerates up to two node failures without data loss.

**Action:**  
I chose Redis Cluster with Lua scripts for atomic increments and sharded counters by key prefix. To satisfy durability, I pipelined writes to a Kafka topic that persisted every update; a background consumer replayed events into Redis during failover. For fault tolerance, I enabled Redis Sentinel for automatic failover and used Consul for service discovery. I added a caching layer (Memcached) for read‑heavy queries and implemented exponential backoff on retry logic. I also set up Prometheus metrics to track write latency, replication lag, and partition health.

**Result:**  
The new system handled 4 M events/s with 95th percentile latency of 35 ms, met the SLA, and survived two simultaneous node failures without data loss. The architecture reduced operational overhead by 30% and gave us confidence to support future game launches at scale. I learned that balancing in‑memory speed with durable logs is key for distributed counters, and that observability drives reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
