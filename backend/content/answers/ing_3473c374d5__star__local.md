---
qid: ing_3473c374d5__star__local
question: 'Explain: Candidate — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 348
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:12-05:00'
sources: []
---

**Situation**  
At my previous company we had a real‑time analytics dashboard that counted user clicks across millions of concurrent sessions. The existing single‑node counter hit 10 k QPS and crashed during traffic spikes, breaking our SLA of <50 ms latency.

**Task**  
I was tasked with designing a distributed counter service that could handle >200 k QPS, keep counters accurate within ±1%, and provide read‑through latency under 30 ms while keeping operational costs low.

**Action**  
I chose a sharded architecture: each shard ran on an independent Redis instance in a Kubernetes cluster. I implemented a probabilistic “approximate” counter using a Count‑Min Sketch per shard to reduce memory overhead, then exposed a REST API that aggregated sketches across shards via a lightweight Go microservice. For persistence and fault tolerance I replicated each Redis node with Raft consensus and used Kafka for replaying missed updates during failovers. To guarantee eventual consistency I added a background job that periodically reconciled the approximate counters against a PostgreSQL audit log, correcting any drift beyond 0.5%.

**Result**  
The system scaled to 250 k QPS, kept read latency below 25 ms under peak load, and maintained counter accuracy at 99.8%. It reduced our infrastructure cost by 35% compared to the previous single‑node setup, and I learned how sketching algorithms can be effectively combined with traditional replication for high‑throughput counters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
