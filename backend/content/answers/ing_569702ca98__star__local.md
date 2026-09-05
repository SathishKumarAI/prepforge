---
qid: ing_569702ca98__star__local
question: 'Explain: Data Model — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:19-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a fraud‑detection project at a fintech startup that had to process ~3 M transaction records per day and score each in real time. Our existing analytics stack used PostgreSQL, but latency spikes were killing our 10 ms SLA for the recommendation engine.

**Task** – Design a new data layer that could ingest streaming logs, support fast joins for feature aggregation, and still allow batch model training on historical data without breaking the OLTP workload.

**Action** – I mapped the access patterns: read‑heavy for real‑time scoring (keyed by user_id), write‑heavy for daily ingestion, and occasional heavy analytics queries. I chose a hybrid approach: store raw events in a distributed NoSQL store (Apache Cassandra) with time‑series partitioning for high write throughput; use materialized views to pre‑compute per‑user aggregates. For batch training, I exported the data nightly into an S3 lake and built Parquet files that Spark could read efficiently. I also set up a lightweight SQL layer (Presto) on top of Cassandra for ad‑hoc queries by data scientists.

**Result** – The new architecture cut query latency from 120 ms to 8 ms for real‑time scoring, increased write throughput by 4×, and reduced training pipeline time from 6 hrs to under 1 hr. I learned that a monolithic database rarely fits all ML workloads; a carefully scoped hybrid of SQL and NoSQL can deliver both low latency and scalable analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
