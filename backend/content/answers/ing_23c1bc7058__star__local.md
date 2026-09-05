---
qid: ing_23c1bc7058__star__local
question: 'Explain: Data Consistency (Read) patterns — Consistency Replication'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 376
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:28-05:00'
sources: []
---

**Situation**  
During the launch of our recommendation engine at an e‑commerce startup, we had just migrated the user profile database from a single MySQL instance to a multi‑zone PostgreSQL cluster with asynchronous logical replication. The traffic spiked to 3 M requests per hour, and we noticed that real‑time personalization was sometimes feeding stale data, causing users to see outdated product suggestions.

**Task**  
I had to ensure that the read patterns for the ML inference service returned consistent user embeddings while keeping latency under 20 ms. The goal was to balance strong consistency with high availability during peak load.

**Action**  
First, I introduced a “read‑through cache” in Redis with a TTL of 5 seconds, keyed by user ID. On cache miss, the inference service queried the primary replica and updated the cache. To guarantee that writes were propagated quickly, I switched PostgreSQL’s replication from asynchronous to semi‑synchronous for the most recent 200 k rows (the hot slice). Additionally, I added a lightweight “stale‑read” flag in the API so downstream services could fall back to the cache if the primary was unreachable. Finally, I instrumented Prometheus alerts on replication lag and read latency.

**Result**  
Stale reads dropped from 12% to <1%, while average inference latency stayed at 18 ms. The system handled a 2× traffic surge without any downtime, and we logged a 4.3% increase in conversion rate attributable to fresher recommendations. I learned that tuning replication lag for hot data, coupled with a short‑lived cache, can deliver near‑real‑time consistency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
