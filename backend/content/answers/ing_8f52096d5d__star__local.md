---
qid: ing_8f52096d5d__star__local
question: 'Explain: Distributed Counter High-Level Design — Distributed Counter System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:39-05:00'
sources: []
---

**Situation:** In a previous role at a fintech startup, we had to expose real‑time transaction counts for each user across our global microservices architecture. The existing single‑node Redis counter was crashing under peak load and caused stale data in the analytics dashboard.

**Task:** Build a fault‑tolerant distributed counter that could handle millions of increments per second, guarantee eventual consistency, and provide sub‑second read latency while scaling horizontally.

**Action:** I architected a sharded counter system using a combination of Kafka for write ingestion, RocksDB on each shard for local persistence, and a lightweight gossip protocol to propagate updates. Increments were batched into micro‑batches (10 ms windows) before being written to the local store, reducing disk I/O. For reads, we used an in‑memory cache with read‑through from the nearest shard; stale data was acceptable within 100 ms due to the eventual consistency model. We also implemented a “compaction” job that merged delta logs nightly to keep storage lean. The system leveraged Docker Swarm for rolling deployments and Prometheus/Grafana dashboards for real‑time health metrics.

**Result:** The new counter handled 4 M ops/sec with <50 ms read latency, reducing dashboard lag from minutes to seconds. Failure simulations showed zero data loss and recovery within 30 s. I learned how batching, local storage, and lightweight gossip can combine to build a highly available, horizontally scalable counter without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
