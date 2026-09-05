---
qid: ing_789f22dbbd__star__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 339
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:15-05:00'
sources: []
---

**Situation:** At my previous company we launched a real‑time recommendation engine that served millions of page views per day. Our single PostgreSQL instance could handle write traffic for user profiles and product catalogs, but read queries for the recommendation cache were hitting 60 k QPS, causing latency spikes during flash sales.

**Task:** I needed to design a solution that kept our reads fast without compromising data freshness or increasing operational cost too much.

**Action:** I introduced a set of asynchronous read replicas. First, I added a logical replication stream from the primary to two standby nodes using PostgreSQL’s `pg_basebackup` and WAL shipping. To keep the replicas in sync with sub‑second lag, I tuned `max_wal_senders`, increased checkpoint intervals, and enabled streaming replication over a dedicated 10 Gbps link. For read routing, I implemented a lightweight Go service that queried the least‑loaded replica using round‑robin, while ensuring reads for time‑critical data still hit the primary if lag exceeded 200 ms. Finally, I added Prometheus metrics to monitor replication lag and automatically promoted a replica to primary if the primary failed.

**Result:** Read latency dropped from 350 ms to under 80 ms during peak traffic, and we saw a 45% reduction in CPU usage on the primary node. The system handled 120 k QPS with consistent SLA compliance. I learned that careful tuning of replication parameters and intelligent read routing can dramatically improve scalability without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
