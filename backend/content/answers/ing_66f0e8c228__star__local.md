---
qid: ing_66f0e8c228__star__local
question: 'Explain: Non-Functional Requirements — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 318
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:45-05:00'
sources: []
---

**Situation** – At my previous company we were launching a real‑time presence service for a global messaging app that had to show online/offline status to millions of users with sub‑second latency while handling peak traffic of 10 M concurrent connections.

**Task** – Design the system so it met strict non‑functional requirements: <50 ms end‑to‑end response, 99.999% uptime, horizontal scalability, and strong data consistency across regions.

**Action** – I architected a distributed event‑driven pipeline using Kafka for ingestion, Redis Streams as an in‑memory queue, and a sharded Cassandra cluster for persistence. To guarantee low latency, I introduced a local edge cache per region with TTLs of 1 s and implemented optimistic locking via lightweight transactions. For high availability I deployed each component across three AZs, used auto‑scaling groups, and added health‑check based circuit breakers. I also wrote a custom load balancer that weighted traffic by latency metrics collected from Prometheus, ensuring even distribution during spikes.

**Result** – The platform achieved 42 ms average response time under peak load, 99.999% uptime over six months, and handled 15 M concurrent users with zero data loss. I learned how to balance consistency, latency, and fault tolerance by combining event sourcing, regional caching, and proactive monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
