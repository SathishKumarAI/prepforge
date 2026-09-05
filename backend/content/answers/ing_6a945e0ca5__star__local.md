---
qid: ing_6a945e0ca5__star__local
question: 'Explain: Fault Tolerance — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 349
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:40-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading the backend team for a real‑time analytics platform that processed millions of event streams per day. Our latency SLA was 150 ms, but as traffic spiked during product launches we started seeing cache misses and an increasing load on our PostgreSQL cluster.

**Task** – My goal was to build a fault‑tolerant distributed caching layer that could keep up with the traffic surge while ensuring data consistency across multiple service instances.

**Action** – I chose Redis Cluster because of its in‑memory speed, automatic sharding, and built‑in replication. We deployed it on Kubernetes with a 3‑node cluster per shard and set up anti‑entropy background sync to handle node failures. To guarantee read‑through behavior, we implemented a cache‑aside pattern: services first queried Redis; on miss they fetched from Postgres, then wrote back to the cache with a short TTL (10 s). We also introduced a “write‑back” policy for high‑volume keys and used Lua scripts to atomically increment counters. For monitoring, I wired Prometheus alerts on `redis_misses_total` and `node_down_time`.

**Result** – After rollout, cache hit rates jumped from 42% to 88%, reducing average query latency from 210 ms to 90 ms—well under our SLA. The system withstood a simulated node failure without any service downtime. I learned that the key to fault tolerance in distributed caching is combining automatic sharding with proactive health checks and graceful degradation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
