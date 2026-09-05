---
qid: ing_678bf86884__star__local
question: 'Explain: System Design : Distributed Database System Key Value Store'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:51-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with revamping the user‑session layer for a mobile game that served 30 million daily active users. The existing relational DB was choking on reads and could not scale horizontally.

**Task** – Build a distributed key–value store that would provide sub‑millisecond read latency, strong eventual consistency for session data, and seamless scaling to handle a 50% traffic surge during peak events.

**Action** – I chose a partitioned hash‑based architecture with consistent hashing across 64 shards. Each shard ran a Raft cluster of three replicas for fault tolerance. For cross‑region replication I implemented asynchronous multi‑master writes using conflict‑free replicated data types (CRDTs) to merge session updates without locks. To keep read latency low, I added a global in‑memory cache (Redis‑compatible) with an LRU eviction policy and used Bloom filters per shard to avoid unnecessary disk lookups. Monitoring was built into the system: Prometheus collected per‑shard throughput and replication lag; Grafana dashboards alerted on any 5xx rate spikes.

**Result** – The new KV store reduced session read latency from 200 ms to 35 ms, increased write throughput by 4×, and maintained 99.9% availability even when a whole shard failed. I learned that balancing consistency guarantees with performance often means embracing eventual consistency for non‑critical data while isolating critical paths for strong consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
