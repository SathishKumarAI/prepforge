---
qid: ing_024ab4dde8__star__local
question: 'Explain: Summary — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 358
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:55-05:00'
sources: []
---

**Situation:** At my previous company we built a recommendation engine that served millions of users. The click‑through data grew to 15 TB per day, and our single PostgreSQL instance could no longer keep up with the ingestion pipeline—latency spiked from 200 ms to over 2 s during peak hours.

**Task:** I was tasked with redesigning the data layer so that ingestion throughput would double while keeping query latency below 300 ms for real‑time personalization, all without rewriting the ML model code.

**Action:** I introduced horizontal sharding on a key derived from user ID and time window. Using a custom routing service in Go, each write was directed to one of ten PostgreSQL shards hosted on separate nodes. To keep joins fast, we replicated a lightweight “user‑profile” table across all shards with logical replication, and used a shared Redis cache for hot feature vectors. We also implemented automatic rebalancing via a cron job that moved sparsely populated shards to free up resources. The sharding logic was encapsulated behind a thin ORM layer so existing Python code remained unchanged.

**Result:** Ingestion throughput increased from 2 krows/s per node to 18 krows/s across the cluster, reducing write latency to <150 ms. Query latency for real‑time recommendations dropped from 1.8 s to 210 ms. The system now supports a projected 3× user growth with minimal architectural changes. I learned that thoughtful key selection and lightweight replication can turn sharding from a theoretical exercise into a production win without major code rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
