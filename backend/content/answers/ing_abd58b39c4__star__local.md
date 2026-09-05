---
qid: ing_abd58b39c4__star__local
question: 'Explain: Scaling to support a large global shared fleet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:07-05:00'
sources: []
---

**Situation** – At my previous company we had a fleet of over 15,000 autonomous delivery drones deployed across North America and Europe. The control software was originally designed for a few hundred units; by year‑two the latency on command distribution had ballooned to 8 s, causing missed deliveries during peak hours.

**Task** – I needed to redesign the system so that it could scale to support the entire global fleet with sub‑second command propagation and real‑time telemetry while keeping operational costs under budget.

**Action** – First, I moved from a monolithic REST API to a distributed event‑driven architecture using Apache Kafka for command streams. I partitioned topics by region and introduced a lightweight gRPC gateway on each drone cluster for low‑latency pushes. On the backend, I implemented sharded PostgreSQL tables with read replicas and switched our batch analytics to Spark on Kubernetes to handle telemetry ingestion at 1 M events per minute. To keep costs down, I leveraged spot instances in AWS for non‑critical workers and introduced auto‑scaling based on queue depth.

**Result** – Command latency dropped from 8 s to under 200 ms, and delivery success rates improved by 12 % during peak periods. The system handled a 3× increase in fleet size without any service interruptions, and I reduced infrastructure spend by 18 % through smarter scaling policies. This experience taught me that the right mix of event‑driven design, sharding, and cost‑aware cloud ops is key to scaling ML‑enabled fleets globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
